<template>
  <div class="flex flex-col gap-5">
    <div>
        <Logo class="w-16 h-16 sm:w-20 sm:h-20"/>
    </div>

    <div class="flex flex-col gap-4">
        <p class="text-black/60 max-w-fit lg:max-w-72 xl:max-w-fit text-sm sm:text-base pl-2">Subscribe to receive our latest news and updates.</p>
        <span v-if="emailSent" class="text-accent/80 text-sm">You have Subscribed to our Newsletter</span>
        <span v-if="errorOccurrence" class="text-red-500/80 text-sm">An Error Occured, Please try again!</span>
        <div class="relative">
            <input v-model="email" type="email" name="email" class="relative outline-none bg-white-dim py-2.5 px-4 rounded-3xl w-full" placeholder="Email address"/>
            <UButton @click.prevent="handleEmailWaitlist" color="yellow" class="absolute inset-y-0 rounded-3xl right-0 px-3 font-semibold" :class="transition" :loading="isLoading">Subscribe</UButton>
        </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const {transition} = useTailwindConfig()
const { waitList } = useRuntimeConfig().public

const email = ref("");
const isLoading = ref(false)
const emailSent = ref(false)
const errorOccurrence = ref(false)

const handleEmailWaitlist = async () => {
  emailSent.value = false
  errorOccurrence.value = false
  if (!email.value) return
  isLoading.value = true

  const formData = new FormData()

  formData.append('Emails', email.value)

  try{
    await $fetch(waitList, {
    method: "post",
    redirect: 'follow',
    body: formData,
  })

    emailSent.value = true
    
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
          emailSent.value = false
        }, 5000)
   }


  
}

</script>