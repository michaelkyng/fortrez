<template>
  <div
    class="w-full flex flex-wrap justify-center-safe items-center flex-col gap-10 md:flex-row font-lato mx-auto py-20 md:gap-20"
  >
    <div
      v-for="item in supportData"
      class="flex flex-col gap-1 shadow-xl py-10 px-5 lg:w-1/3"
    >
      <div class="flex flex-col gap-2">
        <span class="text-4xl">{{ item.icon }}</span>
        <h4 class="font-semibold text-xl md:text-2xl text-black/90">
          {{ item.title }}
        </h4>
      </div>
      <p class="text-black/50 text-xs sm:text-sm md:text-base pt-2">
        {{ item.description }}
      </p>
    </div>
  </div>
</template>

<script lang="ts" setup>
const supportData = [
  {
    icon: "🧑🏽‍🦼‍➡️",
    title: "Enabling and supporting individuals with disabilities",
    description:
      "Empowering individuals with disabilities requires accessible resources, inclusive environments, and personalized support for full participation.",
  },
  {
    icon: "🤰🏽",
    title: "Providing maternal support for women during their pregnancy",
    description:
      "You can make a difference in the lives of pregnant women who can't afford support by donating one item at a time. Your generosity can have a big impact!",
  },
  {
    icon: "📚",
    title: "Supporting Education for Marginalized Youth",
    description:
      "Wether you're an individual, a family or a group, you can support our vocational training programs for marginalized youth.",
  },
];
</script>
