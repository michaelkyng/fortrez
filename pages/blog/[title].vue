<template>
  <div class="relative bg-white-bright h-fit">

    <div class="absolute w-full h-fit top-0 left-0">
      <div class="absolute w-full h-60 bg-gradient-to-b from-accent/10 to-accent/30">
      </div>
    </div>

    <div class="relative pt-20 z-0">
      
      <div class="relative h-full flex flex-col justify-end items-start px-5 pt-12 py-4 gap-2" :class="containerWidth">
        <h1 class="text-xl sm:text-2xl md:text-3xl font-bold">{{ blog.title }}</h1>
        <p class="relative text-black/80 top-2.5 text-sm sm:text-base">{{ blog.date }}</p>
      </div>

      <DesignShapesFaintGrayCurves class="absolute top-0 left-0"/>
      
      <div class="relative bg-white-bright py-14 ">
        
        <BlogItem class="bg-[#ffffff]" 
          :title="blog.title" 
          :description="blog.description" 
          :image="blog.image"
          :tags="blog.tags"
          :date="blog.date"
          />
      </div>

    </div>
    
    <div class="relative">
      <Footer/>
    </div>
    
  </div>
</template>

<script lang="ts" setup>

const {containerWidth} = useTailwindConfig();

const blog = ref({
  title: "Children saved through partnerships with churches",
  description: "Greetings from the BitGive team! We are excited to share with you some insightful updates we've received from Black Girls Code (BGC) regarding the ongoing implementation of our collaborative project. Your support has been instrumental in driving positive change, and we are thrilled to provide you with a glimpse into the progress being made.Greetings from the BitGive team! We are excited to share with you some insightful updates we've received from Black Girls Code (BGC) regarding the ongoing implementation of our collaborative project. Your support has been instrumental in driving positive change, and we are thrilled to provide you with a glimpse into the progress being made.Greetings from the BitGive team! We are excited to share with you some insightful updates we've received from Black Girls Code (BGC) regarding the ongoing implementation of our collaborative project. Your support has been instrumental in driving positive change, and we are thrilled to provide you with a glimpse into the progress being made.Greetings from the BitGive team! We are excited to share with you some insightful updates we've received from Black Girls Code (BGC) regarding the ongoing implementation of our collaborative project. Your support has been instrumental in driving positive change, and we are thrilled to provide you with a glimpse into the progress being made.Greetings from the BitGive team! We are excited to share with you some insightful updates we've received from Black Girls Code (BGC) regarding the ongoing implementation of our collaborative project. Your support has been instrumental in driving positive change, and we are thrilled to provide you with a glimpse into the progress being made.Greetings from the BitGive team! We are excited to share with you some insightful updates we've received from Black Girls Code (BGC) regarding the ongoing implementation of our collaborative project. Your support has been instrumental in driving positive change, and we are thrilled to provide you with a glimpse into the progress being made.Greetings from the BitGive team! We are excited to share with you some insightful updates we've received from Black Girls Code (BGC) regarding the ongoing implementation of our collaborative project. Your support has been instrumental in driving positive change, and we are thrilled to provide you with a glimpse into the progress being made.",
  image: '/images/blogImage1.png',
  tags: '#children #partnership',
  date: '27th March 2024'
})
</script>