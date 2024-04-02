<template>
  <div class="h-fit max-w-full sm:max-w-72 lg:max-w-96 sm:grow-0 border drop-shadow-sm p-2 rounded-2xl bg-white-bright overflow-clip">
    <NuxtLink :to="$props.path">
              <div class="flex flex-col gap-y-5">
                <div class="flex flex-col gap-y-2.5">
                  <div class="relative min-w-full h-60 sm:h-36 rounded-2xl overflow-clip">
                    <div class="absolute flex items-center justify-center px-5 opacity-0 group-hover:opacity-100 z-10 w-full h-full bg-black/70" :class="transition">
                        <!-- Black Ovelay-->
                        <div class="border border-accent group-active:border-alternativeAccent rounded-2xl px-5 group-active:text-alternativeAccent text-accent lg:font-medium" :class="transition">View Blog</div>
                    </div>
                    <img class="absolute object-cover w-full h-full md:h-auto top-0 left-0 group-hover:scale-125" :class="transition" :src="$props.image" alt="">
                  </div>
                  <div class="flex flex-col w-full gap-y-1.5 sm:gap-y-2.5">
                    <p class="text-black/40 text-xxs sm:text-xs md:text-base">{{ $props.tags }}</p>
                    <h1 class="text-base sm:text-lg md:text-xl font-bold">{{$props.title}}</h1>
                    <p class="text-xs sm:text-sm md:text-base text-black/50 group-hover:text-black/80 w-full text-ellipsis line-clamp-2" :class="transition">{{ $props.description }}</p>
                  </div>
                </div>
                <div class="flex justify-between">
                  <div class="flex items-center border-b-2 border-b-transparent group-hover:border-b-2 group-hover:border-accent" :class="transition">
                    <p class="text-accent/80 hover:text-accent font-medium lg:font-bold" :class="transition">READ MORE</p>
                    <ArrowSmRightIcon class="relative text-accent w-6 h-fit bottom-px"  :class="transition"/>
                  </div>
                  <span class="relative text-xxs sm:text-xs md:text-sm text-black/60 right-1">{{ $props.date }}</span>
                </div>
      
              </div>
            </NuxtLink>
  </div>
</template>

<script lang="ts" setup>
import {ChevronRightIcon, ChevronLeftIcon, ArrowSmRightIcon} from "@heroicons/vue/solid";


const {subHeading,transition,containerWidth} = useTailwindConfig()


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
  path: {
    type:String,
    require:true
  },
  date: {
    type:String,
    require:true
  }
})
</script>
