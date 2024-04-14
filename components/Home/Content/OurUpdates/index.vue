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
        <HomeContentOurUpdatesCard class="flex-none group" v-for="cardItem in data" 
        :title="cardItem.title"
        :description="cardItem.description"
        :image="cardItem.image"
        :tags="cardItem.tags"
        :date="cardItem.date"
        :path="`/blog/${cardItem.title}`"
        >
            
        </HomeContentOurUpdatesCard>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
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
