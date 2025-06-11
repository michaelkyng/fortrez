<template>
  <div class="">
    <div class="relative px-5 z-0" :class="containerWidth">
      <DesignShapesBlob
        class="absolute blur-[200px] w-96 inset-x-0 mx-auto -top-52 -z-10 opacity-50"
      />
      <div class="flex justify-evenly">
        <SupportInfographic />
      </div>
    </div>
  </div>
</template>

<script setup>
const { containerWidth, subHeading } = useTailwindConfig();
</script>
