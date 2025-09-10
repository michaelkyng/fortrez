<template>
  <div
    class="relative flex flex-col space-y-20 min-h-screen justify-center items-center py-32"
  >
    <ProjectsItemCard v-if="data && data.title" :campaign="data" />

    <div v-else class="w-full min-h-20 flex justify-center items-center">
      <img src="/animation.gif" alt="Loading" />
    </div>

    <ProjectsItemContent v-if="data && data.title" :campaign="data" />
  </div>
</template>

<script lang="ts" setup>
import type { PopulatedCampaign } from "~/types/type";

const prop = defineProps({
  urltitle: String,
});

const { verifyCampaign } = useCampaign();
const title: any = prop.urltitle;

const data = ref<PopulatedCampaign>();

onBeforeMount(async () => {
  try {
    const { campaign }: any = await verifyCampaign(title);
    data.value = campaign;
  } catch (error) {
    console.log(error);
  } finally {
  }
});
</script>
