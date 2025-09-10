import { useUserStore } from "~/stores"

export default defineNuxtRouteMiddleware(async (to, from) => {
  const userStore = useUserStore()
  const publicRoutes = ['/login', '/register', '/forgot-password', '/auth/verify-email']
  
  // If user is not authenticated and trying to access a protected route
  if (!userStore.isAuthenticated && !publicRoutes.includes(to.path)) {
    return navigateTo('/login')
  }
  
  // If user is authenticated and tries to access auth pages
  if (userStore.isAuthenticated && (to.path === '/login' || to.path === '/register')) {
    return navigateTo('/dashboard')
  }
  
  // For admin routes
  if (to.path.startsWith('/admin') && !userStore.isAdmin) {
    return navigateTo('/unauthorized')
  }
})
