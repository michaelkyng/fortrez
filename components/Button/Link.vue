<template>
    <div>
        <NuxtLink :to="props.to" class="flex gap-1 w-fit items-center py-0.5 border-b-2 border-b-transparent  text-sm sm:text-base transition ease-in-out duration-300"
        :class="color ? 'text-accent/80 hover:text-accent hover:border-b-accent' : 'hover:border-black/50  text-black/50'">
          <span class="font-bold">{{props.name}}</span>
          <slot></slot>
        </NuxtLink>    
    </div>
</template>
  
  <script lang="ts" setup>
  
  

    const props = defineProps({
      name: {
        type: String,
        require: true
    },
    color: {
        type: Boolean,
        default:true
    },
    to:{
      type:String,
      require:true
    }    
})
  </script>
  