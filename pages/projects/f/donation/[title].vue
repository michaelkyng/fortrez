<template>
  <div class="relative bg-gradient-to-b from-white-bright to-white-dim h-fit">
    <div class="relative pt-20 z-0 px-5">
      <div
        class="relative py-14 flex flex-col items-start justify-center gap-y-14"
        :class="containerWidth"
      >
        <div v-if="Fdata" class="w-full">
          <div class="flex flex-wrap-reverse justify-between w-full gap-y-5">
            <h3 class="!text-left" :class="subHeading">{{ Fdata.title }}</h3>
            <ButtonLink
              :to="`/projects`"
              name="All Projects"
              class="flex flex-col justify-center z-20 ml-auto"
            >
              <PhCaretLeft class="w-4 h-4 order-first" weight="fill" />
            </ButtonLink>
          </div>
          <ProjectsItemContentDonation
            @change="refresh"
            :project="Fdata"
            :entries="entries"
            :full-view="true"
          />
          <div class="flex justify-between w-full">
            <ButtonLink
              :to="`/projects/f/${Fdata.title}`"
              name="Project Oveview"
              class="px-2.5"
            >
              <PhCaretLeft class="w-4 h-4 order-first" weight="fill" />
            </ButtonLink>
            <ButtonLink :to="`/comingsoon`" class="px-2.5" name="Donate Now">
              <PhCaretRight class="w-4 h-4" weight="fill" />
            </ButtonLink>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { PhCaretRight, PhCaretLeft } from "@phosphor-icons/vue";
import type { Transaction } from "@prisma/client";
const { containerWidth, subHeading, subHeading2 } = useTailwindConfig();
const { verifyProject } = useProject();

const perPage = 10;
const start = ref(0);
const end = ref(start.value + Number(perPage));

const { title }: any = useRoute().params;

interface FProjectData {
  title: string;
  description: string;
  mediaFiles: { url: string }[];
  transactions: Transaction[]; // Assuming Transaction is a type representing your transaction data
  completed: boolean;
  funded: number;
  target: number;
}

const Fdata: Ref<FProjectData> = ref({
  title: "",
  description: "",
  mediaFiles: [],
  transactions: [], // Corrected typo here
  completed: false,
  funded: 0,
  target: 0,
  tags: "",
  createdAt: "",
});

onBeforeMount(async () => {
  try {
    const { project }: any = await verifyProject(title);
    Fdata.value = project;
  } catch (error) {
    console.log(error);
  } finally {
  }
});

const entries = ref(Fdata.value.transactions.slice(start.value, end.value));
async function refresh(number: number) {
  start.value = (Number(number) - 1) * Number(perPage);
  end.value = start.value + Number(perPage);
  entries.value = Fdata.value.transactions.slice(start.value, end.value);
}
</script>
