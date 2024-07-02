<template>
  <div
    class="bg-fixed bg-cover bg-right-bottom"
    style="background-image: url(&quot;/images/blueprintBackground.png&quot;)"
  >
    <div class="relative flex flex-col h-[90vh] justify-center">
      <div :class="containerWidth" class="flex flex-col gap-y-10">
        <p
          class="font-semibold text-4xl sm:text-5xl lg:text-6xl px-2.5 leading-10 w-full lg:w-3/4 tracking-wide md:tracking-wider"
        >
          Transpiracy, Trust and Transformation through blockchain donation.
        </p>
        <p class="px-2.5 text-sm md:text-lg">
          Join the Blockchain circle of giving, by empowering change, one block
          at a time.
        </p>
      </div>
      <div class="absolute bottom-5 inset-x-0">
        <NuxtLink to="#blueprint">
          <ArrowCircleDownIcon
            class="size-6 md:size-10 mx-auto animate-bounce"
          />
        </NuxtLink>
      </div>
    </div>
    <div>
      <div class="bg-white-bright px-5 py-28" id="blueprint">
        <div :class="containerWidth">
          <ol class="list-none space-y-12">
            <div class="flex flex-col gap-y-5">
              <li class="font-semibold text-xl px-2.5">Introduction</li>
              <p
                class="px-2.5 sm:text-start text-black/80 text-sm md:text-base"
              >
                Fortrez, a blockchain-based platform for charitable donations
                would ensure transparency and security. With blockchain, every
                donation transaction is recorded and verified by multiple
                participants, making it hard to manipulate or tamper with the
                data. This would help Fortrez build trust among donors and
                recipients, as they can easily track where their donations are
                going. Plus, the decentralized nature of blockchain reduces the
                risk of fraud and corruption. It's an awesome way to make sure
                charitable donations are used for their intended purpose!
              </p>
            </div>
            <div class="flex flex-col gap-y-8">
              <div class="flex flex-col gap-y-5">
                <li class="font-semibold text-xl px-2.5">Problems</li>
                <p
                  class="px-2.5 sm:text-start text-black/80 text-sm md:text-base"
                >
                  Charitable organizations and philanthropists face a range of
                  challenges. Some common problems include:
                </p>
              </div>
              <div class="flex flex-col gap-y-5">
                <BlueprintProjectCard
                  v-for="problem in problems"
                  :title="problem.title"
                  :description="problem.description"
                />
              </div>
            </div>
            <div class="flex flex-col gap-y-8">
              <div class="flex flex-col gap-y-5">
                <li class="font-semibold text-xl px-2.5">Solutions</li>
                <p
                  class="px-2.5 sm:text-start text-black/80 text-sm md:text-base"
                >
                  Fortrez offers several benefits in addressing the challenges
                  faced by charitable organizations and philanthropists:
                </p>
              </div>
              <div class="flex flex-wrap flex-1 gap-5">
                <BlueprintSolutionCard
                  class="grow"
                  v-for="solution in solutions"
                  :icon="solution.icon"
                  :title="solution.title"
                  :description="solution.description"
                >
                </BlueprintSolutionCard>
              </div>
            </div>
            <div class="flex flex-col gap-y-5">
              <li class="font-semibold text-xl px-2.5">Token UseCase</li>
              <p
                class="px-2.5 sm:text-start text-black/80 text-sm md:text-base"
              >
                The native token of Fortrez is
                <span class="text-accent underline underline-offset-4"
                  >FRTZ</span
                >. <br />
                FRTZ token would be used to provide additional benefits like
                incentivizing donors with token rewards, creating a sense of
                community, and facilitating seamless transactions within the
                platform. FRTZ token would also be used for making donations,
                accessing exclusive features or content on the platform, and
                even participating in community voting or decision-making
                processes. Additionally FRTZ would support, a token distribution
                model that rewards long-term supporters and encourages ongoing
                engagement, a token staking mechanism where users can lock up
                their tokens for a certain period to earn additional rewards or
                benefits. This would help strike a balance between creating
                value for FRTZ token holders and ensuring the sustainability and
                effectiveness of Fortrez charitable initiatives.
              </p>
            </div>
            <div class="flex flex-col gap-y-5">
              <li class="font-semibold text-xl px-2.5">Tokenomics</li>
              <p
                class="px-2.5 sm:text-start text-black/80 text-sm md:text-base"
              >
                ...Coming Soon
              </p>
            </div>
          </ol>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import Transparency from "@/components/Icons/Blueprint/Transparency.vue";
