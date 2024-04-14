<template>
  <span class="hover:text-accent text-black/60 text-sm sm:text-base" :class="transition">{{props.title}}</span>
</template>

<script lang="ts" setup>

const {transition} = useTailwindConfig()
const props = defineProps({
    title : {
        type: String,
        require: true
    }
})
</script>