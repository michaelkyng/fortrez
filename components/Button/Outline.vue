<template>
    <div>
      <NuxtLink to="/projects" class="flex justify-center items-center gap-2.5 px-5 py-2.5 text border border-slate-300 text-sm text-black/80 bg-transparent rounded-3xl"><slot></slot> {{props.name}}</NuxtLink>    
    </div>
  </template>
  
  <script lang="ts" setup>
    const props = defineProps({
      name: {
        type: String,
        require: true
    }})
  </script>
  