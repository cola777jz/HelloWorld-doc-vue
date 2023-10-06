---
title: 函数式接口 和 Optional
order: 2
category:
  - Skills
  - HelloJava8
  - MD
---

# 六、内置的函数式接口

在 Java 1.8 版本中，引入了一系列新的函数式接口，使得在 Java 中使用函数式编程变得更加容易和灵活。**函数式接口是只包含一个抽象方法的接口，通常用于 Lambda 表达式或方法引用。** 这些接口被广泛用于 Stream API 和其他与函数式编程相关的特性。

本章节中，将介绍 Java 1.8 中内置的主要函数式接口，并提供示例来帮助你理解和使用它们。

## 6.1 Predicate 断言

在 Java 1.8 之前，我们在对集合进行筛选和过滤时，通常需要使用循环和条件语句来手动实现。而 Java 1.8 引入的 `Predicate` 断言接口，为我们提供了一种简单且优雅的方法来进行集合元素的筛选。

### 6.1.1 Predicate 概述

Predicate 是一个函数式接口，它代表了一个接受一个参数并返回布尔值的函数。**它通常用于对集合中的元素进行筛选、过滤或判断。**

在 `java.util.function` 包中，`Predicate` 接口定义如下：

```java
@FunctionalInterface
public interface Predicate<T> {
    boolean test(T t);
}
```

可以看到，`Predicate` 是一个泛型接口，`T` 表示传入的参数类型。它只有一个抽象方法 `test(T t)`，用于对传入的参数进行条件判断，并返回一个布尔值，表示传入的参数是否满足特定条件。

### 6.1.2 使用 Predicate

使用 `Predicate` 非常简单。首先，我们需要实现 `Predicate` 接口的抽象方法 `test(T t)`，然后将该实现传递给需要进行条件判断的方法。

假设我们有一个存储整数的集合，我们想筛选出其中的偶数。在 Java 1.8 之前，我们可能会这样写：

```java
        Random random = new Random();
        List<Integer> ids = new ArrayList<>();
        for (int i = 0; i < 30; i++) {
            ids.add(random.nextInt(1, 101));
        }
        // id 为奇数
        for (Integer id : ids) {
            if (id % 2 == 0){
                System.out.println("id = " + id);
            }
        }
```

然而，使用 `Predicate`，我们可以这样写：

```java
        // id 为偶数
        ids.stream()
            .filter(num -> num % 2 == 0)
            .forEach(System.out::println);
    }
```

在上述代码中，我们使用了 `filter()` 方法来进行筛选。`filter()` 方法接受一个 `Predicate` 参数，表示我们希望保留满足条件的元素。在这里，我们使用 Lambda 表达式 `num -> num % 2 == 0` 来实现 `Predicate` 接口，并判断整数是否为偶数。

### 6.1.3 组合 Predicate

有时候，我们需要对多个条件进行组合，可以使用 `Predicate` 提供的默认方法来实现。

- `and(Predicate other)`: 返回一个新的 `Predicate`，它表示当前 `Predicate` 和另一个 `Predicate` 的逻辑与（`AND`）操作。
- `or(Predicate other)`: 返回一个新的 `Predicate`，它表示当前 `Predicate` 和另一个 `Predicate` 的逻辑或（`OR`）操作。
- `negate()`: 返回当前 `Predicate` 的逻辑非（`NOT`）操作。

下面是一个使用组合 `Predicate` 的例子：

```java
        // id > 20 且为偶数
        Predicate<Integer> isEven = num -> num % 2 == 0;
        Predicate<Integer> isGreaterThan20 = num -> num > 20;
        ids.stream()
            .filter(isEven.and(isGreaterThan20))
            .forEach(System.out::println);
```

在上述例子中，我们定义了两个 `Predicate` ：`isEven` 用于判断是否为偶数，`isGreaterThan20` 用于判断是否大于20。然后，我们使用 `filter()` 方法进行组合判断，并筛选出同时满足这两个条件的整数。

