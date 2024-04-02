<template>
  <div>
    <NuxtLink to="/projects" class="px-5 py-2.5 text-sm rounded-3xl hover:shadow-lg transition ease-in-out duration-300 active:shadow-none" :class="{'bg-accent shadow-lg' : active}">{{props.name}}</NuxtLink>    
  </div>
</template>

<script lang="ts" setup>
  const props = defineProps({
    name: {
      type: String,
      require: true
  },
    active:{
      type: Boolean,
      default: false
    }
  })
</script>
