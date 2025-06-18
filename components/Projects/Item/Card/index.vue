<template>
  <div
    class="flex flex-col w-fit mx-auto px-5 gap-y-2.5"
    :class="containerWidth"
  >
    <NuxtLink to="/projects" class="z-20 flex gap-1 items-center">
      <PhArrowLeft
        class="size-5 text-primary hover:text-primary/80 peer-hover:text-primary/80 transition-colors duration-300"
      />
      <span
        class="peer text-primary hover:text-primary/80 transition-colors duration-300"
        >All Projects</span
      >
    </NuxtLink>

    <div
      class="flex flex-wrap lg:flex-nowrap gap-x-8 sm:gap-x-10 md:gap-x-14 gap-y-5 w-full min-h-80 items-star px-2.5 sm:px-5 md:px-10 py-2.5 sm-py-5 md:py-14 bg-gradient-to-r from-[#ebebeb]/10 to-accent/5 rounded-3xl shadow-md"
      :class="containerWidth"
    >
      <div
        class="w-full flex flex-col lg:basis-2/5 rounded-3xl overflow-clip h-full min-h-48 lg:min-h-64 z-20"
      >
        <img
          v-if="project.mediaFiles"
          class="object-cover min-h-48 lg:min-h-64"
          :src="project.mediaFiles[0].url"
          alt=""
        />
      </div>
      <div
        class="flex flex-col basis-full lg:basis-3/5 gap-4 lg:gap-2 xl:gap-4 h-full z-20 py-2.5 px-1.5 sm:px-2.5"
      >
        <h1 class="text-lg md:text-2xl xl:text-3xl font-bold">
          {{ project.title }}
        </h1>
        <p
          class="text-sm md:text-base text-black/60 line-clamp-2 lg:line-clamp-1 xl:line-clamp-2"
        >
          {{ project.description }}
        </p>
        <div class="flex flex-wrap gap-y-5 justify-between items-center">
          <div class="flex items-center gap-2.5 pr-1.5">
            <div v-if="project.completed" class="flex gap-1 items-center">
              <p class="text-sm text-green-600">Completed</p>
            </div>
            <div v-else class="flex gap-1 items-center">
              <p class="text-sm text-primary">InProgress</p>
            </div>
          </div>

          <div class="flex items-center gap-x-2.5 sm:gap-x-5 pl-1.5">
            <NuxtLink class="max-w-fit" to="https://x.com/fortrez_?s=21">
              <IconsSocialsX />
            </NuxtLink>
            <NuxtLink
              class="max-w-fit"
              to="https://www.instagram.com/p/DKKgfTlMnjK/?igsh=OGR6eXZudGdvazNo"
            >
              <IconsSocialsInstagram />
            </NuxtLink>
            <NuxtLink
              class="max-w-fit"
              to="https://www.linkedin.com/company/fortrezofficial"
            >
              <IconsSocialsLinkedIn />
            </NuxtLink>
            <NuxtLink class="max-w-fit" to="https://t.me/FortrezNews">
              <IconsSocialsTelegram />
            </NuxtLink>
          </div>
        </div>
        <div class="flex flex-col gap-y-2.5">
          <p class="text-sm md:text-base">Funds Raised</p>
          <UProgress
            class="relative"
            :model-value="project.funded"
            :max="project.target"
            size="md"
          >
            <template #status="{ percent }">
              <div
                class="flex flex-wrap-reverse w-full justify-between absolute -bottom-8 right-0"
              >
                <span class="flex items-center gap-1 text-black/60 pr-1.5">
                  <span class="text-sm md:text-base flex items-center"
                    ><IconsSymbolsNaira
                      class="w-3 h-3 opacity-60"
                      color="#000"
                    />{{ project.funded }}</span
                  >
                  <span class="text-sm md:text-base">raised of</span>
                  <span class="text-sm md:text-base flex items-center"
                    ><IconsSymbolsNaira
                      class="w-3 h-3 opacity-60"
                      color="#000"
                    />{{ project.target }}</span
                  >
                </span>

                <span class="text-sm md:text-base text-right ml-auto pl-1.5"
                  >{{ Math.round(Number(percent)) }}%</span
                >
              </div>
            </template>
          </UProgress>
          <NuxtLink to="/donate">
            <UButton
              class="w-fit mt-10 px-3 py-2.5 rounded-3xl font-semibold text-accent cursor-pointer"
              >Donate Now</UButton
            >
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { PhArrowLeft } from "@phosphor-icons/vue";
import type { PropType } from "vue";
import type { ProjectWithRelations } from "~/types/type";
const { containerWidth } = useTailwindConfig();

defineProps({
  project: {
    type: Object as PropType<ProjectWithRelations>,
    required: true,
  },
});
</script>