`Predicate` 断言是 Java 1.8 引入的一个强大的函数式接口，它使得对集合元素进行条件筛选变得简单、优雅。通过实现 `Predicate` 接口的 `test(T t)` 方法，我们可以定义自己的条件判断逻辑，并在集合处理中使用 `Predicate` 进行筛选、过滤等操作。此外，我们还可以使用组合 `Predicate` 来实现多个条件的复合判断。

## 6.2 Function 接口

**Function 接口代表一个接受一个参数并且产生结果的操作**。它在 Java 中被广泛用于函数式编程以及 Stream API 中的**转换操作**。

本小节将深入介绍 Java 1.8 中的 Function 接口，并通过示例代码演示如何使用它。

### 6.2.1 Function 接口概述

在 `java.util.function` 包中，Function 接口定义如下：

```java
@FunctionalInterface
public interface Function<T, R> {
    R apply(T t);
}
```

- `T` 表示输入参数的类型。
- `R` 表示返回结果的类型。
- `apply(T t)` 是 Function 接口中唯一的抽象方法，用于对输入参数 `t` 进行操作，并返回结果。

Function 接口是一个泛型接口，它可以接受不同类型的参数和返回不同类型的结果。

### 6.2.2 使用 Function 接口

接下来，让我们通过几个示例来说明如何使用 Function 接口。

#### 将字符串转换为大写

创建一个 Function 接口实例，将输入的字符串转换为大写形式。

```java
String[] strings = {"Apple", "Orange", "Banana"};
        // 将字符串转换为大写
        Function<String, String> toUpperCaseFunc = String::toUpperCase;
        System.out.println("大写");
        for (String string : strings) {
            System.out.println(toUpperCaseFunc.apply(string));
        }
```

在这个例子中，我们创建了一个 Function 对象 `toUpperCaseFunc`，它将字符串转换为大写形式。我们调用 `apply()` 方法来执行函数，将输入的字符串转换为大写形式并输出结果。

#### 计算字符串的长度

使用 Function 接口计算字符串的长度。

```java
 // 计算字符串的长度
        Function<String,Integer> stringLength = String::length;
System.out.println("长度");
        for (String string : strings) {
            System.out.println(stringLength.apply(string));
        }
        
```

在这个例子中，我们创建了一个 Function 对象 `lengthFunc`，它返回输入字符串的长度。我们调用 `apply()` 方法来执行函数，计算字符串的长度并输出结果。

#### 转换字符串为整数

使用 Function 接口将字符串转换为整数。

```java
         // 转换字符串为整数
        Function<String,Integer> toInt = Integer::valueOf;
System.out.println("转换字符串为整数");
        String[] strings1 = {"123", "345"};
        for (String string : strings1) {
            System.out.println(toInt.apply(string));
        }
```

在这个例子中，我们创建了一个 Function 对象 `parseIntFunc`，它将字符串转换为整数。我们调用 `apply()` 方法来执行函数，将字符串转换为整数并输出结果。

### 6.2.3 Function 的组合

Function 还提供了一些默认方法用于函数的组合：

- `andThen(Function after)`: 返回一个先执行当前 Function 的 apply 方法，再执行 after Function 的 apply 方法的新 Function。
- `compose(Function before)`: 返回一个先执行 before Function 的 apply 方法，再执行当前 Function 的 apply 方法的新 Function。

下面是一个组合示例：

```java
      
        // 将字符串转换为大写
        Function<String, String> toUpperCaseFunc = String::toUpperCase;
        // 计算字符串的长度
        Function<String,Integer> stringLength = String::length;
System.out.println("转换为大写后输出长度");
        for (String string : strings) {
            System.out.println(toUpperCaseFunc.andThen(stringLength).apply(string));
            System.out.println(string);
        }
```

在这个例子中，我们首先将字符串转换为大写，然后输出长度。

