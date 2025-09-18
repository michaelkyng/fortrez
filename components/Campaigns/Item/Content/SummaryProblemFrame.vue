<template>
  <div class="flex flex-col gap-y-8 w-full">
    <h3 :class="subHeading2">{{ props.name }}</h3>
    <p class="text-sm md:text-base text-justify">
        <span v-if="props.choice" class="text-black/80">{{ props.description }}</span>
        <span v-else class="text-black/80">{{ props.problem }}</span>
    </p>
  </div>
</template>

<script lang="ts" setup>
const {subHeading2} = useTailwindConfig()
const props = defineProps({
    name: {
    type:String,
    require:true
  },
  description: {
    type:String,
    require:true
  },
  problem: {
    type:String,
    require:true
  },
  choice:{
    type:Boolean,
    default:true
  }
})
</script>