import { useUserStore } from '~/stores/user'
import { navigateTo, useRuntimeConfig } from '#imports'
import type { User } from '~/types/type'
import { useRouter } from '#imports'
import { useFetch } from '#imports'
import { computed } from '#imports'

interface AuthReturn {
  user: Ref<{
    name: string;
    email: string;
    password: string;
    walletAddress: string | null;
    role: string;
    requires2FA: boolean;
    campaigns: string[];
    // Add other user properties as needed
  } | null>;
  isAuthenticated: Ref<boolean>;
  login: (credentials: { email: string; password: string }) => Promise<{ user: any; error: string | null }>;
  register: (userData: any) => Promise<{ user: any; error: string | null }>;
  logout: () => Promise<void>;
  forgotPassword: (email: string) => Promise<{ success: boolean; data?: any; error?: string }>;
  resetPassword: (token: string, newPassword: string) => Promise<{ success: boolean; data?: any; error?: string }>;
  hasRole: (role: string) => boolean;
  hasAnyRole: (roles: string[]) => boolean;
  requireAuth: (to: any, from: any, next: any) => void;
  requireRole: (role: string) => (to: any, from: any, next: any) => void;
  initAuth: () => Promise<void>;
}

export const useAuth = (): AuthReturn => {
  const config = useRuntimeConfig()
  const userStore = useUserStore()
  const router = useRouter()

  // Type definitions for auth methods
  interface LoginCredentials {
    email: string
    password: string
  }

  interface RegisterData {
    name: string
    email: string
    password: string
    password_confirmation: string
  }

  // Login with email/password
  const login = async (credentials: LoginCredentials) => {
    try {
      const user = await userStore.login(credentials)
      return { user, error: null }
    } catch (error: any) {
      return { user: null, error: error.message || 'Login failed' }
    }
  }

  // Register new user
  const register = async (userData: RegisterData) => {
    try {
      const user = await userStore.register(userData)
      return { user, error: null }
    } catch (error: any) {
      return { user: null, error: error.message || 'Registration failed' }
    }
  }

  // Logout user
  const logout = async () => {
    try {
      await userStore.logout()
      await navigateTo('/login')
    } catch (error) {
      console.error('Logout error:', error)
    }
  }

  // Check if user is authenticated
  const isAuthenticated = computed(() => userStore.isAuthenticated)

  // Get current user
  const user = computed(() => userStore.user)

  // Check if user has specific role
  const hasRole = (role: string) => {
    return user.value?.role === role
  }

  // Check if user has any of the specified roles
  const hasAnyRole = (roles: string[]) => {
    return roles.includes(user.value?.role || '')
  }

  // Require authentication for protected routes
  const requireAuth = async (to: any, from: any, next: any) => {
    if (!userStore.isAuthenticated) {
      return next({ path: '/login', query: { redirect: to.fullPath } })
    }
    next()
  }

  // Require specific role for admin routes
  const requireRole = (role: string) => async (to: any, from: any, next: any) => {
    await userStore.fetchCurrentUser()
    if (!userStore.isAuthenticated) {
      return next({ path: '/login', query: { redirect: to.fullPath } })
    }
    if (userStore.user?.role !== role) {
      return next({ path: '/unauthorized' })
    }
    next()
  }

  // Initialize auth state
  const initAuth = async () => {
    if (process.client) {
      await userStore.initializeAuth()
    }
  }

  // Request password reset
  const forgotPassword = async (email: string) => {
    try {
      const { data } = await useFetch('/api/auth/forgot-password', {
        method: 'POST',
        body: { email }
      })
      return { success: true, data: data.value }
    } catch (error: any) {
      return { success: false, error: error.message || 'Failed to send reset email' }
    }
  }

  // Reset password with token
  const resetPassword = async (token: string, newPassword: string) => {
    try {
      const { data } = await useFetch('/api/auth/reset-password', {
        method: 'POST',
        body: { token, password: newPassword }
      })
      return { success: true, data: data.value }
    } catch (error: any) {
      return { success: false, error: error.message || 'Password reset failed' }
    }
  }

  return {
    // State
    user,
    isAuthenticated,

    // Actions
    login,
    register,
    logout,
    forgotPassword,
    resetPassword,
    initAuth,

    // Getters
    hasRole,
    hasAnyRole,

    // Middleware
    requireAuth,
    requireRole
  }
}

// Export as a Nuxt plugin
declare module '#app' {
  interface NuxtApp {
    $auth: AuthReturn
  }
}

declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    $auth: AuthReturn
  }
}

export default defineNuxtPlugin((nuxtApp) => {
  const auth = useAuth()
  
  // Make it available in Vue components as this.$auth
  nuxtApp.provide('auth', auth)
  
  // Also make it available in the Nuxt app context
  return {
    provide: {
      auth
    }
  }
})