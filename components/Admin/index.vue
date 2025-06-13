<template>
  <div class="p-5 h-full" :class="containerWidth">
    <div class="pt-20" :class="subHeading">Admin Dashboard</div>
    <div class="grid grid-cols-8 h-5/6 rounded-3xl overflow-clip">
      <div
        class="flex flex-col items-center justify-between col-span-8 sm:col-span-2 bg-slate-200 py-2.5 gap-y-5 sm:gap-y-0"
      >
        <div class="flex flex-wrap sm:flex-col w-full gap-y-2.5 sm:gap-y-10">
          <div
            class="text-lg md:text-xl lg:text-2xl font-bold w-full text-left px-2.5"
          >
            {{ admin.name }}
          </div>
          <div class="flex sm:flex-col w-full gap-5 px-2.5 sm:px-0">
            <UButton
              @click="tab = 1"
              :key="1"
              class="w-fit sm:w-full justify-center bg-accent font-semibold md:py-2.5"
              >Blogs</UButton
            >
            <UButton
              @click="tab = 2"
              :key="2"
              class="w-fit sm:w-full justify-center bg-accent font-semibold md:py-2.5"
              >Projects</UButton
            >
          </div>
        </div>

        <UButton
          class="bg-slate-400 justify-center w-full font-semibold md:py-2.5"
        >
          <span class="flex items-center gap-x-2.5">
            <PhSignOut class="w-4 h-4" />
            Logout
          </span>
        </UButton>
      </div>
      <div
        class="col-span-8 sm:col-span-6 bg-white-dim px-2.5 sm:p-10 overflow-y-auto menu-scroll"
      >
        <AdminCreateBlog v-if="tab === 1" />

        <AdminCreateProject v-else-if="tab === 2" />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { PhSignOut } from "@phosphor-icons/vue";
const { containerWidth, subHeading } = useTailwindConfig();
const { useAuthAdmin } = useAuth();
const admin: any = useAuthAdmin();

const tab = ref(0);
</script>
