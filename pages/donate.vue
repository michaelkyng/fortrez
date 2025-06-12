<script lang="ts" setup>
import { PhCopy } from "@phosphor-icons/vue";

const acctNumber = ref("8100661130");

const copyText = async () => {
  try {
    await navigator.clipboard.writeText(acctNumber.value);
    acctNumber.value = "copied";
    setTimeout(() => {
      acctNumber.value = "8100661130";
    }, 3000);
  } catch (err) {
    console.error("Failed to copy:", err);
  }
};
</script>
<template>
  <div clas="font-lato relative z-10">
    <DesignShapesStar class="absolute z-0 top-0 opacity-20 right-0" />
    <div
      class="flex justify-center items-center min-h-screen px-5 md:px-10 bg-gradient-to-br from-yellow-100 to-yellow-700"
    >
      <div
        class="h-[100%] text-white w-[100%] max-w-md md:max-w-xl text-center"
      >
        <!-- our Logo -->
        <!-- <div class="mb-4 flex justify-center">
        <img src="../public/yellow.svg" alt="Church Logo" class="h-10" />
      </div> -->

        <!-- Title -->
        <h2 class="text-3xl font-bold tracking-wider mb-1 font-lato">
          Donate Now
        </h2>
        <p class="text-sm uppercase mb-6 tracking-widest text-white/70">
          Donate Via
        </p>

        <!-- Card Content -->
        <div
          class="bg-white/10 backdrop-blur-3xl md:py-10 py-4 px-4 rounded-2xl border border-white/80"
        >
          <!-- Bank Section -->
          <div class="flex flex-col gap-5">
            <div class="flex items-center justify-between mb-2">
              <p class="text-[12px] mb-1 text-white/70 text-left md:text-base">
                Send your donations to:
              </p>
              <div
                class="flex flex-col sm:flex-row items-center gap-0 sm:gap-2"
              >
                <span class="order-last sm:order-0 text-white text-right"
                  >Moniepoint MFB</span
                >
                <img
                  src="/moniepoint_logo.png"
                  alt="Moniepoint MFB"
                  class="h-8 md:h-12 order-first sm:order-0"
                />
              </div>
            </div>

            <!-- Account Number -->
            <div class="flex items-center justify-between">
              <div class="self-end-safe">
                <img src="/images/Logo.svg" class="h-10 md:h-16" alt="" />
              </div>
              <div class="flex flex-col gap-2.5 pt-4">
                <div class="text-right">
                  <span>Account Number:</span>
                  <div class="flex justify-end items-center gap-2">
                    <PhCopy
                      weight="duotone"
                      class="peer size-8 cursor-pointer"
                      @click="copyText"
                      aria-label="copy"
                    />
                    <p
                      class="text-3xl font-bold tracking-wide mb-2 md:text-4xl cursor-pointer select-all hover:text-secondary peer-hover:text-secondary transition-all duration-300"
                      @click="copyText"
                    >
                      {{ acctNumber }}
                    </p>
                  </div>
                </div>

                <!-- Account Name -->
                <div class="text-right mb-4">
                  <span>Account Name:</span>
                  <p class="text-sm md:text-base text-white/80">
                    Fortrez Empowerment and Care Foundation
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
