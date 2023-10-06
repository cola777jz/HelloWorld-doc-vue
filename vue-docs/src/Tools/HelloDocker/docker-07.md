---
title: WebStorm + Docker 快速部署 Nginx 项目
order: 7
category:
  - Tools
  - HelloDocker
  - MD
---


# WebStorm + Docker 快速部署 Nginx 项目

## 一、 WebStorm 中 Docker 的配置

可参考 [IDEA + Docker 快速部署 Spring Boot 项目](./docker-06.md) 中的配置，过程基本相同。

## 二、快速部署 Nginx 项目

这部分 Dockerfile 的创建及启动脚本的配置基本类似我们讲解下流程即可：

Nginx 在配置过程中需要手动配置 `nginx.conf` 等信息

- [下载 Nginx 配置文件](https://yong-gan-niu-niu-1311841992.cos.ap-beijing.myqcloud.com/tools/conf.zip) 并存放与项目中

![image-20230924163455499](https://yong-gan-niu-niu-1311841992.cos.ap-beijing.myqcloud.com/images/image-20230924163455499.png)

- 配置 nginx 相关信息例如 port

![image-20230924163439688](https://yong-gan-niu-niu-1311841992.cos.ap-beijing.myqcloud.com/images/image-20230924163439688.png)

- Dockerfile 文件

```dockerfile
FROM nginx

# 映射 HTML
COPY ./src/.vuepress/dist ./usr/share/nginx/html
# Conf

COPY src/.vuepress/dist/conf/nginx.conf ./etc/nginx/conf.conf
COPY src/.vuepress/dist/conf/conf.d ./etc/nginx/conf.d

EXPOSE 80
```

- 配置启动脚本

见下方案例

- 打包后将 conf 文件移入 dist 文件中

见下方案例

## 三、案例

此处以 `vue-hope` 为基础模板进行操作 关于 `vue-hope` 此处可参照 [Vue-Hope 模板](../../HelloWorld/Vue-Hope) 中的内容 （帮你快速搭建一个 基于 Vue3 的 Blog）

### 3.1 将 conf 文件 复制到项目中

![image-20230924181030421](https://yong-gan-niu-niu-1311841992.cos.ap-beijing.myqcloud.com/images/image-20230924181030421.png)

### 3.2 配置 nginx

这里我想要绑定 81 端口 （如果你想绑定的是 80 的话这一步可以省略）

![image-20230924181157519](https://yong-gan-niu-niu-1311841992.cos.ap-beijing.myqcloud.com/images/image-20230924181157519.png)

### 3.3 创建 Dockerfile 并配置启动脚本

```dockerfile
FROM nginx

# 映射 HTML
COPY ./src/.vuepress/dist ./usr/share/nginx/html
# Conf

COPY src/.vuepress/dist/conf/nginx.conf ./etc/nginx/conf.conf
COPY src/.vuepress/dist/conf/conf.d ./etc/nginx/conf.d

EXPOSE 81
```



![image-20230924181306151](https://yong-gan-niu-niu-1311841992.cos.ap-beijing.myqcloud.com/images/image-20230924181306151.png)

![image-20230924181501959](https://yong-gan-niu-niu-1311841992.cos.ap-beijing.myqcloud.com/images/image-20230924181501959.png)



### 3.4 打包前端项目

![image-20230924181723691](https://yong-gan-niu-niu-1311841992.cos.ap-beijing.myqcloud.com/images/image-20230924181723691.png)

### 3.5 将 conf 目录移入打包后的 dist 中



#### 3.6 启动 Docker



## 四、验证

TODO

### 