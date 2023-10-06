---
title: Maven 的使用
order: 2
index: false
icon: https://yong-gan-niu-niu-1311841992.cos.ap-beijing.myqcloud.com/images/maven.svg
category:
  - Skills
  - HelloMaven
  - README
---

- [Maven 快速入门](maven-01.md)
- [在 IDEA 中使用 Maven](maven-02.md)
- [Maven 特性及 QuickStart](maven-03.md)

## 概述

[Maven 官网](https://maven.apache.org/what-is-maven.html) Maven 是一款为 Java 项目构建管理、依赖管理的工具（**软件**），使用 Maven 可以自动化构建、测试、打包和发布项目，大大提高开发效率和质量。

maven 通过引入场景概念来管理项目，对项目中用到的依赖以及项目完成后打包构建过程进行统一。

- 例如我们项目需要第三方库（依赖），如 Druid 连接池、MySQL 数据库驱动和 Jackson 等。那么我们可以将需要的依赖项的信息编写到 Maven 工程的配置文件，Maven 软件就会自动下载并复制这些依赖项到项目中，也会自动下载依赖需要的依赖！确保依赖版本正确无冲突和依赖完整！
- 项目开发完成后，想要将项目打成 .war 文件，并部署到服务器中运行，使用 Maven 软件，我们可以通过一行构建命令（mvn package）快速项目构建和打包！节省大量时间！

## Features