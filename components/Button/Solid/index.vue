<template>
  <div>
    <NuxtLink to="/projects" class="px-5 py-2.5 bg-accent text-sm rounded-3xl shadow-lg hover:bg-accent/60 transition ease-in-out duration-300 active:shadow-none"> {{props.name}}</NuxtLink>    
  </div>
</template>

<script lang="ts" setup>
const props = defineProps({
    name: {
      type: String,
      require: true
  }})
</script>
