<template>
  <div class="flex justify-between max-w-screen-md grow flex-wrap sm:flex-nowrap gap-y-10">

    <div class="flex flex-col gap-2 sm:gap-4 px-5 flex-1">
      <p class="text-black font-bold text-nowrap">SiteMap</p>

      <div class="flex flex-col gap-1 sm:gap-3">

        <NuxtLink class="max-w-fit" to="/">
          <FooterNavLinks title="Home"/>
        </NuxtLink>

        <NuxtLink class="max-w-fit" to="/blog">
          <FooterNavLinks title="Blog"/>
        </NuxtLink>
        
      </div>
    </div>

    <div class="flex flex-col gap-2 sm:gap-4 px-5 flex-1">
      <p class="text-black font-bold text-nowrap">Support Us</p>

      <div class="flex flex-col gap-1 sm:gap-3">

        <NuxtLink class="max-w-fit" to="/">
          <FooterNavLinks title="Donate"/>
        </NuxtLink>

        <NuxtLink class="max-w-fit" to="#proposal">
          <FooterNavLinks title="Proposal"/>
        </NuxtLink>
        
      </div>
    </div>
    
    <div class="flex flex-col gap-2 sm:gap-4 px-5 flex-1">
      <p class="text-black font-bold text-nowrap">Resources</p>

      <div class="flex flex-col gap-1 sm:gap-3">

        <NuxtLink class="max-w-fit" to="/">
          <FooterNavLinks title="WhitePaper"/>
        </NuxtLink>

        <NuxtLink class="max-w-fit" to="/faq">
          <FooterNavLinks title="FAQ"/>
        </NuxtLink>
        
        <NuxtLink class="max-w-fit" to="/terms-of-use">
          <FooterNavLinks title="Terms of Use"/>
        </NuxtLink>

        <NuxtLink class="max-w-fit" to="/privacy-policy">
          <FooterNavLinks title="Privacy Policy"/>
        </NuxtLink>

      </div>
    </div>

    <div class="flex flex-col gap-2 sm:gap-4 px-5 flex-1">
      <p class="text-black font-bold text-nowrap">Follow</p>

      <div class="flex flex-col gap-4 sm:gap-6">

        <div class="flex gap-6">
          <NuxtLink class="max-w-fit" to="/">
            <IconsSocialsX/>
          </NuxtLink>
          <NuxtLink class="max-w-fit" to="/faq">
            <IconsSocialsInstagram/>
          </NuxtLink>
        </div>
        
        <div class="flex gap-6">
          <NuxtLink class="max-w-fit" to="/terms-of-use">
            <IconsSocialsLinkedIn/>
          </NuxtLink>
          <NuxtLink class="max-w-fit" to="/privacy-policy">
            <IconsSocialsTelegram/>
          </NuxtLink>
        </div>

      </div>
    </div>

  </div>
</template>

<script lang="ts" setup>
import {} from '@heroicons/vue/outline';
</script>