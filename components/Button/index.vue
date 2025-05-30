<script lang="ts" setup>
import type { PropType } from "vue";
import { PhArrowRight } from "@phosphor-icons/vue";
defineProps({
  name: {
    type: String,
    required: true,
  },
  variant: {
    type: String as PropType<"primary" | "secondary">,
    default: "primary",
  },
  to: {
    type: String,
    default: "/",
  },
});
</script>

<template>
  <div class="size-fit">
    <NuxtLink
      :to="to"
      class="button flex gap-2.5 items-center py-1.5 pl-3.5 pr-1.5 md:py-2 md:pl-5 md:pr-2 border rounded-full transition-all duration-300"
      :class="
        variant === 'secondary'
          ? 'bg-gray-50 border-gray-200 button-secondary'
          : 'bg-primary border-primary-dark button-primary'
      "
    >
      <span class="font-semibold text-base md:text-lg text-shadow-md">{{
        name
      }}</span>
      <div
        class="p-2 md:p-3 rounded-full shadow-md"
        :class="variant === 'secondary' ? 'bg-accent' : 'bg-secondary'"
      >
        <PhArrowRight
          class="size-3.5 md:size-5"
          :class="variant === 'secondary' ? 'text-secondary' : 'text-accent'"
        />
      </div>
    </NuxtLink>
  </div>
</template>

<style>
/* Primary variant shadows */
.button-primary {
  box-shadow:
    0 0 3px 3px hsla(45, 100%, 55%, 0.15),
    inset 0 -3px 2px 0px hsla(45, 100%, 30%, 0.5),
    inset 0 0px 0px 3px hsla(45, 100%, 65%, 1);
}

.button-primary:hover {
  box-shadow:
    0 0 2px 4px hsla(45, 100%, 55%, 0.1),
    inset 0 -2.5px 4px 0px hsla(45, 100%, 30%, 0.3),
    inset 0 0px 0px 1.5px hsla(45, 100%, 65%, 0.8);
}

.button-primary:active {
  box-shadow:
    0 0 2px 4px hsla(45, 100%, 55%, 0.15),
    inset 0 0px 0px 0px hsla(45, 100%, 25%, 0.7),
    inset 0 0px 0px 0px hsla(45, 100%, 70%, 1);
}

.button-secondary {
  box-shadow:
    0 0 1.5px 3px hsla(0, 0%, 75%, 0.1),
    inset 0 -3px 2px 0px hsla(0, 0%, 40%, 0.5),
    inset 0 0px 0px 3px hsla(0, 0%, 100%, 1);
}

.button-secondary:hover {
  box-shadow:
    0 0 2px 4px hsla(0, 0%, 75%, 0.1),
    inset 0 -2.5px 4px 0px hsla(0, 0%, 40%, 0.3),
    inset 0 0px 0px 1.5px hsla(0, 0%, 100%, 0.8);
}

.button-secondary:active {
  box-shadow:
    0 0 2px 4px hsla(0, 0%, 75%, 0.15),
    inset 0 0px 0px 0px hsla(0, 0%, 30%, 0.7),
    inset 0 0px 0px 0px hsla(0, 0%, 90%, 1);
}
</style>
