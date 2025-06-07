<template>
  <div class="bg-white-dim h-fit">
    <div class="h-fit flex flex-col gap-20">
      <HomeContentOurBlueprint />
      <div class="relative">
        <HomeContentOurProjects title="Our Projects" :font="subHeading" />
        <HomeContentOurStats class="h-fit" />
        <HomeContentOurUpdates title="Our Updates" class="h-fit" />
        <HomeContentOurNewsletter />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const { subHeading } = useTailwindConfig();
</script>
