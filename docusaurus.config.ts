import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";
import tailwindPlugin from "./plugins/tailwind-config.cjs";

const config: Config = {
  title: "KOAN PROTOCOL",
  tagline: "Koan protocol docs",
  favicon: "img/favicon.ico",

  // Set the production url of your site here
  url: "https://your-docusaurus-site.example.com",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "koan protocol", // Usually your GitHub org/user name.
  projectName: "koan protocol docs", // Usually your repo name.

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      {
        docs: {
          sidebarPath: "./sidebars.ts",
          routeBasePath: "/",
          editUrl:
            "https://github.com/koanprotocol/docs/tree/main/packages/create-docusaurus/templates/shared/",
        },
        blog: false,
        theme: {
          customCss: "./src/css/custom.css",
        },
      } satisfies Preset.Options,
    ],
  ],

  plugins: [tailwindPlugin],

  themeConfig: {
    // Replace with your project's social card
    image: "img/docusaurus-social-card.jpg",
    navbar: {
      title: "KOAN",
      logo: {
        alt: "Koan Logo",
        src: "img/koanlogo.png",
      },
      items: [
        {
          label: "Introduction",
          position: "left",
          to: "/introduction/coming-soon",
          activeBasePath: "/concepts",
        },
        // {
        //   type: "docSidebar",
        //   sidebarId: "tutorialSidebar",
        //   position: "left",
        //   label: "Tutorial",
        // },
        // {
        //   type: "docSidebar",
        //   sidebarId: "introductionSidebar",
        //   position: "left",
        //   label: "Introduction",
        // },

        {
          label: "Contracts",
          position: "left",
          to: "/developers/coming-soon",
          activeBasePath: "/contracts",
        },
        {
          label: "Apps",
          position: "left",
          to: "/apps/coming-soon",
          activeBasePath: "/apps",
        },

        {
          label: "Discord",
          position: "right",
          to: "https://discord.com/invite/MPAmCCzT7S",
        },
        {
          label: "GitHub",
          position: "right",
          to: "https://github.com/koan-protocol",
        },
        {
          label: "Links",
          position: "right",
          to: "https://linktr.ee/koanprotocol",
        },
      ],
      hideOnScroll: true,
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Developer",
          items: [
            {
              label: "Deployment Address",
              to: "/developers",
            },
            {
              label: "Contracts",
              href: "https://github.com/Koan-Protocol/Koan-Contracts-V1",
            },
            {
              label: "API",
              href: "https://github.com/Koan-Protocol/subgraphs",
            },
            {
              label: "Changelog",
              to: "/developers/changelog",
            },
          ],
        },
        {
          title: "Community",
          items: [
            {
              label: "Governance",
              href: "https://koanprotocol.xyz/stake",
            },
            {
              label: "Discord",
              href: "https://discord.com/invite/MPAmCCzT7S",
            },
            {
              label: "X(Twitter)",
              href: "https://twitter.com/koanprotocol",
            },
            {
              label: "Blog",
              href: "https://medium.com/koanprotocol",
            },
          ],
        },
        {
          title: "Ecosystem",
          items: [
            {
              label: "Website",
              href: "https://www.koanprotocol.xyz/",
            },
            {
              label: "App",
              href: "https://www.koanprotocol.xyz/swap",
            },
            {
              label: "Analytics",
              href: "https://www.koanprotocol.xyz/analytics",
            },
            {
              label: "Token Lists",
              href: "https://www.koanprotocol.xyz/analytics/tokens",
            },
          ],
        },
      ],
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
