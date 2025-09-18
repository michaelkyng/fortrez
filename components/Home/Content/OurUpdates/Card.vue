<template>
  <div
    class="h-fit max-w-full sm:max-w-72 lg:max-w-96 sm:grow-0 rounded-2xl overflow-clip shadow-md bg-gray-50/50"
  >
    <NuxtLink :to="props.path">
      <div class="flex flex-col gap-y-5">
        <div class="flex flex-col gap-y-2.5">
          <div
            class="relative min-w-full h-60 sm:h-36 rounded-2xl overflow-clip"
          >
            <div
              class="absolute flex items-center justify-center px-5 opacity-0 group-hover:opacity-100 z-10 size-full bg-black/70"
              :class="transition"
            >
              <!-- Black Ovelay-->
              <div
                class="border border-primary group-active:border-secondary rounded-full px-5 py-1 group-active:text-secondary text-primary text-sm"
                :class="transition"
              >
                View Blog
              </div>
            </div>
            <img
              class="absolute object-cover w-full h-full md:h-auto top-0 left-0 group-hover:scale-125"
              :class="transition"
              :src="$props.image"
              alt=""
            />
          </div>
          <div class="flex flex-col gap-y-2 p-3">
            <div class="flex flex-col w-full gap-y-2">
              <p class="flex flex-wrap items-center gap-2 text-black/40 text-xs w-full justify-start">
                <span v-for="tag in $props.tags" :key="tag">
                  {{ tag }}
                </span>
              </p>
              <h1 class="text-base sm:text-lg font-semibold text-black/60 group-hover:text-black/80">
                {{ $props.title }}
              </h1>
              <p
                class="text-xs sm:text-sm text-black/40 group-hover:text-black/80 w-full text-ellipsis line-clamp-2"
                :class="transition"
              >
                {{ $props.description }}
              </p>
            </div>
            <div class="flex justify-between mt-5">
              <div
                class="flex items-center border-b-2 border-b-transparent group-hover:border-b-2 group-hover:border-primary"
                :class="transition"
              >
                <p
                  class="text-accent/80 group-hover:text-primary font-medium lg:font-bold"
                  :class="transition"
                >
                  READ MORE
                </p>
                <PhCaretRight
                  class="relative group-hover:text-primary text-accent w-6 h-fit bottom-px"
                  :class="transition"
                  weight="fill"
                />
              </div>
              <span class="relative text-xs md:text-sm text-black/60 right-1">{{
                $props.date
              }}</span>
            </div>
          </div>
        </div>
      </div>
    </NuxtLink>
  </div>
</template>

<script lang="ts" setup>

const { subHeading, transition, containerWidth } = useTailwindConfig();

const props = defineProps({
  title: { type: String, require: true },
  description: { type: String, require: true },
  image: { type: String, require: true },
  tags: { type: Array as PropType<string[]>, require: true, default: [] },
  path: { type: String, require: true },
  date: { type: String, require: true },
});
</script>
