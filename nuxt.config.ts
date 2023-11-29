import { headConfig } from "./meta.config";

const baseURL = process.env.BASE_URL || "";
const origin = process.env.ORIGIN || "";
const ssr = true; //process.env.ssr !== "false"
const appURL = origin + baseURL;

const publicRuntimeConfig = {
  siteName: headConfig.siteName,
  origin,
  baseURL,
  appURL,
};

export default defineNuxtConfig({
  modules: ["@nuxtjs/i18n", "@nuxt/content"],
  typescript: {
    typeCheck: true,
    strict: true,
  },
  ssr,
  app: {
    baseURL, // /<reponame>
    head: {
      htmlAttrs: {
        lang: headConfig.lang,
      },
      title: headConfig.siteName,
      meta: [
        { charset: "utf-8" },
        { "http-equiv": "x-ua-compatible", content: "ie=edge" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        {
          name: "format-detection",
          content: "telephone=no, email=no, address=no",
        },
        // SEO関連
        { name: "description", content: headConfig.description },
        { name: "keywords", content: headConfig.keywords },
        // ogp関連
        {
          property: "og:site_name",
          content: headConfig.siteName,
        },
        { property: "og:type", content: "website" },
        { property: "og:url", content: appURL },
        { property: "og:title", content: headConfig.siteName },
        {
          property: "og:description",
          content: headConfig.description,
        },
        {
          property: "og:image",
          content: `${appURL}${headConfig.image}`,
        },
        {
          property: "og:locale",
          content: "ja_JP",
        },
        { name: "twitter:card", content: "summary" },
      ],
      link: [
        {
          rel: "icon",
          type: "image/x-icon",
          href: `${appURL}${headConfig.favicon}`,
        },
      ],
    },
  },
  i18n: {
    locales: [
      { code: "ja", iso: "ja_JP", file: "ja.js" },
      { code: "en", iso: "en-US", file: "en.js" },
    ],
    langDir: "locales/",
    lazy: true,
    defaultLocale: headConfig.lang,
  },
  runtimeConfig: {
    public: publicRuntimeConfig,
  },
  css: [
    "vuetify/lib/styles/main.sass",
    "@/assets/styles/CETEIcean.css",
    "@/assets/styles/main.css",
  ],
  build: {
    transpile: ["vuetify"],
  },
  vite: {
    define: {
      "process.env.DEBUG": false,
    },
  },
  components: {
    global: true,
    dirs: ["~/components"],
  },
});
