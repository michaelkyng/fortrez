<template>
  <div class="font-arial overflow-hidden scroll-smooth text-black selection:bg-alternativeAccent">
    
    <Navbar/>
    <NuxtPage />
  </div>
</template>

<script lang="ts" setup>
const {initAuth} = useAuth()


onBeforeMount(()=>{
  initAuth()
})
</script>

<style>
  body::-webkit-scrollbar {
  display: none;
}

.menu-scroll::-webkit-scrollbar {
  display: none;
}

/* Hide scrollbar for IE, Edge and Firefox */
.menu-scroll {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
</style>