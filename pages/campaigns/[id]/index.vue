<template>
  <div class="relative bg-gradient-to-b from-white-bright to-white-dim h-fit">
    <div class="relative z-0">
      <DesignShapesFaintGrayCurves class="absolute top-0 left-0" />

      <div class="relative">
        <CampaignsItem :id="id" />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const { id }: any = useRoute().params;
</script>
