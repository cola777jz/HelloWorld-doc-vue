---
title: Maven 特性及 QuickStart
order: 3
category:
  - Skills
  - HelloMaven
  - MD
---

## 四、Maven 特性

### 4.1 Maven 工程继承关系

#### 4.1.1 继承的概念

Maven 继承是指在 Maven 的项目中，让一个项目从另一个项目中继承配置信息的机制。继承可以让我们在多个项目中共享同一配置信息，简化项目的管理和维护工作。

<img src="https://yong-gan-niu-niu-1311841992.cos.ap-beijing.myqcloud.com/images/image-20230914201457420.png" alt="image-20230914201457420" style="zoom:67%;" />

#### 4.1.2 继承的作用

作用：在父工程中统一管理项目中的依赖信息,进行统一版本管理!

它的背景是：

- 对一个比较大型的项目进行了模块拆分。
- 一个 project 下面，创建了很多个 module。
- 每一个 module 都需要配置自己的依赖信息。

它背后的需求是：

- 多个模块要使用同一个框架，它们应该是同一个版本，所以整个项目中使用的框架版本需要统一管理。
- 使用框架时所需要的 jar 包组合（或者说依赖信息组合）需要经过长期摸索和反复调试，最终确定一个可用组合。这个耗费很大精力总结出来的方案不应该在新的项目中重新摸索。

通过在父工程中为整个项目维护依赖信息的组合既保证了整个项目使用规范、准确的 jar 包；又能够将以往的经验沉淀下来，节约时间和精力。

#### 4.1.3 Demo

父工程使用 dependencyManagement 标签配置对依赖统一管理  ,被管理的依赖并没有真正被引入到工程

- 父工程

```xml
        <packaging>pom</packaging>
		<dependencyManagement>
        <dependencies>
            <dependency>
                <groupId>org.springframework</groupId>
                <artifactId>spring-core</artifactId>
                <version>4.0.0.RELEASE</version>
            </dependency>
            <dependency>
                <groupId>org.springframework</groupId>
                <artifactId>spring-beans</artifactId>
                <version>4.0.0.RELEASE</version>
            </dependency>
            <dependency>
                <groupId>org.springframework</groupId>
                <artifactId>spring-context</artifactId>
                <version>4.0.0.RELEASE</version>
            </dependency>
            <dependency>
                <groupId>org.springframework</groupId>
                <artifactId>spring-expression</artifactId>
                <version>4.0.0.RELEASE</version>
            </dependency>
            <dependency>
                <groupId>org.springframework</groupId>
                <artifactId>spring-aop</artifactId>
                <version>4.0.0.RELEASE</version>
            </dependency>
        </dependencies>
    </dependencyManagement>
```

- 子工程

子工程引用父工程中的依赖信息时，可以把版本号去掉。把版本号去掉就表示子工程中这个依赖的版本由父工程决定。  具体来说是由父工程的dependencyManagement来决定。

```xml
    <dependencies>
        <dependency>
            <groupId>org.springframework</groupId>
            <artifactId>spring-core</artifactId>
        </dependency>
        <dependency>
            <groupId>org.springframework</groupId>
            <artifactId>spring-beans</artifactId>
        </dependency>
        <dependency>
            <groupId>org.springframework</groupId>
            <artifactId>spring-context</artifactId>
        </dependency>
        <dependency>
            <groupId>org.springframework</groupId>
            <artifactId>spring-expression</artifactId>
        </dependency>
        <dependency>
            <groupId>org.springframework</groupId>
            <artifactId>spring-aop</artifactId>
        </dependency>
    </dependencies>
```

<img src="https://yong-gan-niu-niu-1311841992.cos.ap-beijing.myqcloud.com/images/image-20230914202217033.png" alt="image-20230914202217033" style="zoom:67%;" />

### 4.2 Maven 工程聚合关系

#### 4.2.1 聚合的概念

Maven 聚合是指将多个项目组织到一个父级项目中，通过触发父工程的构建,统一按顺序触发子工程构建的过程!!

