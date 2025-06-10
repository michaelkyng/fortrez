<template>
  <div class="w-6 sm:w-8 h-10 overflow-hidden relative text-center">
    <div
      class="absolute top-0 left-0 right-0 transition-transform ease-out duration-1000"
      :style="{ transform: `translateY(-${currentDigit * 2.5}rem)` }"
    >
      <div v-for="n in 10" :key="n" class="h-10 leading-10 overflow-hidden">
        {{ n - 1 }}
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  digit: number;
  delay?: number;
  shouldAnimate: boolean;
}>();

const currentDigit = ref(0);

watch(
  () => props.shouldAnimate,
  (animate) => {
    if (!animate) return;

    const interval = setInterval(() => {
      currentDigit.value = Math.floor(Math.random() * 10);
    }, 125); // Speed of scramble

    setTimeout(
      () => {
        clearInterval(interval);
        currentDigit.value = props.digit;
      },
      800 + (props.delay || 0)
    ); // Duration before locking final number
  },
  { immediate: true }
);
</script>

<style scoped></style>
