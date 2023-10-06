---
title: IDEA 的使用及相关配置
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

## 四、IDEA 插件

### 4.1 Atom Material Icons

美化你的 IDEA 包括：

- 额外的 icon 图标
- 文件夹高亮
- 框架适配如（Spring 中的 Bean 导航图标等）Emm 个人感觉还是 IDEA 原装的好 😁

<img src="https://yong-gan-niu-niu-1311841992.cos.ap-beijing.myqcloud.com/images/image-20230923190628328.png" alt="image-20230923190628328" style="zoom:50%;" />

### 4.2 Chinese Language Package

中文语言支持包（汉化 ~）

<img src="https://yong-gan-niu-niu-1311841992.cos.ap-beijing.myqcloud.com/images/image-20230923190713588.png" alt="image-20230923190713588" style="zoom:50%;" />

### 4.3 CodeGlance Pro

提供代码缩略图，减少鼠标滚动 🤣

<img src="https://yong-gan-niu-niu-1311841992.cos.ap-beijing.myqcloud.com/images/image-20230923191013037.png" alt="image-20230923191013037" style="zoom:50%;" />



### 4.4 Gitee

让你的 IDEA 支持 Gitee

<img src="https://yong-gan-niu-niu-1311841992.cos.ap-beijing.myqcloud.com/images/image-20230923191035979.png" alt="image-20230923191035979" style="zoom:50%;" />

<img src="https://yong-gan-niu-niu-1311841992.cos.ap-beijing.myqcloud.com/images/image-20230929115138255.png" alt="image-20230929115138255" style="zoom:50%;" />

### 4.5 GitToolBox

提供更方便的 git 信息提示

<img src="https://yong-gan-niu-niu-1311841992.cos.ap-beijing.myqcloud.com/images/image-20230923191106022.png" alt="image-20230923191106022" style="zoom:50%;" />

<img src="https://yong-gan-niu-niu-1311841992.cos.ap-beijing.myqcloud.com/images/image-20230923191130284.png" alt="image-20230923191130284" style="zoom:50%;" />

### 4.6 Jrebel and XRebel

SpringBoot 项目热启动 (Emmm 好像 devtools 也可以实现 🤩)

<img src="https://yong-gan-niu-niu-1311841992.cos.ap-beijing.myqcloud.com/images/image-20230923191214277.png" alt="image-20230923191214277" style="zoom:50%;" />

