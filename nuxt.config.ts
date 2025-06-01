import { fileURLToPath, URL } from 'node:url'

export default defineNuxtConfig({
  devtools: { enabled: true },

  alias: {
    '@': fileURLToPath(new URL('./', import.meta.url)),
    '~': fileURLToPath(new URL('./', import.meta.url)),
    '@assets': fileURLToPath(new URL('./assets', import.meta.url)),
    '@components': fileURLToPath(new URL('./components', import.meta.url)),
    '@styles': fileURLToPath(new URL('./assets/styles', import.meta.url)),
    '@public': fileURLToPath(new URL('./public', import.meta.url)),
  },

  app: {
    head: {
      title: 'IT Sharks',
      viewport: 'width=device-width, initial-scale=1',
      meta: [
        {
          name: 'IT Sharks',
          content: 'Описание сайта',
        },
      ],
      link: [{ rel: 'icon', href: '/favicon.ico' }],
    },
  },
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "~/assets/styles/variables.scss" as *;',
        },
      },
    },
  },
  css: ['~/assets/styles/main.scss'],
  modules: ['@nuxt/image'],
})