Java 1.8 中的 Function 接口为函数式编程提供了强大的支持。通过使用 Function 接口，我们可以轻松地定义并执行接受一个参数并返回结果的操作。函数的组合使得函数式编程变得更加灵活和强大。

## 6.3 BiFunction 接口

BiFunction 接口**代表一个接受两个参数并产生结果的操作**。它在 Java 中**被广泛用于对两个输入参数进行操作，然后返回一个结果。**

本教程将深入介绍 Java 1.8 中的 BiFunction 接口，并通过示例代码演示如何使用它。

### 6.3.1 BiFunction 接口概述

在 `java.util.function` 包中，BiFunction 接口定义如下：

```java
@FunctionalInterface
public interface BiFunction<T, U, R> {
    R apply(T t, U u);
}
```

- `T` 表示第一个输入参数的类型。
- `U` 表示第二个输入参数的类型。
- `R` 表示返回结果的类型。
- `apply(T t, U u)` 是 BiFunction 接口中唯一的抽象方法，用于对输入参数 `t` 和 `u` 进行操作，并返回结果。

BiFunction 接口是一个泛型接口，它可以接受不同类型的参数和返回不同类型的结果。

### 6.3.2 使用 BiFunction 接口

让我们通过几个示例来说明如何使用 BiFunction 接口。

#### 计算两个数字的和

创建一个 BiFunction 接口实例，用于计算两个数字的和。

```java
        // 计算两个数字的和
        BiFunction<Integer, Integer, Integer> addNum = Integer::sum;
        System.out.println(addNum.apply(1, 2));
```

在这个例子中，我们创建了一个 BiFunction 对象 `addNum`，它将两个整数相加并返回结果。我们调用 `apply()` 方法来执行 BiFunction，并计算 1和 2的和并输出结果。

#### 合并两个字符串

使用 BiFunction 接口合并两个字符串。

```java
        // 合并字符串
        BiFunction<String, String, String> addStr = (s, s2) -> s + s2;
        System.out.println(addStr.apply("Hello", "World"));
```

在这个例子中，我们创建了一个 BiFunction 对象 `addStr`，它将两个字符串合并成一个新的字符串，并返回结果。我们调用 `apply()` 方法来执行 BiFunction，并合并 "Hello" 和 "World" 两个字符串并输出结果。

#### 两个数字的乘积

使用 BiFunction 接口计算两个数字的乘积。

```java
        // 计算两个数字的乘积
        BiFunction<Integer, Integer, Integer> productNum = (integer, integer2) -> integer * integer2;
        System.out.println(productNum.apply(1, 2));
```

在这个例子中，我们创建了一个 BiFunction 对象 `productNum`，它将两个整数相乘并返回结果。我们调用 `apply()` 方法来执行 BiFunction，并计算 1和 2 的乘积并输出结果。

### 6.3.3 BiFunction 的组合

BiFunction 还提供了一些默认方法用于函数的组合：

- `andThen(Function after)`: 返回一个新的 Function，它表示当前 BiFunction 和另一个 Function 的顺序执行。

下面是一个组合示例：

```java
        // 计算两个数字的和
        BiFunction<Integer, Integer, Integer> addNum = Integer::sum;       
Function<Integer, Double> sqrt = Math::sqrt;
        System.out.println(addNum.andThen(sqrt).apply(1,2));
```

在这个例子中，我们首先创建了一个 BiFunction 对象 `addNum`，它将两个整数相加。然后，我们创建了一个 Function 对象 `sqrt`，它将整数平方。先执行相加操作，然后再执行平方操作。

Java 1.8 中的 BiFunction 接口为函数式编程提供了强大的支持。通过使用 BiFunction 接口，我们可以轻松地定义并执行接受两个参数并产生结果的操作。BiFunction 接口特别适用于对两个输入参数进行操作，然后返回一个结果。

## 6.4 Supplier 接口

Supplier 接口代表**一个不接受参数但返回结果的操作**。它在 Java 中**被广泛用于懒加载或产生随机值等场景。**

