<template>
  <div v-if="project" class="relative z-0 min-h-screen">
    <DesignShapesWhiteCircle class="absolute right-0 top-0 -z-10" />
    <div class="z-10">
      <!-- First Row -->
      <div class="px-5 space-y-14 overflow-hidden" :class="containerWidth">
        <h2 :class="subHeading">Overview</h2>
        <div
          v-if="project.description"
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
            :percentofVerifiedFunded="
              Math.round(
                ((project.funded - project.pending) / project.funded) * 100
              )
            "
            :pending="project.pending"
            :funded="project.funded"
            :verifiedFund="project.funded - project.pending"
            :donors="project.donors"
          />
        </div>

        <div v-else class="w-full min-h-20 flex justify-center items-center">
          <img src="/animation.gif" alt="Loading" />
        </div>

        <!-- Donations -->
        <div id="donation">
          <ProjectsItemContentDonation :project="project" :entries="entries" />
        </div>

        <!-- Other Projects -->
        <div class="flex flex-col gap-y-4">
          <HomeContentOurProjects
            title="Other Projects"
            :font="subHeading"
            :project="false"
          />
          <div class="flex justify-center mt-10">
            <Button variant="outline" :to="`/projects`" class="my-2" name="View More" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import type { ProjectWithRelations } from "~/types/type";

const { containerWidth, subHeading, subHeading2 } = useTailwindConfig();

const props = defineProps({
  project: Object as PropType<ProjectWithRelations>,
});

const entries = props?.project?.transactions.slice(
  props.project.transactions.length - 11,
  props.project.transactions.length - 1
);
</script>
