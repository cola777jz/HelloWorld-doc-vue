---
title: 在 IDEA 中使用 Maven
order: 2
category:
  - Skills
  - HelloMaven
  - MD
---

## 二、在 IDEA 中使用 Maven

在 IDEA 中我们可以快速创建不同类型的 Maven 工程，下面我们介绍常用的两种项目在 IDEA 中的构建方法：

<img src="https://yong-gan-niu-niu-1311841992.cos.ap-beijing.myqcloud.com/images/image-20230914192214801.png" alt="image-20230914192214801" style="zoom:67%;" />

### 2.1 使用 IDEA 构建 Maven JavaSE 工程

使用 IDEA 构建 Maven JavaSE 比较简单此处不做过多说明

<img src="https://yong-gan-niu-niu-1311841992.cos.ap-beijing.myqcloud.com/images/image-20230914192352820.png" alt="image-20230914192352820" style="zoom:67%;" />

### 2.2 使用 IDEA 构建 Maven JavaEE 工程

介绍完 JavaSE 项目的构建后，我们着重说明一下如何使用 Maven 构建 JavaEE 工程，使用 IDEA 构建 Maven JavaEE 有两种方式：

- 通过 Maven 模板创建 （存在网络问题，需要修改为 内部 TODO）
- 通过插件快速构建

##### 2.2.1 通过 Maven 模板创建

<img src="https://yong-gan-niu-niu-1311841992.cos.ap-beijing.myqcloud.com/images/image-20230914192722143.png" alt="image-20230914192722143" style="zoom:67%;" />

##### 2.2.2 通过插件快速构建

我们可以使用 JBLJavaToWeb 插件快速将一个普通 maven 项目转换为 web 项目

<img src="https://yong-gan-niu-niu-1311841992.cos.ap-beijing.myqcloud.com/images/image-20230914193046688.png" alt="image-20230914193046688" style="zoom:67%;" />

<img src="https://yong-gan-niu-niu-1311841992.cos.ap-beijing.myqcloud.com/images/image-20230914192850198.png" alt="image-20230914192850198" style="zoom:67%;" />

<img src="https://yong-gan-niu-niu-1311841992.cos.ap-beijing.myqcloud.com/images/image-20230914193114974.png" alt="image-20230914193114974" style="zoom:67%;" />

<img src="https://yong-gan-niu-niu-1311841992.cos.ap-beijing.myqcloud.com/images/image-20230914193124900.png" alt="image-20230914193124900" style="zoom:67%;" />

### 2.3 Maven 项目结构说明

Maven 是一个强大的构建工具，它提供一种标准化的项目结构，可以帮助开发者更容易地管理项目的依赖、构建、测试和发布等任务。以下是 Maven Web 程序的文件结构及每个文件的作用：

```xml
|-- pom.xml                               ## Maven 项目管理文件 
|-- src
    |-- main                              ## 项目主要代码
    |   |-- java                          ## Java 源代码目录
    |   |   `-- com/example/myapp         ## 开发者代码主目录
    |   |       |-- controller            ## 存放 Controller 层代码的目录
    |   |       |-- service               ## 存放 Service 层代码的目录
    |   |       |-- dao                   ## 存放 DAO 层代码的目录
    |   |       `-- model                 ## 存放数据模型的目录
    |   |-- resources                     ## 资源目录，存放配置文件、静态资源等
    |   |   |-- log4j.properties          ## 日志配置文件
    |   |   |-- spring-mybatis.xml        ## Spring Mybatis 配置文件
    |   |   `-- static                    ## 存放静态资源的目录
    |   |       |-- css                   ## 存放 CSS 文件的目录
    |   |       |-- js                    ## 存放 JavaScript 文件的目录
    |   |       `-- images                ## 存放图片资源的目录
    |   `-- webapp                        ## 存放 WEB 相关配置和资源
    |       |-- WEB-INF                   ## 存放 WEB 应用配置文件
    |       |   |-- web.xml               ## Web 应用的部署描述文件
    |       |   `-- classes               ## 存放编译后的 class 文件
    |       `-- index.html                ## Web 应用入口页面
    `-- test                              ## 项目测试代码
        |-- java                          ## 单元测试目录
        `-- resources                     ## 测试资源目录