本教程将深入介绍 Java 1.8 中的 Supplier 接口，并通过示例代码演示如何使用它。

### 6.4.1 Supplier 接口概述

在 `java.util.function` 包中，Supplier 接口定义如下：

```java
@FunctionalInterface
public interface Supplier<T> {
    T get();
}
```

- `T` 表示返回结果的类型。
- `get()` 是 Supplier 接口中唯一的抽象方法，用于执行操作并返回结果。

Supplier 接口是一个泛型接口，它可以返回不同类型的结果。

### 6.4.2 使用 Supplier

让我们通过几个示例来说明如何使用 Supplier 接口。

#### 产生随机数

创建一个 Supplier 接口实例，用于产生一个随机整数。

```java
        // 产生一个随机数
        Supplier<Integer> randomInt = () -> new Random().nextInt(1, 101);
        System.out.println(randomInt.get());
```

在这个例子中，我们创建了一个 Supplier 对象 `randomInt`，它将返回一个随机整数。我们调用 `get()` 方法来执行 Supplier，并产生一个随机整数并输出结果。

#### 懒加载

使用 Supplier 接口实现懒加载，只有在需要时才计算结果。

```java
        // 懒加载
        Supplier<Integer> lazySum = () -> {
            System.out.println("YuanShen QiDong");
            return 1;
        };
        // 只有调用 get() 方法才会执行计算
        System.out.println(lazySum.get());
```

在这个例子中，我们创建了一个 Supplier 对象 `lazySum`，它代表了一个复杂的计算过程。在调用 `get()` 方法之前，不会进行实际的计算。只有在调用 `get()` 方法时，才会执行复杂计算并返回结果。

#### 产生序列号

使用 Supplier 接口实现产生序列号的功能。

```java
        // 产生序列号
        AtomicInteger atomicInteger = new AtomicInteger();
        Supplier<Integer> version = atomicInteger::getAndIncrement;
        System.out.println(version.get());
        System.out.println(version.get());
```

在这个例子中，我们创建了一个 Supplier 对象 `version`，它使用 AtomicInteger 来产生序列号。每次调用 `get()` 方法，都会递增 counter 并返回递增后的值，从而实现序列号的生成。

Java 1.8 中的 Supplier 接口为函数式编程提供了重要的支持。通过使用 Supplier 接口，我们可以轻松地定义并执行一个不接受参数但返回结果的操作。Supplier 接口特别适用于懒加载、产生随机值、序列号等场景。

## 6.5 Consumer 消费者

Consumer 接口**代表一个接受一个参数并且不返回结果的操作**。它在 Java 中**被广泛用于遍历集合或执行消费型操作。**

本小节中将深入介绍 Java 1.8 中的 Consumer 接口，并通过示例代码演示如何使用它。

### 6.5.1 Consumer 接口概览

在 `java.util.function` 包中，Consumer 接口定义如下：

```java
@FunctionalInterface
public interface Consumer<T> {
    void accept(T t);
 }
```

- `T` 表示输入参数的类型。
- `accept(T t)` 是 Consumer 接口中唯一的抽象方法，用于对输入参数 `t` 进行操作。

Consumer 接口是一个泛型接口，它可以接受不同类型的参数。

### 6.5.2 使用 Consumer 接口

让我们通过几个示例来说明如何使用 Consumer 接口。

#### 打印元素

创建一个 Consumer 接口实例，用于打印元素。

```java
        // 打印元素
        Consumer<String> printString = System.out::println;
        printString.accept("Cola777");
```

在这个例子中，我们创建了一个 Consumer 对象 `printString`，它用于打印字符串。

#### 消费元素

使用 Consumer 接口对集合中的元素进行消费型操作。

```java
// 消费元素
        List<Integer> list = Arrays.asList(1, 2, 3, 4, 5);
        Consumer<Integer> multiplyByTwo = integer -> {
            int result = integer * 2;
            System.out.println("result = " + result);
        };
        list.forEach(multiplyByTwo);
```

