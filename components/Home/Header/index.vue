<script lang="ts" setup>
const { containerWidth } = useTailwindConfig();

// const slides = [
//   "images/test1.png",
//   "https://picsum.photos/1436/605",
//   "https://picsum.photos/1436/605",
// ]
</script>

<template>
  <div class="relative h-fit overflow-y-visible bg-white-dim overflow-x-clip">
    <div class="relative h-fit">
      <img
        class="absolute -top-1/6 md:-top-0 -left-1/5 md:-left-0 -translate-x-1/2 size-fit"
        src="/designElement.png"
        alt="Element"
      />
      <img
        class="absolute bottom-0 md:bottom-1/5 -right-0 translate-x-1/2 size-fit"
        src="/designElement.png"
        alt="Element"
      />
      <div
        class="flex flex-col gap-14 md:gap-20 pt-40 xl:pt-52 items-center justify-center text-center overflow-visible md:max-w-3xl lg:max-w-4xl xl:max-w-5xl 2xl:max-w-7xl mx-auto w-full px-5"
      >
        <div class="flex flex-col items-center gap-8">
          <div
            class="flex flex-col gap-5 shrink-0 items-center justify-start text-center z-10"
          >
            <h1 class="text-4xl sm:text-5xl xl:text-6xl max-w-4xl font-bold">
              Transparency, Trust and Transformation through blockchain
              donation.
            </h1>
            <p class="text-sm sm:text-base md:text-lg max-w-2xl opacity-80">
              Welcome to Fortrez, where blockchain technology meets
              philanthropy. We're committed to transforming how charitable
              organizations secure funding for their projects and initiatives.
            </p>
          </div>
          <Button name="Donate Now" to="/projects" />
        </div>

        <div
          class="relative min-h-72 max-h-[600px] overflow-clip rounded-3xl z-10 w-full max-w-6xl"
        >
          <img
            src="/images/test1.png"
            class="object-cover h-72 lg:h-auto block w-full"
          />
        </div>
      </div>
    </div>
  </div>
</template>
