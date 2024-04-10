<template>
    <div class="flex flex-col w-fit mx-auto gap-5 px-5">


        <ButtonLink to="/blog" name="All Blogs" class="z-20">
          <ArrowLeftIcon class="w-4 h-4 order-first"/>
        </ButtonLink>

        <div class="w-full min-h-80 items-start z-20" :class="containerWidth">
            
          
            <div class="float-none sm:float-left rounded-3xl overflow-clip h-full min-h-48 mx-0 sm:mx-5 sm:my-2.5 w-full sm:w-2/5">
              <img class="object-cover w-full min-h-48" :src="props.image" alt="">
            </div>

            <div class="space-y-1.5 sm:space-y-2.5 py-5 md:py-0">
              <p class="grow px-2.5 text-sm xl:text-base text-black/50">{{ props.tags }}</p>
              <p class="text-justify text-base xl:text-lg text-black/60 px-2.5">{{ props.description }}</p>
            </div>
          </div>
    
    </div>
</template>

<script lang="ts" setup>
import {ArrowLeftIcon} from "@heroicons/vue/solid";
const {containerWidth} = useTailwindConfig()

const props = defineProps({
  title: {
    type:String,
    require:true
  },
  description: {
    type:String,
    require:true
  },
  image: {
    type:String,
    require:true
  },
  tags: {
    type:String,
    require:true
  },
  date: {
    type:String,
    require:true
  }
})
</script>