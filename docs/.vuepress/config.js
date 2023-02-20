import { defaultTheme } from "@vuepress/theme-default";

export default {
  lang: "en-US",
  title: "gbadev",
  description: "Game Boy Advance development resources",
  plugins: ["@vuepress/plugin-palette", { preset: "scss" }],
  theme: defaultTheme({
    logo: "https://forum.gbadev.net/static/logo.png",
    sidebar: [
      "README.md",
      "/resources.md",
      {
        text: "GBA Doc",
        link: "https://gbadev.net/gbadoc/",
      },
      {
        text: "Events",
        children: [
          // SidebarItem
          {
            text: "GBA Winter Jam 2023",
            link: "https://itch.io/jam/gba-winter-jam-2023",
          },
          {
            text: "GBA Winter Jam 2023",
            link: "https://itch.io/jam/gba-winter-jam-2023",
          },
          "/gbajam22.md",
          {
            text: "GBA Winter Jam 2021",
            link: "https://itch.io/jam/gba-winter-jam-2021",
          },
          {
            text: "GBA Jam 2021",
            link: "https://itch.io/jam/gbajam21",
          },
        ],
      },
      {
        text: "GBA Homebrew Games",
        link: "https://hh.gbdev.io/games/gba",
      },
    ],
    contributors: false,
    navbar: [
      {
        text: "GitHub",
        link: "https://github.com/gbadev-org",
      },
      {
        text: "OpenCollective",
        link: "https://opencollective.com/gbadev",
      },
      {
        text: "Discord",
        link: "https://discord.io/gbadev",
      },
      {
        text: "Forum",
        link: "https://forum.gbadev.net",
      },
    ],
  }),
};
