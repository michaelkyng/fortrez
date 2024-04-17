<template>
    <div class="space-y-5 md:space-y-10">
      <h2 :class="subHeading2">Create a Blog</h2>
        <div class="relative flex flex-col gap-2.5 md:gap-5">
          <p>Blog Image</p>
          <!-- Confirmation Message -->
          <div v-if="blogSuccessful" class="absolute flex justify-center items-center z-20 w-full h-full" >
            <div class="absolute px-10 py-5 md:px-20 md:py-10 bg-alternativeAccent rounded-3xl container">
                <span class="flex gap-x-2.5 items-center text-base md:text-xl font-medium"> <CheckCircleIcon class="size-6 text-white-bright"/> Blog Created Successfully</span>
            </div>
          </div>
          <div class="relative group w-full h-52 rounded-2xl overflow-clip z-0">
              <div @click="openFileInput()" class="absolute flex justify-center items-center group-hover:bg-black/40 group-hover:z-10 top-0 left-0 w-full h-full hover:cursor-pointer"
              :class="transition"
              >
                  <button class="w-fit flex justify-center items-center gap-2.5 px-5 py-2.5 text border border-slate-300 text-sm text-white-bright bg-transparent rounded-3xl">Choose Image</button>
              </div>
              <img class="absolute top-0 left-0 w-full h-full hover:cursor-pointer scale-x-150 object-cover" :src="blogData.image ? blogData.image :defaultImageHolder" alt="Product Image">
              
              <input ref="fileInput" v-on:change="handleFileChange" type="file" accept="image/jpeg,.png,.jpg" class="bg-white-bright h-full w-full rounded-2xl" hidden/>
          </div>
          <UInput v-model="blogData.title" type="name" class="bg-white-bright rounded-2xl py-1" color placeholder="Blog Title"/>
          <div class="flex items-center w-full gap-x-5">
              <UTextarea v-model="blogData.description" type="name" class="bg-white-bright rounded-2xl w-full" color placeholder="Blog Description"></UTextarea>
              <UTextarea v-model="blogData.tags" type="name" class="bg-white-bright rounded-2xl w-full" color placeholder="Blog Tags (Each Tag should start with a hashtag(#) and separated with a space"></UTextarea>
          </div>
          <div class="flex items-center w-full gap-x-5">
            <select
            v-model="blogData.category"
              class="peer block w-full py-2.5 px-2.5 rounded-2xl bg-white-bright text-black/60 text-sm focus:outline-none"
              required
              
            >
              <option value="" selected disabled hidden>Blog Category</option>
              <option
              :key="item"
              class="peer bg-white-bright"
              v-for="item in options"
              >
                {{ item }}
              </option>
            </select>
          </div>
          
          <UButton @click="handleBlog" class="bg-accent justify-center font-semibold md:py-2.5 mt-5" color >Create Blog</UButton>
          
        </div>
    </div>
  </template>
  
  <script lang="ts" setup>
import {CheckCircleIcon} from "@heroicons/vue/solid"
const {subHeading2,transition} = useTailwindConfig()
const defaultImageHolder = ref("/images/imageHolder.jpg")
const options = ['News','Events','Cryptocurency','Blockchain','Web3','Partnerships','Bitcoin','Ethereum','Defi']
const isLoading =ref(false)
const blogSuccessful = ref(false)
const { createBlog } = useBlog();

  const blogData = reactive({
      title: "",
      description: "",
      mediaFiles: [] as File[],
      image: "",
      tags: "",
      category: "",
  })
  
  const fileInput:any = ref<HTMLInputElement | null>(null);
  
  const openFileInput = () => {
      fileInput.value.click();
  };
  
  const handleFileChange = (event: Event) => {
        const target = event.target as HTMLInputElement;
        if (target.files && target.files.length > 0) {
          const selectedFile = target.files[0];
          blogData.mediaFiles = [selectedFile]
          const reader = new FileReader();
          reader.onload = () => {
            if (typeof reader.result === 'string') {
              blogData.image = reader.result;
            }
          };
          reader.readAsDataURL(selectedFile);
        }
      };


      const handleBlog = async()=>{
      blogSuccessful.value =false
      isLoading.value =true
        try {
            const response = await createBlog(blogData)
            blogSuccessful.value =true
            console.log(response)
        } catch (error) {
            console.log(error)
        }finally{
          isLoading.value =false
          
          setTimeout(() => {
            blogSuccessful.value =false
            }, 5000)
          
        }
    }
  </script>