#### 4.2.2 聚合的作用

1. 统一管理子项目构建：通过聚合，可以将多个子项目组织在一起，方便管理和维护。
2. 优化构建顺序：通过聚合，可以对多个项目进行顺序控制，避免出现构建依赖混乱导致构建失败的情况。

```xml
    <groupId>edu.jzxy.cbq</groupId>
    <artifactId>Maven_study</artifactId>
    <version>1.0-SNAPSHOT</version>
    <packaging>pom</packaging>
    <description>Manage dependencies</description>
    <modules>
        <module>order_service</module>
        <module>user_service</module>
    </modules>
```

<img src="https://yong-gan-niu-niu-1311841992.cos.ap-beijing.myqcloud.com/images/image-20230914202313080.png" alt="image-20230914202313080" style="zoom:67%;" />

添加打包插件

```xml
    <build>
        <!-- jdk 17 和 war 包版本插件不匹配 -->
        <plugins>
            <plugin>
                <groupId>org.apache.maven.plugins</groupId>
                <artifactId>maven-war-plugin</artifactId>
                <version>3.2.2</version>
            </plugin>
        </plugins>
    </build>
```





<img src="https://yong-gan-niu-niu-1311841992.cos.ap-beijing.myqcloud.com/images/image-20230914202841327.png" alt="image-20230914202841327" style="zoom:67%;" />

## 五、MavenQuickStart

### 5.1 流程分析

<img src="https://yong-gan-niu-niu-1311841992.cos.ap-beijing.myqcloud.com/images/image-20230914202914260.png" alt="image-20230914202914260" style="zoom:67%;" />

需求案例：搭建一个电商平台项目，该平台包括用户服务、订单服务、通用工具模块等。

项目架构：

1. 用户服务：负责处理用户相关的逻辑，例如用户信息的管理、用户注册、登录等。
2. 订单服务：负责处理订单相关的逻辑，例如订单的创建、订单支付、退货、订单查看等。
3. 通用模块：负责存储其他服务需要通用工具类，其他服务依赖此模块。

服务依赖：

1. 用户服务
    - spring-aop
2. 订单服务
    - spring-context
    - spring-core
    - spring-beans
    - spring-expressopn
3. 通用模块
    - spring-core

### 5.2 项目搭建

#### 5.2.1 父项目搭建

```xml
<?xml version="1.0" encoding="UTF-8"?>
<project xmlns="http://maven.apache.org/POM/4.0.0"
         xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
         xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 http://maven.apache.org/xsd/maven-4.0.0.xsd">
    <modelVersion>4.0.0</modelVersion>

    <groupId>edu.jzxy.cbq</groupId>
    <artifactId>Maven_study</artifactId>
    <version>1.0-SNAPSHOT</version>
    <packaging>pom</packaging>
    <description>Manage dependencies</description>
    <modules>
        <module>order_service</module>
        <module>user_service</module>
        <module>common_service</module>
    </modules>
    <properties>
        <maven.compiler.source>17</maven.compiler.source>
        <maven.compiler.target>17</maven.compiler.target>
        <maven.compiler.compilerVersion>17</maven.compiler.compilerVersion>
        <project.build.sourceEncoding>UTF-8</project.build.sourceEncoding>
        <project.reporting.outputEncoding>UTF-8</project.reporting.outputEncoding>
        <spring.version>4.0.0.RELEASE</spring.version>
    </properties>
    <name>MavenStudy</name>
    <url>https://github.com/cola0817/JinZhong_YongGanNiuNiu</url>

    <dependencyManagement>
        <dependencies>
            <dependency>
                <groupId>org.springframework</groupId>
                <artifactId>spring-core</artifactId>
                <version>${spring.version}</version>
            </dependency>
            <dependency>
                <groupId>org.springframework</groupId>
                <artifactId>spring-beans</artifactId>
                <version>${spring.version}</version>
            </dependency>
            <dependency>
                <groupId>org.springframework</groupId>
                <artifactId>spring-context</artifactId>
                <version>${spring.version}</version>
            </dependency>
            <dependency>
                <groupId>org.springframework</groupId>
                <artifactId>spring-expression</artifactId>
                <version>${spring.version}</version>
            </dependency>
            <dependency>
                <groupId>org.springframework</groupId>
                <artifactId>spring-aop</artifactId>
                <version>${spring.version}</version>
            </dependency>
        </dependencies>
    </dependencyManagement>

    <build>
        <!-- jdk 17 和 war 包版本插件不匹配 -->
        <plugins>
            <plugin>
                <groupId>org.apache.maven.plugins</groupId>
                <artifactId>maven-war-plugin</artifactId>
                <version>3.2.2</version>
            </plugin>
        </plugins>
    </build>

</project>
```



