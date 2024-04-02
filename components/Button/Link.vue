<template>
    <div>
        <NuxtLink to="/projects" :class="`flex gap-1 w-fit items-center py-0.5 text-${props.color}/80 hover:text-${props.color} hover:border-solid border-b-2 border-b-transparent border-${props.color}/60 hover:border-${props.color} text-sm sm:text-base bg-transparent transition ease-in-out duration-300`">
          <span class="font-bold">{{props.name}}</span>
          <ArrowRightIcon class="w-4 h-4"/>
        </NuxtLink>    
    </div>
</template>
  
  <script lang="ts" setup>
  import {ArrowRightIcon} from "@heroicons/vue/solid";
  

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
  