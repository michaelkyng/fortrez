<template>
      <div class="pt-20 h-full px-10" :class="containerWidth">
        <div class="flex flex-col gap-y-5 items-center h-full justify-center">
          <h1 :classs="subHeading">Login</h1>
          <input v-model="data.email" type="email" name="email" class="relative outline-none bg-white-dim py-2.5 px-4 rounded-3xl w-full" placeholder="Email address"/>
          <input v-model="data.password" type="password" name="email" class="relative outline-none bg-white-dim py-2.5 px-4 rounded-3xl w-full" placeholder="Password"/>
          <UButton :class="transition" :loading="data.loading" @click="handleLogin" size="md" class="w-fit rounded-3xl px-5 font-semibold" color="yellow">Login</UButton>
        </div>
      </div>
  </template>
  
  <script lang="ts" setup>
  const {login} = useAuth()
  
  
  const {containerWidth, subHeading, transition} = useTailwindConfig()
   const data = ref({
      email: "",
      password: "",
      loading : false
   })
  
   const handleLogin = async ()=>{
      data.value.loading = true
      try {
        const router = useRouter();
        const successLogin = await login(data.value)  
        if (successLogin) {
          router.push("/admin")
        }
  
      } catch (error) {
        console.log(error)
      }
      finally{
        data.value.loading = false
      }
   }
  </script>