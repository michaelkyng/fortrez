<template>
    <div class="flex flex-col gap-y-2.5 p-5 bg-slate-300/15 rounded-3xl shadow w-96">
        <component :is="props.icon" class="w-6 md:w-8"/>
          <p class="font-semibold">{{props.title}}</p>
          <p class="text-black/80 text-justify sm:text-start text-sm md:text-base">{{props.description}}</p>
    </div>
</template>

<script lang="ts" setup>
const props = defineProps({
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    icon: {
      type: [Object, Function], 
      required: false
    }
})
</script>