在这个例子中，我们创建了一个 Consumer 对象 `multiplyByTwo`，它将传入的整数乘以2，并输出结果。然后，我们使用 forEach 方法遍历集合，并将每个元素传递给 Consumer 的 `accept()` 方法，实现对元素的消费型操作。

#### 集合元素求和

使用 Consumer 接口对集合中的元素进行求和操作。

```java
        // 元素求和
        AtomicInteger sum = new AtomicInteger();
        Consumer<Integer> addToSum = sum::addAndGet;

        list.forEach(addToSum);
        System.out.println("sum = " + sum);
```

在这个例子中，我们创建了一个 Consumer 对象 `addToSum`，它将传入的整数添加到 AtomicInteger 中，并实现对元素的求和操作。然后，我们使用 forEach 方法遍历集合，并将每个元素传递给 Consumer 的 `accept()` 方法，实现对元素的求和。

### 6.5.3 Consumer 的组合

Consumer 还提供了一些默认方法用于函数的组合：

- `andThen(Consumer after)`: 返回一个新的 Consumer，它表示当前 Consumer 和另一个 Consumer 的顺序执行。

下面是一个组合示例：

```java
        // 先打印大写后打印小写
        Consumer<String> upString = s -> {
            System.out.println(s.toUpperCase());
        };
        Consumer<String> lower = s -> {
            System.out.println(s.toLowerCase());
        };

        upString.andThen(lower).accept("Hello Cola777");
```

在这个例子中，我们首先创建了两个 Consumer 对象 `upString` 和 `lower`，分别打印字符串的大写和小写形式。然后，我们使用 `andThen()` 方法将这两个 Consumer 组合，它先执行打印大写形式，然后再执行打印小写形式。

Java 1.8 中的 Consumer 接口为函数式编程提供了重要的支持。通过使用 Consumer 接口，我们可以轻松地定义并执行一个接受一个参数并且不返回结果的操作。Consumer 接口特别适用于遍历集合或执行消费型操作。

## 6.6 Comparator 比较

Comparator 接口**常用于比较操作**，它在**集合排序、搜索、自定义排序等场景**中提供了灵活的比较策略。

本教程将深入介绍 Java 1.8 中的 Comparator 接口，并通过示例代码演示如何使用它。

### 6.6.1 Comparator 接口概述

在 `java.util` 包中，Comparator 接口定义如下：

```java
@FunctionalInterface
public interface Comparator<T> {
    int compare(T o1, T o2);
 }
```

- `T` 表示待比较对象的类型。
- `compare(T o1, T o2)` 是 Comparator 接口中唯一的抽象方法，用于比较两个对象 o1 和 o2 的顺序。

Comparator 接口是一个泛型接口，它可以用于比较不同类型的对象。

### 6.6.2 使用 Comparator 接口

让我们通过几个示例来说明如何使用 Comparator 接口。

#### 对整数列表排序

创建一个 Comparator 对象，用于对整数列表进行排序。

```java
 List<Integer> list = new Random().ints(1,101)
            .limit(10)
            .boxed()
            .toList();

        System.out.println("对整数列表排序");
        // 对整数列表排序
        list.stream().sorted((o1, o2) -> o2 - o1).forEach(System.out::println);
```

#### 对字符串列表排序

使用 Comparator 接口对字符串列表进行排序。

```java
 Random random = new Random();
        List<Student> students = new ArrayList<>();
        for (int i = 0; i < 10; i++) {
            Student student = new Student(
                random.nextInt(1, 100),
                random.nextInt(1, 10) + "s",
                random.nextInt(1, 101)
            );
            students.add(student);
        }
        System.out.println("对字符串进行排序");
        // 对字符串排序
        List<String> nameList = students.stream().map(Student::getName).toList();
        nameList.stream().sorted((o1, o2) -> o2.compareTo(o1)).forEach(System.out::println);
```

