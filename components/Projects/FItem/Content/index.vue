<template>
  <div class="relative z-0">
    <DesignShapesWhiteCircle class="absolute right-0 top-0 -z-10" />
    <div class="z-10">
      <!-- First Row -->
      <div class="px-5 space-y-14 overflow-hidden" :class="containerWidth">
        <h2 :class="subHeading">Overview</h2>
        <div
          v-if="project.description"
          class="flex flex-wrap lg:flex-nowrap gap-x-10 gap-y-14 lg:gap-x-14 xl:gap-x-20"
        >
          <ProjectsFItemContentSummaryProblemFrame
            class="basis-full lg:basis-1/2"
            name="Summary"
            :choice="true"
            :description="project.description"
            :problem="project.problem"
          />
          <ProjectsFItemContentStats
            class="basis-full lg:basis-1/2"
            :percentVerifiedFunded="
              Math.round((project.verifiedFunded / project.funded) * 100)
            "
            :funded="project.funded"
            :verifiedFunded="project.verifiedFunded"
            :donors="project.donors"
          />
        </div>

        <div v-else class="w-full min-h-20 flex justify-center items-center">
          <img src="/animation.gif" alt="Loading" />
        </div>

        <!-- Donations -->
        <div id="donation">
          <ProjectsFItemContentDonation :project="project" :entries="entries" />
        </div>

        <!-- Other Projects -->
        <div class="flex flex-col gap-y-4">
          <HomeContentOurProjects
            title="Other Projects"
            :font="subHeading2"
            :project="false"
          />
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

const { project } = defineProps(["project"]);

const entries = project.transactions.slice(
  project.transactions.length - 11,
  project.transactions.length - 1
);
</script>
