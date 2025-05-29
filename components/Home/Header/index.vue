<template>
  <div class="relative h-fit overflow-y-visible bg-white-dim overflow-x-clip">
    <div class="relative h-fit">
      <DesignShapesStar class="absolute -right-14 -top-40 lg:-top-20 z-10" />
      <div
        class="flex flex-col gap-14 md:gap-20 pt-32 sm:pt-40 xl:pt-52 px-5 items-center justify-center text-center mx-auto overflow-visible"
        :class="containerWidth"
      >
        <div
          class="flex flex-col gap-5 sm:gap-8 lg:gap-10 shrink-0 items-center justify-start text-center z-10"
        >
          <h1
            class="text-3xl sm:text-4xl xl:text-6xl max-w-[95%] sm:max-w-[90%] font-bold"
          >
            Transparency, Trust and Transformation through blockchain donation.
          </h1>
          <p
            class="text-[12px] lg:text-md xl:text-xl max-w-full sm:max-w-[70%] opacity-80"
          >
            Welcome to Fortrez, where blockchain technology meets philanthropy.
            We're committed to transforming how charitable organizations secure
            funding for their projects and initiatives.
          </p>
          <ButtonSolidLarge />
        </div>

        <div
          class="relative min-h-72 max-h-[600px] overflow-clip rounded-3xl z-10 w-full"
        >
          <img
            src="/images/test1.png"
            class="object-cover h-72 lg:h-auto block w-full"
          />
          <!-- <img class="object-cover h-72 lg:h-auto" src="/images/test1.png" alt="Video"> -->
        </div>
      </div>
      <div
        class="absolute top-0 h-[70vh] sm:h-[75] lg:max-h-fit xl:h-[88vh] bg-white-bright w-full z-0"
      ></div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const { containerWidth } = useTailwindConfig();

// const slides = [
//   "images/test1.png",
//   "https://picsum.photos/1436/605",
//   "https://picsum.photos/1436/605",
// ]
</script>