#### 自定义对象排序

使用 Comparator 接口对自定义对象进行排序。

```java
   System.out.println("自定义排序规则");
        // 自定义排序对象
        students.stream().sorted((o1, o2) -> o2.getAge() - o1.getAge()).forEach(System.out::println);
```

Java 1.8 中的 Comparator 接口为比较对象顺序提供了灵活的策略。通过使用 Comparator 接口，我们可以轻松地实现自定义的排序规则，并在集合排序、搜索等场景中使用。

# 七、Optional 杜绝空指针异常

在 Java 1.8 中，**Optional 是一个用于处理可能为 `null` 的值的容器类**。它提供了一种优雅的方式来**避免空指针异常**，并且可以用于优雅地处理可能为空的对象。

本教程将深入介绍 Java 1.8 中的 Optional 类，并通过示例代码演示如何使用它。

## 7.1 Optional 类概述

在 `java.util` 包中，Optional 类定义如下：

```java
public final class Optional<T> {}
```

Optional 是一个泛型类，它可以包装任意类型的值。

## 7.2 创建 Optional 类

你可以使用以下方法来创建 Optional 对象：

### of() 方法

```java
        /*
        使用 Optional.of() 方法创建 Optional 对象
        如果传入的对象为 null 则立即抛出 NullPointerException
         */
        Optional<String> helloWorld = Optional.of("HelloWorld");
```

使用 `of()` 方法创建一个非空的 Optional 对象，如果传入的值为 null，则会立即抛出 `NullPointerException`。

### ofNullable() 方法

```java
        /*
        使用 ofNullable() 方法创建一个 Optional 对象
        如果传入的对象为 null 则会创建一个空的 Optional 对象
         */
        Optional<Object> o = Optional.ofNullable(null);
```

使用 `ofNullable()` 方法创建一个 Optional 对象，如果传入的值为 null，则会创建一个空的 Optional 对象。

### empty() 方法

```java
        /*
        使用 empty() 方法创建一个空的 Optional 对象
        表示该 Optional 对象没有值
         */
        Optional<Object> empty = Optional.empty();
```

使用 `empty()` 方法创建一个空的 Optional 对象，表示该 Optional 对象没有值。

## 7.3 使用 Optional

Optional 提供了一系列方法来处理可能为 `null` 的值。

### isPresent() 方法

```java
    /**
     * isPresent()
     * 该方法用于判断 Optional 对象是否包含值
     * 如果包含值 则返回 true 否则返回 false
     */
    public void isPresentFunc(){
        Optional<String> helloWorld = Optional.of("HelloWorld");
        System.out.println("Optional is present value HelloWorld");
    }
```

`isPresent()` 方法用于判断 Optional 对象是否包含值。如果包含值，则返回 `true`，否则返回 `false`。

### ifPresent() 方法

```java
    /**
     * ifPresent()
     * 该方法用于在 Optional 对象包含值的情况下执行给定的操作
     * 如果 Optional 包含值，则会执行 Lambda 表达式。否则不会执行任何操作
     */
    public void ifPresentFunc(){
        Optional<String> helloWorld = Optional.of("HelloWorld");
        helloWorld.ifPresent(System.out::println);
    }
```

`ifPresent()` 方法用于在 Optional 对象包含值的情况下执行给定的操作。如果 Optional 包含值，则会执行 Lambda 表达式，否则不会执行任何操作。

### orElse() 方法

```java
    /**
     * orElse()
     * 该方法用于获取 Optional 对象的值。
     * 如果 Optional 对象包含该值则返回该值，否则返回传入的默认值
     */
    public void orElseFunc(){
        Optional<Object> empty = Optional.empty();
        Object helloWorld = empty.orElse("HelloWorld");
        System.out.println("helloWorld = " + helloWorld);
    }
```

`orElse()` 方法用于获取 Optional 对象的值。如果 Optional 对象包含值，则返回该值，否则返回传入的默认值。

