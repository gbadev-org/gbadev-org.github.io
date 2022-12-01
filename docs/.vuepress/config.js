import { defaultTheme } from '@vuepress/theme-default'

export default {
  lang: 'en-US',
  title: 'gbadev',
  description: 'Game Boy Advance development resources',
  plugins: [
    '@vuepress/plugin-palette',
    { preset: 'scss' },
  ],
  theme: defaultTheme({
    logo: 'https://forum.gbadev.net/static/logo.png',
    sidebar: [
      'README.md',
      '/gbajam22.md',
    ],
    navbar: [
      {
        text: 'GitHub',
        link: 'https://github.com/gbdev',
      },
      {
        text: 'Patreon',
        link: 'https://www.patreon.com/gbdev01',
      },
      {
        text: 'Discord',
        link: 'https://discord.io/gbadev',
      },
      {
        text: 'Forum',
        link: 'https://forum.gbadev.net',
      }
    ],
  }),
}