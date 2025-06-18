<template>
  <div
    class="relative flex flex-col space-y-20 min-h-screen justify-center items-center py-32"
  >
    <ProjectsItemCard v-if="data && data.title" :project="data" />

    <div v-else class="w-full min-h-20 flex justify-center items-center">
      <img src="/animation.gif" alt="Loading" />
    </div>

    <ProjectsItemContent v-if="data && data.title" :project="data" />
  </div>
</template>

<script lang="ts" setup>
import type { ProjectWithRelations } from "~/types/type";

const prop = defineProps({
  urltitle: String,
});

const { verifyProject } = useProject();
const title: any = prop.urltitle;

const data = ref<ProjectWithRelations>();

onBeforeMount(async () => {
  try {
    const { project }: any = await verifyProject(title);
    data.value = project;
  } catch (error) {
    console.log(error);
  } finally {
  }
});
</script>
