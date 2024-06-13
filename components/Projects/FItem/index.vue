<template>
  <div class="relative space-y-20">
    <ProjectsItemCard
      v-if="Fdata && Fdata.title"
      :title="Fdata.title"
      :description="Fdata.description"
      :image="Fdata.mediaFiles[0].url"
      :completed="Fdata.completed"
      :funded="Fdata.funded"
      :target="Fdata.target"
    />

    <ProjectsFItemContent :project="Fdata" />
  </div>
</template>

<script lang="ts" setup>
import type { Transaction } from "@prisma/client";
const { containerWidth, subHeading } = useTailwindConfig();
const prop = defineProps({
  urltitle: String,
});

const { verifyProject } = useProject();
const title: any = prop.urltitle;

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
</script>
