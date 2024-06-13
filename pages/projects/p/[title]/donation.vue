<template>
  <div class="relative bg-gradient-to-b from-white-bright to-white-dim h-fit">
    <div class="relative pt-20 z-0 px-5">
      <div
        class="relative py-14 flex flex-col items-start justify-center gap-y-14"
        :class="containerWidth"
      >
        <div class="flex flex-wrap-reverse justify-between w-full gap-y-5">
          <h3 class="!text-left" :class="subHeading">{{ project.title }}</h3>
          <ButtonLink
            :to="`/projects`"
            name="All Projects"
            class="flex flex-col justify-center z-20 ml-auto"
          >
            <ArrowSmLeftIcon class="w-4 h-4 order-first" />
          </ButtonLink>
        </div>
        <ProjectsItemContentDonation
          @change="refresh"
          :project="project"
          :entries="entries"
          :full-view="true"
        />

        <div class="flex justify-between w-full">
          <ButtonLink
            :to="`/projects/${project.title}`"
            name="Project Oveview"
            class="px-2.5"
          >
            <ArrowSmLeftIcon class="w-4 h-4 order-first" />
          </ButtonLink>

          <ButtonLink
            :to="`/projects/${project.title}/donate`"
            class="px-2.5"
            name="Donate Now"
          >
            <ArrowSmRightIcon class="w-4 h-4" />
          </ButtonLink>
        </div>
      </div>
    </div>

    <div class="relative">
      <Footer />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ArrowSmLeftIcon, ArrowSmRightIcon } from "@heroicons/vue/solid";
const { containerWidth, subHeading, subHeading2 } = useTailwindConfig();

const perPage = 10;
const start = ref(0);
const end = ref(start.value + Number(perPage));

