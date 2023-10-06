import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  lang: "zh-CN",
  title: "Cola777jz",
  description: "Cola777jz doc",

  theme,

  // Enable it with pwa
  // shouldPrefetch: false,
});
