---
title: NVM 的下载和使用
order: 1
category:
  - Tools
  - HelloNVM
  - MD
---

## 二、NVM 安装与使用

nvm 分为 windows 和 linux （MacOS 、Ubuntu 等）版本

- [NVM-Windows](https://github.com/coreybutler/nvm-windows)
- [NVM-Sh](https://github.com/nvm-sh/nvm)

此处着重介绍 windows 下的安装 （其使用方式基本通用）

### 2.1 安装 NVM

![image-20230924170415881](https://yong-gan-niu-niu-1311841992.cos.ap-beijing.myqcloud.com/images/image-20230924170415881.png)

- [点击下载 NVM](https://yong-gan-niu-niu-1311841992.cos.ap-beijing.myqcloud.com/tools/nvm-setup.exe) 默认安装即可

![image-20230924165514574](https://yong-gan-niu-niu-1311841992.cos.ap-beijing.myqcloud.com/images/image-20230924165514574.png)

### 2.2 NVM 的基本使用

- `nvm list `列出当前可用的 node 版本列表
    - 带 `*` 为正在使用的版本

![image-20230924165718313](https://yong-gan-niu-niu-1311841992.cos.ap-beijing.myqcloud.com/images/image-20230924165718313.png)

- `nvm use` 用于切换当前 node 的版本

![image-20230924165809180](https://yong-gan-niu-niu-1311841992.cos.ap-beijing.myqcloud.com/images/image-20230924165809180.png)

- `nvm install {version}` 用于安装指定版本的 node

  可以搭配 [Node 发行版列表](https://nodejs.org/zh-cn/download/releases) 来选择你需要安装的版本

  ![image-20230924170506869](https://yong-gan-niu-niu-1311841992.cos.ap-beijing.myqcloud.com/images/image-20230924170506869.png)

  