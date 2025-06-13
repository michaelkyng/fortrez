<script lang="ts" setup>
import { PhCaretDown } from "@phosphor-icons/vue";
import type { PropType } from "vue";
import type { Link } from "~/types/type";
const { navLinkStyle } = useTailwindConfig();
defineProps({
  item: {
    type: Object as PropType<Link>,
    required: true,
  },
});
</script>

<template>
  <span class="group relative">
    <button
      :class="
        item.state === 'button'
          ? 'relative z-10 py-2.5 px-7 font-medium bg-primary hover:bg-black text-black hover:text-white cursor-pointer  rounded-full transition duration-300'
          : navLinkStyle
      "
    >
      <span v-if="item.state === 'normal'">
        <NuxtLink :to="item.path" class="py-4">
          {{ item.name }}
        </NuxtLink>
      </span>

      <span v-else-if="item.state === 'subnavLink'">
        <span class="flex items-center gap-2 py-4 cursor-pointer">
          {{ item.name }} <PhCaretDown class="size-4"
        /></span>
        <div
          class="absolute pt-16 left-1/2 -translate-x-1/2 top-0 invisible opacity-0 group-hover:visible group-hover:opacity-100 min-w-44 w-fit gap-2.5 py-8 px-4 z-20 transition-all duration-300 overflow-clip"
        >
          <div
            class="flex flex-col bg-white shadow-md gap-4 py-4 rounded-b-2xl"
          >
            <NuxtLink
              v-for="subLink in item.subItems"
              :to="subLink.path"
              class="py-2 px-5 text-accent hover:text-primary/60 transition-colors"
            >
              {{ subLink.name }}
            </NuxtLink>
          </div>
        </div>
      </span>

      <span v-else-if="item.state === 'button'">
        <NuxtLink :to="item.path" class="py-4">
          {{ item.name }}
        </NuxtLink>
      </span>
    </button>
  </span>
</template>
