<template>
    <div>
        <NuxtLink to="/projects" :class="`py-0.5 text-${props.color}/80 hover:text-${props.color} hover:border-solid hover:border-b-2 border-${props.color}/60 hover:border-${props.color} text-base bg-transparent transition ease-in-out duration-300`">{{props.name}}</NuxtLink>    
    </div>
</template>
  
  <script lang="ts" setup>
    const props = defineProps({
      name: {
        type: String,
        require: true
    },
    color: {
        type: String,
        default:'accent'
    }    
})
  </script>
  