<template>
  <div class="relative bg-gradient-to-b from-white-bright to-white-dim h-fit">
    <div class="relative pt-20 z-0">
      <DesignShapesFaintGrayCurves class="absolute top-0 left-0" />

      <div class="relative py-14">
        <ProjectsFItem :urltitle="title" />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const { title }: any = useRoute().params;
</script>
