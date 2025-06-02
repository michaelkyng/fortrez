<template>
   <div class="relative bg-white-bright z-10">
       <DesignShapesStar class="absolute z-0 top-0 -right-10"/>
       <div class="">
        <div class="flex items-center justify-between px-5 pt-40 flex-wrap gap-y-10 w-full min-h-90 lg:flex-nowrap md:py-60 gap-x-8 sm:gap-x-10 md:gap-x-14 md:w-[90%] mx-auto">

               <div class="flex gap-5 flex-col lg:gap-10 h-full w-full z-10">
                   <p class="!text-left font-lato" :class="subHeading">Helping Our Young Ones Thrive</p>

                   <p class="text-sm text-gray-700">We are a non-profit dedicated to helping children and families thrive by providing meals, school supplies, and emotional support. Every child deserves
                     a safe, supported path to success—regardless of background.</p>
                    <NuxtLink to="/projects">
                        <UButton class="max-w-40 justify-center rounded-xl font-semibold px-15 py-3 bg-amber-200" color="yellow">
                            Donate
                        </UButton>
                    </NuxtLink>
               </div>

               <div class="flex basis-full justify-center z-10">
                   <div class="w-full flex flex-col rounded-3xl overflow-clip h-full md:min-h-72 min-h-20">
                        <img class="object-cover min-h-80" src="/public/images/supportImage.png" alt="">
                    </div>
               </div>
            </div>
           
       </div>

       
    </div>

    <div>
        <div>

        </div>
    </div>





</template>

<script setup>
const {containerWidth,subHeading} = useTailwindConfig()
</script>
