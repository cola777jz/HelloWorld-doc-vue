---
title: Lombok 注意事项
order: 3
category:
  - Skills
  - HelloLombok
  - MD
---

## 四、注意事项

### 4.1 Lombok 常见陷阱

尽管 Lombok 是一个强大的工具，可以帮助我们简化代码，提高开发效率，但是如果不恰当地使用，也可能会引入一些问题。本文将为你详述如何避免 Lombok 的常见陷阱。

#### 4.1.1 慎用 @Data

`@Data` 是一个实用的注解，它包含了 `@Getter`、`@Setter`、`@ToString`、`@EqualsAndHashCode` 和 `@RequiredArgsConstructor`。这在一般情况下非常方便，但是当你需要自定义一些方法时，就可能会遇到问题。

例如，你可能需要自定义 `equals` 和 `hashCode` 方法，但是由于 `@Data` 注解自动生成了这些方法，所以你的自定义方法会被覆盖。为了避免这种情况，你可以使用 `@EqualsAndHashCode` 的 `callSuper` 属性。

```java
@EqualsAndHashCode(callSuper = true)
public class MyEntity extends BaseEntity {
}
```

这样做可以确保父类的 `equals` 和 `hashCode` 方法也被调用。

此外，`@Data` 注解也会生成所有字段的 getter 和 setter 方法，如果你的字段中包含了一些不应该被外部访问或修改的数据，这可能会导致问题。在这种情况下，你可以使用 `@Getter(AccessLevel.NONE)` 和 `@Setter(AccessLevel.NONE)` 来禁止生成特定字段的 getter 和 setter 方法。

```java
@Data
public class MyEntity {
    @Getter(AccessLevel.NONE)
    private String sensitiveData;
}
```

#### 4.1.2 注意 `@ToString` 的循环引用问题

`@ToString` 注解非常实用，但是在处理含有循环引用的数据结构时，必须要小心。例如，你有一个双向链表或者一个树形结构，其中的元素互相引用。这样的话，当你调用 `toString` 方法时，就可能会出现无限循环的情况，最后导致栈溢出。为了避免这种情况，你可以使用 `@ToString.Exclude` 注解来排除掉会导致循环引用的字段。

```java
public class TreeNode {
    private TreeNode parent;
    private TreeNode child;

    @ToString.Exclude
    public TreeNode getParent() {
        return parent;
    }
}
```

#### 4.1.3 `@EqualsAndHashCode` 与懒加载

当你使用 JPA 或 Hibernate 这样的 ORM 框架时，你可能会使用到懒加载（Lazy Loading）特性。这意味着，某些字段在第一次被访问时才会被加载。而如果你在这样的字段上使用了 `@EqualsAndHashCode` 注解，可能会在你并不希望加载这些字段的情况下触发它们的加载。

为了避免这种情况，你可以使用 `@EqualsAndHashCode(onlyExplicitlyIncluded = true)`，然后在你想要包含在 `equals` 和 `hashCode` 方法中的字段上使用 `@EqualsAndHashCode.Include`。

```java
@EqualsAndHashCode(onlyExplicitlyIncluded = true)
public class MyEntity {
    @EqualsAndHashCode.Include
    private Long id;

    @OneToMany
    private List<MyOtherEntity> otherEntities;

}
```

在这个例子中，`otherEntities` 字段不会被包含在 `equals` 和 `hashCode` 方法中，所以在计算这些方法时，不会触发它的加载。

#### 4.1.4 小心 `@SneakyThrows`

`@SneakyThrows` 是一个非常有用的注解，它可以让你 "偷偷" 抛出受检异常，而无需在方法签名中声明它们。但是这也可能会引起一些问题。

首先，你的代码的调用者可能并不知道你的方法可能会抛出哪些受检异常，这可能会导致他们在处理异常时疏忽。为了解决这个问题，你应该在你的方法的文档注释中明确说明可能会抛出哪些异常。

其次，`@SneakyThrows` 会将受检异常包装在 `RuntimeException` 中抛出，如果你的代码的调用者捕获了 `RuntimeException`，并且没有检查它的原因，那么他们可能会错过受检异常。为了解决这个问题，你应该尽量避免在你的方法中直接抛出 `RuntimeException`，而是应该抛出具体的异常类型。


#### 4.1.5 不要滥用 Lombok

虽然 Lombok 的注解可以极大地简化我们的代码，但是这并不意味着我们应该在所有地方都使用它。在一些情况下，手动编写代码可能会更好。

例如，你可能需要自定义某个字段的 getter 或 setter 方法，或者你需要自定义 `equals`、`hashCode` 或 `toString` 方法。在这些情况下，使用 Lombok 的注解可能会导致你的自定义代码被覆盖。

此外，过度使用 Lombok 的注解也可能会使你的代码变得难以理解。你的同事或未来的你可能会对一些自动生成的方法感到困惑，例如，他们可能会不清楚某个方法是从哪里来的，或者为什么某个方法的行为和预期不一致。

因此，虽然 Lombok 是一个强大的工具，但是我们也需要明智地使用它。我们应该始终保持警惕，确保我们的代码不仅简洁，而且易于理解和维护。