import type { SidebarConfig } from "@vuepress/theme-default";
export const sidebar: SidebarConfig = {
    "/guide/": [
        { text: "侧边栏2", children: ["/guide/side1.md", "/guide/side2.md"] },
        { text: "侧边栏1", children: ["/guide/guide1.md", "/guide/guide2.md"] },
    ],
    "/plugin/": [
        { text: "插件", children: ["/plugin/side1.md", "/plugin/side2.md"] },
        {
            text: "组件",
            children: ["/plugin/comp.md"],
        },
    ],
    "/side/": [{ text: "侧边", children: ["/side/side1.md", "/side/side2.md"] }],
};
