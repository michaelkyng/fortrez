// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";
export default defineNuxtConfig({
  compatibilityDate: "2025-05-01",
  devtools: { enabled: true },
  experimental: { viewTransition: true },
  css: ["~/assets/css/tailwind.css"],
  modules: [
    [
      "nuxt-mail",
      {
        message: { to: process.env.NUXT_PUBLIC_EMAIL },
        smtp: {
          host: process.env.ZOHO_ENDPOINT,
          port: 465,
          secure: true,
          auth: { user: process.env.NUXT_PUBLIC_EMAIL, pass: process.env.PASS },
        },
      },
    ],
    "@nuxt/ui",
    "nuxt-swiper",
  ],

  build: { transpile: ["@phosphor-icons/vue"] },
  app: {
    head: {
      charset: "UTF-8",
      viewport: "width=device-width, initial-scale=1",
      title: "Fortrez",
      meta: [
        {
          name: "description",
          content:
            "Welcome to Fortrez, where blockchain technology meets philanthropy. We're committed to transforming how charitable organizations secure funding for their projects and initiatives.",
        },
      ],
      link: [
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@400;500;600;700&family=Lato:wght@400;700&display=swap",
        },
      ],
    },
    pageTransition: { name: "page", mode: "out-in" },
  },

  runtimeConfig: {
    jwtAccessSecret: process.env.JWT_ACCESS_TOKEN_SECRET,
    jwtRefreshSecret: process.env.JWT_REFRESH_TOKEN_SECRET,
    cloudinaryCloudName: process.env.CLOUDINARY_CLOUD_NAME,
    cloudinaryApiKey: process.env.CLOUDINARY_API_KEY,
    cloudinaryApiSecret: process.env.CLOUDINARY_API_SECRET,
    public: { email: "", waitList: "" },
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
