<template>
  <div class="relative h-fit flex flex-col w-full overflow-hidden" :class="containerWidth, props.project ? 'gap-y-16 lg:gap-y-20' : 'gap-y-8'">
    <h1 class="z-10" :class="props.font">{{props.title}}</h1>
    
    <div class="relative flex items-center mx-1 overflow-hidden">
      <button @click="scrollLeft" class="group absolute left-0 active:outline outline-accent rounded-2xl hidden md:inline">
        <ChevronLeftIcon class="group-hover:text-accent w-6 h-6 " :class="transition" />
      </button>
      <button @click="scrollRight" class="group absolute right-0 active:outline outline-accent rounded-2xl hidden md:inline">
        <ChevronRightIcon class="group-hover:text-accent w-6 h-6 "  :class="transition"/>
      </button>
      <div ref="scrollContainer" class="menu-scroll relative flex justify-start items-center h-fit gap-4 sm:gap-10 md:gap-20  px-2.5 overflow-x-scroll scroll-smooth mx-5 md:mx-14">
        <HomeContentOurProjectsCard class="flex-none group" v-for="cardItem in data" 
        :title="cardItem.title" 
        :description="cardItem.description" 
        :funded="cardItem.funded"
        :target="cardItem.target"
        :completed="cardItem.completed"
        :image="cardItem.image"
        :path="`/projects/${cardItem.title}`"
        >
            
        </HomeContentOurProjectsCard>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import {ChevronRightIcon, ChevronLeftIcon} from "@heroicons/vue/solid";


const {subHeading,transition,containerWidth} = useTailwindConfig()


const data = ref([
    {
        title: 'Nourishing vulnerable children',
        description: "Providing both food and care for orphans and other vulnerable kids out there is super important. There are so many vulnerable kids out there who really need our support. It's heartwarming to think about the positive impact we can make in their lives. Let's spread love and kindness together!",
        image: '/images/projectImage1.png',
        completed: false,
        funded: 250000.57,
        target: 1000000
    },
    {
        title: 'Nourishing vulnerable children',
        description: "Providing both food and care for orphans and other vulnerable kids out there is super important. There are so many vulnerable kids out there who really need our support. It's heartwarming to think about the positive impact we can make in their lives. Let's spread love and kindness together!",
        image: '/images/projectImage1.png',
        completed: false,
        funded: 650000.77,
        target: 2000000
    },
    {
        title: 'Nourishing vulnerable children',
        description: "Providing both food and care for orphans and other vulnerable kids out there is super important. There are so many vulnerable kids out there who really need our support. It's heartwarming to think about the positive impact we can make in their lives. Let's spread love and kindness together!",
        image: '/images/projectImage1.png',
        completed: true,
        funded: 1000000,
        target: 1000000
    },
    {
        title: 'Nourishing vulnerable children',
        description: "Providing both food and care for orphans and other vulnerable kids out there is super important. There are so many vulnerable kids out there who really need our support. It's heartwarming to think about the positive impact we can make in their lives. Let's spread love and kindness together!",
        image: '/images/projectImage1.png',
        completed: true,
        funded: 1000000,
        target: 1000000
    }
  ])


const props = defineProps({
  title: {
    type: String,
    require: true
  },
  font: {
    type: String,
    reqiure:true
  },
  project:{
    type:Boolean,
    default:true
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
