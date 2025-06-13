<script lang="ts" setup>
import { routes } from "~/utils/routes";
import type { Link, subItems } from "~/types/type";
import { PhX } from "@phosphor-icons/vue";
const menuToggled = ref(false);
type NavItem = Link | subItems;
const filteredRoutes = computed((): NavItem[] => {
  return routes.flatMap((route): NavItem[] => {
    if (["normal", "button"].includes(route.state)) {
      return [route];
    }

    if (route.state === "subnavLink" && Array.isArray(route.subItems)) {
      return route.subItems as NavItem[];
    }

    return [];
  });
});

function isLink(route: Link | subItems): route is Link {
  return "state" in route;
}
</script>

<template>
  <header class="px-5">
    <nav
      class="fixed top-10 left-1/2 -translate-x-1/2 md:bg-white md:shadow-md sm:max-w-xl md:max-w-2xl h-auto mx-auto z-50"
      :style="{
        borderRadius: menuToggled ? '1.5rem' : '9999px',
        transition: 'all 0.5s ease',
      }"
    >
      <div
        class="flex justify-center items-center z-20 h-full px-4 sm:px-6 md:px-12 w-full"
      >
        <div class="hidden md:flex justify-between items-center gap-8 w-full">
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
            class="order-2 mx-4 py-4 size-fit shrink-0"
            aria-label="Navigate to Home Page"
          >
            <img
              class="h-10 aspect-square"
              src="/images/Logo.svg"
              alt="Metropolitan Logo"
            />
          </NuxtLink>
        </div>

        <div
          class="flex justify-center items-center md:hidden z-10 bg-white shadow-md size-14 rounded-full"
        >
          <transition mode="out-in" name="buttonSwap">
            <button
              v-if="!menuToggled"
              @click="menuToggled = !menuToggled"
              class="order-2 size-fit p-2.5 shrink-0 cursor-pointer"
              aria-label="Navigate to Home Page"
            >
              <img
                class="size-full aspect-square"
                src="/images/Logo.svg"
                alt="Metropolitan Logo"
              />
            </button>

            <button
              v-else
              class="size-fit p-2.5 shrink-0 cursor-pointer"
              @click="menuToggled = !menuToggled"
            >
              <PhX class="w-6 h-6 text-accent active:text-primary m-auto" />
            </button>
          </transition>
        </div>
      </div>

      <!-- Mobile Nav -->

      <Transition mode="in-out" name="nav-menu">
        <div
          v-if="menuToggled"
          class="lg:hidden w-full bg-secondary mt-2.5 min-w-xs rounded-2xl"
        >
          <div
            class="flex flex-col w-full py-10 text-right items-center divide-y divide-accent/20"
          >
            <template v-for="route in filteredRoutes" :key="route.name">
              <NuxtLink
                v-if="isLink(route)"
                :to="
                  route.state === 'normal' || route.state === 'button'
                    ? route.path
                    : ''
                "
                @click="menuToggled = !menuToggled"
                :class="[
                  'text-sm sm:text-base px-5 py-2.5 text-accent ',
                  route.state === 'normal'
                    ? 'hover:text-primary active:text-primary w-full text-center'
                    : 'rounded-full bg-primary mt-5 font-semibold cursor-pointer',
                ]"
                exact-active-class="text-primary"
              >
                {{ route.name }}
              </NuxtLink>

              <NuxtLink
                v-else
                :to="route.path"
                @click="menuToggled = !menuToggled"
                class="text-sm sm:text-base px-5 py-2.5 text-accent hover:text-primary active:text-primary w-full text-center"
                exact-active-class="text-primary"
              >
                {{ route.name }}
              </NuxtLink>
            </template>
          </div>
        </div>
      </Transition>
    </nav>
  </header>
</template>

<style lang="postcss" scoped>
.nav-menu-enter-active,
.nav-menu-leave-active {
  overflow: hidden;
}

.nav-menu-enter-active {
  animation: slide-in 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

.nav-menu-leave-active {
  animation: slide-out 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

@keyframes slide-in {
  0% {
    height: 0;
    opacity: 1;
  }
  100% {
    height: 304px;
    opacity: 1;
  }
}

@keyframes slide-out {
  0% {
    height: 304px;
    opacity: 1;
  }
  100% {
    height: 0;
    opacity: 1;
  }
}

.buttonSwap-enter-active {
  animation: scale-small 0.25s ease 0s 1 normal none;
}

.buttonSwap-leave-active {
  animation: scale-large 0.25s ease 0s 1 normal none;
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
