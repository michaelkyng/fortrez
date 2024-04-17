<template>
    <div class="h-fit w-[49%] sm:w-64 border drop-shadow-none p-2 rounded-2xl bg-white-bright/60 overflow-clip">
      <NuxtLink :to="`/project/p/${props.path}`">
                <div class="flex flex-col gap-y-3.5 sm:gap-y-5">
                  <div class="flex flex-col gap-y-1.5 sm:gap-y-2.5">
                    <div class="relative  max-h-32 h-24 sm:h-28 lg:h-32 rounded-2xl overflow-clip">
                      <div class="absolute flex items-center px-2.5 sm:px-5 opacity-0 group-hover:opacity-100 z-10 w-full h-full bg-black/70" :class="transition">
                          <!-- Black Ovelay-->
                          
                          <span class="absolute right-2.5 sm:right-5 bottom-1 flex items-center gap-1 text-accent" :class="transition">
                            <span class="text-xxs md:text-xs flex items-center"><IconsSymbolsNaira class="w-2 sm:w-3 h-2 sm:h-3" color="#ffdf00"/>{{ props.funded }}</span> 
                            <span class="text-xxs">of</span>
                            <span class="text-xxs md:text-xs flex items-center"><IconsSymbolsNaira class="w-2 sm:w-3 h-2 sm:h-3" color="#ffdf00" />{{ props.target }}</span>
                          </span>
  
                          <UProgress class="relative" :value="props.funded" :max="props.target" size="2xs" color="yellow">
                            <template #indicator="{ percent }">
                              <div class="text-right absolute -top-6" :style="{ width: `${percent}%` }">
                                <span class="text-accent text-xxs">{{Math.round(percent)}}%</span>
                              </div>
                            </template>          
                          </UProgress>
                      </div>
                      <img class="absolute object-cover h-24 w-full sm:h-32 md:h-auto top-0 left-0 group-hover:scale-125" :class="transition" :src="props.image" alt="">
                    </div>
                    <div class="flex flex-col max-w-60 md:max-w-72 gap-y-1.5 sm:gap-y-2.5">
                      <h1 class="text-sm sm:text-base md:text-lg font-medium md:font-semibold">{{props.title}}</h1>
                      <p class="text-xs sm:text-sm md:text-base text-black/50 group-hover:text-black/80 w-full text-ellipsis line-clamp-2 sm:line-clamp-3" :class="transition">{{ props.description }}</p>
                    </div>
                  </div>
  
                  <div class="flex justify-between">
                    <div v-if="props.completed" class="hidden sm:flex gap-1 items-center">
                      <component  :is="IconCompleted"/>
                      <p class="text-sm md:text-base text-black/60 sm:text-black/80">Completed</p>
                    </div>
        
                    <div v-else class="hidden sm:flex gap-1 items-center">
                      <component  :is="IconInProgress"/>
                      <p class="text-sm md:text-base text-black/60 sm:text-black/80">InProgress</p>
                    </div>
                    <p class="text-xs sm:text-sm md:text-base text-accent/80 hover:text-accent hover:border-b hover:border-accent font-medium lg:font-semibold pr-1">LEARN MORE</p>
                  </div>
        
                </div>
              </NuxtLink>
    </div>
  </template>
  
  <script lang="ts" setup>
  import IconCompleted from '@/components/Icons/Projects/CompletedStatus.vue'
  import IconInProgress from '@/components/Icons/Projects/InProgressStatus.vue'
  
  
  const props = defineProps({
    title: {
      type:String,
      require:true
    },
    description: {
      type:String,
      require:true
    },
    image: {
      type:String,
      require:true
    },
    completed: {
      type:Boolean,
      default:false
    },
    path: {
      type:String,
      require:true
    },
    funded: {
      type:Number,
      require:true
    },
    target: {
      type:Number,
      require:true
    },
    status: {
      type:Boolean,
      default:true
    }
  })
  
  const {subHeading,transition,containerWidth} = useTailwindConfig()
  const scrollContainer = ref<HTMLDivElement | null>(null);
  </script>
  
