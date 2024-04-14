<template>
  <div :class="containerWidth">
    <div class="pt-20">Admin Page </div>
  </div>
</template>

<script lang="ts" setup>
    const {containerWidth, subHeading} = useTailwindConfig()
    const { useAuthAdmin} = useAuth()
    const admin = useAuthAdmin()
</script>