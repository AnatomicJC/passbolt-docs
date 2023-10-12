// @ts-check

/**
 * @type {import('@docusaurus/plugin-content-docs/src/sidebars/types').SidebarConfig}
 */
const userSidebar = [
  {
    type: "category",
    label: "Discover",
    collapsed: false,
    link: { type: "generated-index", slug: 'user/discover' },
    items: [{ type: "autogenerated", dirName: "user/discover" }],
  },
  {
    type: "category",
    label: "Start",
    collapsed: false,
    link: { type: "generated-index", slug: 'user/start' },
    items: [{ type: "autogenerated", dirName: "user/start" }],
  },
  {
    type: "category",
    label: "Security",
    collapsed: false,
    link: { type: "generated-index", slug: 'user/security' },
    items: [{ type: "autogenerated", dirName: "user/security" }],
  },
  {
    type: "category",
    label: "Contribute",
    collapsed: false,
    link: { type: "generated-index", slug: 'user/contribute' },
    items: [{ type: "autogenerated", dirName: "user/contribute" }],
  },
  {
    type: "category",
    label: "Legal",
    collapsed: false,
    link: { type: "generated-index", slug: 'user/legal' },
    items: [{ type: "autogenerated", dirName: "user/legal" }],
  },
];
module.exports = userSidebar;
