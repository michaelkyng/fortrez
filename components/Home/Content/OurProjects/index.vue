<template>
  <div
    class="relative h-fit flex flex-col items-center w-full overflow-hidden gap-16"
    :class="containerWidth"
  >
    <h1 class="z-10" :class="font">{{ title }}</h1>

    <div class="relative flex items-center overflow-hidden w-full">
      <button
        @click="scrollLeft"
        class="group absolute left-1 active:outline outline-primary rounded-2xl hidden md:inline cursor-pointer"
      >
        <PhCaretLeft
          weight="fill"
          class="group-hover:text-primary group-active:text-primary w-6 h-6"
          :class="transition"
        />
      </button>
      <button
        @click="scrollRight"
        class="group absolute right-1 active:outline outline-primary rounded-2xl hidden md:inline cursor-pointer"
      >
        <PhCaretRight
          weight="fill"
          class="group-hover:text-primary group-active:text-primary w-6 h-6"
          :class="transition"
        />
      </button>
      <div
        ref="scrollContainer"
        class="menu-scroll relative w-full flex items-center h-fit gap-4 sm:gap-10 px-2.5 overflow-x-scroll scroll-smooth mx-0 md:mx-14 transition-all"
      >
        <HomeContentOurProjectsCard
          class="flex-none group"
          v-if="!isLoading"
          v-for="cardItem in data"
          :item="cardItem"
        />

        <div v-else class="flex justify-center items-center w-full">
          <img src="/animation.gif" alt="Animation" />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { PhCaretRight, PhCaretLeft } from "@phosphor-icons/vue";
import type { ProjectWithRelations } from "~/types/type";

const { transition, containerWidth } = useTailwindConfig();
const isLoading = ref(true);
const { getProjects } = useProject();
const data = ref<ProjectWithRelations[]>([]);

onBeforeMount(async () => {
  isLoading.value = true;
  try {
    const { projects } = await getProjects();
    data.value = projects as ProjectWithRelations[];
  } catch (error) {
    console.log(error);
  } finally {
    isLoading.value = false;
  }
});

defineProps({
  title: { type: String, require: true },
  font: { type: String, reqiure: true },
});

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
