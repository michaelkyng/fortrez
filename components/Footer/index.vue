<template>
  <div class="bg-white-bright h-fit">
    <div class="flex flex-col">
      <div class="py-14 w-full sm:mb-20" :class="containerWidth">
        <div
          class="flex flex-col lg:flex-row lg:flex-nowrap gap-20 justify-between w-full"
        >
          <FooterLeft class="basis-6/12"></FooterLeft>
          <FooterRight class="basis-5/12" />
        </div>
      </div>

      <FooterCopyright />
    </div>
  </div>
</template>

<script lang="ts" setup>
const { transition, containerWidth } = useTailwindConfig();
</script>
