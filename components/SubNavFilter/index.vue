<template>
  <div class="menu-scroll flex gap-2.5 sm:gap-5 justify-start xl:justify-center items-center overflow-x-scroll py-2.5 w-full lg:w-3/5 scroll-smooth mx-auto">
    <ButtonGhost name="All" :active="true"/>
    <ButtonGhost name="News" :active="false"/>
    <ButtonGhost name="Events" :active="false"/>
    <ButtonGhost name="CryptoCurrency" :active="false"/>
    <ButtonGhost name="Blockchain" :active="false"/>
    <ButtonGhost name="Web3" :active="false"/>
    <ButtonGhost name="Partnerships" :active="false"/>
    <ButtonGhost name="Bitcoin" :active="false"/>
    <ButtonGhost name="Ethereum" :active="false"/>
    <ButtonGhost name="Defi" :active="false"/>
  </div>
</template>

<script lang="ts" setup>
const tab = ref();

</script>