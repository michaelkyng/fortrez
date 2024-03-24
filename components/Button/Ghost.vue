<template>
  <div>
    <NuxtLink to="/projects" class="px-5 py-2.5 hover:bg-accent/60 text-sm rounded-3xl hover:shadow-lg bg-transparent transition ease-in-out duration-300 active:shadow-none">{{props.name}}</NuxtLink>    
  </div>
</template>

<script lang="ts" setup>
  const props = defineProps({
    name: {
      type: String,
      require: true
  }})
</script>
