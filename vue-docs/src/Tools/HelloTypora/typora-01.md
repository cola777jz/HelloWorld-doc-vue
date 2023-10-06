---
title: Typora 基本语法
order: 1
category:
  - Tools
  - HelloTypora
  - MD
---

[TOC]

# Typora

## 一、下载和安装

- [Typora 官方中文站 (typoraio.cn)](https://typoraio.cn/) 下载安装即可
- 激活的话 Emmmmm ~ 参考：[Typora 的破解及配置 | 勇敢牛牛](http://8.130.21.128/zh/Study/Tools/Dev/dev_07.html)

## 二、语法

特殊 css 是通过主题（信息、警告、彩色标签等）实现的

[Happysimple](https://github.com/HappySimple/Typora-theme-Happysimple) 主题

### 2.1 标题

```markdown
# 一级标题
## 二级标题
### 三级标题
#### 四级标题
```

### 2.2 引言

> Sir this way

<blockquote alt="info"><p>信息</p></blockquote>

<blockquote alt="warn"><p>警告</p></blockquote>

<blockquote alt="danger"><p>危险</p></blockquote>

<blockquote alt="success"><p>成功</p></blockquote>

```markdown
> Sir this way

<blockquote alt="info"><p>信息</p></blockquote>

<blockquote alt="warn"><p>警告</p></blockquote>

<blockquote alt="danger"><p>危险</p></blockquote>

<blockquote alt="success"><p>成功</p></blockquote>

```

### 2.3 文字格式

<!-- 这是个注释 -->
如有问题请查询 [百度](https://www.baidu.com)，相关数据在 <https://www.baidu.com> 下载。

<font>默认标签</font>
<font title="red">红色标签</font>
<font title="yellow">黄色标签</font>
<font title="green">绿色标签</font>
<font title="blue">蓝色标签</font>
<font title="gray">灰色标签</font>
<font style="background-color:#28af94">自定义颜色标签</font>

<span alt="solid">下划线</span>
<span alt="dotted">着重号</span>
<span alt="wavy">波浪线</span>
<span alt="delete">删除线</span>
<span alt="shadow">阴影效果</span>
<span alt="hollow">空心字</span>
<span alt="blink">字体闪烁</span>

==高亮==
<kbd>Enter</kbd>

```markdown
<!-- 这是个注释 -->
如有问题请查询 [百度](https://www.baidu.com)，相关数据在 <https://www.baidu.com> 下载。

<font>默认标签</font>
<font title="red">红色标签</font>
<font title="yellow">黄色标签</font>
<font title="green">绿色标签</font>
<font title="blue">蓝色标签</font>
<font title="gray">灰色标签</font>
<font style="background-color:#28af94">自定义颜色标签</font>

<span alt="solid">下划线</span>
<span alt="dotted">着重号</span>
<span alt="wavy">波浪线</span>
<span alt="delete">删除线</span>
<span alt="shadow">阴影效果</span>
<span alt="hollow">空心字</span>
<span alt="blink">字体闪烁</span>

==高亮==
<kbd>Enter</kbd>
```

### 2.4 注解

这里有一个脚注[^1]。



```markdown
这里有一个脚注[^1]。
```

### 2.5 表

#### 2.5.1 列表

1. 有序列表
    1. 有序列表
    2. 有序列表


- 无序列表
    - 无序列表
    - 无序列表


- [ ] 事项1
- [ ] 事项2
- [ ] 事项3

```markdown
1. 有序列表
   1. 有序列表
   2. 有序列表
   


- 无序列表
  - 无序列表
  - 无序列表
  


- [ ] 事项1
- [ ] 事项2
- [ ] 事项3
```

#### 2.5.2 表格

|  日期   |  金额  |  利息  |
| :-----: | :----: | :----: |
| 2012.03 | ￥2000 | ￥2000 |
| 2012.04 | ￥2000 | ￥2000 |
| 2012.05 | ￥2000 | ￥2000 |
| 2012.06 | ￥2000 | ￥2000 |

```markdown
|  日期   |  金额  |  利息  |
| :-----: | :----: | :----: |
| 2012.03 | ￥2000 | ￥2000 |
| 2012.04 | ￥2000 | ￥2000 |
| 2012.05 | ￥2000 | ￥2000 |
| 2012.06 | ￥2000 | ￥2000 |
```

### 2.6 HTML 标签

#### 2.6.1 details标签

<details>
    <summary>折叠标签</summary>
    <p>青青子衿，悠悠我心</p>
    <p>老骥伏枥，志在千里</p>
</details>

#### 2.6.2 firame 标签

<iframe src="//player.bilibili.com/player.html?aid=298790645&bvid=BV1uF411M7Tn&cid=712764047&p=1" height = "500" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true" width="50%"> </iframe>



```markdown
<iframe src="//player.bilibili.com/player.html?aid=298790645&bvid=BV1uF411M7Tn&cid=712764047&p=1" height = "500" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true" width="50%"> </iframe>
```

### 2.7 数学公式

$y=ax^2+bx+c$
$$
y=ax^2+bx+c
$$

`print('Hello World')`



```matlab
$y=ax^2+bx+c$
$$
y=ax^2+bx+c
$$

`print('Hello World')`

```

[^1]: 我是脚注