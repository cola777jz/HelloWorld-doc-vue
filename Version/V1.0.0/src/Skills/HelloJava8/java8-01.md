---
title: 默认方法 和 Lambda 表达式
order: 1
category:
  - Skills
  - HelloJava8
  - MD
---

# 一、接口允许添加方法的默认实现

## 1.1 什么是默认方法

在 Java 8 之前，接口不能包含实现方法，只能声明抽象方法。然而，Java 8 引入了一个新特性，允许我们在接口中添加非抽象方法，也就是默认方法。这些默认方法带有 `default` 关键字。

默认方法的引入，主要是为了解决接口的修改与现有的实现不兼容的问题。当接口添加新方法时，如果不是默认方法，所有实现了该接口的类都需要修改，以实现新添加的方法。这样的设计对于已经大规模使用的接口来说显然不是一个好选择。

```java
public interface Vehicle {

    /**
     * 接口实现默认方法后可以有自己的方法体
     */
    default void print(){
        System.out.println("I am Vehicle");
    }

}
```

上面这个例子中，我们声明了一个名为 `Vehicle` 的接口，并定义了一个默认方法 `print`。

## 1.2 如何使用默认方法

实现了带有默认方法的接口的类，可以选择覆盖默认方法，也可以直接使用默认方法。这非常灵活。

```java
public class Car implements Vehicle{
    /**
     * 实现类可以重用父类也可以重写属于自己的方法
     */
}

public class Bus implements Vehicle{
    /**
     * 实现类可以重用父类也可以重写属于自己的方法
     */
    @Override
    public void print() {
        System.out.println("I am Bus");
    }
}
```

在这个例子中，`Car` 类没有覆盖默认方法，当我们调用 `print` 方法时，将会执行 `Vehicle` 接口中的默认实现；而 `Bus` 类覆盖了默认方法，当我们调用 `print` 方法时，将会执行 `Bus` 类中的实现。

## 1.3 默认方法和多重继承

Java 不支持类的多重继承，但接口允许多重继承。如果一个类实现了多个接口，这些接口中有相同的默认方法，那么会出现什么情况呢？

```java
public class Taxi implements Vehicle,Price{}
```

在这个例子中，`Taxi` 类实现了 `Vehicle` 和 `Price` 两个接口，这两个接口都有一个名为 `print` 的默认方法。在这种情况下，Java 编译器会报错，因为它不知道应该选择哪一个默认方法。解决这个问题的方法是 `Price` 类需要覆盖 `print` 方法：

```java
public class Taxi implements Vehicle,Price{

    /**
     * 当一个类实现了多个接口（接口中有同名的方法）时
     * 该类必须重写属于自己的方法（可判断性）否则编译器会报错
     */
    @Override
    public void print() {
        System.out.println("I am Taxi");
        
         /**
         * 我们也可以通过 super 调用父类的 print 方法
         */
        Vehicle.super.print();
    }
}
```

在 `Taxi` 类中，我们使用了 `Vehicle.super.print();` 来调用 `Vehicle` 接口中的 `print` 方法。这样，就解决了默认方法的冲突问题。

# 二、Lambda 表达式

## 2.1 Lambda 表达式是什么

在我们开始之前，先让我解释一下 Lambda 表达式是什么。Lambda 表达式其实就是一种更简洁的匿名函数，使你的代码更加整洁，看起来也更加优雅。

举个简单的例子，在 Java 8 之前，如果我们想创建一个新线程来打印一条消息，我们可能会这么写：

```java
        Thread nickedThread = new Thread(new Thread("thread01-"){
            @Override
            public void run() {
                System.out.println(Thread.currentThread().getName() + "I am NickThread");
            }
        });
        nickedThread.start();
```

这看起来有点啰嗦，不是吗？而现在，有了 Lambda 表达式，我们可以用一种更简洁的方式来达到同样的效果：

```java
       Thread lambdaThread = new Thread(() -> System.out.println("I am Lambda Thread"));
       lambdaThread.start();
```

## 2.2 Lambda 表达式的基础语法

那么 Lambda 表达式的语法是怎样的呢？基本的格式是这样的：

```java
(argument1, argument2 ...) -> { body }
```

这里的 `argument1, argument2 ...` 是参数列表，`body` 是 Lambda 表达式需要执行的代码块。

例如，假设我们有一个字符串列表，我们想按字符串长度排序。使用 Lambda 表达式，我们可以这么做：

```java
        // 将字符串列表中的元素按照字符串的长度排序
        List<String> list = Arrays.asList("Apple", "Banana", "Orange");

        list.sort((String s1 , String s2) -> {
            return s2.length() - s1.length();
        });

        for (String s : list) {
            System.out.println("s = " + s);
        }
```

在这个例子中，`(String s1, String s2)` 是参数列表，`return s2.length() - s1.length();` 是 Lambda 表达式的主体。

