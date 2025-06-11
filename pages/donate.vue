<script lang="ts" setup></script>
<template>
  <div clas="font-lato relative z-10">
    <DesignShapesStar class="absolute z-0 top-0 opacity-20 right-0 "/>
    <div class="flex justify-center items-center min-h-screen px-5 md:px-10 bg-gradient-to-br from-yellow-100 to-yellow-700">
    <div class="h-[100%] text-white w-[100%] md:max-w-[40%] max-w-md text-center">
      <!-- our Logo -->
      <!-- <div class="mb-4 flex justify-center">
        <img src="../public/yellow.svg" alt="Church Logo" class="h-10" />
      </div> -->

      <!-- Title -->
      <h2 class="text-3xl font-bold tracking-wider mb-1 font-lato">Donate Now</h2>
      <p class="text-sm uppercase mb-6 tracking-widest text-white/70">Donate Via</p>

      <!-- Card Content -->
      <div class="bg-white/10 backdrop-blur-3xl md:py-10 py-4 px-4 rounded-2xl border border-white/80 ">

        <!-- Bank Section -->
        <div>
        <div class="flex items-center justify-between mb-2">
          <p class="text-[12px] mb-1 text-white/70 text-left md:text-base">Send your donations to:</p>
          <div class="flex items-center gap-2">
          <span class="text-white text-right">Bank:</span>
          <img src="../public/yellow.svg" alt="Zenith Bank" class="h-5" />
          </div>
        </div>

        <!-- Account Number -->
     <div class="flex items-center justify-between">   
       <div>
         <img src="../public/yellow.svg" class="h-8" alt="">
       </div>   
      <div class="pt-4">
        <div class="text-right">
         <span>Account:</span> 
        <p class="text-3xl font-bold tracking-wide mb-2 md:text-4xl">1015643220</p>
        </div>

        <!-- Account Name -->
        <div class="text-right mb-4"> 
        <span>Account number:</span>
        <p class="text-sm text-white/80">Foursquare Gospel Church HSRV</p>
        </div>
        </div>
      </div>
      </div>  
      </div>
    </div>
  </div>
  </div>
  <Footer class="mt-10" />
</template>
