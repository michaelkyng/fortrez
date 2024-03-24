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
      <div ref="scrollContainer" class="menu-scroll relative flex justify-start items-center h-fit gap-4 sm:gap-10 md:gap-20  px-2.5 overflow-x-scroll scroll-smooth mx-5 md:mx-14">
        <HomeContentOurProjectsCard class="flex-none group" v-for="cardItem in data">
            <NuxtLink :to="cardItem.title">
              <div class="flex flex-col gap-y-5">
                <div class="flex flex-col gap-y-2.5">
                  <div class="relative max-full h-32 rounded-2xl overflow-clip">
                    <div class="absolute flex items-center px-5 opacity-0 group-hover:opacity-100 z-10 w-full h-full bg-black/70" :class="transition">
                        <!-- Black Ovelay-->
                        
                        <span class="absolute right-5 bottom-1 flex items-center gap-1 text-accent">
                          <span class="text-xs md:text-sm flex items-center"><IconsSymbolsNaira/>{{ cardItem.funded }}</span> 
                          <span class="text-xs">of</span>
                          <span class="text-xs md:text-sm flex items-center"><IconsSymbolsNaira/>{{ cardItem.amount }}</span>
                        </span>

                        <UProgress class="relative" :value="cardItem.funded" :max="cardItem.amount" size="sm" color="yellow">
                          <template #indicator="{ percent }">
                            <div class="text-right absolute -top-6" :style="{ width: `${percent}%` }">
                              <span class="text-accent text-xs">{{percent}}%</span>
                            </div>
                          </template>          
                        </UProgress>
                    </div>
                    <img class="absolute object-cover h-32 md:h-auto top-0 left-0 group-hover:scale-125" :class="transition" :src="cardItem.image" alt="">
                  </div>
                  <div class="flex flex-col max-w-60 md:max-w-72 gap-y-2.5">
                    <h1 class="text-base sm:text-lg md:text-xl font-bold">{{cardItem.title}}</h1>
                    <p class="text-xs sm:text-sm md:text-base text-black/50 group-hover:text-black/80 w-full text-ellipsis line-clamp-2 sm:line-clamp-3">{{ cardItem.description }}</p>
                  </div>
                </div>
                <div class="flex justify-between">
                  <div v-if="cardItem.completed" class="flex gap-1 items-center">
                    <component  :is="IconCompleted"/>
                    <p class="text-sm md:text-base text-black/60 sm:text-black/80">Completed</p>
                  </div>
      
                  <div v-else class="flex gap-1 items-center">
                    <component  :is="IconInProgress"/>
                    <p class="text-sm md:text-base text-black/60 sm:text-black/80">InProgress</p>
                  </div>
                  <p class="text-accent/80 hover:text-accent hover:border-b hover:border-accent font-medium lg:font-semibold pr-1">LEARN MORE</p>
                </div>
      
              </div>
            </NuxtLink>
        </HomeContentOurProjectsCard>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import IconCompleted from '@/components/Icons/Projects/CompletedStatus.vue'
import IconInProgress from '@/components/Icons/Projects/InProgressStatus.vue'
import {ChevronRightIcon, ChevronLeftIcon} from "@heroicons/vue/solid";


const {subHeading,transition,containerWidth} = useTailwindConfig()


const data = ref([
    {
        title: 'Nourishing vulnerable children',
        description: "Providing both food and care for orphans and other vulnerable kids out there is super important. There are so many vulnerable kids out there who really need our support. It's heartwarming to think about the positive impact we can make in their lives. Let's spread love and kindness together!",
        image: '/images/projectImage1.png',
        completed: false,
        funded: 250000.57,
        amount: 1000000,
        status: IconCompleted
    },
    {
        title: 'Nourishing vulnerable children',
        description: "Providing both food and care for orphans and other vulnerable kids out there is super important. There are so many vulnerable kids out there who really need our support. It's heartwarming to think about the positive impact we can make in their lives. Let's spread love and kindness together!",
        image: '/images/projectImage1.png',
        completed: false,
        funded: 650000.77,
        amount: 2000000,
        status: IconCompleted
    },
    {
        title: 'Nourishing vulnerable children',
        description: "Providing both food and care for orphans and other vulnerable kids out there is super important. There are so many vulnerable kids out there who really need our support. It's heartwarming to think about the positive impact we can make in their lives. Let's spread love and kindness together!",
        image: '/images/projectImage1.png',
        completed: true,
        funded: 1000000,
        amount: 1000000,
        status: IconCompleted
    },
    {
        title: 'Nourishing vulnerable children',
        description: "Providing both food and care for orphans and other vulnerable kids out there is super important. There are so many vulnerable kids out there who really need our support. It's heartwarming to think about the positive impact we can make in their lives. Let's spread love and kindness together!",
        image: '/images/projectImage1.png',
        completed: true,
        funded: 1000000,
        amount: 1000000,
        status: IconCompleted
    }
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
