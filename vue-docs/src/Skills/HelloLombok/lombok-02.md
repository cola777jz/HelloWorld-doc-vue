---
title: Lombok 原理
order: 2
category:
  - Skills
  - HelloLombok
  - MD
---

## 三、深入理解 Lombok

### 3.1 Lombok 原理

经过前面的学习，我们已经熟悉了 Lombok 相关注解，以及使用方法。你可能会好奇， Lombok 的实现原理是什么？Lombok 是如何魔力般地简化我们的 Java 代码的呢？

#### 3.1.1 关于注解处理器

**Lombok 的秘密武器是注解处理器（Annotation Processor）**。这是 Java 编译器的一部分，它可以在编译阶段检查和处理注解。

在 Java 中，当我们使用 `javac` 命令编译源代码时，编译器会首先解析源代码，生成一棵语法树。然后，注解处理器就会遍历这棵语法树，找到我们的注解，对它们进行处理。

例如，当注解处理器遇到 Lombok 的 `@Getter` 注解时，它就会在语法树中添加 getter 方法。这样，当编译器继续编译语法树时，它就会生成包含 getter 方法的字节码。

#### 3.1.2 Lombok 的工作原理

**Lombok 实现了一系列自己的注解处理器，每一个处理器都负责处理一种或几种注解。**例如，`GetterProcessor` 处理 `@Getter` 注解，`SetterProcessor` 处理 `@Setter` 注解，`EqualsAndHashCodeProcessor` 处理 `@EqualsAndHashCode` 注解等等。

当处理器遇到对应的注解时，它会在语法树中添加相应的代码。例如，`GetterProcessor` 会为每一个标记了 `@Getter` 注解的字段添加 `getter` 方法。

#### 3.1.3 示例讲解

现在，我们来看一个具体的示例，帮助我们理解 Lombok 是如何工作的。

假设我们有一个 User 类，使用了 `@Getter` 和 `@Setter` 注解：

```java
@Getter
@Setter
public class User {
    private String name;
    private int age;
}
```

当我们编译这个 User 类时，`javac` 会首先解析源代码，生成一棵语法树。然后，Lombok 的 `GetterProcessor` 和 `SetterProcessor` 会找到 `@Getter` 和 `@Setter` 注解，为 `name` 和 `age` 字段添加 getter 和 setter 方法。最后，`javac` 会编译这棵已经被修改过的语法树，生成包含 getter 和 setter 方法的字节码。

需要注意的是，我们在源代码中并没有写 getter 和 setter 方法，但是在编译后的字节码中，这些方法就出现了。这就是 Lombok 的魔力。

#### 3.1.4 Lombok 的局限性

虽然 Lombok 带来了许多好处，但也有一些限制需要注意：

1. **IDE 支持：** 尽管大多数主流 IDE（如 IntelliJ IDEA、Eclipse）都支持 Lombok，但有时可能需要安装 Lombok 插件或配置一些设置，以确保 IDE 能够正确处理 Lombok 注解。
2. **维护性：** 如果你决定在项目中使用 Lombok，新的开发者可能需要时间来理解 Lombok 注解的含义和作用。
3. **仅作用于编译阶段**：由于 Lombok 是在编译阶段修改语法树，所以它不能处理运行时的注解。
4. **干扰性**：此外，由于 Lombok 修改了语法树，所以在某些情况下，它可能会干扰其他的注解处理器。