<template>
  <div class="font-arial overflow-hidden scroll-smooth text-black selection:bg-alternativeAccent">
    
    <Navbar :class="{'bg-white-bright' : scrolled}"/>
    <NuxtPage ref="pageScroll"/>
  </div>
</template>

<script lang="ts" setup>
const {initAuth} = useAuth()

const scrolled = ref(false);
const handleScroll = () => {
const scrollTop = window.scrollY || document.documentElement.scrollTop;

// Check if not at the top of the page
if (scrollTop > 0) {
  scrolled.value = true;
} else {
  // User is at the top of the page
  scrolled.value = false;
}
};

onMounted(() => {
window.addEventListener('scroll', handleScroll);
});

onBeforeUnmount(() => {
window.removeEventListener('scroll', handleScroll);
});



onBeforeMount(()=>{
  initAuth()
})
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