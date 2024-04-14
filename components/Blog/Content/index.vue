<template>
  <div class="py-20">
    <div class="relative flex flex-col gap-7 md:gap-14  z-10" :class="containerWidth">
      <DesignShapesBlob class="absolute blur-[200px] w-96 inset-x-0 mx-auto -top-52 -z-10"/>
      <h1 :class="subHeading">Fortrez Blog</h1>

      <div class="w-full overflow-hidden px-5 mx-auto">
        <SubNavFilter/>
      </div>

      <div class="relative flex flex-wrap justify-center h-fit gap-5 sm:gap-10 md:gap-14 lg:gap-20 px-2.5">
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
const {containerWidth, subHeading} = useTailwindConfig()

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
    {
        title: 'Children Saved through partnerships with Churches',
        description: "Hello donors! From BitGive's team we would like you to have some of the information we received from Black Girls Code (BGC) about the implementation of this project. Once we receive more, we'll keep updating this.",
        image: '/images/projectImage1.png',
        tags: '#children #partnership',
        date: '27th March 2024'
    },
  ])
</script>