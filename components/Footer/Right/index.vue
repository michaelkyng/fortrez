<template>
  <div
    class="flex justify-between grow md:grow-0 flex-wrap gap-y-10 gap-x-[115px]"
  >
    <div class="flex flex-col gap-2 sm:gap-4 flex-1 size-fit">
      <p class="text-black font-bold text-nowrap">SiteMap</p>

      <div class="flex flex-col gap-1 sm:gap-3">
        <NuxtLink class="max-w-fit" to="/">
          <FooterNavLinks title="Home" />
        </NuxtLink>

        <NuxtLink class="max-w-fit" to="/blog">
          <FooterNavLinks title="Blog" />
        </NuxtLink>
      </div>
    </div>

    <div class="flex flex-col gap-2 sm:gap-4 flex-1 size-fit">
      <p class="text-black font-bold text-nowrap">Support Us</p>

      <div class="flex flex-col gap-1 sm:gap-3">
        <NuxtLink class="max-w-fit" to="/">
          <FooterNavLinks title="Donate" />
        </NuxtLink>

        <NuxtLink class="max-w-fit" to="/#proposal">
          <FooterNavLinks title="Proposal" />
        </NuxtLink>
      </div>
    </div>

    <div class="flex flex-col gap-2 sm:gap-4 flex-1 size-fit">
      <p class="text-black font-bold text-nowrap">Resources</p>

      <div class="flex flex-col gap-1 sm:gap-3">
        <NuxtLink class="max-w-fit" to="/comingsoon">
          <FooterNavLinks title="BluePrint" />
        </NuxtLink>

        <NuxtLink class="max-w-fit" to="/comingsoon">
          <FooterNavLinks title="FAQ" />
        </NuxtLink>

        <NuxtLink class="max-w-fit" to="/comingsoon">
          <FooterNavLinks title="Terms of Use" />
        </NuxtLink>

        <NuxtLink class="max-w-fit" to="/comingsoon">
          <FooterNavLinks title="Privacy Policy" />
        </NuxtLink>
      </div>
    </div>

    <div class="flex flex-col gap-2 sm:gap-4 flex-1 size-fit">
      <p class="text-black font-bold text-nowrap">Follow</p>

      <div class="flex flex-col gap-4 sm:gap-6">
        <div class="flex gap-6">
          <NuxtLink class="max-w-fit" to="https://x.com/fortrez_?s=21">
            <IconsSocialsX />
          </NuxtLink>
          <NuxtLink class="max-w-fit" to="/comingsoon">
            <IconsSocialsInstagram />
          </NuxtLink>
        </div>

        <div class="flex gap-6">
          <NuxtLink
            class="max-w-fit"
            to="https://www.linkedin.com/company/fortrezofficial"
          >
            <IconsSocialsLinkedIn />
          </NuxtLink>
          <NuxtLink class="max-w-fit" to="https://t.me/FortrezNews">
            <IconsSocialsTelegram />
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup></script>
