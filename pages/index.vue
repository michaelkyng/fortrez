<template>
  <div>
    <div class="flex flex-col gap-28 bg-white-dim scroll-smooth">
      <HomeHeader class="h-[150]" />
      <HomeContent class="h-fit" />
    </div>
  </div>
</template>
<script lang="ts" setup>
useSeoMeta({
  title: "Fortrez Foundation",
  ogTitle: "Fortrez Foundation",
  description:
    "Fortrez Foundation is a non-profit organization dedicated to revolutionizing the philanthropic landscape through blockchain technology.",
  ogDescription:
    "Fortrez Foundation is a non-profit organization dedicated to revolutionizing the philanthropic landscape through blockchain technology.",
  ogImage: "https://www.fortrez.io/favicon.ico",
  twitterCard: "summary_large_image",
});
</script>
