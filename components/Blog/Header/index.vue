<template>
  <div class="w-full">
    <div
      v-if="data && data.mediaFiles && data.mediaFiles.length"
      class="flex flex-wrap lg:flex-nowrap px-5 gap-x-8 sm:gap-x-10 md:gap-x-14 gap-y-5 w-full min-h-80 items-start"
      :class="containerWidth"
    >
      <div
        class="w-full flex flex-col lg:basis-1/2 rounded-3xl overflow-clip h-full min-h-48 z-20"
      >
        <img
          v-if="data.mediaFiles[0]"
          class="object-cover min-h-48"
          :src="data.mediaFiles[0].url"
          alt=""
        />
      </div>
      <div
        class="flex flex-col basis-full lg:basis-1/2 gap-4 lg:gap-2 xl:gap-4 h-full z-20"
      >
        <p class="grow px-2.5 text-sm text-accent/50">
          {{ data.tags }}
        </p>
        <div class="flex flex-wrap gap-y-2 justify-between grow">
          <p class="text-lg md:text-2xl font-bold px-2.5">
            {{ data.title }}
          </p>
          <p class="text-accent/60 text-sm text-nowrap px-2.5">
            {{ data.createdAt }}
          </p>
        </div>
        <p
          class="text-ellipsis md:text-lg line-clamp-2 xl:line-clamp-3 text-accent/60 px-2.5"
        >
          {{ data.description }}
        </p>
        <NuxtLink
          :to="`/blog/${data.title}`"
          class="flex gap-1 items-center mt-4 px-2.5"
        >
          <span
            class="peer text-primary hover:text-primary/80 transition duration-300"
            >Read More</span
          >
          <PhArrowRight
            class="peer-hover:text-primary w-4 h-4 text-primary hover:text-primary/80 transition duration-300"
          />
        </NuxtLink>
      </div>
    </div>
    <div v-else class="flex justify-center items-center w-full">
      <img src="/animation.gif" alt="Animation" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { defineProps } from "vue";

const { containerWidth } = useTailwindConfig();

const { data } = defineProps(["data"]);
</script>
