<template>
  <div
    class="font-arial overflow-hidden scroll-smooth text-black selection:bg-alternativeAccent"
  >
    <NavBar />
    <NuxtPage class="scroll-smooth" ref="pageScroll" />
    <Footer />
  </div>
</template>

<script lang="ts" setup>
useHead({
  script: [
    {
      type: "application/ld+json",
      innerHTML: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "WebSite",
        name: "Fortrez",
        url: "https://www.fortrez.io",
      }),
    },
  ],
});

// const { initAuth } = useAuth();

// onBeforeMount(() => {
//   initAuth();
// });
</script>

<style>
body::-webkit-scrollbar {
  display: none;
}

.menu-scroll::-webkit-scrollbar {
  display: none;
}

/* Hide scrollbar for IE, Edge and Firefox */
.menu-scroll {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
</style>
