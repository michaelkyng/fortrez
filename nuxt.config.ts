// nuxt.config.ts
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  experimental: { viewTransition: true },
  
  modules: [
    [
      "nuxt-mail",
      {
        message: { to: 'test@fortrez.xyz' },
        smtp: {
          host: process.env.ZOHO_ENDPOINT,
          port: 465,
          secure: true,
          auth: { 
            user: process.env.NUXT_PUBLIC_EMAIL, 
            pass: process.env.PASS 
          },
        },
      }
    ],
    "@nuxt/ui", 
    "@nuxtjs/tailwindcss", 
    "nuxt-swiper",
    "@nuxtjs/google-fonts"
  ],
  
  // Type-safe Google Fonts configuration
  googleFonts: {
    // Prevents the type error by using the correct format
    families: {
      Roboto: {
        wght: [400, 700], // Specify weights you actually need
        ital: [400]       // Italic variants if needed
      },
      Montserrat: {
        wght: [100, 200, 300, 400, 500, 600, 700],
        ital: [100, 200, 300, 400, 500, 600, 700] // Add if you need italics
      }
    },
    display: 'swap',
    prefetch: true,
    preconnect: true,
    preload: true,
    download: false,
    base64: false
  },
  
  build: { transpile: ["@phosphor-icons/vue"] },
  
  app: {
    head: {
      charset: "UTF-8",
      viewport: "width=device-width, initial-scale=1",
      title: "Fortrez",
      meta: [
        {
          name: "description",
          content: "Welcome to Fortrez, where blockchain technology meets philanthropy..."
        },
      ],
      // Optimized font loading
      link: [
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: 'anonymous' }
      ]
    }
  },
  
  runtimeConfig: {
    jwtAccessSecret: process.env.JWT_ACCESS_TOKEN_SECRET,
    jwtRefreshSecret: process.env.JWT_REFRESH_TOKEN_SECRET,
    cloudinaryCloudName: process.env.CLOUDINARY_CLOUD_NAME,
    cloudinaryApiKey: process.env.CLOUDINARY_API_KEY,
    cloudinaryApiSecret: process.env.CLOUDINARY_API_SECRET,
    public: { 
      email: process.env.NUXT_PUBLIC_EMAIL || "", 
      waitList: "" 
    },
  }
});