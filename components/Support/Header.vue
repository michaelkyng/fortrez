<template>
  <div
    class="relative bg-white-bright z-10 font-lato mt-40"
    :class="containerWidth"
  >
    <DesignShapesStar class="absolute z-0 top-0 -right-10" />
    <div class="w-full">
      <div
        class="flex items-center justify-between flex-wrap gap-20 w-full min-h-90 lg:flex-nowrap mt-40 py-20 gap-x-8 sm:gap-x-10"
      >
        <div class="flex gap-5 flex-col lg:gap-10 h-full w-full z-10">
          <div class="flex flex-col gap-5">
            <p
              class="text-left font-lato text-3xl sm:text-4xl md:text-5xl font-semibold"
            >
              Helping Our Young Ones Thrive
            </p>
            <p class="text-base md:text-lg text-gray-700">
              We are a non-profit dedicated to helping children and families
              thrive by providing meals, school supplies, and emotional support.
              Every child deserves a safe, supported path to success regardless
              of background.
            </p>
          </div>

          <Button name="Donate Now" variant="secondary" to="/projects" />
        </div>

        <div class="flex basis-full justify-center z-10">
          <div
            class="w-full flex flex-col rounded-3xl overflow-clip h-full md:min-h-72 min-h-20"
          >
            <img
              class="object-cover w-full min-h-96"
              src="/public/images/supportImage.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  </div>

  <div>
    <div></div>
  </div>
</template>

<script setup>
const { containerWidth, subHeading } = useTailwindConfig();
</script>
