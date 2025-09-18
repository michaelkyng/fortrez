<template>
  <div class="relative bg-white h-fit">
    <div class="relative pt-20 z-0">
      <div
        class="relative h-full flex flex-col justify-end items-start px-5 py-12 gap-7"
        :class="containerWidth"
      >
        <h1 class="text-4xl font-bold">Campaigns</h1>
      </div>

      <div class="relative">
        <!-- Campaigns -->
        <CampaignsContent />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const { containerWidth } = useTailwindConfig();
</script>
