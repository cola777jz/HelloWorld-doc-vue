---
title: IDEA + Docker 快速部署 Spring Boot 项目
order: 6
category:
  - Tools
  - HelloDocker
  - MD
---


# IDEA + Docker 快速部署 Spring Boot 项目

## 一、IDEA 中 Docker 的配置

### 1.1 将 Docker 连接至 IDEA

在 IDEA 中使用 Docker 需要我们在 `settings -> build -> Docker ` 中配置 Docker 的相关信息

![image-20230924155018081](https://yong-gan-niu-niu-1311841992.cos.ap-beijing.myqcloud.com/images/image-20230924155018081.png)

可以看到 IDEA 为我们提供了 3 种方式连接至 Docker：

- Docker for Windows
- TCP Socket
- SSH

其中 Docker for Windows 主要适用于已经安装了 DockerDesktop 的用户（如果你的电脑安装了 DockerDesktop 并且 Docker 运行正常 IDEA 会自动识别并连接）

TCP Socket 为我们提供了使用 API URL 的方式连接 Docker （主要配置为获取 Docker 开放的端口（2375）及 URL 信息，TODO）

此处我们重点介绍使用 SSH 的方式连接 Docker （配置方便 ~）

---

在 IDEA 中我们可以在 `settings -> build -> Tools -> SSH Configurations` 中配置远程服务器的相关信息：

![image-20230924155754924](https://yong-gan-niu-niu-1311841992.cos.ap-beijing.myqcloud.com/images/image-20230924155754924.png)

添加好后我们进入 IDEA 中 Docker 的配置界面使用 SSH 的方式连接至 Docker

::: tip

需要确保远程主机 Docker 正常使用

:::

当出现  `Connection successful` 即代表连接成功

![image-20230924155931329](https://yong-gan-niu-niu-1311841992.cos.ap-beijing.myqcloud.com/images/image-20230924155931329.png)

然后我们就可以在 Service 选项卡中看到刚才配置好的 Docker

![image-20230924160022636](https://yong-gan-niu-niu-1311841992.cos.ap-beijing.myqcloud.com/images/image-20230924160022636.png)

## 二、快速构建 SpringBoot 项目并上线

### 2.1 创建 SpringBoot 项目

我们使用 Spring Initializer 快速创建一个 SpringBoot 项目

![image-20230924160224532](https://yong-gan-niu-niu-1311841992.cos.ap-beijing.myqcloud.com/images/image-20230924160224532.png)

接着我们写点代码吧 ~

```java
@SpringBootApplication
@Slf4j
public class DeployWithDockerApplication {

    public static void main(String[] args) {
        SpringApplication.run(DeployWithDockerApplication.class, args);

        log.info("DeployWithDockerApplication run successful ");
    }

    @RestController
    @RequestMapping("api/v1/hello")
    static class HelloController{
        @GetMapping("/sayHello/{name}")
        public String sayHello(@PathVariable("name") String name){
            return "Hello I am " + name;
        }
    }

}
```

```properties
server.port=8080
```

### 2.2 上线

####  2.2.1 Dockerfile 文件的配置

我们需要在项目的根目录下创建名为 `Dockerfile` 的文件，并配置相关信息方便 Docker 读取

![image-20230924160421538](https://yong-gan-niu-niu-1311841992.cos.ap-beijing.myqcloud.com/images/image-20230924160421538.png)

```dockerfile
FROM xldevops/jdk17-lts

COPY target/DeployWithDocker-0.0.1-SNAPSHOT.jar .

CMD java -jar DeployWithDocker-0.0.1-SNAPSHOT.jar

EXPOSE 8080

```

- 因为我们用的是 `SpringBoot 3.1.4` 所以需要 `jdk 17` 的支持 `FROM xldevops/jdk17-lts` 表示以该镜像为基础镜像进行构建

- 其中 `COPY target/DeployWithDocker-0.0.1-SNAPSHOT.jar .` 命令中：
    - `COPY target/DeployWithDocker-0.0.1-SNAPSHOT.jar` 代表将 `target` 目录下的 `DeployWithDocker-0.0.1-SNAPSHOT.jar` 文件复制到 Docker 容器中的 `.` 目录下

- `CMD java -jar DeployWithDocker-0.0.1-SNAPSHOT.jar` 命令使用 `java -jar` 的方式启动 `DeployWithDocker-0.0.1-SNAPSHOT.jar` `jar` 包
- `EXPOSE 8080` 表示将 `8080` 端口暴露出来

#### 2.2.2 配置启动脚本

![image-20230924160944390](https://yong-gan-niu-niu-1311841992.cos.ap-beijing.myqcloud.com/images/image-20230924160944390.png)

![image-20230924161002845](https://yong-gan-niu-niu-1311841992.cos.ap-beijing.myqcloud.com/images/image-20230924161002845.png)

接下来我们对启动脚本进行配置

![image-20230924161030842](https://yong-gan-niu-niu-1311841992.cos.ap-beijing.myqcloud.com/images/image-20230924161030842.png)

我们选其中重要的几个参数进行讲解：

- Build

    - Dockerfile 表示 Dockerfile 文件的位置
    - Image tag 为构建镜像的标签其命名格式为 (`{name}/{author}:{version}`)

  ::: danger

  `Image tag` 中不允许存在大写字母否则会报错

  :::

  ![image-20230924161741506](https://yong-gan-niu-niu-1311841992.cos.ap-beijing.myqcloud.com/images/image-20230924161741506.png)

- Run

    - Container name 生成容器的名称
    - bind port 用于配置端口映射

  我们还可以在 `Modify ` 中配置更多的参数信息

  ![image-20230924161316642](https://yong-gan-niu-niu-1311841992.cos.ap-beijing.myqcloud.com/images/image-20230924161316642.png)

- Before launch  启动前需要执行的操作

![image-20230924161414321](https://yong-gan-niu-niu-1311841992.cos.ap-beijing.myqcloud.com/images/image-20230924161414321.png)

可以配置很多操作这里我们配置一下 `maven` 让该脚本在启动前自动执行 `clean `、`package `等命令

![image-20230924161525068](https://yong-gan-niu-niu-1311841992.cos.ap-beijing.myqcloud.com/images/image-20230924161525068.png)

这里建议将 `IDEA` 中 `Maven` 的模式更改为 `skip test`(原因顾名思义啦 ~)

![image-20230924161632738](https://yong-gan-niu-niu-1311841992.cos.ap-beijing.myqcloud.com/images/image-20230924161632738.png)

## 三、验证

Docker 启动！

![image-20230924161930083](https://yong-gan-niu-niu-1311841992.cos.ap-beijing.myqcloud.com/images/image-20230924161930083.png)

我们可以使用 `curl -X "GET" "http://{host}:{port}/api/v1/hello/start"` 进行访问测试

![image-20230924162355087](https://yong-gan-niu-niu-1311841992.cos.ap-beijing.myqcloud.com/images/image-20230924162355087.png)

::: tip

多次构建同名（大多情况是版本相同）的镜像时会导致虚悬镜像的产生，我们可以参考：[Docker 删除所有悬虚镜像](./docker_05.md) 中使用 `docker image prune` 进行清理

:::

![image-20230924162546368](https://yong-gan-niu-niu-1311841992.cos.ap-beijing.myqcloud.com/images/image-20230924162546368.png)

![image-20230924162622065](https://yong-gan-niu-niu-1311841992.cos.ap-beijing.myqcloud.com/images/image-20230924162622065.png)