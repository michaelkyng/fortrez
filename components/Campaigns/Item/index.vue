<template>
  <div
    class="relative flex flex-col space-y-20 min-h-screen justify-center items-center py-32"
  >
    <CampaignsItemCard v-if="data && data.title" :campaign="data" />

    <div v-else class="w-full min-h-20 flex justify-center items-center">
      <img src="/animation.gif" alt="Loading" />
    </div>

    <CampaignsItemContent v-if="data && data.title" :campaign="data" />
  </div>
</template>

<script lang="ts" setup>
const prop = defineProps({
  id: String,
});

const campaignStore = useCampaignStore();
const id: any = prop.id;

const data = ref<Campaign>();

onBeforeMount(async () => {
  try {
    const { campaign }: any = await campaignStore.fetchCampaignById(id);
    data.value = campaign;
  } catch (error) {
    console.log(error);
  } finally {
  }
});
</script>
