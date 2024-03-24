<template>
  <div class="relative w-fit">
    <svg class="max-w-60 sm:max-w-64 md:max-w-64 lg:max-w-max h-fit" xmlns="http://www.w3.org/2000/svg" width="311" height="328" viewBox="0 0 311 328" fill="none">
        <g filter="url(#filter0_d_654_97677)">
        <path d="M96 82H259V324H14L96 82Z" fill="white" fill-opacity="0.01" shape-rendering="crispEdges"/>
        </g>
        <path opacity="0.5" d="M82.5 8.5L67.3204 56.8229L47.1555 94.1684L81.2201 130.422L111.213 38.6146L82.5 8.5Z" fill="#A89300"/>
        <g filter="url(#filter1_d_654_97677)">
        <path d="M47 94H223.67C253.639 94 284.655 73.4055 292.948 48C301.238 22.5945 283.666 2.00001 253.697 2.00001H82.4507L47 94Z" fill="#FAEB7B"/>
        </g>
        <defs>
        <filter id="filter0_d_654_97677" x="0" y="70" width="261" height="258" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
        <feOffset dx="-6" dy="-4"/>
        <feGaussianBlur stdDeviation="4"/>
        <feComposite in2="hardAlpha" operator="out"/>
        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"/>
        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_654_97677"/>
        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_654_97677" result="shape"/>
        </filter>
        <filter id="filter1_d_654_97677" x="43" y="0" width="268" height="112" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
        <feOffset dx="6" dy="8"/>
        <feGaussianBlur stdDeviation="5"/>
        <feComposite in2="hardAlpha" operator="out"/>
        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_654_97677"/>
        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_654_97677" result="shape"/>
        </filter>
        </defs>
    </svg>

    <h1 class="absolute top-3 sm:top-4 lg:top-5 left-12 sm:left-16 lg:left-20 text-base lg:text-lg font-bold max-w-40 sm:max-w-40 lg:max-w-48 text-white-bright text-center px-2.5">{{ props.title}}</h1>
    <p class="absolute top-24 md:top-24 lg:top-28 left-14 md:left-16 lg:left-20 text-center text-sm lg:text-base max-w-96 sm:max-w-48 text-black/80 px-2.5">{{ props.description }}</p>
    <div class="absolute bottom-0 left-1/2">
        <slot name="icon"/>
    </div>
  </div>
</template>

<script lang="ts" setup>
    const props = defineProps({
        title: {
            type: String,
            require: true 
        },
        description: {
            type: String,
            require: true 
        }
    })
</script>

<style>

</style>