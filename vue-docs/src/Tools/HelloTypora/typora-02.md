---
title: Picgo 搭配 COS 实现在线图床
order: 1
category:
  - Tools
  - HelloTypora
  - MD
---

需要付费但很便宜除非被盗刷

![image-20230923215104266](https://yong-gan-niu-niu-1311841992.cos.ap-beijing.myqcloud.com/images/image-20230923215104266.png)

## 一、COS 对象存储技术

### 1.1 概述

[腾讯 COS 官方文档](https://cloud.tencent.com/document/product/436/11365) 介绍：对象存储控制台是对象存储（Cloud Object Storage，COS）为用户提供的最简单且易于上手的操作方式。用户无需编写代码或运行程序，可直接通过 COS 控制台创建存储桶、上传和分享数据以及数据备份、批量处理等。

COS 还有很多功能如：

- CDN
- 内容处理

等此处只做基本使用 😐

### 1.2 使用

COS 技术以存储桶 （Bucket） 为基本单元，一个存储桶类似于电脑中的一个盘符（C 盘、D 盘、E盘 等）我们可以在里面像操作文件夹一样对数据进行管理。

#### 1.2.1 存储桶的创建

- [Bucket](https://console.cloud.tencent.com/cos/bucket) 控制台

![image-20230923214250770](https://yong-gan-niu-niu-1311841992.cos.ap-beijing.myqcloud.com/images/image-20230923214250770.png)

其中访问权限分为：

- 私有读写
- 公有读私有写
- 公有读写

每个不同的权限顾名思义很好理解，一般我们搭建图床通常选择公有读私有写

#### 1.2.2 相关密钥的获取

为了搭配下面的 PicGo 我们需要获取 Secreld 等相关信息

- 密钥信息的获取 [**API 密钥管理**](https://console.cloud.tencent.com/cam/capi)

![image-20230923214912588](https://yong-gan-niu-niu-1311841992.cos.ap-beijing.myqcloud.com/images/image-20230923214912588.png)

- Bucket 存储桶信息获取 [存储桶列表](https://console.cloud.tencent.com/cos/bucket)

![image-20230923214851431](https://yong-gan-niu-niu-1311841992.cos.ap-beijing.myqcloud.com/images/image-20230923214851431.png)

## 二、PicGo 的安装及配置

### 2.1 PicGo 概述

**PicGo: 一个用于快速上传图片并获取图片 URL 链接的工具**

![image-20230923213426063](https://yong-gan-niu-niu-1311841992.cos.ap-beijing.myqcloud.com/images/image-20230923213426063.png)

### 2.2 主要功能

- 支持拖拽图片上传
- 支持快捷键上传剪贴板里第一张图片
- Windows 和 macOS 支持右键图片文件通过菜单上传 (v2.1.0+)
- 上传图片后自动复制链接到剪贴板
- 支持自定义复制到剪贴板的链接格式
- 支持修改快捷键，默认快速上传快捷键：`command+shift+p`（macOS）| `control+shift+p`（Windows\Linux)
- 支持插件系统，已有插件支持 Gitee、青云等第三方图床
    - 更多第三方插件以及使用了 PicGo 底层的应用可以在 [Awesome-PicGo](https://github.com/PicGo/Awesome-PicGo) 找到。欢迎贡献！
- 支持通过发送 HTTP 请求调用 PicGo 上传（v2.2.0+)

### 2.3 安装及配置

1. [下载 PicGo](https://yong-gan-niu-niu-1311841992.cos.ap-beijing.myqcloud.com/soft/PicGo-Setup-2.3.1-x64.exe) 并安装

![image-20230923213550513](https://yong-gan-niu-niu-1311841992.cos.ap-beijing.myqcloud.com/images/image-20230923213550513.png)

2. 选择相关的图床设置 （本处以 腾讯云 COS 为例子）

![image-20230923213818325](https://yong-gan-niu-niu-1311841992.cos.ap-beijing.myqcloud.com/images/image-20230923213818325.png)

- AppId: ID
- Secretld: 密钥 ID
- SecretKey: 密钥
- Bucket: 存储桶名
- 存储区域: 所属区域

## 三、 COS 相关应用推荐

### 3.1 COSBrowser

[COSBrowser](https://cloud.tencent.com/document/product/436/11366) 是腾讯云对象存储 COS 推出的可视化界面工具，让您可以使用更简单的交互轻松实现对 COS 资源的查看、传输和管理。

支持

![image-20230924165208657](https://yong-gan-niu-niu-1311841992.cos.ap-beijing.myqcloud.com/images/image-20230924165208657.png)

![image-20230924165217056](https://yong-gan-niu-niu-1311841992.cos.ap-beijing.myqcloud.com/images/image-20230924165217056.png)