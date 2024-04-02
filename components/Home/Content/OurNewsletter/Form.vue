
<template>
  <div :class="containerWidth">
    <div class="flex justify-center">
      <span v-if="emailSent" class="text-yellow-100 bg-black/60  px-2 py-1 sm:py-2 text-sm sm:text-base"> Your Mail has been sent</span>
      <span v-if="errorOccurrence" class="text-red-100 bg-black/60  px-2 py-1 sm:py-2 text-sm sm:text-base"> An error occured, Please try again</span>
      <div v-if="isLoading" class="flex bg-black/60 p-2 rounded-2xl">
        <svg class="w-6 h-6 text-yellow-400 animate-spin" xmlns="http://www.w3.org/2000/svg" fill="none"
          viewBox="0 0 24 24">
          <circle class="opacity-10" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
          <path fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z">
          </path>
        </svg>
      </div>
    </div>
    <form @submit.prevent="handleSendEmail" class="max-w-[80%] xl:max-w-[70%] mx-auto rounded-lg shadow-md overflow-hidden p-6 sm:p-10 flex flex-col gap-12">

      <div class="flex gap-4 sm:gap-10 w-full">
        <div class="relative border-b-2 border-black/80 z-0 grow">
          <input v-model="formData.name" type="text" name="name" placeholder=" " class="peer block w-full appearance-none focus:outline-none !bg-transparent autofill:!bg-transparent z-10" required/>
          <label for="name" class="peer-focus-within:-translate-y-6 peer-focus-within:scale-75 peer-[:not(:placeholder-shown)]:scale-75  peer-[:not(:placeholder-shown)]:-translate-y-6 absolute top-0  duration-300 origin-[0%] opacity-80 text-sm md:text-base z-[-1] required:text-red-500">Full Name</label>
        </div>

        <div class="relative border-b-2 border-black/80 z-0 grow">
          <input v-model="formData.email" type="text" name="email" placeholder=" " class="peer block w-full appearance-none focus:outline-none !bg-transparent autofill:!bg-transparent z-10" required/>
          <label for="email" class="peer-focus-within:-translate-y-6 peer-focus-within:scale-75 peer-[:not(:placeholder-shown)]:scale-75  peer-[:not(:placeholder-shown)]:-translate-y-6 absolute top-0  duration-300 origin-[0%] opacity-80 text-sm md:text-base z-[-1]">Email</label>
        </div>
      </div>

      <div class="flex gap-4 sm:gap-10 w-full">
        <div class="relative border-b-2 border-black/80 z-0 basis-1/2">
          <input v-model="formData.company" type="text" name="company" placeholder=" " class="peer block w-full appearance-none focus:outline-none !bg-transparent autofill:!bg-transparent z-10"/>
          <label for="company" class="peer-focus-within:-translate-y-6 peer-focus-within:scale-75 peer-[:not(:placeholder-shown)]:scale-75  peer-[:not(:placeholder-shown)]:-translate-y-6 absolute top-0  duration-300 origin-[0%] opacity-80 text-sm md:text-base z-[-1]">Company <span class="opacity-60 invisible sm:visible">(Optional)</span></label>
        </div>

        <div class="relative border-b-2 border-black/80 z-0 basis-1/2">
          <select
          v-model="formData.type"
            name="type"
            class="peer block w-full appearance-none focus:outline-none !bg-transparent autofill:!bg-transparent z-10"
            required
          >
            <option value="" selected disabled hidden></option>
            <option
            :value="item"
            class="peer bg-yellow-400"
            v-for="item in options"
          >
            {{ item }}
          </option>
          </select>
          <label for="type" class="peer-focus-within:-translate-y-6 peer-focus-within:scale-75 peer-[:not([value='']):valid]:scale-75  peer-[:not([value='']):valid]:-translate-y-6 absolute top-0  duration-300 origin-[0%] opacity-80 text-sm md:text-base z-[-1]">Category</label>
          
  
          <ChevronDownIcon class="w-4 absolute inset-y-0 my-auto right-0 peer-[:not([value='']):valid]:hidden peer-focus-within:hidden transition duration-300 z-[-1]"/>
          <ChevronUpIcon class="w-4 absolute inset-y-0 my-auto right-0 hidden peer-[:not([value='']):valid]:block peer-focus-within:block transition duration-300"/>
      
          <span class="text-sm text-red-600 hidden" id="error">Option has to be selected</span>
        </div>
      </div>

      <div class="relative border-b-2 border-black/80 z-0 grow">
        <textarea
        v-model="formData.message"
        type="text"
        name="message"
        id="message"
        class="peer block h-32 w-full appearance-none focus:outline-none !bg-transparent autofill:!bg-transparent z-10"
        placeholder=" "
        required
        >{{ formData.message }}</textarea
        >
            <label for="message" class="peer-focus-within:-translate-y-6 peer-focus-within:scale-75 peer-[:not(:placeholder-shown)]:scale-75  peer-[:not(:placeholder-shown)]:-translate-y-6 absolute top-0  duration-300 origin-[0%] opacity-80 text-sm md:text-base z-[-1]">Message</label>
      </div>

      <div class="flex w-full justify-center">
        <UButton variant="solid" color="black" class="max-w-40 text-center justify-center px-10 rounded-2xl font-semibold drop-shadow" type="submit" :class="transition"><span class="text-accent">Submit</span></UButton>
      </div>
    </form>
  </div>

</template>


<script setup lang="ts">

  import {ChevronDownIcon, ChevronUpIcon} from '@heroicons/vue/solid'


  const {containerWidth,transition} = useTailwindConfig();

  const { email } = useRuntimeConfig().public;
  const mail = useMail();
  const isLoading =  ref(false);
  const emailSent =  ref(false);
  const errorOccurrence =  ref(false);

  const options = ["Donation","Enquiries", "Proposal", "Partnership"];

  const formData = reactive({
  name: "",
  email: "",
  company: "",
  type: "",
  message: "",
  });

  const handleSendEmail = async () => {
    isLoading.value = true;
    emailSent.value = false;
    errorOccurrence.value = false;


    try{
      await mail.send({
      from: `<${email}> ${formData.name}`,
      sender: `${formData.email}`,
      replyTo: `${formData.email}`,
      subject: `${formData.type} | ${formData.company || "Individual"}`,
      text: formData.message,
    });
    emailSent.value = true;

    
    }

    catch{
      
      errorOccurrence.value =true;
      setTimeout(() => {
      errorOccurrence.value = false;
    }, 10000);
    }

    finally{
      isLoading.value = false
      setTimeout(() => {
      emailSent.value = false;
    }, 5000);
    }

  }

</script>