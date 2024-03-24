<template>
  <div class="relative h-fit flex flex-col w-full gap-y-16 lg:gap-y-20" :class="containerWidth">
    <h1 :class="subHeading">Our Strategy</h1>
    <div class="flex justify-around md:justify-between flex-wrap h-fit gap-y-10 px-2.5">
      <HomeContentOurStrategyCard v-for="cardItem in cardItems" :title="cardItem.title" :description="cardItem.description">
        <template #icon>
              <component :is="cardItem.icon" class="max-w-4 sm:max-w-6 md:max-w-8"></component>
          </template>
      </HomeContentOurStrategyCard>
    </div>
  </div>
</template>

<script lang="ts" setup>
import IconsBulb from '@/components/Icons/Strategy/Bulb.vue';
import IconsSetting from '@/components/Icons/Strategy/Setting.vue';
import IconsDiamond from '@/components/Icons/Strategy/Diamond.vue';
import IconsCircle from '@/components/Icons/Strategy/Circle.vue';

const {subHeading,containerWidth} = useTailwindConfig()


const cardItems = [
  {title: "Transparency and Accountability", 
  description: "Fortrez leverages blockchain technology to offer a transparent and immutable ledger, recording all transactions and activities.",
  icon: IconsBulb
},
  {title: "Enhanced Donor Confidence", 
  description: "With Fortrez, donors can track their contributions in real-time, ensuring that their funds are being utilized as intended.",
  icon: IconsSetting
},

  {title: "Smart Contracts for Efficiency", 
  description: "Fortrez uses smart contracts to automate and streamline administrative processes, reducing paperwork and operational costs.",
  icon: IconsCircle
},
  {title: "Improved Traceability", 
  description: "Blockchain's decentralized nature enables the traceability of funds, resources, and goods throughout the entire supply chain.",
  icon: IconsDiamond
},
]

</script>