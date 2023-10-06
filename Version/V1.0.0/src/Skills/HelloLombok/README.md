---
title: Lombok 🌶️🌶️🌶️
order: 3
index: false
icon: https://yong-gan-niu-niu-1311841992.cos.ap-beijing.myqcloud.com/images/%E8%BE%A3%E6%A4%92.svg
category:
  - Skills
  - HelloLombok
  - README
---

- [Lombok 的基本使用](lombok-01.md)
- [Lombok 原理](lombok-02.md)
- [Lombok 注意事项](lombok-03.md)

## 概述

[Lombok ](https://projectlombok.org/)是一个超酷的 Java 库，**它能让你避免编写那些冗余的 Java 样板式代码**，如对象中的 `get`、`set`、`toString` 等方法，解放你的双手，堪称偷懒神器，在企业级项目开发中，是必会的一个库。

Lombok 提供了一组注解和工具，用于在编译期自动生成样板代码。这些样板代码通常是一些重复性的、无趣的、但是必需的代码，例如 `getter` 和 `setter` 方法、构造函数、`equals` 和 `hashCode` 方法等。借助 Lombok，你就不必手动编写这些繁琐的代码，它会在编译时自动帮你生成这些方法，让你的代码文件简洁而整洁。

## Features

1. **简化 Getter 和 Setter 方法：** 在传统的 Java 开发中，你经常需要为每个类的属性手动编写 Getter 和 Setter 方法，但是有了 Lombok，你只需要在属性上加上 `@Getter` 和 `@Setter` 注解，Lombok 就会为你自动生成这些方法。
2. **自动生成构造函数：** 通过 `@NoArgsConstructor`、`@RequiredArgsConstructor` 或 `@AllArgsConstructor` 注解，你可以快速生成无参构造函数、带有必需参数的构造函数或者带有全部参数的构造函数。
3. **自动生成 equals 和 hashCode 方法：** 通过 `@EqualsAndHashCode` 注解，Lombok 会根据类的字段自动生成 `equals()` 和 `hashCode()` 方法，让你的类更易于比较和使用在集合中。
4. **日志记录更轻松：** 使用 `@Slf4j` 注解，你可以直接在类中使用 `log` 对象，而无需手动创建日志记录器。
5. **简化异常抛出：** 通过 `@SneakyThrows` 注解，你可以在方法中抛出受检异常，而无需显式地在方法上声明或捕获它们。
6. **数据类简化：** 使用 `@Data` 注解，Lombok 会为你自动生成所有常用方法，如 Getter、Setter、`toString()` 等，让你的数据类更加简洁。
7. **链式调用：** 使用 `@Builder` 注解，Lombok 可以帮你创建一个更优雅的构建器模式，让你的对象初始化更加流畅。