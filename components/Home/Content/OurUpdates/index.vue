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
        v-if="blogData && campaignData"
        ref="scrollContainer"
        :class="blogData.length < 3 ? 'md:justify-center' : ''"
        class="menu-scroll w-full relative flex justify-start items-center h-fit gap-5 sm:gap-10 md:gap-20  overflow-x-scroll scroll-smooth  md:mx-14"
      >
        <HomeContentOurUpdatesCard
          v-if="!isLoading"
          class="flex-none group"
          v-for="cardItem in blogData"
          :title="cardItem.title"
          :description="cardItem.content"
          :image="cardItem.coverImage"
          :tags="cardItem.tags"
          :date="new Date(cardItem.createdAt).toLocaleDateString('en-GB', { dateStyle: 'medium' })"
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
const blogStore = useBlogStore();
const campaignStore = useCampaignStore();
const { subHeading, transition, containerWidth } = useTailwindConfig();
const isLoading = ref(true);
const blogData: any = ref([]);
const campaignData: any = ref([]);


onMounted(async () => {
  try {
    blogData.value = await blogStore.fetchBlogs();
    campaignData.value = await campaignStore.fetchCampaigns();
  } catch (error) {
    console.error("Failed to fetch blogs:", error);
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
