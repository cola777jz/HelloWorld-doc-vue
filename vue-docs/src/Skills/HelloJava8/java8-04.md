---
title: Map 和 新日期 API
order: 4
category:
  - Skills
  - HelloJava8
  - MD
---

# 十、Map 集合

前面已经提到过 `Map` 是不支持 `Stream` 流的，因为 `Map` 接口并没有像 `Collection` 接口那样，定义了 `stream()` 方法。但是，我们可以对其 `key`, `values`, `entry` 使用 流操作，如 `map.keySet().stream()`, `map.values().stream()` 和 `map.entrySet().stream()`.

另外, JDK 8 中对 `map` 提供了一些其他新特性:

```java
 Map<Integer, String> map = new HashMap<>();

        for (int i = 0; i < 10; i++) {
            // 与老版不同的是，putIfAbent() 方法在 put 之前，
            // 会判断 key 是否已经存在，存在则直接返回 value, 否则 put, 再返回 value
            map.putIfAbsent(i, "val" + i);
        }

        // forEach 可以很方便地对 map 进行遍历操作
        map.forEach((key, value) -> System.out.println(value));
```

除了上面的 `putIfAbsent()` 和 `forEach()` 外，我们还可以很方便地对某个 `key` 的值做相关操作：

```java
// computeIfPresent(), 当 key 存在时，才会做相关处理
        // 如下：对 key 为 3 的值，内部会先判断值是否存在，存在，则做 value + key 的拼接操作
        map.computeIfPresent(3, (num, val) -> val + num);
        map.get(3);             // val33

        // 先判断 key 为 9 的元素是否存在，存在，则做删除操作
        map.computeIfPresent(9, (num, val) -> null);
        map.containsKey(9);     // false

        // computeIfAbsent(), 当 key 不存在时，才会做相关处理
        // 如下：先判断 key 为 23 的元素是否存在，不存在，则添加
        map.computeIfAbsent(23, num -> "val" + num);
        map.containsKey(23);    // true

        // 先判断 key 为 3 的元素是否存在，存在，则不做任何处理
        map.computeIfAbsent(3, num -> "bam");
        map.get(3);        
```

关于删除操作，JDK 8 中提供了能够新的 `remove()` API:

```java
        map.remove(3, "val3");
        map.get(3);             // val33

        map.remove(3, "val33");
        map.get(3);             // null
```

如上代码，只有当给定的 `key` 和 `value` 完全匹配时，才会执行删除操作。

关于添加方法，JDK 8 中提供了带有默认值的 `getOrDefault()` 方法：

```java
 // 若 key 42 不存在，则返回 not found
        map.getOrDefault(42, "not found");  // not found
```

对于 `value` 的合并操作也变得更加简单：

```java
 // merge 方法，会先判断进行合并的 key 是否存在，不存在，则会添加元素
        map.merge(9, "val9", (value, newValue) -> value.concat(newValue));
        map.get(9);             // val9

        // 若 key 的元素存在，则对 value 执行拼接操作
        map.merge(9, "concat", (value, newValue) -> value.concat(newValue));
        map.get(9);
```

# 十一、新的日期 API

