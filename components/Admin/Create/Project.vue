<template>
  <div class="space-y-5 md:space-y-10">
    <h2 :class="subHeading2">Create a Project</h2>
    <div class="relative flex flex-col gap-2.5 md:gap-5">
      <p>Project Image</p>
      <!-- Confirmation Message -->
      <div
        v-if="projectSuccessful"
        class="absolute flex justify-center items-center z-20 w-full h-full"
      >
        <div
          class="absolute px-10 py-5 md:px-20 md:py-10 bg-accent rounded-3xl container"
        >
          <span
            class="flex gap-x-2.5 items-center text-base md:text-xl font-medium"
          >
            <PhCheckCircle class="size-6 text-white-bright" /> Project Created
            Successfully</span
          >
        </div>
      </div>
      <div class="relative group w-full h-52 rounded-2xl overflow-clip z-0">
        <div
          @click="openFileInput()"
          class="absolute flex justify-center items-center group-hover:bg-black/40 group-hover:z-10 top-0 left-0 w-full h-full hover:cursor-pointer"
          :class="transition"
        >
          <button
            class="w-fit flex justify-center items-center gap-2.5 px-5 py-2.5 text border border-slate-300 text-sm text-white-bright bg-transparent rounded-3xl"
          >
            Choose Image
          </button>
        </div>
        <img
          class="absolute top-0 left-0 w-full h-full hover:cursor-pointer scale-x-150 object-cover"
          :src="projectData.image ? projectData.image : defaultImageHolder"
          alt="Product Image"
        />

        <input
          ref="fileInput"
          v-on:change="handleFileChange"
          type="file"
          accept="image/jpeg,.png,.jpg"
          class="bg-white-bright h-full w-full rounded-2xl"
          hidden
        />
      </div>
      <div class="flex items-center w-full gap-x-5">
        <UInput
          v-model="projectData.title"
          type="name"
          class="w-full bg-white-bright rounded-2xl py-1"
          color
          placeholder="Project Title"
        />
        <select
          v-model="projectData.type"
          class="peer block w-full py-2.5 px-2.5 rounded-2xl bg-white-bright text-black/60 text-sm focus:outline-none"
          required
        >
          <option value="" selected disabled hidden>Project Type</option>
          <option class="peer bg-white-bright">Foundation</option>
          <option class="peer bg-white-bright">Other Project</option>
        </select>
      </div>
      <div class="flex items-center w-full gap-x-5">
        <UTextarea
          v-model="projectData.description"
          type="name"
          class="bg-white-bright rounded-2xl w-full"
          color
          placeholder="Project Description"
        ></UTextarea>
        <UTextarea
          v-model="projectData.problem"
          type="name"
          class="bg-white-bright rounded-2xl w-full"
          color
          placeholder="Project Problem"
        ></UTextarea>
      </div>
      <UTextarea
        v-model="projectData.solutions"
        type="name"
        class="bg-white-bright rounded-2xl w-full"
        color
        placeholder="Project Solutions (Each Solution should be Separated with two dashes '--')"
      ></UTextarea>
      <div class="flex items-center w-full gap-x-5">
        <UInput
          v-model="projectData.target"
          type="number"
          class="bg-white-bright rounded-2xl py-1 w-full"
          color
          placeholder="Project Target Amount (N) (E.g 1000000)"
        />
        <select
          v-model="projectData.category"
          class="peer block w-full py-2.5 px-2.5 rounded-2xl bg-white-bright text-black/60 text-sm focus:outline-none"
          required
        >
          <option value="" selected disabled hidden>Project Category</option>
          <option
            :key="item"
            class="peer bg-white-bright"
            v-for="item in options"
          >
            {{ item }}
          </option>
        </select>
      </div>
      <UButton
        @click="handleProject"
        class="bg-accent justify-center font-semibold md:py-2.5 mt-5"
        color
        :loading="isLoading"
        >Create Project</UButton
      >
    </div>
  </div>
</template>

<script lang="ts" setup>
import { PhCheckCircle } from "@phosphor-icons/vue";
const options = [
  "Charity",
  "Events",
  "Cryptocurency",
  "Blockchain",
  "Web3",
  "Partnerships",
  "Bitcoin",
  "Ethereum",
  "Defi",
];
const { subHeading2, transition } = useTailwindConfig();
const defaultImageHolder = ref("/images/imageHolder.jpg");
const projectSuccessful = ref(false);
const isLoading = ref(true);
const { createProject } = useProject();

const projectData = reactive({
  title: "",
  description: "",
  image: "",
  mediaFiles: [] as File[],
  problem: "",
  solutions: "",
  target: "",
  category: "",
  type: "",
  completed: false,
});

const fileInput: any = ref<HTMLInputElement | null>(null);

const openFileInput = () => {
  fileInput.value.click();
};

const handleFileChange = (event: Event) => {
  const target = event.target as HTMLInputElement;
  if (target.files && target.files.length > 0) {
    const selectedFile = target.files[0];
    projectData.mediaFiles = [selectedFile];

    const reader = new FileReader();
    reader.onload = () => {
      if (typeof reader.result === "string") {
        projectData.image = reader.result;
      }
    };
    reader.readAsDataURL(selectedFile);
  }
};

const handleProject = async () => {
  projectSuccessful.value = false;
  isLoading.value = true;
  try {
    const response = await createProject(projectData);
    projectSuccessful.value = true;
  } catch (error) {
    console.log(error);
  } finally {
    isLoading.value = false;

    setTimeout(() => {
      projectSuccessful.value = false;
    }, 5000);
  }
};
</script>
