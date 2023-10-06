---
title: 插件拓展
order: 1
category:
  - Tools
  - HelloVueHope
  - MD
---

# 插件拓展

[Vue-Hope](https://theme-hope.vuejs.press/zh/) 为我们提供了大量拓展支持包括：

- Markdown
  - 链接检查
  - 自定义容器
  - 选项卡
  - 代码组
  - 等等 ····
- 布局
  - 深色模式
  - 幻灯片页面‘
  - 主题色切换
  - 等等 ·····

感兴趣的话可以去 [Vue-Hope 官网查看](https://theme-hope.vuejs.press/zh/)  🤯🤯🤯

![image-20230924175134173](https://yong-gan-niu-niu-1311841992.cos.ap-beijing.myqcloud.com/images/image-20230924175134173.png)

### 1.1 评论功能

需要说明的是如果我们是使用脚手架安装的话，大部分插件时默认配置好（且开启的）

![image-20230924180000294](https://yong-gan-niu-niu-1311841992.cos.ap-beijing.myqcloud.com/images/image-20230924180000294.png)

但个别插件如评论需要我们自行配置：

主题使用 `vuepress-plugin-comment2` 提供评论支持，并将主题选项中的 `plugin.comment` 作为插件选项传递。

`vuepress-plugin-comment2` 目前支持 4 种评论服务:

- Artalk
- Giscus
- Twikoo
- Waline

此处我们采用 `Giscus` 为评论提供支持，其他服务可参考 [Vue-Hope 官网](https://theme-hope.vuejs.press/zh/config/plugins/comment.html) 对评论插件的介绍进行配置

 #### 1.1.1  Giscus 介绍

[Giscus](https://github.com/giscus/giscus) 利用 [GitHub Discussions](https://docs.github.com/en/discussions) 实现的评论系统，让访客借助 GitHub 在你的网站上留下评论和反应吧！

![image-20230924175810098](https://yong-gan-niu-niu-1311841992.cos.ap-beijing.myqcloud.com/images/image-20230924175810098.png)

#### 1.1.2 获取相关参数信息

上面我们提到一些配置信息是需要我们自己填写的例如评论：

![image-20230924175934914](https://yong-gan-niu-niu-1311841992.cos.ap-beijing.myqcloud.com/images/image-20230924175934914.png)

关于参数的介绍请参考 [Vue-Hope Giscus 选项](https://plugin-comment2.vuejs.press/zh/config/giscus.html#repo) 页面下面我们着重讲解相关参数的获取方式：

选择 giscus 连接到的仓库。请确保：

1. **该仓库是[公开的](https://docs.github.com/en/github/administering-a-repository/managing-repository-settings/setting-repository-visibility#making-a-repository-public)**，否则访客将无法查看 discussion。
2. **[giscus](https://github.com/apps/giscus) app 已安装**，否则访客将无法评论和回应。
3. **Discussions** 功能已[在你的仓库中启用](https://docs.github.com/en/github/administering-a-repository/managing-repository-settings/enabling-or-disabling-github-discussions-for-a-repository)。

4. 安装 [Giscus App ](https://github.com/settings/installations/42151733) 到 Github

![image-20230924180246027](https://yong-gan-niu-niu-1311841992.cos.ap-beijing.myqcloud.com/images/image-20230924180246027.png)

2. 打开指定仓库的 `Disscussion ` 选项

![image-20230924180344927](https://yong-gan-niu-niu-1311841992.cos.ap-beijing.myqcloud.com/images/image-20230924180344927.png)

![image-20230924180420126](https://yong-gan-niu-niu-1311841992.cos.ap-beijing.myqcloud.com/images/image-20230924180420126.png)

3. 前往 [Giscus 页面](https://giscus.app/zh-CN) 获取相关参数

![image-20230924180626894](https://yong-gan-niu-niu-1311841992.cos.ap-beijing.myqcloud.com/images/image-20230924180626894.png)

![image-20230924180644967](https://yong-gan-niu-niu-1311841992.cos.ap-beijing.myqcloud.com/images/image-20230924180644967.png)

![image-20230924180705262](https://yong-gan-niu-niu-1311841992.cos.ap-beijing.myqcloud.com/images/image-20230924180705262.png)

将对应的参数替换即可：

![image-20230924180823179](https://yong-gan-niu-niu-1311841992.cos.ap-beijing.myqcloud.com/images/image-20230924180823179.png)

#### 1.1.3 验证功能

TODO