import { defineStore } from 'pinia'
import type { BaseSchema, Campaign, Donation, Blog } from '~/types/type'

// User interface
export interface User extends BaseSchema {
  name: string;
  email: string;
  password: string;
  walletAddress: string | null;
  role: string;
  requires2FA: boolean;
  campaigns: string[]; // Array of Campaign IDs
  donations: string[]; // Array of Donation IDs  
  blogs: string[]; // Array of Blog IDs
}

export interface PopulatedUser extends Omit<User, 'campaigns' | 'donations' | 'blogs'> {
  campaigns: Campaign[];
  donations: Donation[];
  blogs: Blog[];
}

interface AuthState {
  user: User | null
  token: string | null
  isAuthenticated: boolean
  loading: boolean
  error: string | null
}

export const useUserStore = defineStore('user', {
  state: (): AuthState => ({
    user: null,
    token: null,
    isAuthenticated: false,
    loading: false,
    error: null
  }),

  getters: {
    currentUser: (state) => state.user,
    authToken: (state) => state.token,
    isAdmin: (state) => state.user?.role === 'admin',
    isModerator: (state) => state.user?.role === 'moderator',
    isUser: (state) => state.user?.role === 'user',
    isLoading: (state) => state.loading,
    authError: (state) => state.error
  },

  actions: {
    async login(credentials: { email: string; password: string }) {
      this.loading = true
      this.error = null
      
      try {
        const { data } = await useFetch<{ user: User; token: string }>('/api/auth/login', {
          method: 'POST',
          body: JSON.stringify(credentials),
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          }
        })

        if (data.value) {
          this.user = data.value.user
          this.token = data.value.token
          this.isAuthenticated = true
          
          // Store token in localStorage
          if (process.client) {
            localStorage.setItem('auth_token', data.value.token)
          }
          
          return data.value.user
        }
        return null
      } catch (error: any) {
        this.error = error.data?.message || 'Login failed. Please check your credentials.'
        throw error
      } finally {
        this.loading = false
      }
    },

    async register(userData: {
      name: string
      email: string
      password: string
      password_confirmation: string
    }) {
      this.loading = true
      this.error = null
      
      try {
        const { data } = await useFetch<{ user: User; token: string }>('/api/auth/register', {
          method: 'POST',
          body: JSON.stringify(userData),
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          }
        })

        if (data.value) {
          this.user = data.value.user
          this.token = data.value.token
          this.isAuthenticated = true
          
          if (process.client) {
            localStorage.setItem('auth_token', data.value.token)
          }
          
          return data.value.user
        }
        return null
      } catch (error: any) {
        this.error = error.data?.message || 'Registration failed. Please try again.'
        throw error
      } finally {
        this.loading = false
      }
    },

    async logout() {
      try {
        await useFetch('/api/auth/logout', {
          method: 'POST',
          headers: this.getAuthHeaders()
        })
      } catch (error) {
        console.error('Error during logout:', error)
      } finally {
        this.clearAuth()
      }
    },

    async fetchCurrentUser() {
      this.loading = true
      this.error = null
      
      try {
        const { data } = await useFetch<{ user: User }>('/api/auth/me', {
          headers: this.getAuthHeaders()
        })

        if (data.value?.user) {
          this.user = data.value.user
          this.isAuthenticated = true
          return this.user
        }
        return null
      } catch (error: any) {
        this.clearAuth()
        throw error
      } finally {
        this.loading = false
      }
    },

    initializeAuth() {
      if (process.client) {
        const token = localStorage.getItem('auth_token')
        if (token) {
          this.token = token
          this.fetchCurrentUser().catch(console.error)
        }
      }
    },

    getAuthHeaders() {
      return {
        'Authorization': `Bearer ${this.token}`,
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    },

    clearAuth() {
      this.user = null
      this.token = null
      this.isAuthenticated = false
      if (process.client) {
        localStorage.removeItem('auth_token')
      }
    },

    clearError() {
      this.error = null
    }
  }
})

// Initialize auth when store is created
if (process.client) {
  const userStore = useUserStore()
  userStore.initializeAuth()
}
