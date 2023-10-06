---
title: ColaAList 基本使用
order: 1
category:
  - Ygnn
  - ColaAList
  - MD
---

## 一、在线视频播放

:::info

该功能可以让你在 AList 中直接观看网盘中的视频

Alist 挂载的 百度网盘如果不替换 User-Agent 的话会存在视频加载不出来等情况 为此我们可以通过浏览器插件 `user-agent-switcher` 来解决

:::

[Alist 对 添加-user-agent-使用示例 的说明](https://alist.nn.ci/zh/guide/drivers/baidu.html#%E6%B7%BB%E5%8A%A0-user-agent-%E4%BD%BF%E7%94%A8%E7%A4%BA%E4%BE%8B) 

![image-20230923203847147](https://yong-gan-niu-niu-1311841992.cos.ap-beijing.myqcloud.com/images/image-20230923203847147.png)

### User-Agent-Switcher 插件下载及配置

:::danger

本人使用中发现开启插件后 Cloudflare 验证可能会过不了（一直卡在重复验证）

可能是我的 UA 设置不全 （有大佬知道的话 call 一下）因此建议装在不常用的浏览器中 （或者也可以在需要验证的时候关闭该插件即可）

:::

- [Chrome 拓展](https://chrome.google.com/webstore/detail/user-agent-switcher-and-m/bhchdcejhohfmigjafbampogmaanbfkg/related)
- [Edege 拓展](https://microsoftedge.microsoft.com/addons/detail/useragent-switcher-and-m/cnjkedgepfdpdbnepgmajmmjdjkjnifa)

![image-20230923203516132](https://yong-gan-niu-niu-1311841992.cos.ap-beijing.myqcloud.com/images/image-20230923203516132.png)

![image-20230923203548084](https://yong-gan-niu-niu-1311841992.cos.ap-beijing.myqcloud.com/images/image-20230923203548084.png)

#### 未设置前

![image-20231006161921658](https://yong-gan-niu-niu-1311841992.cos.ap-beijing.myqcloud.com/images/image-20231006161921658.png)

#### 设置后

修改 userAgent 为： `pan.baidu.com`

![image-20230923203606064](https://yong-gan-niu-niu-1311841992.cos.ap-beijing.myqcloud.com/images/image-20230923203606064.png)

#### 验证

纵享丝滑 ~ 🍫🍫

![image-20230923203751054](https://yong-gan-niu-niu-1311841992.cos.ap-beijing.myqcloud.com/images/image-20230923203751054.png)

## 二、破解限速

:::danger

- 如果 IDM 配置了代理 proxy 的话需要手动过滤一下
- 如果你没有 IDM 请参考  [IDM 下载](../../Tools/HelloWindows/windows-01.md) （理论上 NDM 等也可以）

:::

最近批发的百度网盘 SVIP 被 ban 了 😎

最好还是有 SVIP 比较好 （🤡🤡🤡🤡）

- 服务端已配置 自定义破解 UA 为 `netdisk`
- 我们只需要将其添加至 IDM 的自定义 UA 中即可

未配置前，无法解析

![image-20230923220148708](https://yong-gan-niu-niu-1311841992.cos.ap-beijing.myqcloud.com/images/image-20230923220148708.png)



配置 UA 为 `pan.baidu.com`

<img src="https://yong-gan-niu-niu-1311841992.cos.ap-beijing.myqcloud.com/images/image-20231006160336098.png" alt="image-20231006160336098" style="zoom:67%;" />

可以看到此时已经可以解析到直链

![image-20230923221241657](https://yong-gan-niu-niu-1311841992.cos.ap-beijing.myqcloud.com/images/image-20230923221241657.png)

YYDS

![image-20230923221259189](https://yong-gan-niu-niu-1311841992.cos.ap-beijing.myqcloud.com/images/image-20230923221259189.png)

## 三、WebDav 挂载

:::info

- 根据 AList 官网描述 WebDav 可以实现不修改 UA 的情况下预览文件 （视频、文档等）
- AList 为我们提供了多种 WebDav 挂载平台此处我们选择 [raidrive](https://www.raidrive.com/download)

:::

#### 下载 RaiDraver

![image-20231006162907439](https://yong-gan-niu-niu-1311841992.cos.ap-beijing.myqcloud.com/images/image-20231006162907439.png)

#### 填写配置信息

![image-20231006163357772](https://yong-gan-niu-niu-1311841992.cos.ap-beijing.myqcloud.com/images/image-20231006163357772.png)

#### 验证

<img src="https://yong-gan-niu-niu-1311841992.cos.ap-beijing.myqcloud.com/images/image-20231006163446381.png" alt="image-20231006163446381" style="zoom:67%;" />

## 四、主流平台适配

Emmm 打包的网页 所以使用基本相同

- Android [下载 ColaAlist](https://yong-gan-niu-niu-1311841992.cos.ap-beijing.myqcloud.com/apks/ColaAlist_V1.0.0.apk) 后安装
- IOS 没有证书 （Emm）

![image-20231006163707789](https://yong-gan-niu-niu-1311841992.cos.ap-beijing.myqcloud.com/images/image-20231006163707789.png)