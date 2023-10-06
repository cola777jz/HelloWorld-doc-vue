---
title: 环境安装与基础项目搭建
order: 1
category:
  - Tools
  - HelloVueHope
  - MD
---

## 一、构建 Vue-Hope 项目

### 1.1 准备运行环境

#### 1.1.1 Node 的安装

Node.js® 是一个基于 Chrome V8 引擎 的 JavaScript 运行时环境。

你需要下载并在你的电脑上安装最新的长期维护版。具体的下载可以参考 [NVM 管理工具的下载及使用](../HelloNVM/nvm-01.md)
中的内容。

::: tip

此处使用的是 `node:18.17.1` 版本

![image-20230924172532920](https://yong-gan-niu-niu-1311841992.cos.ap-beijing.myqcloud.com/images/image-20230924172532920.png)

:::

#### 1.1.2 WebStorm 开发工具的安装

WebStorm 是 Jetbrains
旗下的一款前端集成开发工具，具体的下载可以参考 [破解 IDEA  等开发工具](../HelloIDEA/idea-01.md) 中的内容。

::: tip

此处使用的是 `WebStorm:2023.2.2` 版本

![image-20230924172819048](https://yong-gan-niu-niu-1311841992.cos.ap-beijing.myqcloud.com/images/image-20230924172819048.png)

:::

#### 1.1.3 安装 pnpm

在终端（使用管理员权限）中输入下列命令安装 `pnpm`

```shell
corepack enable
corepack prepare pnpm@latest --activate
```

### 1.2 创建项目

为了避免偶然间触发一些奇怪的问题，而你自己不会解决，请尽量避免使用包含中文文字、表情符号或空格的文件路径 (
如: `C:\Users\小张\Desktop\VuePress 项目\Hope 主题❤️\`)。

建议使用纯英文路径 (如: `D:\projects\vuepress-theme-hope\`)。

在选定的位置所在文件夹中打开终端，后使用 `pnpm` 的方式初始化一个项目

```shell
pnpm create vuepress-theme-hope Vue-Hope
```

- 这里的 `Vue-Hope` 是一个参数，代表 VuePress Theme Hope
  项目的文件夹名称，在本教程中，我们将项目生成至当前目录下的 `Vue-Hope` 文件夹。

  如果你有需求，你可以更改此参数来使用一个新文件夹名称。

- 如果你的英语很不好，请在第一次选择中通过键盘 `↓` 选择 `简体中文` 并回车来在后续流程中使用中文进行显示。

- 如果你在模板初始化成功后选择立即启动开发服务器，稍等片刻，你就可以在浏览器地址栏输入 `localhost:8080/` 访问开发服务器了。

![image-20230924173230010](https://yong-gan-niu-niu-1311841992.cos.ap-beijing.myqcloud.com/images/image-20230924173230010.png)

构建完成

![image-20230924173430077](https://yong-gan-niu-niu-1311841992.cos.ap-beijing.myqcloud.com/images/image-20230924173430077.png)

### 1.3 项目命令

- `vuepress dev [dir]` 会启动一个开发服务器，以便让你在本地开发你的 VuePress 站点。
- `vuepress build [dir]` 会将你的 VuePress 站点构建成静态文件，以便你进行后续部署。
- `pnpm dlx vp-update` 升级主题和 VuePress 版本

如果你在使用 VuePress Theme Hope 模板，你可以在 `package.json` 中发现下列三个命令:

```json
{
  "scripts": {
    "docs:build": "vuepress build src",
    "docs:clean-dev": "vuepress dev src --clean-cache",
    "docs:dev": "vuepress dev src"
  }
}
```

![image-20230924173503371](https://yong-gan-niu-niu-1311841992.cos.ap-beijing.myqcloud.com/images/image-20230924173503371.png)

意味着你可以使用:

- `pnpm docs:dev` 启动开发服务器
- `pnpm docs:build` 构建项目并输出
- `pnpm docs:clean-dev` 清除缓存并启动开发服务器

::: info

如果你需要终止开发服务器，请点击终端，并连续两次按下 `Ctrl + C`。

:::

## 二、Vue-Hope 项目的基本使用

### 2.1 Vue-Hope 项目内容

#### 2.1.1 页面的生成

VuePress 是以 Markdown 为中心的。你项目中的每一个 Markdown 文件都是一个单独的页面。

默认情况下，页面的路由路径是根据你的 Markdown 文件的相对路径决定的。

由于你的项目是通过创建助手生成的，那么你会得到以下文件结构:

```shell
└─ src
   ├─ guide
   │  ├─ ...
   │  └─ page.md
   │  └─ markdown.md
   │  └─ README.md
   ├─ ...
   ├─ slide.md
   └─ README.md
```

![image-20230924174036883](https://yong-gan-niu-niu-1311841992.cos.ap-beijing.myqcloud.com/images/image-20230924174036883.png)

你的 Markdown 文件对应的路由路径为:

| 相对路径           | 路由路径            |
| ------------------ | ------------------- |
| `/README.md`       | `/`                 |
| `/slide.md`        | `/slide.html`       |
| `/guide/README.md` | `/guide/`           |
| `/guide/slide.md`  | `/guide/slide.html` |
| `/guide/page.md`   | `/guide/page.html`  |

::: finfo

`README.md` 是特例，在 Markdown
中，按照约定俗成，它会作为所在文件夹的主页。所以在渲染为网页时，它的对应路径为网页中的主页路径 `index.html`。

这应该很好理解。👨‍💻👨‍💻

:::

#### 2.1.2 Frontmatter

Frontmatter 是 VuePress 中很重要的一个概念，它用于承载 Markdown 文件的配置。Markdown
文件可以包含一个 [YAMLopen in new window](https://yaml.org/) Frontmatter。

Frontmatter 必须在 Markdown 文件的顶部，并且被包裹在一对三短划线中间。下面是一个基本的示例:

```yaml
---
lang: zh-CN
title: 页面的标题
description: 页面的描述
---

  <!-- 这里是 Markdown 内容 -->

  ...
```

你肯定注意到 Frontmatter 中的字段和 VuePress 配置文件十分类似。你可以通过 Frontmatter
来覆盖当前页面的 `lang`, `title`, `description` 等属性。因此，你可以把 Frontmatter 当作页面级作用域的配置，它通常具有最高优先级，所作配置仅对当前页面生效。

#### 2.1.3 Markdown

每一个 Markdown 文件都会被 VuePress Theme Hope 处理，将文件内容渲染为网页内容。

::: info

如果你尚不了解 Markdown，请查看 [Markdown 教程](https://theme-hope.vuejs.press/zh/cookbook/markdown/)。

大概十五分钟，你就可以学会如何书写 Markdown，看完之后记得回来！

:::

你可以尝试自己编辑 Markdown 文件来修改模板的内容。如果你已启动开发服务器，那么修改后的结果会被实时同步到开发服务器上。

::: info

- VuePress 自身对 Markdown
  语法进行了一些扩展，关于这些扩展的语法，详见 [VuePress → Markdown](https://theme-hope.vuejs.press/zh/cookbook/vuepress/markdown.html)。
- 主题通过 `vuepress-plugin-md-enhance`
  额外启用了一些语法扩展，详见 [指南 → Markdown](https://theme-hope.vuejs.press/zh/guide/get-started/markdown.html)。

:::

### 2.2 Vue-Hope 项目结构

VuePress 只控制 VuePress 项目文件夹中的文件，也就是默认模板生成的 `src` 文件夹，项目下的其他文件不受 VuePress 控制。

一个基本的项目结构如下:

```text
.
├── .github (可选的) → GitHub 配置文件存放路径
│    └── workflow → GitHub 工作流配置
│         └── docs-deploy.yml → 自动部署文档的工作流
│
├── src → 文档文件夹
│    │
│    ├── .vuepress (可选的) → VuePress 配置文件夹
│    │    │
│    │    ├── dist (默认的) → 构建输出目录
│    │    │
│    │    ├── public (可选的) → 静态资源目录
│    │    │
│    │    ├── styles (可选的) → 用于存放样式相关的文件
│    │    │
│    │    ├── config.{js,ts} (可选的) → 配置文件的入口文件
│    │    │
│    │    └── client.{js,ts} (可选的) → 客户端文件
│    │
│    ├── ... → 其他项目文档
│    │
│    └── README.md → 项目主页
│
└── package.json → Nodejs 配置文件
```

![image-20230924174055992](https://yong-gan-niu-niu-1311841992.cos.ap-beijing.myqcloud.com/images/image-20230924174055992.png)

### 2.3 Vue-Hope 基础配置

如果没有配置文件，一个 VuePress 项目只能按照预设实现有限的功能，所以为了更好的自定义你的网站，VuePress 提供了配置文件。

VuePress 使用文档文件夹中的 `.vuepress` 文件夹存放配置，所有 VuePress 相关的文件都将会被放在这里。

对于 VuePress 站点来说，`.vuepress/config.ts` (或 `.vuepress/config.js`) 是必要的配置文件。

::: tip

Vue-Hope 建议你使用 TypeScript 配置文件，以得到更好的类型提示、自动补全与错误检查。

:::

![image-20230924174236367](https://yong-gan-niu-niu-1311841992.cos.ap-beijing.myqcloud.com/images/image-20230924174236367.png)

#### 2.3.1 config.ts 的相关配置

```ts
import {defineUserConfig} from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
    base: "/",

    locales: { /*英文界面下的信息配置*/
        "/": {
            lang: "en-US",
            title: "Docs Demo",
            description: "A docs demo for vuepress-theme-hope",
        },
        "/zh/": { /*中文界面下的信息配置*/
            lang: "zh-CN",
            title: "文档演示",
            description: "vuepress-theme-hope 的文档演示",
        },
    },

    theme,

    // Enable it with pwa
    // shouldPrefetch: false,
});

```

#### 2.3.2 theme.ts 的相关配置

```ts
import {hopeTheme} from "vuepress-theme-hope";
import {enNavbar, zhNavbar} from "./navbar/index.js";
import {enSidebar, zhSidebar} from "./sidebar/index.js";

export default hopeTheme({
    hostname: "https://vuepress-theme-hope-docs-demo.netlify.app",

    author: { /*作者信息配置*/
        name: "Mr.Cola",
        url: "https://github.com/cola777jz/HelloWorld",
        email: "cola0817jz@gmail.com"
    },

    iconAssets: "fontawesome-with-brands",

    logo: "/logo.svg",

    repo: "cola777jz/HelloWorld", /*仓库信息配置*/

    docsDir: "src",

    locales: {
        "/": {
            // navbar
            navbar: enNavbar,

            // sidebar
            sidebar: enSidebar,

            /*英文下 默认页脚的配置*/
            footer: "Power by <a href=\"https://github.com/cola777jz/ygnn-vue/\" target=\"_blank\">Mr.Cola</a> | MIT Licensed, Copyright © 2023-present Mr.Cola",

            displayFooter: true,

            metaLocales: {
                editLink: "Edit this page on GitHub",
            },
        },

        /**
         * Chinese locale config
         */
        "/zh/": {
            // navbar
            navbar: zhNavbar,

            // sidebar
            sidebar: zhSidebar,

            /*中文下 默认页脚的配置*/
            footer: "Power by <a href=\"https://github.com/cola777jz/ygnn-vue/\" target=\"_blank\">Mr.Cola</a> | MIT Licensed, Copyright © 2023-present Mr.Cola",

            displayFooter: true,

            // page meta
            metaLocales: {
                editLink: "在 GitHub 上编辑此页",
            },
        },
    },

    encrypt: {
        config: {
            /*加密页面密码的配置*/
            "/demo/encrypt.html": ["1234"],
            "/zh/demo/encrypt.html": ["1234"],
        },
    },

    plugins: {
        // You should generate and use your own comment service
        comment: {
            /*评论功能相关配置*/
            provider: "Giscus",
            repo: "vuepress-theme-hope/giscus-discussions",
            repoId: "R_kgDOG_Pt2A",
            category: "Announcements",
            categoryId: "DIC_kwDOG_Pt2M4COD69",
        },

        // All features are enabled for demo, only preserve features you need here
        mdEnhance: {
            align: true,
            attrs: true,
            chart: true,
            codetabs: true,
            demo: true,
            echarts: true,
            figure: true,
            flowchart: true,
            gfm: true,
            imgLazyload: true,
            imgSize: true,
            include: true,
            katex: true,
            mark: true,
            mermaid: true,
            playground: {
                presets: ["ts", "vue"],
            },
            presentation: ["highlight", "math", "search", "notes", "zoom"],
            stylize: [
                {
                    matcher: "Recommended",
                    replacer: ({tag}) => {
                        if (tag === "em")
                            return {
                                tag: "Badge",
                                attrs: {type: "tip"},
                                content: "Recommended",
                            };
                    },
                },
            ],
            sub: true,
            sup: true,
            tabs: true,
            vPre: true,
            vuePlayground: true,
        },
    },
});
```

#### 2.3.3 导航栏相关配置

```ts
import {navbar} from "vuepress-theme-hope";

export const zhNavbar = navbar([
    "/zh/",
    "/zh/demo/",
    {
        text: "指南",
        icon: "lightbulb",
        prefix: "/zh/guide/",
        children: [
            {
                text: "Bar",
                icon: "lightbulb",
                prefix: "bar/",
                children: ["baz", {text: "...", icon: "ellipsis", link: ""}],
            },
            {
                text: "Foo",
                icon: "lightbulb",
                prefix: "foo/",
                children: ["ray", {text: "...", icon: "ellipsis", link: ""}],
            },
        ],
    },
    {
        text: "V2 文档",
        icon: "book",
        link: "https://theme-hope.vuejs.press/zh/",
    },
]);

```

#### 2.3.4 侧边栏相关配置

```ts
import {sidebar} from "vuepress-theme-hope";

export const zhSidebar = sidebar({
    "/zh/": [
        "",
        {
            text: "案例",
            icon: "laptop-code",
            prefix: "demo/",
            link: "demo/",
            children: "structure",
        },
        {
            text: "文档",
            icon: "book",
            prefix: "guide/",
            children: "structure",
        },
        "slides",
    ],
});

```

#### 2.3.5 主页相关配置

```markdown
---
home: true
icon: home
title: 项目主页
heroImage: /logo.svg
bgImage: https://theme-hope-assets.vuejs.press/bg/6-light.svg
bgImageDark: https://theme-hope-assets.vuejs.press/bg/6-dark.svg
bgImageStyle:
  background-attachment: fixed
heroText: 项目名称
tagline: 你可以在这里放置或是整个项目的描述。
actions:
  - text: 使用指南 💡
    link: ./demo/
    type: primary

  - text: 文档
    link: ./guide/

highlights:
  - header: 易于安装
    image: /assets/image/box.svg
    bgImage: https://theme-hope-assets.vuejs.press/bg/3-light.svg
    bgImageDark: https://theme-hope-assets.vuejs.press/bg/3-dark.svg
    highlights:
      - title: 运行 <code>pnpm create vuepress-theme-hope hope-project</code> 以创建一个新的主题项目。
      - title: 在已有项目根目录下运行 <code>pnpm create vuepress-theme-hope add .</code> 以在项目中添加主题。

  - header: 在 Markdown 中添加你想要的内容
    description: 我们扩展了标准的 CommonMark 规范，为你添加了成吨功能。
    image: /assets/image/markdown.svg
    bgImage: https://theme-hope-assets.vuejs.press/bg/2-light.svg
    bgImageDark: https://theme-hope-assets.vuejs.press/bg/2-dark.svg
    bgImageStyle:
      background-repeat: repeat
      background-size: initial
    features:
      - title: 链接检查
        icon: clipboard-check
        details: 检查 Markdown 链接
        link: https://theme-hope.vuejs.press/zh/guide/markdown/others.html#link-check

      - title: 自定义容器支持
        icon: box-archive
        details: 用样式装饰 Markdown 内容
        link: https://theme-hope.vuejs.press/zh/guide/markdown/container.html

      - title: 选项卡
        icon: table-columns
        details: 使用选项卡对相似内容进行分组
        link: https://theme-hope.vuejs.press/zh/guide/markdown/tabs.html

      - title: 代码组
        icon: code
        details: 使用选项卡对相似代码进行分组
        link: https://theme-hope.vuejs.press/zh/guide/markdown/code-tabs.html

      - title: 自定义对齐支持
        icon: align-center
        details: 让你在 Markdown 中对段落进行对齐
        link: https://theme-hope.vuejs.press/zh/guide/markdown/align.html

      - title: 自定义属性支持
        icon: code
        details: 让你为 Markdown 元素添加属性
        link: https://theme-hope.vuejs.press/zh/guide/markdown/attrs.html

      - title: 上下角标支持
        icon: superscript
        details: 你的 Markdown 现在将支持上下角标
        link: https://theme-hope.vuejs.press/zh/guide/markdown/sup-sub.html

      - title: 脚注
        icon: quote-left
        details: 你的 Markdown 现在将支持脚注
        link: https://theme-hope.vuejs.press/zh/guide/markdown/footnote.html

      - title: 标记支持
        icon: highlighter
        details: 让你在 Markdown 中对词句进行标记
        link: https://theme-hope.vuejs.press/zh/guide/markdown/mark.html

      - title: 任务列表
        icon: square-check
        details: 在 Markdown 中使用任务列表
        link: https://theme-hope.vuejs.press/zh/guide/markdown/tasklist.html

      - title: 图片语法
        icon: image
        details: 使用改进的语法指定图片大小与颜色模式
        link: https://theme-hope.vuejs.press/zh/guide/markdown/image.html

      - title: 卡片支持
        icon: square
        details: 在 Markdown 中展示卡片
        link: https://theme-hope.vuejs.press/zh/guide/markdown/card.html

      - title: 图表支持
        icon: chart-simple
        details: 在 Markdown 中展示图表
        link: https://theme-hope.vuejs.press/zh/guide/markdown/chart.html

      - title: 流程图支持
        icon: route
        details: 可以在 Markdown 中直接写出流程图
        link: https://theme-hope.vuejs.press/zh/guide/markdown/flowchart.html

      - title: Mermaid 支持
        icon: chart-pie
        details: 可以在 Markdown 中添加 Mermaid 图例
        link: https://theme-hope.vuejs.press/zh/guide/markdown/mermaid.html

      - title: Tex 支持
        icon: square-root-variable
        details: Markdown 现在也可以支持 Tex 语法以显示公式
        link: https://theme-hope.vuejs.press/zh/guide/markdown/tex.html

      - title: 导入文件支持
        icon: fab fa-markdown
        details: 将你的文档分段，并在 Markdown 中导入
        link: https://theme-hope.vuejs.press/zh/guide/markdown/include.html

      - title: 交互演示支持
        icon: code
        details: 你可以在 Markdown 中添加交互演示
        link: https://theme-hope.vuejs.press/zh/guide/markdown/playground.html

      - title: Vue 交互演示支持
        icon: fab fa-vuejs
        details: 在交互演示中展示 Vue 组件
        link: https://theme-hope.vuejs.press/zh/guide/markdown/vue-playground.html

      - title: 代码案例支持
        icon: laptop-code
        details: 你可以很方便的插入代码案例
        link: https://theme-hope.vuejs.press/zh/guide/markdown/demo/

      - title: 幻灯片支持
        icon: person-chalkboard
        details: 你可以直接在 Markdown 中插入幻灯片
        link: https://theme-hope.vuejs.press/zh/guide/markdown/presentation/

  - header: 布局
    description: 一个带有完整无障碍支持的响应式布局。
    image: /assets/image/layout.svg
    bgImage: https://theme-hope-assets.vuejs.press/bg/5-light.svg
    bgImageDark: https://theme-hope-assets.vuejs.press/bg/5-dark.svg
    highlights:
      - title: 布局增强
        icon: object-group
        details: 添加路径导航、页脚、改进的导航栏、改进的页面导航等。
        link: https://theme-hope.vuejs.press/zh/guide/layout/

      - title: 深色模式
        icon: circle-half-stroke
        details: 可以自由切换浅色模式与深色模式
        link: https://theme-hope.vuejs.press/zh/guide/interface/darkmode.html

      - title: 主题色切换
        icon: palette
        details: 支持自定义主题色并允许用户在预设的主题颜色之间切换
        link: https://theme-hope.vuejs.press/zh/guide/interface/theme-color.html

      - title: 幻灯片页面
        icon: person-chalkboard
        details: 添加幻灯片页面以显示你喜欢的内容
        link: https://theme-hope.vuejs.press/zh/guide/layout/slides

      - title: 更多
        icon: ellipsis
        details: RTL 布局，打印支持，全局按钮等
        link: https://theme-hope.vuejs.press/zh/guide/interface/others.html

  - header: 新功能
    image: /assets/image/features.svg
    bgImage: https://theme-hope-assets.vuejs.press/bg/1-light.svg
    bgImageDark: https://theme-hope-assets.vuejs.press/bg/1-dark.svg
    features:
      - title: 浏览量与评论
        icon: comment-dots
        details: 配合 Waline 来开启阅读量统计与评论支持
        link: https://theme-hope.vuejs.press/zh/guide/feature/comment.html

      - title: 文章信息
        icon: circle-info
        details: 为你的文章添加作者、写作日期、预计阅读时间、字数统计等信息
        link: https://theme-hope.vuejs.press/zh/guide/feature/page-info.html

      - title: 文章加密
        icon: lock
        details: 你可以为你的特定页面或特定目录进行加密，以便陌生人不能随意访问它们
        link: https://theme-hope.vuejs.press/zh/guide/feature/encrypt.html

      - title: 搜索支持
        icon: search
        details: 支持 docsearch 和基于客户端的搜索
        link: https://theme-hope.vuejs.press/zh/guide/feature/search.html

      - title: 代码复制
        icon: copy
        details: 一键复制代码块中的代码
        link: https://theme-hope.vuejs.press/zh/guide/feature/copy-code.html

      - title: 图片预览
        icon: image
        details: 像相册一样允许你浏览、缩放并分享你的页面图片
        link: https://theme-hope.vuejs.press/zh/guide/feature/photo-swipe.html

  - header: 博客
    description: 通过主题创建个人博客
    image: /assets/image/blog.svg
    bgImage: https://theme-hope-assets.vuejs.press/bg/5-light.svg
    bgImageDark: https://theme-hope-assets.vuejs.press/bg/5-dark.svg
    highlights:
      - title: 博客功能
        icon: blog
        details: 通过文章的日期、标签和分类展示文章
        link: https://theme-hope.vuejs.press/zh/guide/blog/intro.html

      - title: 博客主页
        icon: home
        details: 全新播客主页
        link: https://theme-hope.vuejs.press/zh/guide/blog/home.html

      - title: 博主信息
        icon: home
        details: 自定义名称、头像、座右铭和社交媒体链接
        link: https://theme-hope.vuejs.press/zh/guide/blog/blogger.html

      - title: 时间线
        icon: home
        details: 在时间线中浏览和通读博文
        link: https://theme-hope.vuejs.press/zh/guide/blog/timeline.html

  - header: 高级
    description: 增强站点与用户体验的高级功能
    image: /assets/image/advanced.svg
    bgImage: https://theme-hope-assets.vuejs.press/bg/4-light.svg
    bgImageDark: https://theme-hope-assets.vuejs.press/bg/4-dark.svg
    highlights:
      - title: SEO 增强
        icon: dumbbell
        details: 将最终生成的网页针对搜索引擎进行优化。
        link: https://theme-hope.vuejs.press/zh/guide/advanced/seo.html

      - title: Sitemap
        icon: sitemap
        details: 自动为你的网站生成 Sitemap
        link: https://theme-hope.vuejs.press/zh/guide/advanced/sitemap.html

      - title: Feed 支持
        icon: rss
        details: 生成你的 Feed，并通知你的用户订阅它
        link: https://theme-hope.vuejs.press/zh/guide/advanced/feed.html

      - title: PWA 支持
        icon: mobile-screen
        details: 让你的网站更像一个 APP
        link: https://theme-hope.vuejs.press/zh/guide/advanced/pwa.html

copyright: false
footer: 使用 <a href="https://theme-hope.vuejs.press/zh/" target="_blank">VuePress Theme Hope</a> 主题 | MIT 协议, 版权所有 © 2019-present Mr.Hope
---

这是项目主页的案例。你可以在这里放置你的主体内容。

想要使用此布局，你需要在页面 front matter 中设置 `home: true`。

配置项的相关说明详见 [项目主页配置](https://theme-hope.vuejs.press/zh/guide/layout/home/)。

```