<template>
  <div class="flex flex-col items-center gap-y-2 min-w-fit">
    <div class="p-1.5 bg-[#d9d9d9]/50 rounded-full">
        <UserCircleIcon v-if="!props.image" class="w-8 h-8 md:w-9 md:h-9 xl:w-10 xl:h-10 stroke-1 stroke-black/60"/>
    </div>

    <div class="flex flex-col gap-y-0.5 items-center">
        <p class="text-xs md:text-sm lg:text-base font-medium text-black">{{ props.name }}</p>
        <p class="text-xs md:text-sm lg:text-base">{{ props.amount }}</p>
    </div>
  </div>
</template>

<script lang="ts" setup>
import {UserCircleIcon} from "@heroicons/vue/outline"

const props = defineProps({
    name: {
    type:String,
    require:true
  },
    image: {
    type:String,
    require:true
  },
  amount: {
    type:Number,
    require:true
  }

})
</script>