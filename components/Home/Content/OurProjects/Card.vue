<template>
  <div
    class="h-fit max-w-full sm:max-w-80 w-full rounded-2xl overflow-clip shadow-md bg-gray-50/50"
    v-if="!item.completed"
  >
    <NuxtLink :to="`/projects/${item.title}`">
      <div class="flex flex-col gap-y-5">
        <div class="flex flex-col gap-y-2.5">
          <div class="relative w-full h-40 rounded-2xl overflow-clip">
            <img
              v-if="item.mediaFiles"
              class="absolute object-cover top-0 left-0 group-hover:scale-125 aspect-square"
              :class="transition"
              :src="item?.mediaFiles[0]?.url"
              :alt="`${item.title} image`"
            />
          </div>
          <div class="flex flex-col gap-y-2 p-3">
            <span class="flex justify-between items-center w-full">
              <p class="text-xs text-accent/80">
                {{
                  new Date(item.createdAt).toLocaleDateString("en-GB", {
                    dateStyle: "medium",
                  })
                }}
              </p>
              <p class="text-xs">{{ item.donors }} donors</p>
            </span>
            <div class="flex flex-col gap-y-5">
              <div class="flex flex-col gap-2">
                <h1 class="text-base sm:text-lg font-bold">
                  {{ item.title }}
                </h1>
                <p
                  class="text-xs md:text-sm text-black/50 group-hover:text-black/80 w-full text-ellipsis line-clamp-2"
                  :class="transition"
                >
                  {{ item.description }}
                </p>
              </div>
              <div class="relative w-full">
                <UProgress
                  v-model="item.funded"
                  :max="item.target"
                  animation="swing"
                  size="sm"
                >
                  <template #status>
                    <span class="flex items-center text-xs"
                      ><IconsSymbolsNaira
                        class="size-2.5 fill-(--ui-text-dimmed)"
                      /><span>{{ item.funded.toLocaleString() }}</span></span
                    >
                  </template>
                </UProgress>
                <div
                  class="relative flex justify-end-safe items-center h-6 mt-0.5"
                >
                  <span class="w-fit text-xs md:text-sm right-0 bottom-0"
                    >{{
                      Math.round(
                        (item.funded / item.target) * 100
                      ).toLocaleString()
                    }}%</span
                  >
                </div>
              </div>
            </div>
            <Button
              name="Donate"
              variant="outline"
              to="/donate"
              class="mx-auto"
            ></Button>
          </div>
        </div>
      </div>
    </NuxtLink>
  </div>
</template>

<script lang="ts" setup>
import type { ProjectWithRelations } from "~/types/type";

defineProps({
  item: {
    type: Object as PropType<ProjectWithRelations>,
    required: true,
  },
});
const value = 700000;
const { transition } = useTailwindConfig();
const scrollContainer = ref<HTMLDivElement | null>(null);

const scrollRight = () => {
  if (scrollContainer.value) {
    scrollContainer.value.scrollBy({ left: 400, behavior: "smooth" });
  }
};

const scrollLeft = () => {
  if (scrollContainer.value) {
    scrollContainer.value.scrollBy({ left: -400, behavior: "smooth" });
  }
};
</script>
