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
import { ref, onMounted } from "vue";

const props = defineProps<{
  digit: number;
  delay?: number;
}>();

const currentDigit = ref(0);

onMounted(() => {
  const interval = setInterval(() => {
    currentDigit.value = Math.floor(Math.random() * 10);
  }, 1250);

  setTimeout(
    () => {
      clearInterval(interval);
      currentDigit.value = props.digit;
    },
    1800 + (props.delay || 0)
  );
});
</script>

<style scoped></style>
