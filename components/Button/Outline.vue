<template>
    <div>
      <NuxtLink to="/projects" class="px-5 py-2.5 text hover:text-accent border-none hover:border-b border-accent/60 hover:border-accent text-base bg-transparent transition ease-in-out duration-300">{{props.name}}</NuxtLink>    
    </div>
  </template>
  
  <script lang="ts" setup>
    const props = defineProps({
      name: {
        type: String,
        require: true
    }})
  </script>
  