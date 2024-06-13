<template>
  <div class="relative bg-white-bright h-fit">
    <div class="absolute w-full h-fit top-0 left-0">
      <div
        class="absolute w-full h-60 bg-gradient-to-b from-accent/10 to-accent/30"
      ></div>
      <svg
        class="relative top-44 md:top-36 lg:top-32 xl:top-28"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
      >
        <path
          fill="#fdfdfd"
          fill-opacity="1"
          d="M0,32L120,42.7C240,53,480,75,720,74.7C960,75,1200,53,1320,42.7L1440,32L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"
        ></path>
      </svg>
    </div>

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
      <DesignShapesFaintGrayCurves class="absolute top-0 left-0" />

      <div v-if="data">
        <div class="relative bg-white-bright py-14">
          <BlogHeader class="bg-[#ffffff]" :data="data[0]" />
        </div>
        <div class="relative bg-white-dim overflow-hidden">
          <BlogContent :data="data" />
        </div>
      </div>

      <div v-else class="flex justify-center items-center h-96">
        <h1 class="text-accent" :class="subHeading">No Blog Feed</h1>
      </div>
    </div>

    <div class="relative">
      <Footer />
    </div>
  </div>
</template>

<script lang="ts" setup>
const { subHeading, transition, containerWidth } = useTailwindConfig();

const isLoading = ref(false);
const { getBlogs } = useBlog();
const data: any = ref([]);

onBeforeMount(async () => {
  isLoading.value = true;
  try {
    const { blogs }: any = await getBlogs();
    console.log(blogs);
    data.value = blogs;
  } catch (error) {
    console.log(error);
  } finally {
    isLoading.value = false;
  }
});
</script>
