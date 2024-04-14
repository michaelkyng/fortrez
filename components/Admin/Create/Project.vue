<template>
  <div class="space-y-5 md:space-y-10">
    <h2 :class="subHeading2">Create a Project</h2>
      <div class="flex flex-col gap-2.5 md:gap-5">
        <p>Project Image</p>
        <div class="relative group w-full h-56 bg-blue-500 rounded-2xl overflow-clip z-0">
            <div @click="openFileInput()" class="absolute flex justify-center items-center group-hover:bg-black/40 group-hover:z-10 top-0 left-0 w-full h-full hover:cursor-pointer"
            :class="transition"
            >
                <button class="w-fit flex justify-center items-center gap-2.5 px-5 py-2.5 text border border-slate-300 text-sm text-white-bright bg-transparent rounded-3xl">Choose Image</button>
            </div>
            <img class="absolute top-0 left-0 w-full h-full hover:cursor-pointer scale-125" :src="projectData.image ? projectData.image :defaultImageHolder" alt="Product Image">
            
            <input  ref="fileInput" v-on:change="handleFileChange" type="file" class="bg-white-bright h-full w-full rounded-2xl" color="" hidden/>
        </div>
        <UInput v-model="projectData.title" type="name" class="bg-white-bright rounded-2xl py-1" color placeholder="Project Title"/>
        <UTextarea v-model="projectData.description" type="name" class="bg-white-bright rounded-2xl" color placeholder="Project Description"></UTextarea>
        <UInput v-model="projectData.title" type="name" class="bg-white-bright rounded-2xl py-1" color placeholder="Project Title"/>
        <UInput v-model="projectData.title" type="name" class="bg-white-bright rounded-2xl py-1" color placeholder="Project Title"/>
        <UInput v-model="projectData.title" type="name" class="bg-white-bright rounded-2xl py-1" color placeholder="Project Title"/>
      </div>
  </div>
</template>

<script lang="ts" setup>
const {subHeading2,transition} = useTailwindConfig()
const defaultImageHolder = ref("/images/projectImage1.png")

const projectData = reactive({
    title: "",
    description: "",
    image: "",
    problem:"",
    solutions: "",
    target: "",
    completed: false
})

const fileInput:any = ref<HTMLInputElement | null>(null);

const openFileInput = () => {
    fileInput.value.click();
};

const handleFileChange = (event: Event) => {
      const target = event.target as HTMLInputElement;
      if (target.files) {
        const selectedFile = target.files[0];
        console.log(selectedFile)
        // Handle file change event here
        
      }
    };
</script>