const project = ref({
  id: "",
  title: "Nourishing vulnerable children",
  description:
    "Providing both food and care for orphans and other vulnerable kids out there is super important. There are so many vulnerable kids out there who really need our support. It's heartwarming to think about the positive impact we can make in their lives. Let's spread love and kindness together!The COVID19 crisis has deeply impacted southern Africa and particularly rural communities dependent on wildlife tourism for their livelihoods. Already vulnerable communities are now sliding into deeper poverty and hunger. You can help to provide food parcels to ensure that 100 families in the community next to our wildlife reserve, are able to eat for the month of October as part of our ongoing Hunger Relief Campaign. Just $35 is all it takes to buy a big parcel of food for a family for a month. Your support also keeps wildlife safe, by ensuring hungry people do not have to resort to bushmeat poaching to keep their families fed. ",
  image: "/images/projectImage1.png",
  problem:
    "The COVID19 crisis has deeply impacted the vulnerable communities we work with who live next door to our two wildlife reserves in KwaZulu-Natal South Africa. The economic impacts of South Africa's strict lockdown are being felt on the ground in our rural community, posing a threat to both people and the protection of wildlife. Many people have lost their jobs and incomes, driving already poor families into deeper poverty and hunger. Community members who were working away from home in the city have returned for the lock-down, putting more pressure on families and their resources. Children in particular are at risk as many depend on a daily meal from school, which has been closed.",
  solutions: [
    "As part of Wild Tomorrow Fund's Community Support program, we quickly sprang into action to organize an emergency hunger relief program. We raised enough funds for our first delivery in May for 63 families in need. ",
    "Our goal is to raise additional funds to provide at least 100 families with emergency food parcels each month. These parcels will contain essentials such as rice, vegetables, oil, and canned fish and will keep families fed for a month. We are working directly with the community's traditional leadership (the Nduna) to help identify the neediest families. Any funds raised above our goal will enable us to extend the reach of the program.",
    "Each parcel included a note from Wild Tomorrow fund with a Zulu saying 'Umuntu ngumuntu ngabuntu' which translates to 'A person is a person because of people', a message of solidarity and our shared humanity in this difficult time.",
  ],
  completed: false,
  donors: 23,
  funded: 650000.77,
  verifiedFunded: 500000.54,
  target: 2000000,
  transactions: [
    {
      id: "",
      userId: "",
      donor: "John Doe",
      comment:
        "Looking forward to seeing the progress,Looking forward to seeing the progress",
      amount: 50000,
      currency: "NGN-Naira",
      date: "09:45, Jan 15th, 2022",
    },
    {
      id: "",
      userId: "",
      donor: "Sophia Queen",
      comment: "Can't wait",
      amount: 150000,
      currency: "NGN-Naira",
      date: "12:01, Jan 15th, 2022",
    },
    {
      id: "",
      userId: "",
      donor: "Lillian Shaw",
      comment: "Looking forward to seeing the progress",
      amount: 250000,
      currency: "NGN-Naira",
      date: "14:20, Jan 15th, 2022",
    },
    {
      id: "",
      userId: "",
      donor: "Lillian Shaw",
      comment: "Looking forward to seeing the progress",
      amount: 250000,
      currency: "NGN-Naira",
      date: "14:20, Jan 15th, 2022",
    },
    {
      id: "",
      userId: "",
      donor: "Lillian Shaw",
      comment: "Looking forward to seeing the progress",
      amount: 250000,
      currency: "NGN-Naira",
      date: "14:20, Jan 15th, 2022",
    },
    {
      id: "",
      userId: "",
      donor: "Lillian Shaw",
      comment: "Looking forward to seeing the progress",
      amount: 250000,
      currency: "NGN-Naira",
      date: "14:20, Jan 15th, 2022",
    },
    {
      id: "",
      userId: "",
      donor: "Lillian Shaw",
      comment: "Looking forward to seeing the progress",
      amount: 250000,
      currency: "NGN-Naira",
      date: "14:20, Jan 15th, 2022",
    },
    {
      id: "",
      userId: "",
      donor: "John Doe",
      comment:
        "Looking forward to seeing the progress,Looking forward to seeing the progress",
      amount: 50000,
      currency: "NGN-Naira",
      date: "09:45, Jan 15th, 2022",
    },
    {
      id: "",
      userId: "",
      donor: "Sophia Queen",
      comment: "Can't wait",
      amount: 150000,
      currency: "NGN-Naira",
      date: "12:01, Jan 15th, 2022",
    },
    {
      id: "",
      userId: "",
      donor: "Lillian Shaw",
      comment: "Looking forward to seeing the progress",
      amount: 250000,
      currency: "NGN-Naira",
      date: "14:20, Jan 15th, 2022",
    },
    {
      id: "",
      userId: "",
      donor: "Lillian Shaw",
      comment: "Looking forward to seeing the progress",
      amount: 250000,
      currency: "NGN-Naira",
      date: "14:20, Jan 15th, 2022",
    },
    {
      id: "",
      userId: "",
      donor: "Lillian Shaw",
      comment: "Looking forward to seeing the progress",
      amount: 250000,
      currency: "NGN-Naira",
      date: "14:20, Jan 15th, 2022",
    },
    {
      id: "",
      userId: "",
      donor: "Lillian Shaw",
      comment: "Looking forward to seeing the progress",
      amount: 250000,
      currency: "NGN-Naira",
      date: "14:20, Jan 15th, 2022",
    },
    {
      id: "",
      userId: "",
      donor: "Lillian Shaw",
      comment: "Looking forward to seeing the progress",
      amount: 250000,
      currency: "NGN-Naira",
      date: "14:20, Jan 15th, 2022",
    },
    {
      id: "",
      userId: "",
      donor: "John Doe",
      comment:
        "Looking forward to seeing the progress,Looking forward to seeing the progress",
      amount: 50000,
      currency: "NGN-Naira",
      date: "09:45, Jan 15th, 2022",
    },
    {
      id: "",
      userId: "",
      donor: "Sophia Queen",
      comment: "Can't wait",
      amount: 150000,
      currency: "NGN-Naira",
      date: "12:01, Jan 15th, 2022",
    },
    {
      id: "",
      userId: "",
      donor: "Lillian Shaw",
      comment: "Looking forward to seeing the progress",
      amount: 250000,
      currency: "NGN-Naira",
      date: "14:20, Jan 15th, 2022",
    },
    {
      id: "",
      userId: "",
      donor: "Lillian Shaw",
      comment: "Looking forward to seeing the progress",
      amount: 250000,
      currency: "NGN-Naira",
      date: "14:20, Jan 15th, 2022",
    },
    {
      id: "",
      userId: "",
      donor: "Lillian Shaw",
      comment: "Looking forward to seeing the progress",
      amount: 250000,
      currency: "NGN-Naira",
      date: "14:20, Jan 15th, 2022",
    },
    {
      id: "",
      userId: "",
      donor: "Lillian Shaw",
      comment: "Looking forward to seeing the progress",
      amount: 250000,
      currency: "NGN-Naira",
      date: "14:20, Jan 15th, 2022",
    },
    {
      id: "",
      userId: "",
      donor: "Lillian Shaw",
      comment: "Looking forward to seeing the progress",
      amount: 250000,
      currency: "NGN-Naira",
      date: "14:20, Jan 15th, 2022",
    },
    {
      id: "",
      userId: "",
      donor: "John Doe",
      comment:
        "Looking forward to seeing the progress,Looking forward to seeing the progress",
      amount: 50000,
      currency: "NGN-Naira",
      date: "09:45, Jan 15th, 2022",
    },
    {
      id: "",
      userId: "",
      donor: "Sophia Queen",
      comment: "Can't wait",
      amount: 150000,
      currency: "NGN-Naira",
      date: "12:01, Jan 15th, 2022",
    },
    {
      id: "",
      userId: "",
      donor: "Lillian Shaw",
      comment: "Looking forward to seeing the progress",
      amount: 250000,
      currency: "NGN-Naira",
      date: "14:20, Jan 15th, 2022",
    },
    {
      id: "",
      userId: "",
      donor: "Lillian Shaw",
      comment: "Looking forward to seeing the progress",
      amount: 250000,
      currency: "NGN-Naira",
      date: "14:20, Jan 15th, 2022",
    },
    {
      id: "",
      userId: "",
      donor: "Lillian Shaw",
      comment: "Looking forward to seeing the progress",
      amount: 250000,
      currency: "NGN-Naira",
      date: "14:20, Jan 15th, 2022",
    },
    {
      id: "",
      userId: "",
      donor: "Lillian Shaw",
      comment: "Looking forward to seeing the progress",
      amount: 250000,
      currency: "NGN-Naira",
      date: "14:20, Jan 15th, 2022",
    },
    {
      id: "",
      userId: "",
      donor: "Lillian Shaw",
      comment: "Looking forward to seeing the progress",
      amount: 250000,
      currency: "NGN-Naira",
      date: "14:20, Jan 15th, 2022",
    },
  ],
});
const entries = ref(project.value.transactions.slice(start.value, end.value));

async function refresh(number: number) {
  start.value = (Number(number) - 1) * Number(perPage);
  end.value = start.value + Number(perPage);
  entries.value = project.value.transactions.slice(start.value, end.value);
}
</script>
