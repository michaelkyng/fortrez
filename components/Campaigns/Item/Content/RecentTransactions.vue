<template>
  <div class="flex flex-col gap-y-8">
    <h3 :class="subHeading2">Recent Transactions</h3>
    <div class="flex flex-col gap-y-5">
      <div
        class="relative flex justify-center items-center overflow-hidden px-5 md:px-14 w-full lg:w-5/6"
      >
        <button
          @click="scrollLeft"
          class="group absolute left-2 active:outline outline-accent rounded-2xl hidden md:inline z-10"
        >
          <PhCaretLeft
            class="group-hover:text-accent w-6 h-6"
            :class="transition"
          />
        </button>
        <button
          @click="scrollRight"
          class="group absolute right-2 active:outline outline-accent rounded-2xl hidden md:inline z-10"
        >
          <PhCaretRight
            class="group-hover:text-accent w-6 h-6"
            :class="transition"
          />
        </button>

        <div
          ref="scrollContainer"
          class="menu-scroll flex justify-start items-center h-fit gap-10 md:gap-14 lg:gap-16 xl:gap-20 overflow-x-auto scroll-smooth"
        >
          <CampaignsItemCardUserTransaction
            v-for="donation in campaign.donations"
            :name="donation.donor"
            :amount="donation.amount"
            image=""
          />
        </div>
      </div>
      <div class="flex justify-end sm:justify-center">
        <Button
          to="#donation"
          class="my-2"
          name="More Transactions"
          :color="false"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>

const { containerWidth, subHeading, subHeading2, transition } =
  useTailwindConfig();
const scrollContainer = ref<HTMLDivElement | null>(null);
const scrollRight = () => {
  if (scrollContainer.value) {
    scrollContainer.value.scrollBy({ left: 200, behavior: "smooth" });
  }
};

const scrollLeft = () => {
  if (scrollContainer.value) {
    scrollContainer.value.scrollBy({ left: -200, behavior: "smooth" });
  }
};

const { campaign } = defineProps(["campaign"]);
</script>
