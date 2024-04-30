import { defineClientConfig } from "vuepress/client";
import CodeTabs from "E:/NOTES/my_notes/node_modules/vuepress-plugin-md-enhance/lib/client/components/CodeTabs.js";
import { hasGlobalComponent } from "E:/NOTES/my_notes/node_modules/@vuepress/helper/lib/client/index.js";
import { CodeGroup, CodeGroupItem } from "E:/NOTES/my_notes/node_modules/vuepress-plugin-md-enhance/lib/client/compact/index.js";
import CodeDemo from "E:/NOTES/my_notes/node_modules/vuepress-plugin-md-enhance/lib/client/components/CodeDemo.js";
import MdDemo from "E:/NOTES/my_notes/node_modules/vuepress-plugin-md-enhance/lib/client/components/MdDemo.js";
import "E:/NOTES/my_notes/node_modules/vuepress-plugin-md-enhance/lib/client/styles/figure.scss";
import { useHintContainers } from "E:/NOTES/my_notes/node_modules/vuepress-plugin-md-enhance/lib/client/composables/useHintContainers.js";
import "E:/NOTES/my_notes/node_modules/vuepress-plugin-md-enhance/lib/client/styles/hint/index.scss";
import Tabs from "E:/NOTES/my_notes/node_modules/vuepress-plugin-md-enhance/lib/client/components/Tabs.js";
import "E:/NOTES/my_notes/node_modules/vuepress-plugin-md-enhance/lib/client/styles/tasklist.scss";

export default defineClientConfig({
  enhance: ({ app }) => {
    app.component("CodeTabs", CodeTabs);
    if(!hasGlobalComponent("CodeGroup", app)) app.component("CodeGroup", CodeGroup);
    if(!hasGlobalComponent("CodeGroupItem", app)) app.component("CodeGroupItem", CodeGroupItem);
    app.component("CodeDemo", CodeDemo);
    app.component("MdDemo", MdDemo);
    app.component("Tabs", Tabs);
  },
  setup: () => {
useHintContainers();
  }
});
