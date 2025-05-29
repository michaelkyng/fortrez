<template>
  <div
    class="flex flex-col w-fit mx-auto px-5 gap-y-2.5"
    :class="containerWidth"
  >
    <ButtonLink to="/projects" name="All Projects" class="z-20">
      <PhArrowLeft class="w-4 h-4 order-first" />
    </ButtonLink>

    <div
      class="flex flex-wrap lg:flex-nowrap gap-x-8 sm:gap-x-10 md:gap-x-14 gap-y-5 w-full min-h-80 items-star px-2.5 sm:px-5 md:px-10 py-2.5 sm-py-5 md:py-14 bg-gradient-to-r from-[#ebebeb]/10 to-accent/5 rounded-3xl shadow-md"
      :class="containerWidth"
    >
      <div
        class="w-full flex flex-col lg:basis-2/5 rounded-3xl overflow-clip h-full min-h-48 lg:min-h-64 z-20"
      >
        <img
          class="object-cover min-h-48 lg:min-h-64"
          :src="props.image"
          alt=""
        />
      </div>
      <div
        class="flex flex-col basis-full lg:basis-3/5 gap-4 lg:gap-2 xl:gap-4 h-full z-20 py-2.5 px-1.5 sm:px-2.5"
      >
        <h1 class="text-lg md:text-2xl xl:text-3xl font-bold">
          {{ props.title }}
        </h1>
        <p
          class="text-sm md:text-base text-black/60 line-clamp-2 lg:line-clamp-1 xl:line-clamp-2"
        >
          {{ props.description }}
        </p>
        <div class="flex flex-wrap gap-y-5 justify-between items-center mt-2.5">
          <div class="flex items-center gap-2.5 pr-1.5">
            <span class="text-sm md:text-base text-black/80">Status</span>
            <span>|</span>
            <div v-if="props.completed" class="flex gap-1 items-center">
              <component :is="IconCompleted" />
              <p class="text-sm md:text-base text-black/80">Completed</p>
            </div>
            <div v-else class="flex gap-1 items-center">
              <component :is="IconInProgress" />
              <p class="text-sm md:text-base text-black/80">InProgress</p>
            </div>
          </div>

          <div class="flex items-center gap-x-2.5 sm:gap-x-5 pl-1.5">
            <NuxtLink class="max-w-fit" to="https://x.com/fortrez_?s=21">
              <IconsSocialsX />
            </NuxtLink>
            <NuxtLink class="max-w-fit" to="/faq">
              <IconsSocialsInstagram />
            </NuxtLink>
            <NuxtLink
              class="max-w-fit"
              to="https://www.linkedin.com/company/fortrezofficial"
            >
              <IconsSocialsLinkedIn />
            </NuxtLink>
            <NuxtLink class="max-w-fit" to="https://t.me/FortrezNews">
              <IconsSocialsTelegram />
            </NuxtLink>
          </div>
        </div>
        <div class="flex flex-col gap-y-2.5">
          <p class="text-sm md:text-base">Funds Raised</p>
          <UProgress
            class="relative"
            :value="props.funded"
            :max="props.target"
            size="md"
            color="yellow"
          >
            <template #indicator="{ percent }">
              <div
                class="flex flex-wrap-reverse w-full justify-between absolute -bottom-8"
              >
                <span class="flex items-center gap-1 text-black/60 pr-1.5">
                  <span class="text-sm md:text-base flex items-center"
                    ><IconsSymbolsNaira
                      class="w-3 h-3 opacity-60"
                      color="#000"
                    />{{ props.funded }}</span
                  >
                  <span class="text-sm md:text-base">raised of</span>
                  <span class="text-sm md:text-base flex items-center"
                    ><IconsSymbolsNaira
                      class="w-3 h-3 opacity-60"
                      color="#000"
                    />{{ props.target }}</span
                  >
                </span>

                <span class="text-sm md:text-base text-right ml-auto pl-1.5"
                  >{{ Math.round(percent) }}%</span
                >
              </div>
            </template>
          </UProgress>
          <NuxtLink to="/comingsoon">
            <UButton
              class="w-fit mt-10 px-3 py-2.5 rounded-3xl font-semibold"
              color="yellow"
              >Donate Now</UButton
            >
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import IconCompleted from "@/components/Icons/Projects/CompletedStatus.vue";
import IconInProgress from "@/components/Icons/Projects/InProgressStatus.vue";
import { PhArrowLeft } from "@phosphor-icons/vue";
const { containerWidth } = useTailwindConfig();

const props = defineProps({
  title: { type: String, require: true },
  description: { type: String, require: true },
  image: { type: String, require: true },
  completed: { type: Boolean, default: false },
  path: { type: String, require: true },
  funded: { type: Number, require: true },
  target: { type: Number, require: true },
});
</script>
