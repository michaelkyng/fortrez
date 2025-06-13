<template>
  <div
    class="flex flex-col mx-auto gap-10 px-5 w-full pb-20"
    :class="containerWidth"
  >
    <NuxtLink to="/blog" class="z-20 flex gap-1 items-center">
      <PhArrowLeft
        class="size-5 text-primary hover:text-primary/80 peer-hover:text-primary/80 transition-colors duration-300"
      />
      <span
        class="peer text-primary hover:text-primary/80 transition-colors duration-300"
        >All Blogs</span
      >
    </NuxtLink>
    <div class="w-full min-h-80 items-start z-20">
      <div
        class="float-none sm:float-left rounded-3xl overflow-clip h-full min-h-48 mx-0 sm:mx-5 sm:my-2.5 w-full sm:w-2/5"
      >
        <img class="object-cover w-full min-h-48" :src="props.image" alt="" />
      </div>

      <div class="space-y-1.5 sm:space-y-5 py-5 md:py-0">
        <p class="grow px-2.5 text-sm text-black/50">
          {{ props.tags }}
        </p>
        <p class="text-justify text-sm md:text-base text-black/60 px-2.5">
          {{ props.description }}
        </p>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { PhArrowLeft } from "@phosphor-icons/vue";
const { containerWidth } = useTailwindConfig();

const props = defineProps({
  title: { type: String, require: true },
  description: { type: String, require: true },
  image: { type: String, require: true },
  tags: { type: String, require: true },
  date: { type: String, require: true },
});
</script>