## 2.3 类型推断和简化

你可能注意到了，在我们的 Lambda 表达式中，我们显式地写出了参数的类型（`String s1, String s2`）。然而，大多数情况下，Java 编译器可以自动推断出这些类型，所以我们可以省略它们，让代码更简洁：

```java
 list.sort((o1, o2) -> o1.length() - o2.length());
```

## 2.4 Lambda 表达式与函数式接口

Lambda 表达式最强大的地方就是和函数式接口的配合。函数式接口是只有一个抽象方法的接口，像 Runnable、Comparator 这些都是函数式接口。Lambda 表达式可以被看作是这些接口的一个实例。

## 2.5 方法引用

有时候，我们的 Lambda 表达式只是简单地调用了一个已有的方法。例如，我们可以用 `System.out::println` 替代 `s -> System.out.println(s)`。这种写法称为方法引用：

```java
Consumer<String> print = System.out::println;
        print.accept("Hello World");
```

# 三、函数式接口

先抛出一个疑问：在我们书写一段 Lambda 表达式后，Java 编译器是如何进行类型推断的，它又是怎么知道重写的哪个方法的？

需要说明的是，不是每个接口都可以缩写成 Lambda 表达式。只有那些函数式接口（Functional Interface）才能缩写成 Lambda 表示式。

*那么什么是函数式接口（Functional Interface）呢？*

所谓函数式接口（Functional Interface）就是**只包含一个抽象方法的声明**。针对该接口类型的所有 Lambda 表达式都会与这个抽象方法匹配。

> 注意：你可能会有疑问，Java 8 中不是允许通过 defualt 关键字来为接口添加默认方法吗？那它算不算抽象方法呢？答案是：不算。因此，你可以毫无顾忌的添加默认方法，它并不违反函数式接口（Functional Interface）的定义。

总结一下：只要接口中仅仅包含一个抽象方法，我们就可以将其改写为 Lambda 表达式。为了保证一个接口明确的被定义为一个函数式接口（Functional Interface），我们需要为该接口添加注解：`@FunctionalInterface`。这样，一旦你添加了第二个抽象方法，编译器会立刻抛出错误提示。

示例代码：

```java
@FunctionalInterface
public interface ColaConverter <F,T>{
    T convert(F from);
}
```

示例代码2：

```java
    public static void main(String[] args) {
        ColaConverter<String, Integer> converter = Integer::valueOf;
        Integer converted = converter.convert("123");
        System.out.println("converted = " + converted);
    }
```

> 注意：上面的示例代码，即使去掉 `@FunctionalInterface` 也是好使的，它仅仅是一种约束而已。

# 四、快速引用

## 4.1 快速引用类的构造器方法

在 Java 1.8 中，引入了快速引用 `::` 的语法，使得方法引用更加简洁和易读。快速引用 `::` **可以用来引用现有方法或构造函数**，从而使代码更加精简。

本小节中，将深入介绍 Java 1.8 中的快速引用 `::`，并通过示例代码演示如何使用它。

## 4.2 方法引用概述

在 Java 1.8 中，使用快速引用 `::` 可以引用现有的方法或构造函数。

### 4.2.1 引用静态方法

```java
ClassName::staticMethodName
```

### 4.2.2 引用实例方法

```java
instance::instanceMethodName
```

### 4.2.3 引用构造函数

```java
ClassName::new
```

### 4.2.4 使用方法引用

让我们通过几个示例来说明如何使用快速引用 `::`。

#### 引用静态方法

```java
public class MethodRefDemo {
    public static void printUpperCase(String s){
        System.out.println(s.toUpperCase());
    }
}
```

```java
public static void main(String[] args) {
        String[] strings = {"Apple", "Orange", "Banana"};
        // 引用静态方法
    }
```

在这个例子中，我们首先定义了一个静态方法 `printUpperCase()`，它接受一个字符串并将其转换为大写输出。然后，我们使用 `Arrays.stream()` 方法将字符串数组转换为 Stream 对象，再使用 `forEach()` 方法遍历数组并使用快速引用 `::` 引用静态方法 `printUpperCase`。

#### 引用实例方法

```java
public class MethodRefDemo {
    public void printLowerCase(String s){
        System.out.println(s.toLowerCase());
    }
}
```

```java
public static void main(String[] args) {
        String[] strings = {"Apple", "Orange", "Banana"};
        // 引用实例方法
        MethodRefDemo demo = new MethodRefDemo();
        Arrays.stream(strings).forEach(demo::printLowerCase);
    }
```

在这个例子中，我们首先定义了一个实例方法 `printLowerCase()`，它接受一个字符串并将其转换为小写输出。然后，我们创建了一个 `MethodRefDemo` 的实例 `demo`，再使用 `Arrays.stream()` 方法将字符串数组转换为 Stream 对象，再使用 `forEach()` 方法遍历数组并使用快速引用 `::` 引用实例方法 `printLowerCase`。