```

- pom.xml：Maven 项目管理文件，用于描述项目的依赖和构建配置等信息。
- src/main/java：存放项目的 Java 源代码。
- src/main/resources：存放项目的资源文件，如配置文件、静态资源等。
- src/main/webapp/WEB-INF：存放 Web 应用的配置文件。
- src/main/webapp/index.html：Web 应用的入口页面。
- src/test/java：存放项目的测试代码。
- src/test/resources：存放测试相关的资源文件，如测试配置文件等。

## 三、Maven 核心功能

### 3.1 依赖管理

Maven 依赖管理是 Maven 软件中最重要的功能之一。Maven 的依赖管理能够帮助开发人员自动解决软件包依赖问题，使得开发人员能够轻松地将其他开发人员开发的模块或第三方框架集成到自己的应用程序或模块中，避免出现版本冲突和依赖缺失等问题。

我们通过定义 POM 文件，Maven 能够自动解析项目的依赖关系，并通过 Maven **仓库自动**下载和管理依赖，从而避免了手动下载和管理依赖的繁琐工作和可能引发的版本冲突问题。

#### 3.1.1 依赖的管理和添加

```xml
    <dependencies>
        <dependency>
            <groupId>junit</groupId>
            <artifactId>junit</artifactId>
            <version>3.8.1</version>
            <scope>test</scope>
        </dependency>
    </dependencies>
```

#### 3.1.2 依赖版本提取和维护

```xml
    <properties>
        <junit.version>4.11</junit.version>
    </properties>
	<dependencies>
        <dependency>
            <groupId>junit</groupId>
            <artifactId>junit</artifactId>
            <version>${junit.version}</version>
            <scope>test</scope>
        </dependency>
    </dependencies>
```



### 3.2 依赖传递和依赖冲突

**依赖传递** 指的是当一个模块或库 A 依赖于另一个模块或库 B，而 B 又依赖于模块或库 C，那么 A 会间接依赖于 C。这种依赖传递结构可以形成一个依赖树。当我们引入一个库或框架时，构建工具（如 Maven、Gradle）会自动解析和加载其所有的直接和间接依赖，确保这些依赖都可用。

依赖传递的作用是：

1. 减少重复依赖：当多个项目依赖同一个库时，Maven 可以自动下载并且只下载一次该库。这样可以减少项目的构建时间和磁盘空间。
2. 自动管理依赖: Maven 可以自动管理依赖项，使用依赖传递，简化了依赖项的管理，使项目构建更加可靠和一致。
3. 确保依赖版本正确性：通过依赖传递的依赖，之间都不会存在版本兼容性问题，确实依赖的版本正确性！

我们通过 jackson 的例子来解释一下以来传递，我们可以去 [Maven Repository 官网](https://mvnrepository.com/) 查找我们想要的依赖信息：

项目中，需要导入 jackson 相关的依赖，通过之前导入经验，jackson 需要导入三个依赖，分别为：

-  Jackson Databind
-  Jackson Core
-  Jackson Annotations

<img src="https://yong-gan-niu-niu-1311841992.cos.ap-beijing.myqcloud.com/images/image-20230914194330638.png" alt="image-20230914194330638" style="zoom:67%;" />

通过查看网站介绍的依赖传递特性：data-bind 中，依赖其他两个依赖

<img src="https://yong-gan-niu-niu-1311841992.cos.ap-beijing.myqcloud.com/images/image-20230914194538108.png" alt="image-20230914194538108" style="zoom:67%;" />

所以我们可以利用依赖的传递性直导入data-bind，自动依赖传递需要的依赖：

```xml
<!-- https://mvnrepository.com/artifact/com.fasterxml.jackson.core/jackson-databind -->
<dependency>
    <groupId>com.fasterxml.jackson.core</groupId>
    <artifactId>jackson-databind</artifactId>
    <version>2.15.0</version>
