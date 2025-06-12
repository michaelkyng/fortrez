<template>
  <div class="flex flex-col gap-10">
    <div class="flex flex-col gap-4">
      <Logo class="w-16 h-16 sm:w-20 sm:h-20" />
      <p class="text-accent/60 md:pl-2 text-sm md:text-base">
        Fortrez is a blockchain-based charitable donation platform designed to
        enhance transparency, trust, and security. By recording every donation
        transaction on a decentralized, verifiable ledger, Fortrez allows donors
        and recipients to track funds and ensure they're used as intended—while
        reducing the risk of fraud and corruption
      </p>
    </div>

    <div class="flex flex-col gap-4 md:pl-2">
      <p class="text-sm">Subscribe to receive our latest news and updates.</p>

      <form @submit.prevent="handleEmailWaitlist">
        <div class="relative">
          <input
            v-model="email"
            type="email"
            name="email"
            class="relative text-sm outline-none bg-white py-2.5 px-4 rounded-3xl w-full"
            placeholder="Email address"
          />
          <UButton
            type="submit"
            class="absolute text-accent inset-y-0 rounded-3xl right-0 px-3 font-semibold cursor-pointer"
            :class="transition"
            :loading="isLoading"
          >
            Subscribe
          </UButton>
        </div>
      </form>

      <span
        v-if="emailSent"
        class="text-yellow-100 bg-accent/60 px-2 py-1 sm:py-2 text-sm sm:text-base"
        >You have Subscribed to our Newsletter</span
      >
      <span
        v-if="errorOccurrence"
        class="text-red-500/80 bg-accent/60 px-2 py-1 sm:py-2 text-sm sm:text-base"
        >An Error Occured, Please try again!</span
      >
    </div>
  </div>
</template>

<script lang="ts" setup>
const { transition } = useTailwindConfig();
const { addToWaitlist } = useWaitlist();

const email = ref("");
const isLoading = ref(false);
const emailSent = ref(false);
const errorOccurrence = ref(false);

const handleEmailWaitlist = async () => {
  emailSent.value = false;
  errorOccurrence.value = false;
  if (!email.value) return;
  isLoading.value = true;

  const response = await addToWaitlist(email.value);
  if (response) {
    emailSent.value = true;
    isLoading.value = false;
    setTimeout(() => {
      emailSent.value = false;
    }, 3000);
  } else {
    errorOccurrence.value = true;
    isLoading.value = false;
    setTimeout(() => {
      errorOccurrence.value = false;
    }, 3000);
  }
};
</script>
