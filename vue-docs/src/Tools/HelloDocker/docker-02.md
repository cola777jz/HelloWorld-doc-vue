---
title: 在 CentOS7 中安装 Docker
order: 2
category:
  - Tools
  - HelloDocker
  - MD
---


## 六、在 CentOS 7 中安装 Docker

### 6.1 前置环境的安装

使用 `cat /etc/redhat-release` 查看当前系统内核是否满足条件

目前，CentOS 仅发行版本中的内核支持 Docker。Docker 运行在CentOS 7 (64-bit)上，

要求系统为64位、Linux系统内核版本为 3.8以上，这里选用Centos7.x

![img](https://cola-picgo-1311841992.cos.ap-beijing.myqcloud.com/20230416085202.png)

#### 安装 yum 工具

执行  `sudo yum install -y yum-utils`

<img src="https://cola-picgo-1311841992.cos.ap-beijing.myqcloud.com/20230416085210.png" alt="img" style="zoom:50%;" />

#### 安装 gcc

执行 `yum -y install gcc`

<img src="https://cola-picgo-1311841992.cos.ap-beijing.myqcloud.com/20230416085219.png" alt="img" style="zoom:50%;" />

#### 安装 gcc-c++

执行 `yum -y install  gcc-c++`

<img src="https://yong-gan-niu-niu-1311841992.cos.ap-beijing.myqcloud.com/images/image-20230929160602390.png" alt="image-20230929160602390" style="zoom:50%;" />

### 6.2 设置 stable 镜像仓库

```shell
yum-config-manager --add-repo http://mirrors.aliyun.com/docker-ce/linux/centos/docker-ce.repo

```

![img](https://cola-picgo-1311841992.cos.ap-beijing.myqcloud.com/20230416085251.png)

#### 刷新 yum 缓存

执行 `yum makecache fast`

<img src="https://cola-picgo-1311841992.cos.ap-beijing.myqcloud.com/20230416085311.png" alt="img" style="zoom:50%;" />

### 6.3 安装 Docker CE

执行 `yum -y install docker-ce docker-ce-cli containerd.io`

<img src="https://cola-picgo-1311841992.cos.ap-beijing.myqcloud.com/20230416085319.png" alt="img" style="zoom:50%;" />

### 6.4 验证 Docker

#### 启动 Docker

执行 `systemctl start docker`

![img](https://cola-picgo-1311841992.cos.ap-beijing.myqcloud.com/20230416085335.png)

#### 查看 Docker 版本

执行 `docker version`

<img src="https://cola-picgo-1311841992.cos.ap-beijing.myqcloud.com/20230416085354.png" alt="img" style="zoom:50%;" />

#### 将 Docker 设置为开机自启

执行 `systemctl enable docker`



#### HelloDocker

执行 `docker run hello-world`

<img src="https://cola-picgo-1311841992.cos.ap-beijing.myqcloud.com/20230416085406.png" alt="img" style="zoom:50%;" />

###  6.5 配置阿里云镜像加速

配置阿里云镜像加速 [容器镜像服务 (aliyun.com)](https://cr.console.aliyun.com/cn-shanghai/instances/mirrors)

<img src="https://cola-picgo-1311841992.cos.ap-beijing.myqcloud.com/20230416085419.png" alt="img" style="zoom:50%;" />

1. 回退 `cd ~`
2. 执行脚本 此处需要申请自己的加速地址

```sh
sudo mkdir -p /etc/docker
sudo tee /etc/docker/daemon.json <<-'EOF'
{
  "registry-mirrors": ["xxx"]
}
EOF
sudo systemctl daemon-reload
sudo systemctl restart docker

```

<img src="https://cola-picgo-1311841992.cos.ap-beijing.myqcloud.com/20230416085440.png" alt="img" style="zoom:50%;" />