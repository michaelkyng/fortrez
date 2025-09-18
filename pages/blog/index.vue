<template>
  <div class="relative h-fit">
    <div class="relative pt-20 z-0">
      <div
        class="relative h-full flex flex-col justify-end items-start px-5 pt-12 py-4 gap-7"
        :class="containerWidth"
      >
        <h1 class="text-4xl font-bold">Blog</h1>
        <p class="relative text-black/80 top-2.5">
          You may also stay updated with our latest updates on Twitter and
          Linkedin.
        </p>
      </div>

      <div v-if="data">
        <div class="relative bg-white-bright py-5">
          <BlogHeader :data="data[0]" />
        </div>
        <div class="relative overflow-visible">
          <BlogContent :data="data" />
        </div>
      </div>

      <div v-else class="flex justify-center items-center h-96">
        <h1 class="text-accent" :class="subHeading">No Blog Feed</h1>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const { subHeading, transition, containerWidth } = useTailwindConfig();
const blogStore = useBlogStore();
const isLoading = ref(true);
const data: any = ref([]);

onMounted(async () => {
  try {
    const blogs = await blogStore.fetchBlogs();
    data.value = blogs;
  } catch (error) {
    console.log(error);
  } finally {
    isLoading.value = false;
  }
});
</script>
