<template>
  <div class="py-20">
    <div class="relative flex flex-col gap-7 md:gap-14  z-10" :class="containerWidth">
      <DesignShapesBlob class="absolute blur-[200px] w-96 inset-x-0 mx-auto -top-52 -z-10"/>
      <h1 :class="subHeading">Fortrez Blog</h1>

      <div class="w-full overflow-hidden px-5 mx-auto hidden">
        <SubNavFilter/>
      </div>

      <div class="relative flex flex-wrap justify-center h-fit gap-5 sm:gap-10 md:gap-14 lg:gap-20 px-2.5">
        <HomeContentOurUpdatesCard class="flex-none group" v-for="cardItem in data" 
        :title="cardItem.title"
        :description="cardItem.description"
        :image="cardItem.mediaFiles[0].url"
        :tags="cardItem.tags"
        :date="cardItem.date"
        :path="`/blog/${cardItem.title}`"
        >
            
        </HomeContentOurUpdatesCard>
      </div>

    </div>

  </div>
</template>

<script lang="ts" setup>
const {containerWidth, subHeading} = useTailwindConfig()

const {data} = defineProps(['data'])
</script>