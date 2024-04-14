<template>
    <div class="h-screen bg-white-bright">
      <SplashLoading v-if="isLoading" />

      <Admin v-else-if="admin" />
      
      <AdminAuth v-else/>
    </div>
  </template>
  
  <script lang="ts" setup>
  const { useAuthAdmin, useAuthLoading} = useAuth()
  const admin = useAuthAdmin()
  const isLoading = useAuthLoading()
  
  
  
  </script>