import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'Physical AI & Humanoid Robotics',
  tagline: 'Learn ROS2, Digital Twins, NVIDIA Isaac, and Vision-Language-Action Systems',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://your-docusaurus-site.example.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'facebook', // Usually your GitHub org/user name.
  projectName: 'docusaurus', // Usually your repo name.

  onBrokenLinks: 'throw',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  plugins: [
    // Plugin to expose environment variables to the client
    async function myPlugin(context, options) {
      return {
        name: 'docusaurus-plugin-env',
        configureWebpack(config, isServer) {
          const apiBaseUrl = process.env.REACT_APP_API_BASE_URL || 'http://localhost:8000';
          return {
            resolve: {
              fallback: {
                process: require.resolve('process/browser'),
              },
            },
            plugins: [
              new (require('webpack').DefinePlugin)({
                'process.env.REACT_APP_API_BASE_URL': JSON.stringify(apiBaseUrl),
              }),
            ],
          };
        },
      };
    },
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    colorMode: {
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'Physical AI & Humanoid Robotics',
      logo: {
        alt: 'Physical AI',
        src: 'img/site-logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Book',
        },
        {
          to: '/docs/Module-1-ROS2/Week-1/digital-vs-physical-ai',
          label: 'Modules',
          position: 'left',
        },
        {
          href: 'https://github.com/your-repo',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Course',
          items: [
            {
              label: 'Introduction',
              to: '/docs/intro',
            },
            {
              label: 'Module 1: ROS2',
              to: '/docs/Module-1-ROS2/Week-1/digital-vs-physical-ai',
            },
            {
              label: 'Module 2: Digital Twin',
              to: '/docs/Module-2-Digital-Twin/Week-4/setting-up-gazebo-humanoid-simulation',
            },
          ],
        },
        {
          title: 'Advanced',
          items: [
            {
              label: 'Module 3: NVIDIA Isaac',
              to: '/docs/Module-3-NVIDIA-Isaac/Week-7/generating-synthetic-data-training',
            },
            {
              label: 'Module 4: VLA Models',
              to: '/docs/Module-4-Vision-Language-Action/Week-10/building-high-level-cognitive-execution-pipeline',
            },
          ],
        },
        {
          title: 'Links',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/your-repo',
            },
          ],
        },
      ],
      copyright: "Made with \u2764\uFE0F by Urooj Fatima",
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
