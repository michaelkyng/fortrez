<template>
    <div class="relative bg-white-dim h-fit">
  
      <div class="absolute w-full h-fit top-0 left-0">
        <div class="absolute w-full h-60 bg-gradient-to-b from-accent/10 to-accent/30">
        </div>
        <svg class="relative top-44 md:top-36 lg:top-32 xl:top-28" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path class="fill-white-bright" fill="#fdfdfd" fill-opacity="1" d="M0,32L120,42.7C240,53,480,75,720,74.7C960,75,1200,53,1320,42.7L1440,32L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"></path></svg>
      </div>
  
      <div class="relative pt-20 z-0">

        <div class="relative h-full flex flex-col justify-end items-start px-5 py-12 gap-7" :class="containerWidth">
          <h1 class="text-4xl font-bold">Projects</h1>
        </div>

        <DesignShapesFaintGrayCurves class="absolute top-0 left-0"/>
        
        <div class="relative bg-gradient-to-b from-white-bright to-white-dim py-7 md:py-14">
            <!-- Projects -->
            <ProjectsContent/>
        </div>
        
      </div>
      
      <div class="relative">
        <Footer/>
      </div>
      
    </div>
  </template>

  <script lang="ts" setup>
  const {subHeading,transition,containerWidth} = useTailwindConfig();
  </script>