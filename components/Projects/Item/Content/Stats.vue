<template>
  <div class="relative flex flex-col gap-y-8 w-full">
    <h3 :class="subHeading2">Project Stats</h3>
    <div
      id="flex-wrapper"
      class="flex flex-wrap gap-4 sm:gap-7 w-full justify-start md:justify-center xl:justify-start"
    >
      <div class="relative min-w-32 min-h-32 sm:w-40 sm:h-40 lg:w-56 lg:h-52">
        <div
          class="absolute block w-1 h-5 rounded-full mx-auto inset-0 origin-[50%60px] sm:origin-[50%80px] lg:origin-[50%100px]"
          v-for="(item, index) in items"
          :key="index"
          :style="`transform: rotate(${+3.6 * index}deg)`"
          :class="
            index < props.percentofVerifiedFunded
              ? 'bg-primary'
              : 'bg-accent/60'
          "
        ></div>
      </div>

      <div
        class="flex flex-col gap-y-2.5 lg:gap-y-5 justify-center text-xs sm:text-sm xl:text-base"
      >
        <div class="flex items-center gap-x-1 xl:gap-x-2">
          <span class="text-black/80">Total Funds donated</span>
          <pre>:</pre>
          <span class="flex items-center font-medium"
            ><IconsSymbolsNaira class="w-3 h-3" />
            {{ Math.round(props.funded) }}</span
          >
        </div>

        <div class="flex items-center gap-x-1 xl:gap-x-2">
          <div class="w-5 h-4 lg:w-7 lg:h-5 bg-accent rounded-3xl"></div>
          <span class="text-black/80">Verified Funds</span>
          <pre>:</pre>
          <span class="flex items-center font-medium"
            ><IconsSymbolsNaira class="w-3 h-3" />
            {{ Math.round(props.verifiedFund) }}</span
          >
        </div>

        <div class="flex items-center gap-x-1 xl:gap-x-2">
          <div class="w-5 h-4 lg:w-7 lg:h-5 bg-accent/60 rounded-3xl"></div>
          <span class="bgtext-accent">Pending Funds</span>
          <pre>:</pre>
          <span class="flex items-center font-medium"
            ><IconsSymbolsNaira class="w-3 h-3" />
            {{ Math.round(props.pending) }}</span
          >
        </div>

        <div class="flex items-center gap-x-1 xl:gap-x-2">
          <IconsProjectsDonor />
          <span class="text-black/80">Donations</span>
          <pre>:</pre>
          <span class="flex items-center font-medium">{{ props.donations }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const items = Array.from({ length: 100 }, (_, i) => i + 1);
const { subHeading2 } = useTailwindConfig();

const props = defineProps({
  donations: {
    type: Number,
    required: true,
  },
  percentofVerifiedFunded: {
    type: Number,
    required: true,
  },
  pending: {
    type: Number,
    required: true,
  },
  verifiedFund: {
    type: Number,
    required: true,
  },
  funded: {
    type: Number,
    required: true,
  },
});
</script>
<style scoped>
@media (max-width: 352px) {
  #flex-wrapper {
    flex-wrap: wrap;
  }
}
</style>
