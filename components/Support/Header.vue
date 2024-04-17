<template>
   <div class="relative bg-white-bright z-10">
       <DesignShapesStar class="absolute z-0 top-0 -right-10"/>
       <div class="font-arial px-5" :class="containerWidth">
        <div class="flex items-center justify-between flex-wrap lg:flex-nowrap  px-5 py-40 gap-x-8 sm:gap-x-10 md:gap-x-14 gap-y-10 w-full min-h-80">
           
               <div class="flex gap-5 flex-col  basis-full lg:basis-7/12 xl:basis-6/12  lg:gap-10 h-full w-full z-10">
                   <p class="-indent-5 !text-left" :class="subHeading">Support Us</p>
                   <ul class="list-disc text-md md:text-lg text-black/80 space-y-1">
                       <li>
                           Helping kids in need, supporting young people and vulnerable people,
                           providing assistance to mothers in need.
                        </li>
                        <li>
                            Looking out for kids who need extra support and making sure they're
                            safe and protected.
                        </li>
                        <li>
                            You can start by simply giving a hungry kid a meal or donating school



                            supplies for a child in need.
                        </li>
                    </ul>
                    <NuxtLink to="/projects">
                        <UButton class="grow-0 max-w-40 justify-center rounded-2xl font-semibold px-10" color="yellow">
                            Donate
                        </UButton>
                    </NuxtLink>
               </div>


           
               <div class="flex basis-full lg:basis-4/12 xl:basis-5/12 justify-center z-10">
                   <div class="w-full flex flex-col rounded-3xl overflow-clip h-full min-h-72 max-w-lg">
                        <img class="object-cover min-h-72" src="/public/images/supportImage.png" alt="">
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
