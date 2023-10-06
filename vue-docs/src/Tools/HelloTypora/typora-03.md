---
title: Typora 的破解及配置
order: 1
category:
  - Tools
  - HelloTypora
  - MD
---

## 一、 破解

使用 `dll`破解的方式破解 Typora

1. [点击下载相关资源](https://yong-gan-niu-niu-1311841992.cos.ap-beijing.myqcloud.com/tools/typora1.4.8.zip)

![image-20230923212251035](https://yong-gan-niu-niu-1311841992.cos.ap-beijing.myqcloud.com/images/image-20230923212251035.png)

2. 将 Typora 的安装路径配置为排除项

![image-20230923212424622](https://yong-gan-niu-niu-1311841992.cos.ap-beijing.myqcloud.com/images/image-20230923212424622.png)

![image-20230923212438193](https://yong-gan-niu-niu-1311841992.cos.ap-beijing.myqcloud.com/images/image-20230923212438193.png)

![image-20230923212452731](https://yong-gan-niu-niu-1311841992.cos.ap-beijing.myqcloud.com/images/image-20230923212452731.png)

3. 安装好后，打开文件所在位置，将激活文件中的 `dll` 替换到 `Typora` 的根目录下即可

![image-20221118191944990](https://yong-gan-niu-niu-1311841992.cos.ap-beijing.myqcloud.com/images/image-20221118191944990.png)

4. 关闭更新

![image-20221118192003765](https://yong-gan-niu-niu-1311841992.cos.ap-beijing.myqcloud.com/images/image-20221118192003765.png)

![image-20221118192013272](https://yong-gan-niu-niu-1311841992.cos.ap-beijing.myqcloud.com/images/image-20221118192013272.png)

## 二、配置

### 2.1 关闭拼写检查

![image-20230923212737184](https://yong-gan-niu-niu-1311841992.cos.ap-beijing.myqcloud.com/images/image-20230923212737184.png)

### 2.2 开启额外支持

![image-20230923212827455](https://yong-gan-niu-niu-1311841992.cos.ap-beijing.myqcloud.com/images/image-20230923212827455.png)

### 2.3 搭配 PicGo + Cos 实现图片上传功能

PicGo + Cos 的使用可参考 [Picgo 搭配 COS](./dev_06.md)

![image-20230923212917163](https://yong-gan-niu-niu-1311841992.cos.ap-beijing.myqcloud.com/images/image-20230923212917163.png)

### 2.4 验证

![image-20230923215253904](https://yong-gan-niu-niu-1311841992.cos.ap-beijing.myqcloud.com/images/image-20230923215253904.png)

复制图片至剪切板后在 Typora 中直接复制即可自动上传并将 src 引用替换为相应地址

![image-20230923215325882](https://yong-gan-niu-niu-1311841992.cos.ap-beijing.myqcloud.com/images/image-20230923215325882.png)