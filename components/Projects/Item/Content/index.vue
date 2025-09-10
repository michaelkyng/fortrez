<template>
  <div v-if="campaign" class="relative z-0 min-h-screen">
    <DesignShapesWhiteCircle class="absolute right-0 top-0 -z-10" />
    <div class="z-10" :class="containerWidth">
      <!-- First Row -->
      <div class="px-5 space-y-14 overflow-hidden max-w-screen" >
        <h2 :class="subHeading">Overview</h2>
        <div
          v-if="campaign.description"
          class="flex flex-wrap lg:flex-nowrap gap-x-10 gap-y-14 lg:gap-x-14 xl:gap-x-20 max-w-full"
        >
          <ProjectsItemContentSummaryProblemFrame
            class="basis-full lg:basis-1/2"
            name="Summary"
            :choice="true"
            :description="campaign.description"
            :problem="campaign.problem"
          /> 
          <ProjectsItemContentStats
            class="basis-full lg:basis-1/2"
            :percentofVerifiedFunded="
              Math.round(
                (campaign.raisedAmount / campaign.target) * 100
              )
            "
            :funded="campaign.raisedAmount"
            :verifiedFund="campaign.raisedAmount"
            :donations="campaign.donations.length"
          />
        </div>

        <div v-else class="w-full min-h-20 flex justify-center items-center">
          <img src="/animation.gif" alt="Loading" />
        </div>

        <!-- Donations -->
        <div id="donation">
          <ProjectsItemContentDonation :campaign="campaign" :entries="entries" />
        </div>

        <!-- Other Projects -->
        <div class="relative">
          <HomeContentOurProjects
            title="Other Projects"
            :font="subHeading"
            :campaign="false"
          />
        </div>
        <div class="flex justify-center mt-10">
          <Button variant="outline" :to="`/projects`" class="my-2" name="View More" />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>

const { containerWidth, subHeading, subHeading2 } = useTailwindConfig();

const props = defineProps({
  campaign: Object as PropType<PopulatedCampaign>,
});

const entries = props?.campaign?.donations.slice(
  props.campaign.donations.length - 11,
  props.campaign.donations.length - 1
);
</script>
