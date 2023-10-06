---
title: Docker 安装常用服务
order: 3
category:
  - Tools
  - HelloDocker
  - MD
---


# Docker 安装常用服务

## 概述

使用 Docker 安装常用服务

## 一、MySQL 的安装与配置

####  拉取 Mysql 镜像

```sh
docker pull mysql
```

#### 创建容器卷

```sh
docker volume create mysql8_3306
```

#### 创建创建 Docker 网络

```sh
docker network create mysql8-net
```

#### 运行 Docker 容器

```sh
docker run -d --name mysql8_3306 -e MYSQL_ROOT_PASSWORD=root -v mysql8_3306:/var/lib/mysql -p 3306:3306 --network=mysql8-net <镜像 id>

```



## 二、Redis 的安装与配置

#### 拉取 Redis 镜像

```sh
docker pull redis:6.0.8
```



#### 创建容器卷

```sh
docker volume create redis6_6379
```

#### 创建 Docker 网络

```sh
docker network create redis6-net
```

#### 自定义配置

1. 使用 `docker volume inspect redis6_6379` 查看容器卷的详细信息
2. 进入相关目录 `cd /var/lib/docker/volumes/redis6_6379`
3. 创建 redis.conf 文件 `vim redis.conf` 输入 Redis 配置文件 文件中的内容
4. 自定义配置

不要将 `redis.conf` 文件创建在 `_data` 文件夹下，应将其创建在上层目录

- `redis.conf` [模板文件](https://yong-gan-niu-niu-1311841992.cos.ap-beijing.myqcloud.com/dockerLibs/redis.conf)

​

<img src="https://cola-picgo-1311841992.cos.ap-beijing.myqcloud.com/20230416110553.png" alt="img" style="zoom:50%;" />

```sh
docker run -d --name redis6_6379 -v redis6_6379:/usr/local/redis -p 6379:6379 --network=redis6-net <镜像 id> redis-server /usr/local/redis/redis.conf
```


## 三、Nginx 的安装与配置

#### 拉取 Nginx 镜像

```sh
docker pull nginx
```



#### 创建容器卷

```sh
docker volume create nginx_80
```

#### 创建 Docker 网络

```sh
docker network create nginx-net
```

#### 自定义配置

> 1. 使用 `docker volume inspect nginx_80` 查看容器卷的详细信息
> 2. 进入相关目录 `cd /var/lib/docker/volumes/nginx_80`
> 3. 创建 nginx.conf 文件 `vim nginx.conf` 输入Nginx 配置文件 文件中的内容
> 4. 使用 `mkdir conf.d` 创建 conf.d 文件夹 `vim default.conf` 输入 [[default.conf]] 文件中的内容

- [nginx.conf 配置文件](https://yong-gan-niu-niu-1311841992.cos.ap-beijing.myqcloud.com/dockerLibs/nginx.conf)
- [default.conf 配置文件](https://yong-gan-niu-niu-1311841992.cos.ap-beijing.myqcloud.com/dockerLibs/default.conf)

注意：因为 `Docker -v` 命令不支持使用容器卷名称直接映射文件所以此处使用容器卷的绝对位置进行映射

```sh
docker run -d --name nginx_80 -v <容器卷绝对位置>/html:/usr/share/nginx/html -v <容器卷绝对位置>/nginx.conf:/etc/nginx/conf.conf -v <容器卷绝对位置>/conf.d:/etc/nginx/conf.d -p 80:80 --network=nginx-net <镜像 id>

```