在 Java 8 之前，我们通常使用 `java.util.Date` 类和 `java.util.Calendar` 类来表示和操作日期。然而，这些类存在许多问题，例如 API 不直观，不支持时区等。为了解决这些问题，Java 8 引入了全新的日期和时间 API, 位于包 `java.time` 下，它和 [Joda-Time](http://www.joda.org/joda-time/) 库相似，但又不完全相同。接下来，我会通过一些示例代码介绍一下新 API 中最关键的特性：

## 11.1 Clock

`Clock` 提供对当前日期和时间的访问。我们可以利用它来替代 `System.currentTimeMillis()` 方法。另外，通过 `clock.instant()` 能够获取一个 `instant` 实例， 此实例能够方便地转换成老版本中的 `java.util.Date` 对象。

```java
Clock clock = Clock.systemDefaultZone();
long millis = clock.millis();

Instant instant = clock.instant();
Date legacyDate = Date.from(instant);   // 老版本 java.util.Date
```

## 11.2 Timezones 时区

`ZoneId` 代表时区类。通过静态工厂方法方便地获取它，入参我们可以传入某个时区编码。另外，时区类还定义了一个偏移量，用来在当前时刻或某时间 与目标时区时间之间进行转换。

```java
System.out.println(ZoneId.getAvailableZoneIds());
// prints all available timezone ids

ZoneId zone1 = ZoneId.of("Europe/Berlin");
ZoneId zone2 = ZoneId.of("Brazil/East");
System.out.println(zone1.getRules());
System.out.println(zone2.getRules());

// ZoneRules[currentStandardOffset=+01:00]
// ZoneRules[currentStandardOffset=-03:00]
```

## 11.3 LocalTime

### 11.3.1 什么是 LocalTime

LocalTime 是 Java 8 中**用于处理时间的不可变类，它只包含时、分、秒和纳秒，而没有日期部分**。注意，它没有时区信息，所以它代表的是一天中的某个时间。

### 11.3.2 创建 LocalTime

创建 LocalTime 实例的最直接方式是使用它的静态工厂方法，比如 LocalTime.now()：

```java
import java.time.LocalTime;

public class Main {
    public static void main(String[] args) {
        // 获取当前时间
        LocalTime now = LocalTime.now();
        System.out.println(now);
    }
}
```

我们还可以使用 `of()` 方法来创建一个具体时间：

```java
LocalTime specificTime = LocalTime.of(12, 20, 45, 20);
System.out.println(specificTime);
```

上面的代码创建了一个表示 12 点 20 分 45 秒 20 纳秒的 LocalTime。

### 11.3.3 获取时间信息

LocalTime 提供了一些方法来获取时间的信息，例如获取小时、分钟、秒和纳秒：

```java
LocalTime now = LocalTime.now();

int hour = now.getHour();
int minute = now.getMinute();
int second = now.getSecond();
int nano = now.getNano();

System.out.println(hour);
System.out.println(minute);
System.out.println(second);
System.out.println(nano);
```

### 11.3.4 修改时间

LocalTime 是不可变的，这意味着所有的修改操作都会返回一个新的 LocalTime 实例。例如，我们可以使用 `plusHours()`、`plusMinutes()`、`plusSeconds()` 和 `plusNanos()` 方法来增加时间：

```java
LocalTime now = LocalTime.now();

LocalTime later = now.plusHours(3).plusMinutes(2).plusSeconds(1).plusNanos(10);

System.out.println(later);
```

我们也可以使用 `minusHours()`、`minusMinutes()`、`minusSeconds()` 和 `minusNanos()`方法来减少时间。

### 11.3.5 比较时间

我们可以使用 `isBefore()` 和 `isAfter()` 方法来比较两个 LocalTime：

```java
LocalTime time1 = LocalTime.of(12, 30);
LocalTime time2 = LocalTime.of(13, 30);

System.out.println(time1.isBefore(time2));  // true
System.out.println(time1.isAfter(time2));   // false
```

### 11.3.6 总结

Java 8 的 LocalTime 类为我们提供了一个简洁、强大的工具来处理时间。通过使用 LocalTime，我们可以更轻松地创建、修改和比较时间。希望这个教程可以帮助你理解 LocalTime，并在你的代码中找到它的应用场景。

## 11.4 LocalDate

### 11.4.1 什么是 LocalDate

LocalDate 是 Java 8 中用于处理日期的不可变类，它**只包含日期部分（年、月、日），没有时间和时区**。

### 11.4.2 创建 LocalDate

创建 LocalDate 实例的最直接方式是使用它的静态工厂方法，比如 LocalDate.now()：

```java
import java.time.LocalDate;

public class Main {
    public static void main(String[] args) {
        // 获取当前日期
        LocalDate today = LocalDate.now();
        System.out.println(today);
    }
}
```

我们还可以使用 of() 方法来创建一个具体的日期：

```java
LocalDate specificDate = LocalDate.of(2023, 7, 25);
System.out.println(specificDate);
```

上面的代码创建了一个表示 2023 年 7 月 25 日的 LocalDate。

### 11.4.3 获取日期信息

LocalDate 提供了一些方法来获取日期的信息，例如获取年份、月份和日：

```java
LocalDate today = LocalDate.now();

int year = today.getYear();
int month = today.getMonthValue();
int day = today.getDayOfMonth();

System.out.println(year);
System.out.println(month);
System.out.println(day);
```

### 11.4.4 修改日期

LocalDate 是不可变的，这意味着所有的修改操作都会返回一个新的 LocalDate 实例。例如，我们可以使用 `plusDays()`、`plusWeeks()`、`plusMonths()` 和 `plusYears()` 方法来增加日期：

```java
LocalDate today = LocalDate.now();

LocalDate future = today.plusDays(1).plusWeeks(1).plusMonths(1).plusYears(1);

System.out.println(future);
```

我们也可以使用 `minusDays()`、`minusWeeks()`、`minusMonths()` 和 `minusYears()` 方法来减少日期。

### 11.4.5 比较日期

我们可以使用 `isBefore()` 和 `isAfter()` 方法来比较两个 LocalDate：

```java
LocalDate date1 = LocalDate.of(2023, 7, 25);
LocalDate date2 = LocalDate.of(2023, 8, 25);

System.out.println(date1.isBefore(date2));  // true
System.out.println(date1.isAfter(date2));   // false
```

### 11.4.6 总结

Java 8 的 LocalDate 类为我们提供了一个简洁、强大的工具来处理日期。通过使用 LocalDate，我们可以更轻松地创建、修改和比较日期。希望这个教程可以帮助你理解 LocalDate，并在你的代码中找到它的应用场景。

## 11.5 LocalDateTime

### 11.5.1 LocalDateTime 是什么

`LocalDateTime` 是 Java 8 中一个不可变的日期-时间对象，**它表示了日期（年、月、日）和时间（小时、分钟、秒），但不包含时区**。

### 11.5.2 创建 LocalDateTime 对象

使用 `LocalDateTime` 的静态方法 `now()`，你可以得到表示当前日期和时间的 `LocalDateTime` 对象：

```java
import java.time.LocalDateTime;

public class Main {
    public static void main(String[] args) {
        // 获取当前的日期和时间
        LocalDateTime now = LocalDateTime.now();
        // 打印出当前的日期和时间
        System.out.println(now);
    }
}
```

也可以使用 `of()` 方法创建具有特定日期和时间的 `LocalDateTime` 对象：

```java
// 创建一个代表 2023 年 7 月 25 日，时间为 14 点 30 分的 LocalDateTime 对象
LocalDateTime dateTime = LocalDateTime.of(2023, 7, 25, 14, 30);
System.out.println(dateTime);
```

### 11.5.3 获取日期和时间信息

你可以通过调用 `LocalDateTime` 对象的方法获取日期和时间的各个部分，例如：

```java
LocalDateTime now = LocalDateTime.now();

// 获取年份
int year = now.getYear();
// 获取月份
int month = now.getMonthValue();
// 获取日期
int day = now.getDayOfMonth();

// 获取小时
int hour = now.getHour();
// 获取分钟
int minute = now.getMinute();
// 获取秒
int second = now.getSecond();

// 打印结果
System.out.println(year + "-" + month + "-" + day + " " + hour + ":" + minute + ":" + second);
```

### 11.5.4 修改日期和时间

由于 `LocalDateTime` 是不可变的，所有修改日期和时间的操作都会返回一个新的 `LocalDateTime` 对象。例如，你可以使用各种 `plus` 和 `minus` 方法来添加或减少日期和时间的各个部分：

```java
LocalDateTime now = LocalDateTime.now();

// 增加一天
LocalDateTime tomorrow = now.plusDays(1);
// 减少一个小时
LocalDateTime anHourAgo = now.minusHours(1);

System.out.println(tomorrow);
System.out.println(anHourAgo);
```

### 11.5.5 比较日期和时间

可以使用 `isBefore()` 和 `isAfter()` 方法比较两个 `LocalDateTime` 对象：

```java
LocalDateTime dateTime1 = LocalDateTime.of(2023, 7, 25, 12, 30);
LocalDateTime dateTime2 = LocalDateTime.of(2023, 7, 26, 12, 30);

// 检查 dateTime1 是否在 dateTime2 之前
boolean isBefore = dateTime1.isBefore(dateTime2); 
System.out.println(isBefore);  // 输出：true

// 检查 dateTime1 是否在 dateTime2 之后
boolean isAfter = dateTime1.isAfter(dateTime2); 
System.out.println(isAfter);  // 输出：false
```

### 11.5.6 总结

Java 8 的 LocalDateTime 类为处理日期和时间提供了强大且灵活的工具。通过使用 LocalDateTime，我们可以更轻松地创建、修改、比较日期和时间，希望这个教程能帮你在代码中找到它的应用场景。

# 十二、Annotations 注解

在本小节中，我们将详细探讨 Java 8 的注解（Annotations）。你可能在写 Java 代码的时候见过 `@Override`，`@Deprecated`，`@SuppressWarnings` 等这样的符号，这就是我们要讨论的注解。那么，开始吧！

## 12.1 注解是什么

在 Java 中，**注解是一种元数据，可以为我们的代码提供附加信息**。这些信息可以被编译器、开发工具或者运行时环境所利用，来做出各种不同的操作。它不会直接影响代码逻辑，但可以影响代码如何被处理。

```java
@Override
public String toString() {
    return "This is a sample class!";
}
```

这里，`@Override` 注解告诉编译器这个方法覆盖了父类的 `toString` 方法。如果没有这样的方法被覆盖，编译器会报错。

## 12.2 Java8 对注解的改进

在 Java 8 之前，注解只能被用在声明的上方，如类、方法、字段等。Java 8 带来了两个重要的改进：

- **可重复注解（Repeatable Annotations）**：在 Java 8 中，我们可以在同一个地方多次使用相同的注解。
- **类型注解（Type Annotations）**：我们可以使用注解来注释任何我们使用类型的地方，如变量、抛出的异常等。

## 12.3 定义注解

定义一个注解非常简单，只需要使用 `@interface` 关键字，如下所示：

```java
public @interface MyAnnotation {
    String value() default "";
}
```

## 12.4 使用注解

我们可以在类、方法、变量等地方使用注解，只需要在其前面加上 `@注解名` 即可：

```java
@MyAnnotation("Hello")
public class MyClass {
    // 类的代码...
}
```

## 12.5 可重复注解

如果我们想要在同一个地方多次使用同一个注解，我们需要在定义注解的时候声明它为 `@Repeatable`，然后指定一个“容器”注解来存储这些重复的注解：

```java
@Repeatable(MyAnnotations.class)
public @interface MyAnnotation {
    String value() default "";
}

public @interface MyAnnotations {
    MyAnnotation[] value();
}
```

这样，我们就可以在同一个地方多次使用 `MyAnnotation` 注解：

```java
@MyAnnotation("Hello")
@MyAnnotation("World")
public class MyClass {
    // 类的代码...
}
```

## 12.6 类型注解

在 Java 8 中，我们可以在任何使用类型的地方使用注解，例如变量声明、抛出的异常等。例如，我们可以定义一个 `@NonNull` 注解，然后在变量声明的时候使用它：

```java
public @interface NonNull {}

public class MyClass {
    public void myMethod(@NonNull String str) {
        // 方法的代码...
    }
}
```

这样，我们可以在运行时检查 `str` 是否为 null，如果为 null，则抛出一个异常。

## 12.7 总结

注解是 Java 中的一个强大工具，可以帮助我们提供代码的元数据，以此来改变代码的处理方式。Java 8 对注解进行了一些改进，增加了更多的灵活性和实用性。希望这篇教程可以帮你理解和使用 Java 8 的注解。