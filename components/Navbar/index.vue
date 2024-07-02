<template>
  <div class="fixed z-20 w-full py-2">
    <div
      class="hidden md:flex justify-center items-start gap-11 py-5 md:max-w-2xl lg:max-w-3xl xl:max-w-7xl mx-auto"
    >
      <NuxtLink to="/" :class="navLink" active-class="text-accent"
        >Home</NuxtLink
      >
      <NuxtLink to="/support" :class="navLink" active-class="text-accent"
        >Support Us</NuxtLink
      >
      <div class="relative w-16">
        <div
          class="absolute h-14 w-16 inset-0 flex items-start justify-center bg-white-bright rounded-full"
        >
          <NuxtLink to="/" class="flex grow justify-center h-full items-center"
            ><Logo
          /></NuxtLink>
        </div>
      </div>
      <NuxtLink to="/blog" :class="navLink" active-class="text-accent"
        >Blog</NuxtLink
      >
      <NuxtLink to="/projects" :class="navLink" active-class="text-accent"
        >Donate</NuxtLink
      >
    </div>

    <!-- Mobile View -->
    <div class="relative flex justify-center md:hidden px-5">
      <div class="relative w-full py-3.5">
        <div
          class="absolute top-0 mx-auto size-16 inset-0 flex items-center justify-between bg-white-bright rounded-full w-full"
        >
          <NuxtLink to="/" class="flex justify-center items-center h-full group"
            ><Logo class="w-10 group-hover:scale-105 group-active:scale-105"
          /></NuxtLink>

          <div class="z-10">
            <transition mode="out-in" name="buttonSwap">
              <button
                v-if="!menuToggled"
                class="outline-accent active:outline rounded-md outline-2 p-0.5 z-20"
                @click="menuToggled = !menuToggled"
              >
                <MenuAlt3Icon class="w-6 h-6" />
              </button>

              <button
                v-else
                class="outline-accent active:outline rounded-md outline-2 p-0.5 z-20"
                @click="menuToggled = !menuToggled"
              >
                <XIcon class="w-6 h-6 text-accent" />
              </button>
            </transition>
          </div>
        </div>
      </div>
    </div>

    <Transition mode="in-out" name="menu">
      <div
        v-if="menuToggled"
        class="absolute md:hidden h-screen bg-black/95 right-0 w-2/3 top-0 backdrop-blur-sm"
      >
        <div class="flex flex-col w-full py-20 text-right">
          <NuxtLink
            to="/"
            @click="menuToggled = !menuToggled"
            class="text-white-dim/80 border border-white-dim/5 px-5 py-2.5 active:text-accent"
            active-class="text-accent"
            >Home</NuxtLink
          >
          <NuxtLink
            to="/blueprint"
            @click="menuToggled = !menuToggled"
            class="text-white-dim/80 border border-white-dim/5 px-5 py-2.5 active:text-accent"
            active-class="text-accent"
            >BluePrint</NuxtLink
          >
          <NuxtLink
            to="/projects"
            @click="menuToggled = !menuToggled"
            class="text-white-dim/80 border border-white-dim/5 px-5 py-2.5 active:text-accent"
            active-class="text-accent"
            >Donate</NuxtLink
          >
          <NuxtLink
            to="/support"
            @click="menuToggled = !menuToggled"
            class="text-white-dim/80 border border-white-dim/5 px-5 py-2.5 active:text-accent"
            active-class="text-accent"
            >Support Us</NuxtLink
          >
          <NuxtLink
            to="/blog"
            @click="menuToggled = !menuToggled"
            class="text-white-dim/80 border border-white-dim/5 px-5 py-2.5 active:text-accent"
            active-class="text-accent"
            >Blog</NuxtLink
          >
          <NuxtLink
            to="/#proposal"
            @click="menuToggled = !menuToggled"
            class="text-white-dim/80 border border-white-dim/5 px-5 py-2.5 active:text-accent"
            active-class="text-accent"
            >Proposal</NuxtLink
          >
        </div>
      </div>
    </Transition>
  </div>
</template>

<script lang="ts" setup>
import { MenuAlt3Icon, XIcon } from "@heroicons/vue/solid";
const { navLink } = useTailwindConfig();
const menuToggled = ref(false);
</script>

<style>
.menu-enter-active {
  animation: slide-in 0.25s ease-in-out 0s 1 normal;
}

.menu-leave-active {
  animation: slide-out 0.25s ease-in-out 0s 1 normal none;
}

.buttonSwap-enter-active {
  animation: scale-small 0.25s ease 0s 1 normal none;
}

.buttonSwap-leave-active {
  animation: scale-large 0.25s ease 0s 1 normal none;
}

@keyframes slide-in {
  0% {
    transform: translateX(100%);
    transform-origin: right;
    opacity: 1;
  }

  100% {
    transform: translateX(0%);
    transform-origin: right;
    opacity: 1;
  }
}

@keyframes slide-out {
  0% {
    transform: translateX(0%);
    transform-origin: right;
    opacity: 1;
  }

  100% {
    transform: translateX(100%);
    transform-origin: right;
    opacity: 1;
  }
}

@keyframes scale-small {
  0% {
    transform: scale(0.2);
  }

  100% {
    transform: scale(1);
  }
}

@keyframes scale-large {
  0% {
    transform: scale(1);
  }

  100% {
    transform: scale(0.2);
  }
}
</style>
