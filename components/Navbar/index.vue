<template>
    <div class="bg-white fixed z-20 w-full bg-white-bright py-2">
        <div class="hidden md:flex justify-center items-start gap-11 py-5 md:max-w-2xl lg:max-w-3xl xl:max-w-7xl mx-auto">
                <NuxtLink to="/" :class="navLink">Home</NuxtLink>
                <NuxtLink to="/support" :class="navLink">Support Us</NuxtLink>
                <div class="relative w-16">
                    <div class="absolute h-14 w-16 inset-0 flex items-start justify-center bg-white-bright rounded-full">
                        <NuxtLink to="/" class="flex grow justify-center h-full items-center"><Logo/></NuxtLink>
                    </div>
                </div>
                <NuxtLink to="/blog" :class="navLink">Blog</NuxtLink>
                <NuxtLink to="/projects" :class="navLink">Donate</NuxtLink>
        </div>

        <!-- Mobile View -->
        <div class="relative flex justify-center md:hidden p-4">
            <div class="relative w-full py-3.5">
                <div class="absolute top-0 mx-auto h-14 w-16 inset-0 flex items-start justify-center bg-white-bright rounded-full">
                    <NuxtLink to="/" class="flex grow justify-center h-full"><Logo/></NuxtLink>
                </div>

                <div class="absolute right-0 top-0 z-10">
                  <transition mode="out-in" name="buttonSwap">
                    <button v-if="!menuToggled" class="outline-accent active:outline rounded-md outline-2 p-0.5 z-20"
                    @click="menuToggled = !menuToggled">
                        <MenuAlt3Icon class="w-6 h-6"/>
                    </button>
                  
                    <button v-else class="outline-accent active:outline rounded-md outline-2 p-0.5 z-20"
                    @click="menuToggled = !menuToggled">
                        <XIcon class="w-6 h-6 text-accent"/>
                  
                    </button>
                  </transition>
                </div>
            </div>
            
    
        </div>

    
        <Transition mode="in-out" name="menu">
            <div v-if="menuToggled" class="absolute h-screen bg-black/95 right-0 w-2/3 top-0 backdrop-blur-sm">
                <div class="flex flex-col w-full py-20 text-right">
                    <NuxtLink to="/" class="text-white-dim/80 border border-white-dim/5 px-5 py-2.5 active:text-accent">Home</NuxtLink>
                    <NuxtLink to="/support" class="text-white-dim/80 border border-white-dim/5 px-5 py-2.5 active:text-accent">Support Us</NuxtLink>
                    <NuxtLink to="/blog" class="text-white-dim/80 border border-white-dim/5 px-5 py-2.5 active:text-accent">Blog</NuxtLink>
                    <NuxtLink to="/projects" class="text-white-dim/80 border border-white-dim/5 px-5 py-2.5 active:text-accent">Donate</NuxtLink>
                    <NuxtLink to="/whitepaper" class="text-white-dim/80 border border-white-dim/5 px-5 py-2.5 active:text-accent">White Paper</NuxtLink>
                    <NuxtLink to="/" class="text-white-dim/80 border border-white-dim/5 px-5 py-2.5 active:text-accent">Proposal</NuxtLink>
                </div>
            </div>
        </Transition>
    

    </div>

</template>

<script lang="ts" setup>

import {MenuAlt3Icon, XIcon} from "@heroicons/vue/solid";
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