/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: "Deployment Helper",
  tagline: "Deploy templates with clicks",
  url: "https://deployment-helper.github.io/",
  baseUrl: "/",
  onBrokenLinks: "warn",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/logo.jpeg",
  organizationName: "deployment-helper", // Usually your GitHub org/user name.
  projectName: "Deployment Helper", // Usually your repo name.
  themeConfig: {
    navbar: {
      title: "Deployment Helper",
      logo: {
        alt: "Deployment Helper",
        src: "img/logo.jpeg",
      },
      items: [
        {
          to: "introduction/getting-started",
          label: "Getting Started",
          position: "right",
        },
        {
          to: "technical-design/design",
          label: "How Works",
          position: "right",
        },
        { to: "tutorials/github-pages", label: "Tutorials", position: "right" },
        { to: "api/api", label: "API", position: "right" },
        { to: "packages/packages", label: "Packages", position: "right" },
        { to: "blog", label: "Blog", position: "right" },
        {
          href: "https://deployment-helper.github.io/",
          label: "Github",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Docs",
          items: [
            {
              label: "Getting Started",
              to: "docs/",
            },
          ],
        },
        {
          title: "Community",
          items: [
            {
              label: "Stack Overflow",
              href: "https://stackoverflow.com/questions/tagged/docusaurus",
            },
            {
              label: "Discord",
              href: "https://discordapp.com/invite/docusaurus",
            },
            {
              label: "Twitter",
              href: "https://twitter.com/docusaurus",
            },
          ],
        },
        {
          title: "More",
          items: [
            {
              label: "Blog",
              to: "blog",
            },
            {
              label: "GitHub",
              href: "https://deployment-helper.github.io/",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Deployment Helper, Built with Docusaurus.`,
    },
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          routeBasePath: '/',
          editUrl:
            "https://github.com/facebook/docusaurus/edit/master/website/",
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            "https://github.com/facebook/docusaurus/edit/master/website/blog/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
};
