<template>
    <div class="flex flex-wrap lg:flex-nowrap  px-5 gap-x-8 sm:gap-x-10 md:gap-x-14 gap-y-5 w-full min-h-80 items-center" :class="containerWidth">
        <div class="w-full flex flex-col lg:basis-1/2 rounded-3xl overflow-clip h-full min-h-48 z-20">
            <img class="object-cover min-h-48" :src="latestBlog.image" alt="">
        </div>
        <div class="flex flex-col basis-full lg:basis-1/2 gap-4 lg:gap-2 xl:gap-4 h-full z-20">
            <p class="grow px-2.5 text-sm xl:text-base">{{ latestBlog.tags }}</p>
            <div class="flex flex-wrap gap-y-2 justify-between grow">
                <p class="text-lg md:text-xl xl:text-3xl font-bold px-2.5">{{latestBlog.title}}</p>
                <p class="text-black/60 text-sm xl:text-base text-nowrap px-2.5">{{ latestBlog.date }}</p>
            </div>
            <p class="text-ellipsis md:text-lg xl:text-xl line-clamp-2 xl:line-clamp-3 text-black/50 px-2.5">{{ latestBlog.description }}</p>
            <ButtonLink class="px-2.5" name="Read More"/>
        </div>
    </div>
</template>

<script lang="ts" setup>

const {containerWidth} = useTailwindConfig()

const latestBlog = ref({
  title: "Children saved through partnerships with churches",
  description: "Greetings from the BitGive team! We are excited to share with you some insightful updates we've received from Black Girls Code (BGC) regarding the ongoing implementation of our collaborative project. Your support has been instrumental in driving positive change, and we are thrilled to provide you with a glimpse into the progress being made.",
  image: '/images/blogImage1.png',
  tags: '#children #partnership',
  date: '27th March 2024'
})
</script>