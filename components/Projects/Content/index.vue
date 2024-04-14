<template>
    <div>
        <div class="relative flex flex-col gap-7 md:gap-14 z-10" :class="containerWidth">
            <DesignShapesBlob class="absolute blur-[200px] w-96 inset-x-0 mx-auto -top-52 -z-10 opacity-50"/>
    
            <div class="relative flex flex-wrap-reverse w-full overflow-hidden px-5 mx-auto gap-y-7">
                <SubNavFilter/>
                <div class="relative group basis-3/5 md:basis-2/5">
                    <input type="search" name="search" id="search" placeholder="Search..." class="bg-slate-300/20 px-7 py-2.5 rounded-3xl outline-none w-full">
                    <SearchIcon class="absolute inset-0 left-0 top-0 w-4 h-4 my-auto ml-2 text-slate-500/60"/>
                </div>
                <ButtonOutline name="Filter" class="w-fit ml-auto">
                    <IconsSymbolsFilter/>
                </ButtonOutline>
            </div>
    
            <div class="relative flex flex-wrap justify-center gap-y-1.5 sm:gap-y-5 lg:gap-y-8 gap-x-1.5 sm:gap-x-5 md:gap-x-10 lg:gap-x-1 lg:justify-between h-fit px-5">
                <HomeContentOurProjectsCard2 class="flex-none group" v-for="cardItem in data" 
                :title="cardItem.title" 
                :description="cardItem.description" 
                :funded="cardItem.funded"
                :target="cardItem.target"
                :completed="cardItem.completed"
                :image="cardItem.image"
                :path="`/projects/${cardItem.title}`"
                >
                
                </HomeContentOurProjectsCard2>
            </div>
  
        </div>
  
    </div>
  </template>

  <script lang="ts" setup>
  import IconCompleted from '@/components/Icons/Projects/CompletedStatus.vue'
  import {SearchIcon} from '@heroicons/vue/solid'
  const {containerWidth, subHeading} = useTailwindConfig()

  const data = ref([
    {
        title: 'Nourishing vulnerable children',
        description: "Providing both food and care for orphans and other vulnerable kids out there is super important. There are so many vulnerable kids out there who really need our support. It's heartwarming to think about the positive impact we can make in their lives. Let's spread love and kindness together!",
        image: '/images/projectImage1.png',
        completed: false,
        funded: 250000.57,
        target: 1000000,
        status: IconCompleted
    },
    {
        title: 'Nourishing vulnerable children',
        description: "Providing both food and care for orphans and other vulnerable kids out there is super important. There are so many vulnerable kids out there who really need our support. It's heartwarming to think about the positive impact we can make in their lives. Let's spread love and kindness together!",
        image: '/images/projectImage1.png',
        completed: false,
        funded: 650000.77,
        target: 2000000,
        status: IconCompleted
    },
    {
        title: 'Nourishing vulnerable children',
        description: "Providing both food and care for orphans and other vulnerable kids out there is super important. There are so many vulnerable kids out there who really need our support. It's heartwarming to think about the positive impact we can make in their lives. Let's spread love and kindness together!",
        image: '/images/projectImage1.png',
        completed: true,
        funded: 1000000,
        target: 1000000,
        status: IconCompleted
    },
    {
        title: 'Nourishing vulnerable children',
        description: "Providing both food and care for orphans and other vulnerable kids out there is super important. There are so many vulnerable kids out there who really need our support. It's heartwarming to think about the positive impact we can make in their lives. Let's spread love and kindness together!",
        image: '/images/projectImage1.png',
        completed: true,
        funded: 1000000,
        target: 1000000,
        status: IconCompleted
    },
    {
        title: 'Nourishing vulnerable children',
        description: "Providing both food and care for orphans and other vulnerable kids out there is super important. There are so many vulnerable kids out there who really need our support. It's heartwarming to think about the positive impact we can make in their lives. Let's spread love and kindness together!",
        image: '/images/projectImage1.png',
        completed: true,
        funded: 1000000,
        target: 1000000,
        status: IconCompleted
    },
    {
        title: 'Nourishing vulnerable children',
        description: "Providing both food and care for orphans and other vulnerable kids out there is super important. There are so many vulnerable kids out there who really need our support. It's heartwarming to think about the positive impact we can make in their lives. Let's spread love and kindness together!",
        image: '/images/projectImage1.png',
        completed: true,
        funded: 1000000,
        target: 1000000,
        status: IconCompleted
    },
    {
        title: 'Nourishing vulnerable children',
        description: "Providing both food and care for orphans and other vulnerable kids out there is super important. There are so many vulnerable kids out there who really need our support. It's heartwarming to think about the positive impact we can make in their lives. Let's spread love and kindness together!",
        image: '/images/projectImage1.png',
        completed: true,
        funded: 1000000,
        target: 1000000,
        status: IconCompleted
    },
    {
        title: 'Nourishing vulnerable children',
        description: "Providing both food and care for orphans and other vulnerable kids out there is super important. There are so many vulnerable kids out there who really need our support. It's heartwarming to think about the positive impact we can make in their lives. Let's spread love and kindness together!",
        image: '/images/projectImage1.png',
        completed: true,
        funded: 1000000,
        target: 1000000,
        status: IconCompleted
    },
    {
        title: 'Nourishing vulnerable children',
        description: "Providing both food and care for orphans and other vulnerable kids out there is super important. There are so many vulnerable kids out there who really need our support. It's heartwarming to think about the positive impact we can make in their lives. Let's spread love and kindness together!",
        image: '/images/projectImage1.png',
        completed: true,
        funded: 1000000,
        target: 1000000,
        status: IconCompleted
    },
    {
        title: 'Nourishing vulnerable children',
        description: "Providing both food and care for orphans and other vulnerable kids out there is super important. There are so many vulnerable kids out there who really need our support. It's heartwarming to think about the positive impact we can make in their lives. Let's spread love and kindness together!",
        image: '/images/projectImage1.png',
        completed: true,
        funded: 1000000,
        target: 1000000,
        status: IconCompleted
    }
  ])
  </script>
    <style>
    /* Target the cancel button */
    input[type="search"]::-webkit-search-cancel-button {
        /* Override default appearance */
        -webkit-appearance: none; /* Safari and Chrome */
        appearance: none; /* Other browsers */
        /* Add your custom styles here */
        background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path opacity="0.3" fill-rule="evenodd" d="M5.293 5.293a1 1 0 011.414 0L10 8.586l3.293-3.293a1 1 0 111.414 1.414L11.414 10l3.293 3.293a1 1 0 01-1.414 1.414L10 11.414l-3.293 3.293a1 1 0 01-1.414-1.414L8.586 10 5.293 6.707a1 1 0 010-1.414z" clip-rule="evenodd"/></svg>');
        background-size: 1.25rem; /* Adjust icon size */
        background-repeat: no-repeat;
        background-position: center;
        padding: 0.25rem;
        cursor: pointer;
        border: none; /* Remove border */
        outline: none; /* Remove focus outline */
    }
</style>