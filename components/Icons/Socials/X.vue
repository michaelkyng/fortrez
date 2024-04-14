<template>
    <svg class="group w-5 h-5 sm:w-6 sm:h-6" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path class="group-hover:fill-accent" :class="transition"  d="M3.03337 4L9.60648 13.3633L3 21H4.48479L10.2738 14.3262L14.945 21H20L13.0599 11.1055L19.2326 4H17.7478L12.4092 10.1592L8.10501 4H3.03337ZM5.13543 5.0625H7.48773L17.9146 19.9375H15.5623L5.13543 5.0625Z" fill="#707A8A"/>
    </svg>
</template>

<script lang="ts" setup>
const {transition} = useTailwindConfig()
</script>