import Confidence from "@/components/Icons/Blueprint/Confidence.vue";
import Contract from "@/components/Icons/Blueprint/Contract.vue";
import Traceable from "@/components/Icons/Blueprint/Traceable.vue";
import Global from "@/components/Icons/Blueprint/Global.vue";
import Funding from "@/components/Icons/Blueprint/Funding.vue";
import { ArrowCircleDownIcon } from "@heroicons/vue/solid";
const { containerWidth } = useTailwindConfig();

const problems = [
  {
    title: "Funding",
    description:
      "Many organizations struggle to secure consistent and sustainable funding to support their initiatives and cover operational costs.",
  },
  {
    title: "Transparency",
    description:
      "Ensuring transparency and accountability in the use of funds can be challenging, as donors and stakeholders want to know how their contributions are being utilized.",
  },
  {
    title: "Impact Measurement",
    description:
      "Measuring and demonstrating the impact of charitable efforts can be complex, as it requires tracking outcomes and assessing the effectiveness of programs.",
  },
  {
    title: "Administrative Burden",
    description:
      "Nonprofits often face administrative burdens, including legal compliance, reporting requirements, and managing volunteers and staff.",
  },
  {
    title: "Limited Resources",
    description:
      "Charitable organizations may have limited resources, including manpower, technology, and infrastructure, which can hinder their ability to scale their impact.",
  },
  {
    title: "Collaboration and Coordination",
    description:
      "Building partnerships and collaborations with other organizations and stakeholders can be challenging, as it requires aligning goals and coordinating efforts.",
  },
];

const solutions = [
  {
    icon: Transparency,
    title: "Transparency and Accountability",
    description:
      "Fortrez with the help of the blockchain technology, provides a transparent and immutable ledger where all transactions and activities can be recorded. This ensures transparency in the use of funds and helps build trust among donors and stakeholders.",
  },
  {
    icon: Confidence,
    title: "Enhanced Donor Confidence",
    description:
      "With Fortrez, donors can track their contributions in real-time, ensuring that their funds are being utilized as intended. This increased transparency can boost donor confidence and encourage more contributions.",
  },
  {
    icon: Contract,
    title: "Smart Contracts for Efficiency",
    description:
      "Fortrez uses smart contracts to automate and streamline administrative processes, reducing paperwork and operational costs. This would allow the organization to focus more on our core mission and maximize the impact of our work.",
  },
  {
    icon: Traceable,
    title: "Improved Traceability",
    description:
      "Blockchain's decentralized nature enables the traceability of funds, resources, and goods throughout the entire supply chain. This can help Fortrez prevent fraud, corruption, and ensure that resources reach the intended beneficiaries.",
  },
  {
    icon: Global,
    title: "Global Reach and Accessibility",
    description:
      "Blockchain technology can facilitate cross-border transactions and enable individuals from anywhere in the world to contribute to charitable causes. This opens up new opportunities for philanthropists and organizations who would be taking advantage of Fortrez cross-border advantage to reach a broader audience and expand their impact.",
  },
  {
    icon: Funding,
    title: "Efficient Distribution of Aid",
    description:
      "Fortrez would enable efficient and secure distribution of aid in crisis situations or areas with limited infrastructure. By eliminating intermediaries and using digital tokens, funds can be quickly disbursed to those in need, reducing delays and ensuring efficient aid delivery.",
  },
];
</script>
