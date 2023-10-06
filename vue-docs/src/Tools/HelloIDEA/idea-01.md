---
title: IDEA 的安装和使用
order: 1
category:
  - Tools
  - HelloIDEA
  - MD
---

## 一、IDEA 的安装与卸载

- [IDEA 官方下载地址](https://www.jetbrains.com/idea/download/)

- [IDEA 历史版本下载地址](https://www.jetbrains.com/idea/download/other.html)
- [IDEA 的激活](http://8.130.21.128/zh/Study/Tools/Dev/dev_01.html)

其实使用 JetBrains为我们提供的 [ Toolbox App](https://www.jetbrains.com/zh-cn/toolbox-app/) 就可以很方便的完成各种 IDEA 的安装及项目的管理

<img src="https://yong-gan-niu-niu-1311841992.cos.ap-beijing.myqcloud.com/images/image-20230929111744247.png" alt="image-20230929111744247" style="zoom:50%;" />

单独安装：

### 1.1 Windows 安装 IDEA

####  下载安装包

我们进入 [官方下载页面](https://www.jetbrains.com/idea/download/?section=windows) 进行下载

<img src="https://yong-gan-niu-niu-1311841992.cos.ap-beijing.myqcloud.com/images/image-20230929112115178.png" alt="image-20230929112115178" style="zoom:50%;" />

#### 安装

TODO



### 1.2 MacOS 安装 IDEA

TODO

### 1.3 Linux 安装 IDEA

TODO

### 1.4 IDEA 的卸载

使用 UninstallTool 即可

## 二、IDEA 界面说明

#### 2.1 启动界面

启动 IDEA 后，首先会弹出如下欢迎界面，看起来还是很不错的 😊

<img src="https://yong-gan-niu-niu-1311841992.cos.ap-beijing.myqcloud.com/images/image-20230929112254166.png" alt="image-20230929112254166" style="zoom:50%;" />

#### 2.2 IDEA 项目界面

<img src="https://yong-gan-niu-niu-1311841992.cos.ap-beijing.myqcloud.com/images/image-20230929112432619.png" alt="image-20230929112432619" style="zoom:50%;" />

- `Projects` : 项目
- `New Project` : 新建一个项目
- `Open` : 从硬盘上打开一个已存在的项目
- `Get from VCS` : 从版本控制系统中拉取一个项目
- `Customize` : 自定义设置页面
    - <img src="https://yong-gan-niu-niu-1311841992.cos.ap-beijing.myqcloud.com/images/image-20230929112627663.png" alt="image-20230929112627663" style="zoom:50%;" />

- `Plugins`: 插件页面
    - <img src="https://yong-gan-niu-niu-1311841992.cos.ap-beijing.myqcloud.com/images/image-20230929112714936.png" alt="image-20230929112714936" style="zoom:50%;" />


## 三、使用 IDEA 新建项目

###  3. x 使用 IDEA 创建 SpringBoot 项目

#### 创建项目

<img src="https://yong-gan-niu-niu-1311841992.cos.ap-beijing.myqcloud.com/images/image-20230929113014856.png" alt="image-20230929113014856" style="zoom:50%;" />

- `Name`: 项目的名称
- `Location`: 项目存放的路径
- `Language`: 项目所用的语言
- `Type`: 构建类型
- `Group、Artifact、Package name`
    - `Group`: 组名，一般为域名的倒写，例如：==cola.jz==
    - `Artifact`: 组件名，一般为项目名
    - `Package name`: 包名
- `JDK`: JDK 版本 （Sb3 要求 JDK 最低为 17.x）
- `Packaging`: 打包方式

#### 选择相关依赖

<img src="https://yong-gan-niu-niu-1311841992.cos.ap-beijing.myqcloud.com/images/image-20230929113456925.png" alt="image-20230929113456925" style="zoom:50%;" />

- `Spring Boot`: Spring Boot 的版本

- `Dependencies`: 依赖选择 （Spring Initializr 为我们将不同场景的依赖做了分类）

    - `Developer Tools`: 开发者工具相关的依赖
    - `Web`: Web 相关的依赖

#### SpringBoot 启动！

<img src="https://yong-gan-niu-niu-1311841992.cos.ap-beijing.myqcloud.com/images/image-20230929113918715.png" alt="image-20230929113918715" style="zoom:50%;" />

#### 目录说明

<img src="https://yong-gan-niu-niu-1311841992.cos.ap-beijing.myqcloud.com/images/image-20230929114026279.png" alt="image-20230929114026279" style="zoom:67%;" />

- `.mvn、mvnw、mvn.cmd`: maven wrapper 相关 参见：[Maven Wrapper 介绍](https://www.cnblogs.com/larva-zhh/p/10510938.html) 部分
- `src`: 源代码目录
    - `main`
        - `java`: 存放 Java 代码
            - `cola.jz.hellosb3`: 包
                - `HelloSb3Application`: Spring Boot 启动类
    - `resources`: 资源文件夹
        - `static`: 用于存放静态资源
        - `templates`: 用于存放模板页面
    - `application.properties`: Spring Boot 配置文件
- `test`:测试目录


