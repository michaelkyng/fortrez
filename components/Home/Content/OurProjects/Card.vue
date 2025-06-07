<template>
  <div
    class="h-fit max-w-60 sm:max-w-72 rounded-2xl bg-white-bright overflow-clip shadow-md bg-gray-100"
    v-if="!item.completed"
  >
    <NuxtLink :to="`/projects/f/${item.title}`">
      <div class="flex flex-col gap-y-5">
        <div class="flex flex-col gap-y-2.5">
          <div class="relative h-32 rounded-2xl overflow-clip">
            <img
              class="absolute object-cover h-32 md:h-auto top-0 left-0 group-hover:scale-125"
              :class="transition"
              :src="item.mediaFiles[0].url"
              alt=""
            />
          </div>
          <div class="flex flex-col max-w-60 md:max-w-72 gap-y-2.5 p-3">
            <span class="flex items-center w-full">
              <p>{{ item.createdAt }}</p>
            </span>
            <h1 class="text-base sm:text-lg md:text-xl font-bold min-h-14">
              {{ item.title }}
            </h1>
            <p
              class="text-xs md:text-sm text-black/50 group-hover:text-black/80 w-full text-ellipsis line-clamp-3 sm:line-clamp-4"
              :class="transition"
            >
              {{ item.description }}
            </p>
          </div>
        </div>
        <div class="flex justify-between p-3">
          <div v-if="item.completed" class="flex gap-1 items-center">
            <component :is="IconCompleted" />
            <p class="text-sm md:text-base text-black/60 sm:text-black/80">
              Completed
            </p>
          </div>

          <div v-else class="flex gap-1 items-center">
            <component :is="IconInProgress" />
            <p class="text-sm md:text-base text-black/60 sm:text-black/80">
              InProgress
            </p>
          </div>
          <p
            class="text-accent/80 hover:text-accent hover:border-b hover:border-accent font-medium lg:font-semibold pr-1"
          >
            LEARN MORE
          </p>
        </div>
      </div>
    </NuxtLink>
  </div>
</template>

<script lang="ts" setup>
import IconCompleted from "@/components/Icons/Projects/CompletedStatus.vue";
import IconInProgress from "@/components/Icons/Projects/InProgressStatus.vue";
import type { ProjectWithRelations } from "~/types/type";

defineProps({
  item: {
    type: Object as PropType<ProjectWithRelations>,
    required: true,
  },
});

const { transition } = useTailwindConfig();
const scrollContainer = ref<HTMLDivElement | null>(null);

const scrollRight = () => {
  if (scrollContainer.value) {
    scrollContainer.value.scrollBy({ left: 400, behavior: "smooth" });
  }
};

const scrollLeft = () => {
  if (scrollContainer.value) {
    scrollContainer.value.scrollBy({ left: -400, behavior: "smooth" });
  }
};
</script>
