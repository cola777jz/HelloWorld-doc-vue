---
title: Docker 快速搭建应用
order: 1
index: false
icon: https://yong-gan-niu-niu-1311841992.cos.ap-beijing.myqcloud.com/images/docker.svg
category:
  - Tools
  - HelloDocker
  - README
---

- [Docker 相关概念](docker-01.md)
- [在 CentOS7 中安装 Docker](docker-01.md)
- [Docker 安装常用服务](docker-03.md)
- [使用 Docker容器配置 MySQL 主从数据库](docker-04.md)
- [Docker 删除所有悬虚镜像](docker-05.md)
- [IDEA + Docker 快速部署 Spring Boot 项目](docker-06.md)
- [WebStorm + Docker 快速部署 Nginx 项目](docker-07.md)
- [Docker-compose 的安装](docker-08.md)

## 概述

<div align="center">
    <img src="https://yong-gan-niu-niu-1311841992.cos.ap-beijing.myqcloud.com/images/Docker.svg" alt="Logo">
</div>

Docker 是一种开源的容器化平台，用于简化应用程序的部署和管理。它通过将应用程序及其依赖项打包为独立的容器，提供了一种轻量级、可移植和可扩展的解决方案。

## Features

1. 容器化：Docker 使用容器化技术，将应用程序及其依赖项打包为容器。每个容器都是独立的、可移植的，包含了应用程序运行所需的所有组件，如代码、运行时环境、库和配置文件。
2. 轻量级和快速：相比于传统的虚拟化技术，Docker 容器更加轻量级，启动速度更快。这是因为容器共享操作系统内核，并且不需要启动完整的虚拟机。
3. 可移植性：Docker 容器是与平台无关的，可以在任何支持 Docker 的操作系统上运行，如 Windows、Linux 和 macOS。
4. 简化部署：借助 Docker，开发者可以轻松地将应用程序和其依赖项打包为容器，并在不同的环境中进行部署，无需担心环境差异和依赖冲突。
5. 可扩展性：Docker 提供了一种简单的方式来扩展应用程序，通过使用容器编排工具（如 Docker Compose 和 Kubernetes），可以轻松地定义和管理多个容器的组合，实现应用程序的水平扩展和负载均衡。
6. 生态系统：Docker 拥有一个庞大的生态系统，提供了各种官方和第三方的容器镜像，涵盖了各种应用程序和服务，从数据库到应用服务器再到消息队列等等。

总体而言，Docker 提供了一种简单、高效和可靠的方式来构建、交付和运行应用程序。它已经成为现代软件开发和部署的重要工具，广泛应用于开发、测试和生产环境中。


