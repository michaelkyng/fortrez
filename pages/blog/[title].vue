<template>
  <div
    class="relative flex flex-col justify-center items-center min-h-screen h-fit"
  >
    <div
      class="relative flex flex-col justify-center items-center pt-20 z-0 size-full"
      v-if="!isLoading"
    >
      <div
        class="relative h-full flex flex-col justify-end items-start px-5 pt-12 py-4 gap-2"
        :class="containerWidth"
      >
        <h1 class="text-xl sm:text-2xl md:text-3xl font-bold">
          {{ data.title }}
        </h1>
        <p class="relative text-black/80 top-2.5 text-sm sm:text-base">
          {{ data.createdAt }}
        </p>
      </div>

      <div v-if="data && data.title" class="relative w-full">
        <BlogItem
          :title="data.title"
          :description="data.description"
          :image="data.coverImage"
          :tags="data.tags"
          :date="data.createdAt"
        />
      </div>

      <div v-else class="flex justify-center items-center h-96 w-full">
        <h1 class="text-accent h-screen" :class="subHeading">
          No Data on the Blog Found
        </h1>
      </div>
    </div>

    <div v-else class="flex justify-center items-center size-full">
      <img src="/animation.gif" alt="Animation" />
    </div>
  </div>
</template>

<script lang="ts" setup>
const { title }: any = useRoute().params;
const { getBlogByTitle } = useBlogStore();
const { containerWidth, subHeading } = useTailwindConfig();
const isLoading = ref(true);
const data = ref();

onBeforeMount(async () => {
  try {
    isLoading.value = true;
    const { blog }: any = await getBlogByTitle(title);
    data.value = blog;
  } catch (error) {
    console.log(error);
  } finally {
    isLoading.value = false;
  }
});
</script>
