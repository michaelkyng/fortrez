<template>
  <div class="relative bg-white-bright h-fit">

    <div class="absolute w-full h-fit top-0 left-0">
      <div class="absolute w-full h-60 bg-gradient-to-b from-accent/10 to-accent/30">
      </div>
      <svg class="relative top-44 md:top-36 lg:top-32 xl:top-28" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path fill="#fdfdfd" fill-opacity="1" d="M0,32L120,42.7C240,53,480,75,720,74.7C960,75,1200,53,1320,42.7L1440,32L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"></path>
      </svg>
    </div>

    <div class="relative pt-20 z-0">
      <div class="relative h-full flex flex-col justify-end items-start px-5 pt-12 py-4 gap-7" :class="containerWidth">
        <h1 class="text-4xl font-bold">Blog</h1>
        <p class="relative text-black/80 top-2.5">You may also stay updated with our latest updates on Twitter and Linkedin.</p>
      </div>
      <DesignShapesFaintGrayCurves class="absolute top-0 left-0"/>
      
      <div class="relative bg-white-bright py-14 ">
        <BlogHeader class="bg-[#ffffff]"/>
      </div>

      <div class="relative bg-white-dim overflow-hidden">
        <BlogContent />
      </div>
      
    </div>
    
    <div class="relative">
      <Footer/>
    </div>
    
  </div>
</template>

<script lang="ts" setup>
const {subHeading,transition,containerWidth} = useTailwindConfig();

const latestBlog = ref({
  title: "Children saved through partnerships with churches",
  description: "Greetings from the BitGive team! We are excited to share with you some insightful updates we've received from Black Girls Code (BGC) regarding the ongoing implementation of our collaborative project. Your support has been instrumental in driving positive change, and we are thrilled to provide you with a glimpse into the progress being made.",
  image: '/images/projectImage1.png',
  tags: '#children #partnership',
  date: '27th March 2024'
})
</script>