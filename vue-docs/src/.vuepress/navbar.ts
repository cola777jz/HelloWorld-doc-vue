import { navbar } from "vuepress-theme-hope";

export default navbar([
  "/",
  {
    text: "勇敢牛牛",
    icon: "https://yong-gan-niu-niu-1311841992.cos.ap-beijing.myqcloud.com/%E7%89%9B%E7%89%9B.svg",
    prefix: "/Ygnn",
    children: [
      {
        text: "Java Demo(周哥 Java 基础)",
        icon: "https://yong-gan-niu-niu-1311841992.cos.ap-beijing.myqcloud.com/images/%E6%A1%88%E4%BE%8B.svg",
        prefix: "/JavaDemo",
        children: ["", { text: "...", icon: "ellipsis", link: "" }],
      },
      {
        text: "ColaAList",
        icon: "https://yong-gan-niu-niu-1311841992.cos.ap-beijing.myqcloud.com/%E7%BD%91%E7%9B%98.svg",
        prefix: "/ColaAList",
        children: ["", { text: "...", icon: "ellipsis", link: "" }],
      }
    ],
  },
  {
    text: "工具实用类 🔧🔧",
    icon: "https://yong-gan-niu-niu-1311841992.cos.ap-beijing.myqcloud.com/images/%E5%B7%A5%E5%85%B7.svg",
    prefix: "/Tools",
    children: [
      {
        text: "IDEA 的安装和使用",
        icon: "https://yong-gan-niu-niu-1311841992.cos.ap-beijing.myqcloud.com/images/intellijidea.svg",
        prefix: "/HelloIDEA",
        children: ["", { text: "...", icon: "ellipsis", link: "" }],
      },
      {
        text: "使用 Vue-Hope 搭建博客",
        icon: "https://yong-gan-niu-niu-1311841992.cos.ap-beijing.myqcloud.com/images/file_type_vueconfig.svg",
        prefix: "/HelloVueHope",
        children: ["", { text: "...", icon: "ellipsis", link: "" }],
      },
      {
        text: "快来帮女朋友修 C 盘",
        icon: "https://yong-gan-niu-niu-1311841992.cos.ap-beijing.myqcloud.com/images/Windows.svg",
        prefix: "/HelloWindows",
        children: ["", { text: "...", icon: "ellipsis", link: "" }],
      },
    ],
  },
  {
    text: "技术类 🧑‍💻🧑‍",
    icon: "https://yong-gan-niu-niu-1311841992.cos.ap-beijing.myqcloud.com/images/%E6%8A%80%E5%B7%A7.svg",
    prefix: "/Skills",
    children: [
      {
        text: "Java 1.8 新特性概览",
        icon: "https://yong-gan-niu-niu-1311841992.cos.ap-beijing.myqcloud.com/images/java.svg",
        prefix: "/HelloJava8",
        children: ["", { text: "...", icon: "ellipsis", link: "" }],
      },
      {
        text: "MyBatisPlus 教程",
        icon: "https://yong-gan-niu-niu-1311841992.cos.ap-beijing.myqcloud.com/images/mybatisplus.svg",
        prefix: "/HelloMyBatisPlus",
        children: ["", { text: "...", icon: "ellipsis", link: "" }],
      },
      {
        text: "Lombok",
        icon: "https://yong-gan-niu-niu-1311841992.cos.ap-beijing.myqcloud.com/images/%E8%BE%A3%E6%A4%92.svg",
        prefix: "/HelloLombok",
        children: ["", { text: "...", icon: "ellipsis", link: "" }],
      },
      {
        text: "Maven 的使用",
        icon: "https://yong-gan-niu-niu-1311841992.cos.ap-beijing.myqcloud.com/images/maven.svg",
        prefix: "/HelloMaven",
        children: ["", { text: "...", icon: "ellipsis", link: "" }],
      },
    ],
  },
  {
    text: "计算机科学与技术",
    icon: "https://yong-gan-niu-niu-1311841992.cos.ap-beijing.myqcloud.com/images/%E5%AD%A6%E4%B9%A0.svg",
    prefix: "/Postgradute",
    children: [
      {
        text: "英语",
        icon: "https://yong-gan-niu-niu-1311841992.cos.ap-beijing.myqcloud.com/images/%E8%8B%B1%E8%AF%AD.svg",
        prefix: "/English",
        children: ["", { text: "...", icon: "ellipsis", link: "" }],
      },
      {
        text: "数学",
        icon: "https://yong-gan-niu-niu-1311841992.cos.ap-beijing.myqcloud.com/images/%E6%95%B0%E5%AD%A6%EF%BC%8C%E7%9B%B4%E5%B0%BA.svg",
        prefix: "/Math",
        children: ["", { text: "...", icon: "ellipsis", link: "" }],
      },
    ],
  },
  {
    text: "Cola",
    icon: "https://yong-gan-niu-niu-1311841992.cos.ap-beijing.myqcloud.com/images/%E5%BF%83%E5%8A%A8.svg",
    link: "http://117.72.10.170",
    children: [
      {
        text: "ColaAlist ",
        icon: "https://yong-gan-niu-niu-1311841992.cos.ap-beijing.myqcloud.com/images/%E5%88%9B%E4%B8%9A%E9%A1%B9%E7%9B%AE.svg",
        link: "http://117.72.10.170:5244/"
      },
      {
        text: "Docsify ",
        icon: "https://yong-gan-niu-niu-1311841992.cos.ap-beijing.myqcloud.com/images/%E6%96%87%E6%A1%A3.svg",
        link: "http://117.72.10.170:81/"
      },
      {
        text: "Memos ",
        icon: "https://yong-gan-niu-niu-1311841992.cos.ap-beijing.myqcloud.com/images/%E6%97%A5%E5%BF%97.svg",
        link: "http://117.72.10.170:5230/"
      },
    ]
  },
  {
    text: "更新日志 ",
    icon: "https://yong-gan-niu-niu-1311841992.cos.ap-beijing.myqcloud.com/images/%E6%9B%B4%E6%96%B0.svg",
    link: "/CHANGELOG.md"
  }
]);
