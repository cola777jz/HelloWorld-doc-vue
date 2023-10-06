---
title: Maven 快速入门
order: 1
category:
  - Skills
  - HelloMaven
  - MD
---

## 一、Maven 快速入门

### 1.1 Maven 概述

[Maven 官网](https://maven.apache.org/what-is-maven.html) Maven 是一款为 Java 项目构建管理、依赖管理的工具（**软件**），使用 Maven 可以自动化构建、测试、打包和发布项目，大大提高开发效率和质量。

### 1.2 Maven 的作用

maven 通过引入场景概念来管理项目，对项目中用到的依赖以及项目完成后打包构建过程进行统一。

- 例如我们项目需要第三方库（依赖），如 Druid 连接池、MySQL 数据库驱动和 Jackson 等。那么我们可以将需要的依赖项的信息编写到 Maven 工程的配置文件，Maven 软件就会自动下载并复制这些依赖项到项目中，也会自动下载依赖需要的依赖！确保依赖版本正确无冲突和依赖完整！
- 项目开发完成后，想要将项目打成 .war 文件，并部署到服务器中运行，使用 Maven 软件，我们可以通过一行构建命令（mvn package）快速项目构建和打包！节省大量时间！

总之通过 Maven 我们可以极大地提高开发效率以及质量。引入场景概念后，接下来我们介绍 Maven 作用：

	1. 依赖管理
	1. 构建管理

#### 1.2.1 依赖管理

Maven 可以管理项目的依赖，包括自动下载所需依赖库、自动下载依赖需要的依赖并且保证版本没有冲突、依赖版本管理等。通过 Maven，我们可以方便地维护项目所依赖的外部库，而我们仅仅需要编写配置即可,那么我们如何编写相关的配置呢？

Maven工程相对之前的工程，多出一组 gavp 属性，gav 需要我们在创建项目的时指定，p 有默认值（jar）下面我们来了解一下什么是 gavp 以及如何通过 gavp 确定相关依赖：

Maven 中的 GAVP 是指 GroupId、ArtifactId、Version、Packaging 等四个属性的缩写，其中前三个是必要的，而 Packaging 属性为可选项。这四个属性主要为每个项目在 maven 仓库总做一个标识，类似人的《姓-名》。有了具体标识，方便 maven 软件对项目进行管理和互相引用！

##### 1.2.1.1 GAVP 相关的规范

**GAV遵循一下规则：**

1） **GroupID 格式**：com.{公司/BU }.业务线.[子业务线]，最多 4 级。

    说明：{公司/BU} 例如：alibaba/taobao/tmall/aliexpress 等 BU 一级；子业务线可选。
    
    正例：com.taobao.tddl 或 com.alibaba.sourcing.multilang  com.atguigu.java

2） **ArtifactID 格式**：产品线名-模块名。语义不重复不遗漏，先到仓库中心去查证一下。

    正例：tc-client / uic-api / tair-tool / bookstore

3） **Version 版本号格式推荐**：主版本号.次版本号.修订号 1.0.0

    1） 主版本号：当做了不兼容的 API 修改，或者增加了能改变产品方向的新功能。
    
    2） 次版本号：当做了向下兼容的功能性新增（新增类、接口等）。
    
    3） 修订号：修复 bug，没有修改方法签名的功能加强，保持 API 兼容性。
    
    例如： 初始→1.0.0  修改bug → 1.0.1  功能调整 → 1.1.1等

**Packaging 定义规则：**

指示将项目打包为什么类型的文件，idea 根据 packaging 值，识别 maven 项目类型

- packaging 属性为 jar（默认值），代表普通的Java工程，打包以后是 .jar 结尾的文件。
- packaging 属性为 war，代表Java的web工程，打包以后 .war 结尾的文件。
- packaging 属性为 pom，代表不会打包，用来做继承的父工程。

#### 1.2.2 构建管理

项目构建是指将源代码、配置文件、资源文件等转化为能够运行或部署的应用程序或库的过程！

Maven 可以管理项目的编译、测试、打包、部署等构建过程。通过实现标准的构建生命周期，Maven 可以确保每一个构建过程都遵循同样的规则和最佳实践。同时，Maven 的插件机制也使得开发者可以对构建过程进行扩展和定制。主动触发构建，只需要简单的命令操作即可。

<img src="https://yong-gan-niu-niu-1311841992.cos.ap-beijing.myqcloud.com/images/image-20230914185727498.png" alt="image-20230914185727498" style="zoom:67%;" />

### 1.3 Maven 的安装和配置

#### 1.3.1 Maven 的下载

[Maven 官网下载](https://maven.apache.org/download.cgi)

<img src="https://yong-gan-niu-niu-1311841992.cos.ap-beijing.myqcloud.com/images/image-20230914185908987.png" alt="image-20230914185908987" style="zoom:67%;" />

#### 1.3.2 Maven 配置

##### 1.3.2.1 环境变量的配置

Maven 需要有 Java 环境支持~ 😢

1. 添加环境变量 `MAVEN_HOME` 至系统变量

<img src="https://yong-gan-niu-niu-1311841992.cos.ap-beijing.myqcloud.com/images/image-20230914190629973.png" alt="image-20230914190629973" style="zoom:67%;" />

2. 将  `bin ` 目录引入至  `path ` 中

![image-20230914190813554](https://yong-gan-niu-niu-1311841992.cos.ap-beijing.myqcloud.com/images/image-20230914190813554.png)

3. 验证

![image-20230914190808544](https://yong-gan-niu-niu-1311841992.cos.ap-beijing.myqcloud.com/images/image-20230914190808544.png)



##### 1.3.2.2 本地仓库配置

```xml
  <localRepository>C:\Users\86132\Downloads\Compressed\apache-maven-3.8.8\repo</localRepository>
```

其中键值为存储仓库的绝对路径 （此处 repo 为自行在 maven 目录下创建的）

##### 1.3.2.3 镜像源的配置

<img src="https://yong-gan-niu-niu-1311841992.cos.ap-beijing.myqcloud.com/images/image-20230914190305829.png" alt="image-20230914190305829" style="zoom:67%;" />

```xml
<mirror>
    <id>aliyunmaven</id>
    <mirrorOf>*</mirrorOf>
    <name>阿里云公共仓库</name>
    <url>https://maven.aliyun.com/repository/public</url>
</mirror>
```

##### 1.3.2.4 代理配置

按需配置~

<img src="https://yong-gan-niu-niu-1311841992.cos.ap-beijing.myqcloud.com/images/image-20230914190525552.png" alt="image-20230914190525552" style="zoom:67%;" />

##### 1.3.2.5 IDEA 中 Maven 的配置

- 配置当前项目的 Maven

<img src="https://yong-gan-niu-niu-1311841992.cos.ap-beijing.myqcloud.com/images/image-20230914191154640.png" alt="image-20230914191154640" style="zoom:67%;" />

- 配置新创建项目的 Maven

<img src="https://yong-gan-niu-niu-1311841992.cos.ap-beijing.myqcloud.com/images/image-20230914191258252.png" alt="image-20230914191258252" style="zoom:67%;" />

<img src="https://yong-gan-niu-niu-1311841992.cos.ap-beijing.myqcloud.com/images/image-20230914191346900.png" alt="image-20230914191346900" style="zoom:67%;" />