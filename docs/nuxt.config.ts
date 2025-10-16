export default defineNuxtConfig({
  extends: ['docus'],
  modules: ['@nuxtjs/plausible', '@nuxtjs/i18n'],
  css: ['~/assets/css/main.css'],
  site: {
    name: 'KG6-Codex',
  },
  compatibilityDate: '2025-07-18',
  nitro: {
    prerender: {
      routes: ['/']
    }
  },
  i18n: {
    defaultLocale: 'en',
    locales: [{
      code: 'en',
      name: 'English',
    }],
  },
  llms: {
    domain: 'https://kg6-codex.vercel.app',
    title: 'KG6-Codex',
    description: 'Create beautiful docs with Markdown & Vue components.',
    full: {
      title: 'KG6-Codex',
      description: 'Create beautiful docs with Markdown & Vue components.',
    },
  },
})
