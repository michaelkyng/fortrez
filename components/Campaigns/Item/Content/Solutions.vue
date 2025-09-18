<template>
    <div class="flex flex-col gap-y-8 w-full">
      <h3 :class="subHeading2">Solutions</h3>
      <div class="flex flex-col gap-y-6 sm:gap-y-8">
        <div :key="index" class="p-5 bg-[#d9d9d9]/50 rounded-3xl" v-for="(item, index) in props.solution" >
            <p class="text-black/80 text-sm md:text-base text-justify">{{ item }}</p>
        </div>
      </div>
    </div>
  </template>
  
  <script lang="ts" setup>
  const {subHeading2} = useTailwindConfig()
  const props = defineProps({
      solution: {
      type:Array,
      require:true
    }
  })
  </script>