<template>
  <div
    :class="containerWidth"
    class="relative h-fit flex flex-col items-center"
  >
    <div
      class="h-fit flex flex-col items-center p-16 w-fit bg-accent/90 gap-y-10 rounded-3xl"
    >
      <h1
        class="text-center text-lg lg:text-xl py-2 px-5 font-medium bg-secondary w-fit rounded-full shadow-xs"
      >
        Our Blueprint
      </h1>
      <div class="flex flex-col gap-y-10 self-center">
        <p
          class="text-accent-foreground sm:text-lg max-w-3xl text-center leading-5 md:leading-10 font-lato"
        >
          Fortrez, a blockchain-based platform for charitable donations would
          ensure transparency and security. With blockchain, every donation
          transaction is recorded and verified by multiple participants, making
          it hard to manipulate or tamper with the data. This would help Fortrez
          build trust among donors and recipients, as they can easily track
          where their donations are going. Plus, the decentralized nature of
          blockchain reduces the risk of fraud and corruption. It's an awesome
          way to make sure charitable donations are used for their intended
          purpose!
        </p>
        <div class="self-center">
          <Button name="Read More" to="/blueprint" variant="secondary" />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const { subHeading, containerWidth } = useTailwindConfig();
</script>
