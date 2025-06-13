<template>
  <div class="relative z-0">
    <DesignShapesWhiteCircle class="absolute right-0 top-0 -z-10" />
    <div class="z-10">
      <!-- First Row -->
      <div class="px-5 space-y-14 overflow-hidden" :class="containerWidth">
        <h2 :class="subHeading">Overview</h2>
        <div
          class="flex flex-wrap lg:flex-nowrap gap-x-10 gap-y-14 lg:gap-x-14 xl:gap-x-20"
        >
          <ProjectsItemContentSummaryProblemFrame
            class="basis-full lg:basis-1/2"
            name="Summary"
            :choice="true"
            :description="project.description"
            :problem="project.problem"
          />
          <ProjectsItemContentStats
            class="basis-full lg:basis-1/2"
            :percentVerifiedFunded="
              Math.round((project.verifiedFunded / project.funded) * 100)
            "
            :funded="project.funded"
            :verifiedFunded="project.verifiedFunded"
            :donors="project.donors"
          />
        </div>

        <!-- Second Row -->
        <div
          class="flex flex-wrap-reverse lg:flex-nowrap gap-x-10 lg:gap-x-14 xl:gap-x-20 gap-y-14 w-full"
        >
          <ProjectsItemContentSummaryProblemFrame
            class="basis-full lg:basis-1/2 shrink-0"
            name="Problems to be Addressed"
            :choice="false"
            :description="project.description"
            :problem="project.problem"
          />

          <div class="flex flex-col basis-full lg:basis-1/2 w-1/2">
            <ProjectsItemContentRecentTransactions :project="project" />
          </div>
        </div>

        <!-- Solutions -->
        <div class="relative">
          <ProjectsItemContentSolutions :solution="project.solutions" />
        </div>

        <!-- Donations -->
        <div id="donation">
          <ProjectsItemContentDonation :project="project" :entries="entries" />
        </div>

        <!-- Other Projects -->
        <div class="flex flex-col gap-y-4">
          <HomeContentOurProjects title="Other Projects" :font="subHeading2" />
          <div class="flex justify-end">
            <ButtonLink :to="`/projects`" class="my-2" name="View More" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const { containerWidth, subHeading, subHeading2 } = useTailwindConfig();

const project = ref({
  id: "",
  title: "Nourishing vulnerable children",
  description:
    "Providing both food and care for orphans and other vulnerable kids out there is super important. There are so many vulnerable kids out there who really need our support. It's heartwarming to think about the positive impact we can make in their lives. Let's spread love and kindness together!The COVID19 crisis has deeply impacted southern Africa and particularly rural communities dependent on wildlife tourism for their livelihoods. Already vulnerable communities are now sliding into deeper poverty and hunger. You can help to provide food parcels to ensure that 100 families in the community next to our wildlife reserve, are able to eat for the month of October as part of our ongoing Hunger Relief Campaign. Just $35 is all it takes to buy a big parcel of food for a family for a month. Your support also keeps wildlife safe, by ensuring hungry people do not have to resort to bushmeat poaching to keep their families fed. ",
  image: "/images/projectImage1.png",
  problem:
    "The COVID19 crisis has deeply impacted the vulnerable communities we work with who live next door to our two wildlife reserves in KwaZulu-Natal South Africa. The economic impacts of South Africa’s strict lockdown are being felt on the ground in our rural community, posing a threat to both people and the protection of wildlife. Many people have lost their jobs and incomes, driving already poor families into deeper poverty and hunger. Community members who were working away from home in the city have returned for the lock-down, putting more pressure on families and their resources. Children in particular are at risk as many depend on a daily meal from school, which has been closed.",
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

const entries = project.value.transactions.slice(
  project.value.transactions.length - 11,
  project.value.transactions.length - 1
);
</script>
