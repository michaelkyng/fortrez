<script lang="ts" setup>
import { PhCaretDown } from "@phosphor-icons/vue";
import type { PropType } from "vue";
import type { Link } from "~/types/type";
const { navLinkStyle } = useTailwindConfig();
const props = defineProps({
  item: {
    type: Object as PropType<Link>,
    required: true,
  },
});
</script>

<template>
  <span class="group relative">
    <NuxtLink
      :to="item.path"
      :class="
        item.state === 'button'
          ? 'py-2.5 px-5 font-medium bg-primary hover:bg-accent text-black hover:text-white rounded-full transition duration-300 '
          : navLinkStyle
      "
    >
      {{ item.name }}
    </NuxtLink>
  </span>
</template>
