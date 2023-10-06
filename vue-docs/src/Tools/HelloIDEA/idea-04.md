---
title: IDEA 环境配置
order: 4
category:
  - Tools
  - HelloIDEA
  - MD
---

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