![image-20230923191228238](https://yong-gan-niu-niu-1311841992.cos.ap-beijing.myqcloud.com/images/image-20230923191228238.png)

<img src="https://yong-gan-niu-niu-1311841992.cos.ap-beijing.myqcloud.com/images/image-20230923192235989.png" alt="image-20230923192235989" style="zoom:50%;" />

### 4.7 Rainbow Brackets

彩虹括号

<img src="https://yong-gan-niu-niu-1311841992.cos.ap-beijing.myqcloud.com/images/image-20230923192258240.png" alt="image-20230923192258240" style="zoom:50%;" />

<img src="https://yong-gan-niu-niu-1311841992.cos.ap-beijing.myqcloud.com/images/image-20230923192327617.png" alt="image-20230923192327617" style="zoom:50%;" />

### 4.8 Rainbow CSV

让你的 csv 变色

![image-20230923192412855](https://yong-gan-niu-niu-1311841992.cos.ap-beijing.myqcloud.com/images/image-20230923192412855.png)

### 4.9 Restful Fast Request

快速调试 api Very Nice (专出一篇文章介绍吧)

<img src="https://yong-gan-niu-niu-1311841992.cos.ap-beijing.myqcloud.com/images/image-20230923192435362.png" alt="image-20230923192435362" style="zoom:50%;" />

### 4.10 MyBatisX

提供 xxxMapper 至 xxxMapper.xml 的快速导航

<img src="https://yong-gan-niu-niu-1311841992.cos.ap-beijing.myqcloud.com/images/image-20230923192752496.png" alt="image-20230923192752496" style="zoom:50%;" />

### 4.11 Nvan Progress Bar

彩虹 🌈 加载框

![image-20230923192853896](https://yong-gan-niu-niu-1311841992.cos.ap-beijing.myqcloud.com/images/image-20230923192853896.png)

### 4.12 JBLJavaToWeb

快速将普通 maven 转换为 web 项目

<img src="https://yong-gan-niu-niu-1311841992.cos.ap-beijing.myqcloud.com/images/image-20230923192950902.png" alt="image-20230923192950902" style="zoom:50%;" />

选中需要转换的模块文件夹后右键选择 JBLJavaToWeb

<img src="https://yong-gan-niu-niu-1311841992.cos.ap-beijing.myqcloud.com/images/image-20230923193034353.png" alt="image-20230923193034353" style="zoom:50%;" />

## 五、IDEA 使用技巧

### 5.1 代码模板

| 提示符  | 说明                   |
| ------- | ---------------------- |
| `sout`  | `System.out.println()` |
| `main`  | 快速生成 main 方法     |
| `soutm` | 快速打印最近的方法名   |
| `soutv` | 快速打印最近的变量     |
| `soutp` | 快速打印最近的参数     |
| `.var`  | 生成变量               |



### 5.2 快捷键

| 快捷键                              | 说明                                   |
| ----------------------------------- | -------------------------------------- |
| <kbd>Shift</kbd> + <kbd>Enter</kbd> | 跳转到当前光标的下一行                 |
| <kbd>Alt</kbd> + <kbd>Enter</kbd>   | 快速提示                               |
| <kbd>Ctrl</kbd> + <kbd>Y</kbd>      | 删除当前行                             |
| <kbd>Ctrl</kbd> + <kbd>O</kbd>      | 可重写的方法                           |
| <kbd>Ctrl</kbd> + <kbd>I</kbd>      | 可实现的方式                           |
| <kbd>Alt</kbd> + <kbd>Insert</kbd>  | 生成模板方法 (构造方法、toString() 等) |

## 六、配置 IDEA

IDEA 的配置分为当前项目和全局项目，下面我们做的大部分配置基本是针对全局的：

我们可以通过 ==File --> New Projects Setup --> Settings for New Projects== 对新建项目进行配置（全局配置）

<img src="https://yong-gan-niu-niu-1311841992.cos.ap-beijing.myqcloud.com/images/image-20230929115556383.png" alt="image-20230929115556383" style="zoom:50%;" />

也可以通过 IDEA 欢迎页的 ==Customize --> All Settings== 进行配置

<img src="https://yong-gan-niu-niu-1311841992.cos.ap-beijing.myqcloud.com/images/image-20230929115747287.png" alt="image-20230929115747287" style="zoom:50%;" />

### 6.1 配置 JDK

IDEA 中 JDK 的配置一般是针对当前项目的，具体操作如下：

#### 打开当前项目结构

<img src="https://yong-gan-niu-niu-1311841992.cos.ap-beijing.myqcloud.com/images/image-20230929115843966.png" alt="image-20230929115843966" style="zoom:50%;" />

#### 配置

<img src="https://yong-gan-niu-niu-1311841992.cos.ap-beijing.myqcloud.com/images/image-20230929115930866.png" alt="image-20230929115930866" style="zoom: 50%;" />

- `Name`: 当前项目或模块名
- `SDK`: JDK 版本
- `Language level`: 语言等级，IDEA 会根据该设置提供不同语言级别的特性（前提是 SDK 支持该语言级别否则报错）

<img src="https://yong-gan-niu-niu-1311841992.cos.ap-beijing.myqcloud.com/images/image-20230929120234518.png" alt="image-20230929120234518" style="zoom:50%;" />

IDEA 中当前项目的 JDK 配置分为：

- 项目
- 模块

当项目 JDK 没有配置后会去查看模块中 JDK 的配置如果都没有就会报错

### 6.2 配置 Maven

#### Maven 的下载

前往 [Maven 官网](https://maven.apache.org/) 进行下载对应版本的 Maven （不同 IDEA 版本对应的 Maven 可能不同，配置前可以 Bing ~ 一下）

此处 IDEA 为 2023.2.3 版本 Maven 为 3.8.8

<img src="https://yong-gan-niu-niu-1311841992.cos.ap-beijing.myqcloud.com/images/image-20230929120521756.png" alt="image-20230929120521756" style="zoom:50%;" />

#### Maven 配置

下载好 Maven 后将其解压

<img src="https://yong-gan-niu-niu-1311841992.cos.ap-beijing.myqcloud.com/images/image-20230929120613308.png" alt="image-20230929120613308" style="zoom:50%;" />

- `bin`: 脚本
- `boot`: 用于存放一些启动 jar
- `conf`: 配置
- `lib`: 第三方库
- `LICENSE`: 许可证
- `NOTICE`: 说明
- `README.txt`: 说明文档

进入 conf 目录后打开 setting.xml 文件进行配置：

##### 配置本地仓库

```xml
  <!-- localRepository
   | The path to the local repository maven will use to store artifacts.
   |
   | Default: ${user.home}/.m2/repository
  <localRepository>/path/to/local/repo</localRepository>
  -->
  <localRepository>D:\Tools\mvn-repo</localRepository>
```

##### 配置 ALiYun 镜像

Maven 默认使用的是中央仓库在国内访问缓慢我们可以通过：[阿里云Maven中央仓库](https://maven.aliyun.com/) 将其更改为 ALiYun 的镜像来解决：

```xml
  <mirrors>
    <!-- mirror
     | Specifies a repository mirror site to use instead of a given repository. The repository that
     | this mirror serves has an ID that matches the mirrorOf element of this mirror. IDs are used
     | for inheritance and direct lookup purposes, and must be unique across the set of mirrors.
     |
    <mirror>
      <id>mirrorId</id>
      <mirrorOf>repositoryId</mirrorOf>
      <name>Human Readable Name for this Mirror.</name>
      <url>http://my.repository.com/repo/path</url>
    </mirror>
     -->
    <mirror>
      <id>maven-default-http-blocker</id>
      <mirrorOf>external:http:*</mirrorOf>
      <name>Pseudo repository to mirror external repositories initially using HTTP.</name>
      <url>http://0.0.0.0/</url>
      <blocked>true</blocked>
    </mirror>
    <mirror>
    <id>aliyunmaven</id>
    <mirrorOf>*</mirrorOf>
    <name>阿里云公共仓库</name>
    <url>https://maven.aliyun.com/repository/public</url>
</mirror>
  </mirrors>
```

注意：要配置到 `<mirrors>` 标签中且格式正确否则会报错

#### 在 IDEA 中配置 Maven

IDEA 中 Maven 的配置一般针对的是全局 （单个项目配置的话，新建项目就又~）

注意：这里实在全局配置中进行的

<img src="https://yong-gan-niu-niu-1311841992.cos.ap-beijing.myqcloud.com/images/image-20230929121329769.png" alt="image-20230929121329769" style="zoom:50%;" />

### 6.3 配置 Git

Git（读音为/gɪt/）是一个开源的分布式版本控制系统，可以有效、高速地处理从很小到非常大的项目版本管理。

#### 下载 Git

进入 Git 官网：https://git-scm.com/ ， 网页会自动识别你当前的系统，然后提供对应的下载安装包，点击 Download 进入下载页：

<img src="https://yong-gan-niu-niu-1311841992.cos.ap-beijing.myqcloud.com/images/image-20230929121502045.png" alt="image-20230929121502045" style="zoom:50%;" />

#### 配置 Git 信息

##### 通过命令行的方式配置

我们可以通过命令行的方式对 git 进行配置：

<img src="https://yong-gan-niu-niu-1311841992.cos.ap-beijing.myqcloud.com/images/image-20230929121550037.png" alt="image-20230929121550037" style="zoom:50%;" />

使用 ` git config --global --list` 查看当前配置信息：

<img src="https://yong-gan-niu-niu-1311841992.cos.ap-beijing.myqcloud.com/images/image-20230929121644683.png" alt="image-20230929121644683" style="zoom:50%;" />

使用 `git config --global [配置项]` 按需配置

##### 通过修改 git 配置文件的方式配置

git 会在当前用户目录下生成一个 `.gitconfig` 的文件我们可以直接配置该文件来对 git 进行配置 (需要使用命令行的方式配置后才会生成)

这种方式更~ 适合于换新电脑吧（免去一步一步进行配置） 🤣🤣

```config
[user]
	name = cola777jz
	email = cola777jz@gmail.com
[http]
  proxy = http://127.0.0.1:7890
[https]
  proxy = https://127.0.0.1:7890
```

#### 在 IDEA 中配置 Git

IDEA 中 Git 的配置一般针对的是全局 （单个项目配置的话，新建项目就又~）

进入 ==Settings --> Version Control --> Git== 后点击 Test 出现 Git Version [xxx]

<img src="https://yong-gan-niu-niu-1311841992.cos.ap-beijing.myqcloud.com/images/image-20230929122127316.png" alt="image-20230929122127316" style="zoom:50%;" />

进入 ==Settings --> Version Control --> Commit== 关闭 Analyze code 和 Check TODO (个人~)

<img src="https://yong-gan-niu-niu-1311841992.cos.ap-beijing.myqcloud.com/images/image-20230929122158292.png" alt="image-20230929122158292" style="zoom:50%;" />

### 6.4 配置 Github、Gitee

IDEA 中 Github、Gitee 的配置一般针对的是全局 （单个项目配置的话，新建项目就又~）

进入 ==Settings --> Version Control --> GitHub==

<img src="https://yong-gan-niu-niu-1311841992.cos.ap-beijing.myqcloud.com/images/image-20230929122402786.png" alt="image-20230929122402786" style="zoom:50%;" />

进入 ==Settings --> Version Control --> Gitee==

<img src="https://yong-gan-niu-niu-1311841992.cos.ap-beijing.myqcloud.com/images/image-20230929122352114.png" alt="image-20230929122352114" style="zoom:50%;" />

### 6.5 配置类模板

IDEA 中 类模板 的配置一般针对的是全局

进入 ==Settings --> Editor --> File and Code Templates==

```java
/**
 * @author Cola777jz
 * @name ${NAME}
 * @date ${DATE} ${TIME}
 * @since 1.0.0
 */
```

<img src="https://yong-gan-niu-niu-1311841992.cos.ap-beijing.myqcloud.com/images/image-20230929122519294.png" alt="image-20230929122519294" style="zoom:50%;" />

### 6.6 配置 Terminal

IDEA 中 Terminal 的配置一般针对的是全局 （单个项目配置的话，新建项目就又~）

进入 ==Settings --> Tools--> SSH Configurations==

<img src="https://yong-gan-niu-niu-1311841992.cos.ap-beijing.myqcloud.com/images/image-20230929122643367.png" alt="image-20230929122643367" style="zoom:50%;" />

<font title="red">个人的话推荐打开 Save password </font>

### 6.7 配置 Docker

IDEA 中 Docker 的配置一般是针对当前项目的，具体操作如下：

进入 ==Settings --> Build、Execution、Deployment-> Docker==

IDEA 为我们提供了：

- Docker for Windows
- TCP Socket
- SSH

其中 Docker for Windows 主要适用于已经安装了 DockerDesktop 的用户（如果你的电脑安装了 DockerDesktop 并且 Docker 运行正常 IDEA 会自动识别并连接）

TCP Socket 为我们提供了使用 API URL 的方式连接 Docker （主要配置为获取 Docker 开放的端口（2375）及 URL 信息，TODO）

此处我们重点介绍使用 SSH 的方式连接 Docker （配置方便 ~）

<img src="https://yong-gan-niu-niu-1311841992.cos.ap-beijing.myqcloud.com/images/image-20230929123037163.png" alt="image-20230929123037163" style="zoom:50%;" />

## 七、IDEA 常见问题汇总

### 7.1 总是启动上一次打开的项目

进入 ==Settings --> Apperarance & Behavior--> System Settings== 后关闭 Reopen projects on startup

<img src="https://yong-gan-niu-niu-1311841992.cos.ap-beijing.myqcloud.com/images/image-20230929123546664.png" alt="image-20230929123546664" style="zoom:50%;" />

### 7.2 内存不够了 🥲🥲🥲

IDEA 作为内存大户总是存在内存不够的情况：

<img src="https://yong-gan-niu-niu-1311841992.cos.ap-beijing.myqcloud.com/images/image-20230929123646001.png" alt="image-20230929123646001" style="zoom:50%;" />

打开 Show Memory Indicator 查看内存使用情况，双击 <kbd>Shift</kbd> 打开 Search Everywhere 后输入 `memory`:

<img src="https://yong-gan-niu-niu-1311841992.cos.ap-beijing.myqcloud.com/images/image-20230929123826455.png" alt="image-20230929123826455" style="zoom:50%;" />

<img src="https://yong-gan-niu-niu-1311841992.cos.ap-beijing.myqcloud.com/images/image-20230929123844948.png" alt="image-20230929123844948" style="zoom:50%;" />

### 7.3 导入导出设置

每次换了新环境或者用别的 IDEA 的时候总要重新配置一遍真的很麻烦使用 IDEA 的设置导入、导出功能可以很方便的进行迁移：

可以导入、导出的配置包括：

- 插件
- 设置

等

#### 导出配置

进入 ==File--> Manage IDE Settings--> Export Settings==

<img src="https://yong-gan-niu-niu-1311841992.cos.ap-beijing.myqcloud.com/images/image-20230929125219795.png" alt="image-20230929125219795" style="zoom:50%;" />

#### 导入配置

进入 ==File--> Manage IDE Settings--> Import Settings==