<template>
  <div
    ref="statsRef"
    class="relative my-20 bg-primary/80 bg-[url(/images/donation.jpg)] bg-cover bg-blend-multiply"
  >
    <div class="absolute top-0 left-0 size-full bg-[#0d0d0e]/95"></div>
    <div class="relative py-16 lg:py-28" :class="containerWidth">
      <div
        class="flex flex-col py-16 gap-5 mx-auto justify-center items-center text-center px-5 text-white"
      >
        <h1 class="text-3xl md:text-4xl font-bold">
          Helping Families and Projects in our Communities
        </h1>
        <p class="text-lg md:text-xl">Providing Essential Help and Support</p>
        <div
          class="relative flex flex-col lg:flex-row gap-10 justify-center items-center w-full p-5 sm:p-10 rounded-full mt-5"
        >
          <div
            v-for="stat in stats"
            class="flex flex-col justify-center items-center w-full gap-2 bg-[#000000] p-10 rounded-2xl max-w-96"
          >
            <div
              class="flex justify-center items-center font-space font-black w-fit text-4xl sm:text-5xl text-primary"
            >
              <template
                v-for="(char, index) in stat.value.toLocaleString().split('')"
                :key="index"
              >
                <Counter
                  v-if="/\d/.test(char)"
                  :digit="Number(char)"
                  :delay="index * 150"
                  :shouldAnimate="inView"
                />
                <span v-else>,</span>
              </template>
            </div>

            <p class="font-lato font-bold text-xl">{{ stat.title }}</p>
          </div>
        </div>
        <p class="text-xl md:text-2xl">
          Support our projects (
          <span class="text-primary font-medium"
            >Nourishing Vulnerable Children, Providing Maternal Support </span
          >)
        </p>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const statsRef = ref<HTMLElement | null>(null);
const inView = ref(false);
const { containerWidth } = useTailwindConfig();
const numberOfProjects = ref(35);
const numberOfDonor = ref(725);
const amoundDonated = ref(48600);
const stats = [
  {
    title: "Number of Projects",
    value: numberOfProjects.value,
  },
  {
    title: "Number of Donors",
    value: numberOfDonor.value,
  },
  {
    title: "Amount Donated",
    value: amoundDonated.value,
  },
];

onMounted(() => {
  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        inView.value = true;
        observer.disconnect(); // Remove if you want it to repeat on scroll
      }
    },
    {
      threshold: 0.3, // Adjust visibility threshold
    }
  );

  if (statsRef.value) observer.observe(statsRef.value);

  onUnmounted(() => observer.disconnect());
});
</script>
