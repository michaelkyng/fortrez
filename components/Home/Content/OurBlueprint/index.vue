<template>
  <div :class="containerWidth" class="relative h-fit flex flex-col w-full overflow-hidden gap-y-16 lg:gap-y-20 px-5">
    <h1 :class="subHeading">Our Blueprint</h1>
    <div class="flex flex-col gap-y-10 self-center">
      <p class="text-black/80 md:text-2xl max-w-5xl text-center">
          <i class="font-serif leading-5 md:leading-10">
              Fortrez, a blockchain-based platform for charitable
              donations would ensure transparency and security.
              With blockchain, every donation transaction is recorded and
              verified by multiple participants, making it hard to
              manipulate or tamper with the data.
              This would help Fortrez build trust among donors and recipients,
              as they can easily track where their donations are going.
              Plus, the decentralized nature of blockchain reduces the risk
              of fraud and corruption. It's an awesome way to make sure charitable
              donations are used for their intended purpose!
          </i>
      </p>

      
      <div class="self-center">
        <NuxtLink to="/whitepaper" class="flex justify-center w-fit cursor-pointer text-center overflow-hidden border-2 border-black/50 hover:border-black/0 hover:text-accent/80 font-semibold px-2.5 md:px-5 py-2.5 text-xs md:text-base rounded-full  max-w-max relative z-10 duration-300 before:content-[''] before:absolute before:top-3 before:bottom-3 before:left-0 before:right-0 hover:before:bg-accent before:-z-10 hover:before:animate-[spin_2s_ease-in-out_infinite] after:bg-white-dim after:content-[''] after:absolute after:inset-0.5 after:-z-10 after:rounded-full">Read More</NuxtLink>    
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
    const {subHeading,containerWidth} = useTailwindConfig()
</script>