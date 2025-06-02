// nuxt.d.ts
import type { GoogleFonts } from '@nuxtjs/google-fonts'

declare module 'nuxt/schema' {
  interface NuxtConfig {
    googleFonts?: GoogleFonts
  }
}