</dependency>
```

<img src="https://yong-gan-niu-niu-1311841992.cos.ap-beijing.myqcloud.com/images/image-20230914195104309.png" alt="image-20230914195104309"  />

当直接引用或者间接引用出现了相同的 jar 包! 这时呢，一个项目就会出现相同的重复 jar 包，这就算作冲突！依赖冲突避免出现重复依赖，并且终止依赖传递！

<img src="https://yong-gan-niu-niu-1311841992.cos.ap-beijing.myqcloud.com/images/image-20230914200540988.png" alt="image-20230914200540988" style="zoom:67%;" />

maven 自动解决依赖冲突问题能力，会按照自己的原则，进行重复依赖选择。同时也提供了手动解决的冲突的方式，不过不推荐！

解决依赖冲突（如何选择重复依赖）方式：

1. 自动选择原则

    - 短路优先原则（第一原则）

      A—> B —> C —> D —> E —>X ( version 0.0.1)

      A—> F —> X ( version 0.0.2)

      则A依赖于X ( version 0.0.2)。

    - 依赖路径长度相同情况下，则“先声明优先”（第二原则）

      A—> E —> X ( version 0.0.1)

      A—> F —> X ( version 0.0.2)

      在 `<depencies></depencies>` 中，先声明的，路径相同，会优先选择！

### 3.3 扩展构建管理和插件配置

**构建概念:**

项目构建是指将源代码、依赖库和资源文件等转换成可执行或可部署的应用程序的过程，在这个过程中包括编译源代码、链接依赖库、打包和部署等多个步骤。

<img src="https://yong-gan-niu-niu-1311841992.cos.ap-beijing.myqcloud.com/images/image-20230914200738172.png" alt="image-20230914200738172" style="zoom:67%;" />

**主动触发场景：**

- 重新编译 : 编译不充分, 部分文件没有被编译!
- 打包 : 独立部署到外部服务器软件,打包部署
- 部署本地或者私服仓库 : maven工程加入到本地或者私服仓库,供其他工程使用

**命令方式构建:**

语法: mvn 构建命令  构建命令....

| 命令        | 描述                                        |
| ----------- | ------------------------------------------- |
| mvn clean   | 清理编译或打包后的项目结构,删除target文件夹 |
| mvn compile | 编译项目，生成target文件                    |
| mvn test    | 执行测试源码 (测试)                         |
| mvn site    | 生成一个项目依赖信息的展示页面              |
| mvn package | 打包项目，生成war / jar 文件                |
| mvn install | 打包后上传到maven本地仓库(本地部署)         |
| mvn deploy  | 只打包，上传到maven私服仓库(私服部署)       |

<img src="https://yong-gan-niu-niu-1311841992.cos.ap-beijing.myqcloud.com/images/image-20230914200841115.png" alt="image-20230914200841115" style="zoom:67%;" />



**构建命令周期:**

构建生命周期可以理解成是一组固定构建命令的有序集合，触发周期后的命令，会自动触发周期前的命令！也是一种简化构建的思路!

- 清理周期：主要是对项目编译生成文件进行清理

  包含命令：clean

- 默认周期：定义了真正构件时所需要执行的所有步骤，它是生命周期中最核心的部分

  包含命令：compile - test - package - install / deploy

- 报告周期

  包含命令：site

  打包: mvn clean package 本地仓库: mvn clean install

**最佳使用方案:**

```text
打包: mvn clean package
重新编译: mvn clean compile
本地部署: mvn clean install 
```

**周期，命令和插件:**

周期→包含若干命令→包含若干插件!

使用周期命令构建，简化构建过程！

最终进行构建的是插件！

插件配置:

```XML
<build>
   <!-- jdk 17 和 war包版本插件不匹配 -->
    <plugins>
        <plugin>
            <groupId>org.apache.maven.plugins</groupId>
            <artifactId>maven-war-plugin</artifactId>
            <version>3.2.2</version>
        </plugin>
    </plugins>
</build>
```
