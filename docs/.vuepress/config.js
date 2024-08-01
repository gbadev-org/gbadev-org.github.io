import { defaultTheme } from "@vuepress/theme-default";

export default {
  lang: "en-US",
  title: "gbadev",
  description: "Game Boy Advance development resources",
  head: [
    ['script', {}, `
        var _paq = window._paq = window._paq || [];
        /* tracker methods like "setCustomDimension" should be called before "trackPageView" */
        _paq.push(['trackPageView']);
        _paq.push(['enableLinkTracking']);
        (function() {
          var u="//stats.gbdev.io/";
          _paq.push(['setTrackerUrl', u+'matomo.php']);
          _paq.push(['setSiteId', '3']);
          var d=document, g=d.createElement('script'), s=d.getElementsByTagName('script')[0];
          g.async=true; g.src=u+'matomo.js'; s.parentNode.insertBefore(g,s);
        })();
    `],
    ["link", { rel: "icon", type: "image/png", sizes: "32x32", href: "/favicons/favicon-32.png" }],
    ["link", { rel: "icon", type: "image/png", sizes: "128x128", href: "/favicons/favicon-128.png" }],
    ["link", { rel: "icon", type: "image/png", sizes: "180x180", href: "/favicons/favicon-180.png" }],
    ["link", { rel: "icon", type: "image/png", sizes: "192x192", href: "/favicons/favicon-192.png" }],
    ["meta", { property: "og:site_name", content: "gbadev.net" }],
    ["meta", { name: "twitter:card", content: "summary" }],
    ["meta", { name: "twitter:site", content: "@gbdev0" }],
    ["meta", { name: "og:image", content: "https://gbadev.net/images/logo.png" }],
  ],
  plugins: ["@vuepress/plugin-palette", { preset: "scss" }],
  theme: defaultTheme({
    logo: "/images/logo.png",
    sidebar: [
      "README.md",
      "getting-started.md",
      "/resources.md",
      {
        text: "GBA Doc",
        link: "https://gbadev.net/gbadoc/",
      },
      {
        text: "TONC, the GBA tutorial",
        link: "https://gbadev.net/tonc/",
      },
      {
        text: "Events",
        children: [
          // SidebarItem
          {
            text: "GBA Jam 2024",
            link: "https://itch.io/jam/gbajam24",
          },
          {
            text: "GBA Microjam 2023",
            link: "https://itch.io/jam/gba-microjam-23",
          },
          {
            text: "GBA Winter Jam 2023",
            link: "https://itch.io/jam/gba-winter-jam-23",
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
        text: "Mastodon",
        link: "https://fedi.gbdev.io/@gbadev",
        rel: "me",
      },
      {
        text: "OpenCollective",
        link: "https://opencollective.com/gbadev",
      },
      {
        text: "Discord",
        link: "https://discord.gg/ctGSNxRkg2",
      },
      {
        text: "Forum",
        link: "https://forum.gbadev.net",
      },
    ],
  }),
};
