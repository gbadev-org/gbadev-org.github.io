module.exports = {
    lang: 'en-US',
  title: 'gbadev',
  description: 'Game Boy Advance development resources',
  plugins:
    [
      '@vuepress/plugin-palette',
      { preset: 'scss' },
    ],
  themeConfig: {
    logo: 'https://vuejs.org/images/logo.png',
        sidebar: [
      // SidebarItem
      {
        text: 'Resources',
        link: '/'}],
    navbar: [
      // NavbarItem
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
    ],
  },
}