#### 5.2.2 子项目搭建

- common_service

```xml
<?xml version="1.0" encoding="UTF-8"?>
<project xmlns="http://maven.apache.org/POM/4.0.0"
         xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
         xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 http://maven.apache.org/xsd/maven-4.0.0.xsd">
    <modelVersion>4.0.0</modelVersion>
    <parent>
        <groupId>edu.jzxy.cbq</groupId>
        <artifactId>Maven_study</artifactId>
        <version>1.0-SNAPSHOT</version>
    </parent>

    <artifactId>common_service</artifactId>

    <dependencies>
        <dependency>
            <groupId>org.springframework</groupId>
            <artifactId>spring-core</artifactId>
        </dependency>
    </dependencies>


</project>
```

- user-service

```xml
<?xml version="1.0" encoding="UTF-8"?>

<project xmlns="http://maven.apache.org/POM/4.0.0" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 http://maven.apache.org/xsd/maven-4.0.0.xsd">  
  <modelVersion>4.0.0</modelVersion>  
  <parent> 
    <groupId>edu.jzxy.cbq</groupId>  
    <artifactId>Maven_study</artifactId>  
    <version>1.0-SNAPSHOT</version> 
  </parent>  
  <artifactId>user_service</artifactId>
  <packaging>war</packaging>
  <dependencies>
    <dependency>
      <groupId>org.springframework</groupId>
      <artifactId>spring-aop</artifactId>
    </dependency>
  </dependencies>
</project>

```

- order_service

```xml
<?xml version="1.0" encoding="UTF-8"?>

<project xmlns="http://maven.apache.org/POM/4.0.0" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 http://maven.apache.org/maven-v4_0_0.xsd">  
  <modelVersion>4.0.0</modelVersion>  
  <properties> 
    <junit.version>4.11</junit.version> 
  </properties>  
  <parent> 
    <groupId>edu.jzxy.cbq</groupId>  
    <artifactId>Maven_study</artifactId>  
    <version>1.0-SNAPSHOT</version> 
  </parent>  
  <artifactId>order_service</artifactId>  
  <packaging>war</packaging>  
  <name>order_service</name>
  <url>http://maven.apache.org</url>  
  <dependencies> 
    <dependency> 
      <groupId>org.springframework</groupId>  
      <artifactId>spring-core</artifactId> 
    </dependency>  
    <dependency> 
      <groupId>org.springframework</groupId>  
      <artifactId>spring-beans</artifactId> 
    </dependency>  
    <dependency> 
      <groupId>org.springframework</groupId>  
      <artifactId>spring-context</artifactId> 
    </dependency>  
    <dependency> 
      <groupId>org.springframework</groupId>  
      <artifactId>spring-expression</artifactId> 
    </dependency>
  </dependencies>  
  <build> 
    <finalName>order_service</finalName> 
  </build> 
</project>

```



#### 5.2.3 构建



![image-20230914203608129](https://yong-gan-niu-niu-1311841992.cos.ap-beijing.myqcloud.com/images/image-20230914203608129.png)



<img src="https://yong-gan-niu-niu-1311841992.cos.ap-beijing.myqcloud.com/images/image-20230914204058552.png" alt="image-20230914204058552" style="zoom:67%;" />