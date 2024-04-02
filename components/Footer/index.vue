<template>
  <div class="bg-white-bright h-fit">
      <div class="flex flex-col">

        <div class="py-14 w-full" :class="containerWidth">
            <div class="flex flex-wrap px-5 sm:px-10 md:px-0 lg:flex-nowrap gap-y-20 justify-between w-full">
                <FooterLeft></FooterLeft>
                <FooterRight/>
            </div>
        </div>

        <FooterCopyright/>
      </div>
  </div>
</template>

<script lang="ts" setup>
const {transition,containerWidth} = useTailwindConfig()
</script>