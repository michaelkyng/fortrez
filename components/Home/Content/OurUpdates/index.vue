<template>
  <div
    class="relative h-fit flex flex-col items-center w-full gap-y-16 overflow-hidden"
    :class="containerWidth"
  >
    <h1 class="z-10" :class="subHeading">{{ props.title }}</h1>

    <div class="relative flex items-center mx-1 overflow-hidden w-fit">
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
        v-if="data"
        ref="scrollContainer"
        :class="data.length < 3 ? 'justify-center' : 'justify-start'"
        class="menu-scroll w-full relative flex items-center h-fit gap-5 sm:gap-10 md:gap-20 px-2.5 overflow-x-scroll scroll-smooth mx-5 md:mx-14"
      >
        <HomeContentOurUpdatesCard
          v-if="!isLoading"
          class="flex-none group"
          v-for="cardItem in data"
          :title="cardItem.title"
          :description="cardItem.description"
          :image="cardItem.mediaFiles[0].url"
          :tags="cardItem.tags"
          :date="cardItem.createdAt"
          :path="`/blog/${cardItem.title}`"
        >
        </HomeContentOurUpdatesCard>

        <div v-else class="flex justify-center items-center w-full">
          <img src="/animation.gif" alt="Animation" />
        </div>
      </div>

      <div v-else class="flex justify-center items-center h-96 w-full">
        <h1 class="text-accent" :class="subHeading">No Blog Feed</h1>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { PhCaretRight, PhCaretLeft } from "@phosphor-icons/vue";

const { subHeading, transition, containerWidth } = useTailwindConfig();

const isLoading = ref(true);
const { getBlogs } = useBlog();
const data: any = ref([]);
const latestBlog = ref();

onBeforeMount(async () => {
  isLoading.value = true;
  try {
    const { blogs }: any = await getBlogs();
    data.value = blogs;
  } catch (error) {
    console.log(error);
  } finally {
    isLoading.value = false;
  }
});

const props = defineProps({ title: { type: String, require: true } });

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
