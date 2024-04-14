<template>
  <div class="bg-white-dim h-fit">
    <div class="h-fit flex flex-col gap-32">
        <HomeContentOurStrategy/>
        <div class="relative">
          <DesignShapesYellowLinesLoop class="absolute right-0 opacity-50"/>
          <HomeContentOurProjects title="Our Projects" :font="subHeading"/>
          <HomeContentOurStats class="h-fit"/>
          <HomeContentOurUpdates title="Our Updates" class="h-fit"/>
          <HomeContentOurNewsletter/>
        </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const { containerWidth, subHeading } = useTailwindConfig()
</script>
