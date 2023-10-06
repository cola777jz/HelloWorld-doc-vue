import { sidebar } from "vuepress-theme-hope";

export default sidebar({
  "/": [
    "",
    {
      text: "工具实用类 🔧🔧",
      icon: "https://yong-gan-niu-niu-1311841992.cos.ap-beijing.myqcloud.com/images/%E5%B7%A5%E5%85%B7.svg",
      prefix: "Tools/",
      link: "Tools/",
      children: "structure",
    },
    {
      text: "技术类 🧑‍💻🧑‍💻",
      icon: "https://yong-gan-niu-niu-1311841992.cos.ap-beijing.myqcloud.com/images/%E6%8A%80%E5%B7%A7.svg",
      prefix: "Skills/",
      link: "Skills/",
      children: "structure",
    },
    {
      text: "计算机科学与技术",
      icon: "https://yong-gan-niu-niu-1311841992.cos.ap-beijing.myqcloud.com/images/%E5%AD%A6%E4%B9%A0.svg",
      prefix: "Postgradute/",
      link: "Postgradute/",
      children: "structure",
    }
  ],
});