### orElseGet() 方法

```java
    /**
     * orElseGet()
     * 该方法 与 orElse() 方法类似但传入的参数是一个 Supplier 函数
     * 可用于生成默认值
     */
    public void orElseGetFunc(){
        AtomicInteger atomicInteger = new AtomicInteger();
        Optional<Object> empty = Optional.empty();
        Object o = empty.orElseGet(atomicInteger::getAndIncrement);
        System.out.println("o = " + o);
    }
```

`orElseGet()` 方法与 `orElse()` 方法类似，但传入的参数是一个 [Supplier 函数](https://www.quanxiaoha.com/java8/java8-supplier.html) ，可以用于生成默认值。

### orElseThrow() 方法

```java
    /**
     * orElseThrow() 方法用于在 Optional 对象为空时抛出异常
     * 如果 Optional 包含值则返回该值否则抛出指定异常
     */
    public void orElseThrow(){
        Optional<Object> empty = Optional.empty();
        Object o = empty.orElseThrow(() -> new IllegalArgumentException("value is not present"));
        System.out.println("o = " + o);
    }
```

`orElseThrow()` 方法用于在 Optional 对象为空时抛出异常。如果 Optional 包含值，则返回该值，否则抛出指定的异常。

### 链式调用

Optional 还支持链式调用，可以在一系列操作中依次处理 Optional 对象。

```java
    /**
     * Optional 支持链式调用
     */
    public void linkModel(){
        Optional<String> helloWorld = Optional.of("HelloWorld");
        helloWorld.map(String::toUpperCase).ifPresent(System.out::println);
    }
```

在这个例子中，我们使用 `map()` 方法将值转换为大写形式，并使用 `ifPresent()` 方法在 Optional 对象包含值时打印大写的结果。

Java 1.8 中的 Optional 类为处理可能为 `null` 的值提供了优雅的解决方案。通过使用 Optional，我们可以避免空指针异常，并且可以更加优雅地处理可能为空的对象。

## 7.4 测试

```java
/**
 * @author Cola777jz
 * @name TestInfoExtension
 * @date 2023/10/4 10:45
 * @since 1.0.0
 */
public class TestInfoExtension implements BeforeTestExecutionCallback, TestWatcher {

    @Override
    public void beforeTestExecution(ExtensionContext context) throws Exception {
        String methodName = context.getRequiredTestMethod().getName();
        System.out.println("Running test: " + methodName);
    }

    @Override
    public void testSuccessful(ExtensionContext context) {
        String methodName = context.getRequiredTestMethod().getName();
        System.out.println(methodName + " test pass");
    }

    @Override
    public void testFailed(ExtensionContext context, Throwable cause) {
        String methodName = context.getRequiredTestMethod().getName();
        System.out.println("Test " + methodName + " failed: " + cause.getMessage());
    }

    // Implement other methods of TestWatcher interface if needed

}
```

```java
@ExtendWith(TestInfoExtension.class)
class OptionalDemoTest {
    private static OptionalDemo demo;

    @BeforeAll
    static void init() {
        demo = new OptionalDemo();
    }

    @Test
    void isPresentFunc() {
        demo.isPresentFunc();
    }

    @Test
    void ifPresentFunc() {
        demo.ifPresentFunc();
    }

    @Test
    void orElseFunc() {
        demo.orElseFunc();
    }

    @Test
    void orElseGetFunc() {
        demo.orElseGetFunc();
    }

    @Test
    void orElseThrow() {
        IllegalArgumentException exception = assertThrows(IllegalArgumentException.class, () -> demo.orElseThrow());
        Assertions.assertEquals("value is not present",exception.getMessage());
    }

    @Test
    void linkModel() {
        demo.linkModel();
    }
}
```

<img src="https://yong-gan-niu-niu-1311841992.cos.ap-beijing.myqcloud.com/images/image-20231004105207278.png" alt="image-20231004105207278" style="zoom:50%;" />