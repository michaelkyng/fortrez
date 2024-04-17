<template>
  <div class="relative bg-white-bright h-fit">

    <div class="absolute w-full h-fit top-0 left-0">
      <div class="absolute w-full h-60 bg-gradient-to-b from-accent/10 to-accent/30">
      </div>
    </div>

    <div class="relative pt-20 z-0">
      
      <div class="relative h-full flex flex-col justify-end items-start px-5 pt-12 py-4 gap-2" :class="containerWidth">
        <h1 class="text-xl sm:text-2xl md:text-3xl font-bold">{{ data.title }}</h1>
        <p class="relative text-black/80 top-2.5 text-sm sm:text-base">{{ data.createdAt }}</p>
      </div>

      <DesignShapesFaintGrayCurves class="absolute top-0 left-0"/>
      
      <div v-if="data &&data.title"class="relative bg-white-bright py-14 ">
        
        <BlogItem class="bg-[#ffffff]" 
          :title="data.title" 
          :description="data.description" 
          :image="data.mediaFiles[0].url"
          :tags="data.tags"
          :date="data.createdAt"
          />
      </div>

      <div v-else class="flex justify-center items-center h-96 w-full">
        <h1 class="text-accent h-screen" :class="subHeading">No Data on the Blog Found </h1>
      </div>

    </div>
    
    <div class="relative">
      <Footer/>
    </div>
    
  </div>
</template>

<script lang="ts" setup>
const {title}:any = useRoute().params
const {verifyBlog} = useBlog()
const {containerWidth,subHeading} = useTailwindConfig();

interface BlogData {
  title: string;
  description: string;
  mediaFiles: { url: string }[];
  tags: string;
  createdAt: string;
}

const data: Ref<BlogData> = ref({
  title: '',
  description: '',
  mediaFiles: [],
  tags: '',
  createdAt: '',
});


onBeforeMount(async()=>{
  try {
    const {blog} :any = await verifyBlog(title)
    data.value = blog
  } catch (error) {
    console.log(error)
  }finally{
    
  }
})


</script>