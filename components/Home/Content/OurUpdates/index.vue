<template>
  <div class="relative h-fit flex flex-col w-full gap-y-16 lg:gap-y-20 overflow-hidden" :class="containerWidth">
    <h1 class="z-10" :class="subHeading">{{props.title}}</h1>
    
    <div class="relative flex items-center mx-1 overflow-hidden">
      <button @click="scrollLeft" class="group absolute left-0 active:outline outline-accent rounded-2xl hidden md:inline">
        <ChevronLeftIcon class="group-hover:text-accent w-6 h-6 " :class="transition" />
      </button>
      <button @click="scrollRight" class="group absolute right-0 active:outline outline-accent rounded-2xl hidden md:inline">
        <ChevronRightIcon class="group-hover:text-accent w-6 h-6 "  :class="transition"/>
      </button>
      <div ref="scrollContainer" class="menu-scroll relative flex justify-start items-center h-fit gap-5 sm:gap-10 md:gap-20  px-2.5 overflow-x-scroll scroll-smooth mx-5 md:mx-14">
        <HomeContentOurUpdatesCard class="flex-none group" v-for="cardItem in data">
            <NuxtLink :to="`/blog/${cardItem.title}`">
              <div class="flex flex-col gap-y-5">
                <div class="flex flex-col gap-y-2.5">
                  <div class="relative min-w-full h-36 rounded-2xl overflow-clip">
                    <div class="absolute flex items-center justify-center px-5 opacity-0 group-hover:opacity-100 z-10 w-full h-full bg-black/70" :class="transition">
                        <!-- Black Ovelay-->
                        <div class="border lg:border-2 border-accent group-active:border-alternativeAccent rounded-2xl px-5 group-active:text-alternativeAccent text-accent lg:font-semibold" :class="transition">View Blog</div>
                    </div>
                    <img class="absolute object-cover w-full h-full md:h-auto top-0 left-0 group-hover:scale-125" :class="transition" :src="cardItem.image" alt="">
                  </div>
                  <div class="flex flex-col w-full gap-y-1.5 sm:gap-y-2.5">
                    <p class="text-black/40 text-xxs sm:text-xs md:text-base">{{ cardItem.tags }}</p>
                    <h1 class="text-base sm:text-lg md:text-xl font-bold">{{cardItem.title}}</h1>
                    <p class="text-xs sm:text-sm md:text-base text-black/50 group-hover:text-black/80 w-full text-ellipsis line-clamp-2">{{ cardItem.description }}</p>
                  </div>
                </div>
                <div class="flex justify-between">
                  <div class="flex items-center border-b-2 group-hover:border-accent">
                    <p class="text-accent/80 hover:text-accent hover:border-b hover:border-accent font-medium lg:font-bold">READ MORE</p>
                    <ArrowSmRightIcon class="relative text-accent w-6 h-fit bottom-px"  :class="transition"/>
                  </div>
                  <span class="relative text-xxs sm:text-xs md:text-sm text-black/60 right-1">{{ cardItem.date }}</span>
                </div>
      
              </div>
            </NuxtLink>
        </HomeContentOurUpdatesCard>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import IconCompleted from '@/components/Icons/Projects/CompletedStatus.vue'
import IconInProgress from '@/components/Icons/Projects/InProgressStatus.vue'
import { title } from 'process';
import {ChevronRightIcon, ChevronLeftIcon, ArrowSmRightIcon} from "@heroicons/vue/solid";


const {subHeading,transition,containerWidth} = useTailwindConfig()


const data = ref([
    {
        title: 'Children Saved through partnerships with Churches',
        description: "Hello donors! From BitGive's team we would like you to have some of the information we received from Black Girls Code (BGC) about the implementation of this project. Once we receive more, we'll keep updating this.",
        image: '/images/blogImage1.png',
        tags: '#children #partnership',
        date: '27th March 2024'
    },
    {
        title: 'Children Saved through partnerships with Churches',
        description: "Hello donors! From BitGive's team we would like you to have some of the information we received from Black Girls Code (BGC) about the implementation of this project. Once we receive more, we'll keep updating this.",
        image: '/images/projectImage1.png',
        tags: '#children #partnership',
        date: '27th March 2024'
    },
    {
        title: 'Children Saved through partnerships with Churches',
        description: "Hello donors! From BitGive's team we would like you to have some of the information we received from Black Girls Code (BGC) about the implementation of this project. Once we receive more, we'll keep updating this.",
        image: '/images/projectImage1.png',
        tags: '#children #partnership',
        date: '27th March 2024'
    },
    {
        title: 'Children Saved through partnerships with Churches',
        description: "Hello donors! From BitGive's team we would like you to have some of the information we received from Black Girls Code (BGC) about the implementation of this project. Once we receive more, we'll keep updating this.",
        image: '/images/projectImage1.png',
        tags: '#children #partnership',
        date: '27th March 2024'
    },
  ])


const props = defineProps({
  title: {
    type: String,
    require: true
  }
})

const scrollContainer = ref<HTMLDivElement | null>(null);

const scrollRight = () => {
  if (scrollContainer.value) {
    scrollContainer.value.scrollBy({ left: 400, behavior: 'smooth' });
  }
};

const scrollLeft = () => {
  if (scrollContainer.value) {
    scrollContainer.value.scrollBy({ left: -400, behavior: 'smooth' });
  }
};

</script>
