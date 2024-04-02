<template>
  <div class="bg-white-bright h-screen relative top-52">
    Product for {{ title }}
  </div>
</template>

<script lang="ts" setup>
 const {title} = useRoute().params;
</script>