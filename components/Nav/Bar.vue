<script lang="ts" setup>
import { routes } from "~/utils/routes";
import { PhList, PhX } from "@phosphor-icons/vue";
const menuToggled = ref(false);
</script>

<template>
  <header class="px-5">
    <nav
      class="fixed top-10 left-1/2 -translate-x-1/2 bg-white shadow-md sm:max-w-xl md:max-w-2xl h-fit backdrop-blur-md mx-auto z-50"
      :style="{
        borderRadius: menuToggled ? '1.5rem' : '9999px',
        transition: 'all 0.5s ease',
      }"
    >
      <div
        class="flex justify-center items-center z-20 h-full p-4 sm:px-6 md:px-12 w-full"
      >
        <div class="hidden sm:flex justify-between items-center gap-8 w-full">
          <NavLink
            v-for="(route, index) in routes"
            :key="route.name"
            :class="[
              index === 0
                ? 'order-1'
                : index === 1
                  ? 'order-2'
                  : index === 2
                    ? 'order-3'
                    : index === 3
                      ? 'order-4'
                      : '',
            ]"
            :item="route"
          />
          <NuxtLink
            to="/"
            class="order-2 mx-4"
            aria-label="Navigate to Home Page"
          >
            <img
              class="h-10 aspect-square"
              src="/images/Logo.svg"
              alt="Metropolitan Logo"
            />
          </NuxtLink>
        </div>

        <div class="inline sm:hidden z-10">
          <transition mode="out-in" name="buttonSwap">
            <button
              v-if="!menuToggled"
              class="outline-white active:outline rounded-md outline-2 p-0.5 z-20"
              @click="menuToggled = !menuToggled"
            >
              <PhList class="w-6 h-6 text-white" />
            </button>
            <button
              v-else
              class="outline-white active:outline rounded-md outline-2 p-0.5 z-20"
              @click="menuToggled = !menuToggled"
            >
              <PhX class="w-6 h-6 text-[#1C6220]" />
            </button>
          </transition>
        </div>
      </div>

      <!-- Mobile Nav -->

      <Transition mode="in-out" name="menu">
        <div v-if="menuToggled" :class="['relative lg:hidden  w-full p-4']">
          <div class="flex flex-col w-full pt-24 pb-10 text-right items-center">
            <NuxtLink
              to="/"
              @click="menuToggled = !menuToggled"
              class="text-sm sm:text-base border-y border-black/5 px-5 py-2.5 text-black active:text-[#1C6220] w-full"
              exact-active-class="text-[#1C6220]"
              >Home</NuxtLink
            >
            <NuxtLink
              to="/#about"
              @click="menuToggled = !menuToggled"
              class="text-sm sm:text-base border-y border-black/5 px-5 py-2.5 text-black active:text-[#1C6220] w-full"
              exact-active-class="text-[#1C6220]"
              >About</NuxtLink
            >
            <NuxtLink
              to="/#services"
              @click="menuToggled = !menuToggled"
              class="text-sm sm:text-base border-y border-black/5 px-5 py-2.5 text-black active:text-[#1C6220] w-full"
              exact-active-class="text-[#1C6220]"
              >Services</NuxtLink
            >
            <NuxtLink
              to="/#index"
              @click="menuToggled = !menuToggled"
              class="text-sm sm:text-base border-y border-black/5 px-5 py-2.5 text-black active:text-[#1C6220] w-full"
              exact-active-class="text-[#1C6220]"
              >Sustainability</NuxtLink
            >
            <NuxtLink
              to="/media-center"
              @click="menuToggled = !menuToggled"
              class="text-sm sm:text-base border-y border-black/5 px-5 py-2.5 text-black active:text-[#1C6220] w-full"
              exact-active-class="text-[#1C6220]"
              >Media Center</NuxtLink
            >
            <NuxtLink
              to="/blog"
              @click="menuToggled = !menuToggled"
              class="text-sm sm:text-base border-y border-black/5 px-5 py-2.5 text-black active:text-[#1C6220] w-full"
              exact-active-class="text-[#1C6220]"
              >Blog</NuxtLink
            >
            <NuxtLink
              to="/#contact"
              class="relative text-sm sm:text-base text-center w-fit lg:w-auto z-10 py-2.5 px-7 mt-5 font-medium font-main border-2 border-[#113912] hover:bg-[#1C6220] hover:border-[#1C6220] hover:text-white focus:bg-[#30a336] transition-all duration-200 before:absolute before:content-[''] before:top-0 before:left-0 before:right-0 before:bottom-0 focus:before:border-2 focus:text-white before:border-[#30a336] before:rounded-md before:-z-10 focus:before:-top-1.5 focus:before:-right-1.5 focus:before:-left-1.5 focus:before:-bottom-1.5"
              >Contact</NuxtLink
            >
          </div>
        </div>
      </Transition>
    </nav>
  </header>
</template>

<style lang="postcss" scoped>
.buttonSwap-enter-active {
  animation: scale-small 0.25s ease 0s 1 normal none;
}

.buttonSwap-leave-active {
  animation: scale-large 0.25s ease 0s 1 normal none;
}

@keyframes slide-in {
  0% {
    transform: translateY(-100%);
    transform-origin: top;
    opacity: 1;
  }

  100% {
    transform: translateY(0%);
    transform-origin: top;
    opacity: 1;
  }
}

@keyframes slide-out {
  0% {
    transform: translateY(0%);
    transform-origin: top;
    opacity: 1;
  }

  100% {
    transform: translateY(-100%);
    transform-origin: top;
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
