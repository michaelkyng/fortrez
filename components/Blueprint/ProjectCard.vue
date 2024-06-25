<template>
    <div class="flex flex-col gap-y-2.5 p-5 bg-slate-300/15 rounded-3xl shadow">
        <p class="font-semibold">{{props.title}}</p>
        <p class="text-black/80 text-justify sm:text-start text-sm md:text-base">{{props.description}}</p>
    </div>
</template>

<script lang="ts" setup>
const props = defineProps({
    title: String,
    description: String,
})
</script>