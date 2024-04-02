<template>
    <div>
        <div class="relative flex flex-col gap-7 md:gap-14 z-10" :class="containerWidth">
            <DesignShapesBlob class="absolute blur-[200px] w-96 inset-x-0 mx-auto -top-52 -z-10 opacity-50"/>
    
            <div class="relative flex flex-wrap-reverse w-full overflow-hidden px-5 mx-auto gap-y-7">
                <SubNavFilter/>
                <ButtonOutline name="Filter" class="w-fit ml-auto">
                    <IconsSymbolsFilter/>
                </ButtonOutline>
            </div>
    
            <div class="relative flex flex-wrap justify-center gap-y-1.5 sm:gap-y-5 lg:gap-y-8 gap-x-1.5 sm:gap-x-5 h-fit px-5">
                <HomeContentOurProjectsCard2 class="flex-none group" v-for="cardItem in data" 
                :title="cardItem.title" 
                :description="cardItem.description" 
                :funded="cardItem.funded"
                :amount="cardItem.amount"
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
  import {} from '@heroicons/vue/solid'
  const {containerWidth, subHeading} = useTailwindConfig()

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
  </script>