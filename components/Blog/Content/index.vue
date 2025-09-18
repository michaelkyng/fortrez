<template>
  <div class="py-20">
    <div
      class="relative flex flex-col gap-7 md:gap-14 z-10"
      :class="containerWidth"
    >
      <DesignShapesBlob
        class="absolute blur-[200px] w-96 inset-x-0 mx-auto -top-52 -z-10 opacity-30"
      />
      <h1 :class="subHeading">Fortrez Blog</h1>

      <div class="w-full overflow-hidden px-5 mx-auto hidden">
        <SubNavFilter />
      </div>

      <div
        class="relative flex flex-wrap justify-center h-fit gap-5 sm:gap-10 md:gap-14 lg:gap-20 px-2.5"
      >
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
    </div>
  </div>
</template>

<script lang="ts" setup>

const { subHeading, transition, containerWidth } = useTailwindConfig();

const isLoading = ref(true);
const blogStore = useBlogStore();
const data: any = ref([]);


onMounted(async () => {
  isLoading.value = true;
  try {
    const blogs = await blogStore.fetchBlogs();
    data.value = blogs;
  } catch (error) {
    console.log(error);
  } finally {
    isLoading.value = false;
  }
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
