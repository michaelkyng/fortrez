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

        <NuxtLink class="max-w-fit" to="/projects">
          <FooterNavLinks title="Projects" />
        </NuxtLink>
      </div>
    </div>

    <div class="flex flex-col gap-2 sm:gap-4 flex-1 size-fit">
      <p class="text-black font-bold text-nowrap">Other</p>

      <div class="flex flex-col gap-1 sm:gap-3">
        <NuxtLink class="max-w-fit" to="/support">
          <FooterNavLinks title="Support Us" />
        </NuxtLink>

        <NuxtLink class="max-w-fit" to="/blog">
          <FooterNavLinks title="Blog" />
        </NuxtLink>
      </div>
    </div>

    <div class="flex flex-col gap-2 sm:gap-4 flex-1 size-fit">
      <p class="text-black font-bold text-nowrap">Resources</p>

      <div class="flex flex-col gap-1 sm:gap-3">
        <NuxtLink class="max-w-fit" to="/blueprint">
          <FooterNavLinks title="BluePrint" />
        </NuxtLink>

        <NuxtLink class="max-w-fit" to="/comingsoon">
          <FooterNavLinks title="FAQ" />
        </NuxtLink>

        <!-- <NuxtLink class="max-w-fit" to="/comingsoon">
          <FooterNavLinks title="Terms of Use" />
        </NuxtLink>

        <NuxtLink class="max-w-fit" to="/comingsoon">
          <FooterNavLinks title="Privacy Policy" />
        </NuxtLink> -->
      </div>
    </div>

    <div class="flex flex-col gap-2 sm:gap-4 flex-1 size-fit">
      <p class="text-black font-bold text-nowrap">Follow</p>

      <div class="flex flex-col gap-4 sm:gap-6">
        <div class="flex gap-6">
          <NuxtLink class="max-w-fit" to="https://x.com/fortrez_?s=21">
            <IconsSocialsX />
          </NuxtLink>
          <NuxtLink
            class="max-w-fit"
            to="https://www.instagram.com/p/DKKgfTlMnjK/?igsh=OGR6eXZudGdvazNo"
          >
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