#### 引用构造函数

```java
public class MethodRefDemo {
    public MethodRefDemo(){
        System.out.println("I am MethodRefDemo NoArgsConstructor");
    }
}
```

```java
public static void main(String[] args) {
        String[] strings = {"Apple", "Orange", "Banana"};
        // 引用构造函数
        Supplier<MethodRefDemo> aNew = MethodRefDemo::new;
        MethodRefDemo refDemo = aNew.get();
        System.out.println(refDemo);
    }
```

在这个例子中，我们定义了一个无参构造函数 `MethodRefDemo()`，该构造函数在创建对象时输出一条消息。然后，我们使用 `Supplier` 接口并快速引用 `::` 引用构造函数，以便在需要创建对象时，调用构造函数。

总之，Java 1.8 中的快速引用 `::` 语法使得方法引用更加简洁和易读。通过使用快速引用 `::`，你可以轻松地引用现有的静态方法、实例方法和构造函数，使代码更加精简和易于理解。

# 五、Lambda 访问外部变量及接口默认方法

在本章节中，我们将会讨论如何在 lambda 表达式中访问外部变量（包括：局部变量，成员变量，静态变量，接口的默认方法.），它与匿名内部类访问外部变量很相似。

## 5.1 访问局部变量

在 Lambda 表达式中，我们可以访问外部的 `final` 类型变量，如下面的示例代码：

```java
@FunctionalInterface
public interface ColaConvert <F,T>{
    T convert(F from);
}
```

```java
final int first = 1;
        // 在 Lambda 中我们可以直接访问局部变量
        ColaConvert<String, Integer> convert = (from -> Integer.valueOf(from + first));
        Integer convertedByLambda = convert.convert("777");
        System.out.println("convertedByLambda = " + convertedByLambda);
```

与匿名内部类不同的是，我们不必显式声明 `num` 变量为 `final` 类型，下面这段代码同样有效：

```java
int second = 2;
        ColaConvert<String, Integer> convert = from -> Integer.valueOf(from+ second);
        Integer convertByLambda = convert.convert("123");
        System.out.println("convertByLambda = " + convertByLambda);
```

但是 `num` 变量必须为隐式的 `final` 类型，何为隐式的 `final` 呢？就是说到编译期为止，`num` 对象是不能被改变的，如下面这段代码，就不能被编译通过：

```java
        int thread = 3;
        ColaConvert<String, Integer> convert = from -> {
           return Integer.valueOf(from + thread);
        };
//            thread = 4;
```

在 lambda 表达式内部改变 `num` 值同样编译不通过，需要注意, 比如下面的示例代码：

```java
        int thread = 3;
        ColaConvert<String, Integer> convert = from -> {
//            thread = 4;
            /**
             * 在 Lambda 内部访问局部变量的时候虽然我们可以不显式的指定变量为 final
             * 但必须保证不能修改 变量的值否则编译不通过
             */
           return Integer.valueOf(from + thread);
        };
```



## 5.2 访问成员变量和静态方法

上一章节中，了解了如何在 Lambda 表达式中访问局部变量。与局部变量相比，在 Lambda 表达式中对成员变量和静态变量拥有读写权限：

```java
public class LambdaRWStaticOrNumber {
    static int outerStaticNum = 10;
    int outNum;

    void testScope() {
        ColaConvert<String, Integer> convert = from -> {
            outerStaticNum = 20;
            System.out.println("outerStaticNum + 1 = " + (outerStaticNum + 1));
            System.out.println("outNum + 1 = " + (outNum + 1));

            return Integer.valueOf(from);
        };
        Integer converted = convert.convert("444");
        System.out.println("converted = " + converted);
    }

    public static void main(String[] args) {
        LambdaRWStaticOrNumber test = new LambdaRWStaticOrNumber();
        test.testScope();
    }
}
```

```java

```

## 5.3 访问接口的默认方法

```java
@FunctionalInterface
public interface Formula {
    double calculate(int a);

    default double sqrt(int a){
        return Math.sqrt(a);
    }
}
```

我们在接口中定义了一个带有默认实现的 `sqrt` 求平方根方法，在匿名内部类中我们可以很方便的访问此方法：

```java
        // 匿名内部类中我们可以很方便的访问接口中的默认方法
        Formula formulaByNick = new Formula() {
            @Override
            public double calculate(int a) {
                return sqrt(a);
            }
        };

        double sqrtByNick = formulaByNick.sqrt(1);
        System.out.println("sqrtByNick = " + sqrtByNick);
```

但是在 lambda 表达式中不行：

```java
        // 但 Lambda 是访问不了的 只能访问那个唯一的抽象方法
        Formula formulaByLambda = Double::valueOf;
```
