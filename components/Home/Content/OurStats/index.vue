<template>
  <div class="relative my-20">
    <DesignShapesYellowFaintDots
      class="absolute -left-40 -bottom-40 opacity-70"
    />
    <div class="relative py-16 lg:py-28" :class="containerWidth">
      <div
        class="flex flex-col py-16 gap-5 bg-alternativeAccent mx-auto justify-center items-center text-center rounded-full w-[80%] xl:max-w-[90%] px-5"
      >
        <h1
          class="text-base md:text-lg font-bold max-w-60 sm:max-w-80 lg:max-w-fit"
        >
          Helping Families and Projects in our Communities
        </h1>
        <p class="text-black/70 text-sm md:text-base">
          Providing Essential Help and Support
        </p>
        <div class="relative flex justify-center items-center">
          <DesignShapesCircle />
          <div class="absolute">
            <p class="text-white-bright text-2xl">01</p>
          </div>
        </div>
        <p class="text-black/90 text-sm md:text-base max-w-[80%] lg:max-w-md">
          Support our projects [Nourishing Vulnerable Children, Providing
          Maternal Support]
        </p>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const { containerWidth } = useTailwindConfig();
</script>

<style></style>
