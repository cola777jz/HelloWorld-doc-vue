---
title: Lombok 的基本使用
order: 1
category:
  - Skills
  - HelloLombok
  - MD
---

## 一、QuickStart

### 1.1 Lombok 介绍

[Lombok ](https://projectlombok.org/)是一个超酷的 Java 库，**它能让你避免编写那些冗余的 Java 样板式代码**，如对象中的 `get`、`set`、`toString` 等方法，解放你的双手，堪称偷懒神器，在企业级项目开发中，是必会的一个库。

Lombok 提供了一组注解和工具，用于在编译期自动生成样板代码。这些样板代码通常是一些重复性的、无趣的、但是必需的代码，例如 `getter` 和 `setter` 方法、构造函数、`equals` 和 `hashCode` 方法等。借助 Lombok，你就不必手动编写这些繁琐的代码，它会在编译时自动帮你生成这些方法，让你的代码文件简洁而整洁。

### 1.2 安装

新版本的 IDEA 基本都内置了 Lombok 插件，因此我们只需要导入相关依赖 jar 包即可：

<img src="https://yong-gan-niu-niu-1311841992.cos.ap-beijing.myqcloud.com/images/image-20230929171605347.png" alt="image-20230929171605347" style="zoom:50%;" />

#### 1.2.1 使用 Maven 安装

```xml
        <dependency>
            <groupId>org.projectlombok</groupId>
            <artifactId>lombok</artifactId>
            <version>1.18.30</version>
            <scope>compile</scope>
        </dependency>
```

<img src="https://yong-gan-niu-niu-1311841992.cos.ap-beijing.myqcloud.com/images/image-20230929171411164.png" alt="image-20230929171411164" style="zoom:50%;" />

#### 1.2.2 使用 Gradle 安装

```xml-dtd
dependencies {
    compileOnly 'org.projectlombok:lombok:1.18.30' 
    annotationProcessor 'org.projectlombok:lombok:1.18.30'
}
```



#### 1.2.3 Eclipse 安装 Lombok

TODO

## 二、Lombok 注解

Lombok 提供了丰富的注解，用于在编译期自动生成样板代码。这些样板代码通常是一些重复性的、繁琐的，但是在大多数情况下又是必需的代码。有了 Lombok，你就不必手动编写这些样板代码，它会在编译时自动为你生成，让你的代码看起来更加简洁、优雅。

- Lombok 中的核心注解：
    -  `@Getter` 和 `@Setter` ：简化属性操作
    -  `@ToString`：快速打印对象
    -  `@EqualsAndHashCode`：简化对象比较
    -  `@NoArgsConstructor`, `@RequiredArgsConstructor` 和 `@AllArgsConstructor`：轻松生成构造方法
- 提升效率的 Lombok 注解：
    -  `@Data`：一键生成代码
    -  `@Builder`：流畅的构建者模式
    -  `@Value`：创建不可变类
    -  `@Log` 系列注解：简化日志记录

### 2.1 @Getter、@Setter 注解

`@Getter` 和 `@Setter` 是 Lombok 提供的两个注解，它们可以帮助我们自动在 Java 类中生成 `getter` 和 `setter` 方法。这样，你就不需要手动地为每个字段编写这些方法了，省时又省力。

使用这两个注解真的超级简单。你只需要在你的类或者字段上加上这两个注解，Lombok 就会自动为你生成 `getter` 和 `setter` 方法。示例代码如下：

```java
@Getter
@Setter
public class Student {
    /**
     * 将 @getter、@setter 加在 类上
     * lombok 默认会为所有字段生成 public 的 getter 和 setter 方法
     */
    private Integer id;
    private String name;
}
```

测试

```java
    /**
     * 将 @getter、@setter 加在 类上
     * lombok 默认会为所有字段生成 public 的 getter 和 setter 方法
     */
    @Test
    void testGetterAndSetterOnClass() {
        Student student = new Student();
        student.setId(1);
        student.setName("Cola");

        System.out.println("id = " + student.getId());
        System.out.println("name = " + student.getName());
    }
```

target 文件

```java
public class Student {
    private Integer id;
    private String name;

    public Student() {
    }

    public Integer getId() {
        return this.id;
    }

    public String getName() {
        return this.name;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public void setName(String name) {
        this.name = name;
    }
}
```



是不是看起来很酷？节省了一大段的样板式代码有木有，Lombok 会在编译阶段自动生成 `id` 和 `name` 字段的 `getter` 和 `setter` 方法。

当然，如果你只想为某个特定的字段生成 `getter` 或者 `setter` 方法，那么你可以直接将注解加到字段上，就像这样：

```java
public class Student {
    /**
     * 将 @getter、@setter 加在 属性上
     * lombok 默认会为该生成 public 的 getter 和 setter 方法
     */
    @Getter
    @Setter
    private Integer id;
    private String name;
}
```

在这个例子中，只有 `id` 字段会获得 `getter` 和 `setter` 方法，而 `name` 字段则不会。

测试

```java
    /**
     * 将 @getter、@setter 加在 属性上
     * lombok 默认会为该生成 public 的 getter 和 setter 方法
     */
    @Test
    void testGetterAndSetterOnProperty() {
        Student student = new Student();
        student.setId(1);
        System.out.println("student.getId() = " + student.getId());
    }
```



target 文件

```java
public class Student {
    private Integer id;
    private String name;

    public Student() {
    }

    public Integer getId() {
        return this.id;
    }

    public void setId(Integer id) {
        this.id = id;
    }
}
```

Lombok 还允许你自定义生成的 `getter` 和 `setter` 方法的访问级别。例如，你想设置 `getter` 方法为 `protected`，只需要这样写：

```java
@Getter(AccessLevel.PROTECTED)
@Setter(AccessLevel.PUBLIC)
public class Student {

    /**
     * 我们可以通过 AccessLevel 提供的属性为 getter 和 setter 方法的访问级别
     * lombok 会通过指定的参数生成对应访问级别的方法
     */
    private Integer id;
    private String name;
}
```

这样，`id` 和 `name` 字段的 getter 方法就会被设置为 `protected`，而 `setter` 方法则仍然是 `public`。

测试

```java
     /**
     * 我们可以通过 AccessLevel 提供的属性为 getter 和 setter 方法的访问级别
     * lombok 会通过指定的参数生成对应访问级别的方法
     */
	@Test
    void testControlPropertyLevel() {
        Student student = new Student();
        student.setId(1);
        student.setName("Cola");
        System.out.println("student.getId() = " + student.getId());
        System.out.println("student.getName() = " + student.getName());
    }
```

target 文件

```java
public class Student {
    private Integer id;
    private String name;

    public Student() {
    }

    protected Integer getId() {
        return this.id;
    }

    protected String getName() {
        return this.name;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public void setName(String name) {
        this.name = name;
    }
}
```

还有一点需要注意，Lombok 不会为 `final` 字段生成 `setter` 方法。也就是说，如果你的字段是 `final` 的，即使你添加了 `@Setter` 注解，Lombok 也不会为它生成`setter` 方法。

```java
@Getter
@Setter
public class Student {
    /**
     * lombok 不会为 final 字段生成 setter 方法 即使你标注了 @Setter
     */
    private  final Integer VERSION  = 1;
}
```

测试

```java
    /**
     * lombok 不会为 final 字段生成 setter 方法 即使你标注了 @Setter
     */
    @Test
    void testFinalProperty() {
        Student student = new Student();
        System.out.println("student.getVERSION() = " + student.getVERSION());
    }
```

target 文件

```java
public class Student {
    private final Integer VERSION = 1;

    // ..

    public Integer getVERSION() {
        return this.VERSION;
    }
}
```



### 2.2 @ToString 注解

`@ToString` 是 Lombok 提供的一个注解，通过它我们可以自动地为 Java 类生成一个 `toString` 方法。这样你就不需要手动去重写这个方法了。`toString` 方法在日常开发中是十分常用的，它可以帮助我们快速查看对象的状态。但是，手动编写却很容易出错，还很繁琐。有了 `@ToString`，这些都不再是问题了。

使用 `@ToString` 就像使用其他 Lombok 注解一样简单。你只需要类上添加这个注解，Lombok 就会自动为你生成 `toString` 方法。示例代码如下：

```java
@Getter
@Setter
@ToString
public class Student {
    /**
     * lombok 会为设置了 @ToString 的类生成对应的 toString 方法
     */
    private Integer id;
    private String name;
    private Integer age;
}
```

这样，当你创建了一个 `Student` 对象并调用其 `toString` 方法时，会得到类似这样的输出：`Student(id=1, name=Cola, age=21)`。

```java
    /**
     * lombok 会为设置了 @ToString 的类生成对应的 toString 方法
     */
    @Test
    void testToString() {
        Student student = new Student();
        student.setId(1);
        student.setName("Cola");
        student.setAge(21);

        System.out.println("student = " + student);
    }
```

target 文件

```java
public class Student {
    private Integer id;
    private String name;
    private Integer age;

	// ..

    public String toString() {
        Integer var10000 = this.getId();
        return "Student(id=" + var10000 + ", name=" + this.getName() + ", age=" + this.getAge() + ")";
    }
}
```

Lombok 为 `@ToString` 提供了一些选项，让你可以进一步自定义生成的 `toString` 方法。让我们来看看这些选项：

- `includeFieldNames`：是否在输出中包含字段名，默认为 `true`。
- `exclude`：排除某些字段，不在 `toString` 的输出中显示。
- `callSuper`：是否调用超类的 `toString` 方法，默认为 `false`。
- `of`：明确要在 `toString` 的输出中显示的字段。

![image-20231001190858536](https://yong-gan-niu-niu-1311841992.cos.ap-beijing.myqcloud.com/images/image-20231001190858536.png)

下面这个例子，使用了这些选项：

```java
@Getter
@Setter
@ToString(of = {"name","birthday"})
public class Student {

    private Integer id;
    private String name;

    private LocalDate birthday;
}
```

这样，`Student` 对象的 `toString` 只会输出 `name 和 birthday` 字段，不会输出 `id` 字段。

```java
    /**
     * lombok 为我们提供了一些选项来控制生成的 toString 方法
     * includeFieldNames：是否在输出中包含字段名，默认为 true。
     * exclude：排除某些字段，不在 `toString` 的输出中显示。
     * callSuper：是否调用超类的 `toString` 方法，默认为 false。
     * of：明确要在 toString 的输出中显示的字段。
     */
    @Test
    void testCustomToString() {
        Student student = new Student();
        student.setId(1);
        student.setName("Cola");
        student.setBirthday(LocalDate.of(2023,5,6));
        System.out.println("student = " + student);
    }
```

target 文件

```java
public class Student {
    private Integer id;
    private String name;
    private LocalDate birthday;

    // .. 
    
    public String toString() {
        String var10000 = this.getName();
        return "Student(name=" + var10000 + ", birthday=" + this.getBirthday() + ")";
    }
}
```



### 2.3 @EqualsAndHashCode 注解

`@EqualsAndHashCode` 是 Lombok 提供的一个注解，它能够帮助我们自动生成 `equals` 和 `hashCode` 方法。在 Java 中，当我们需要比较两个对象的相等性或者将对象放入集合（如 HashSet 或 HashMap）中时，这两个方法就十分重要。然而，手动编写它们非常繁琐并且容易出错，而 Lombok 的 `@EqualsAndHashCode` 就可以帮我们自动完成。

和其他 Lombok 注解一样，使用 `@EqualsAndHashCode` 也非常简单。你只需要在类上添加这个注解，Lombok 就会自动为你生成 `equals` 和 `hashCode` 方法。下面是一个简单的例子：

```java
import lombok.EqualsAndHashCode;

@EqualsAndHashCode
public class Student {
    private String name;
    private int age;
}
```

```java
/**
     * 标注 @EqualsAndHashCode 后 lombok 会为
     * 我们生成相应的 equals() 和 hashCode() 方法
     */
    @Test
    void testEqualsAndHashCode() {
        Student condition = new Student();
        condition.setName("Cola");
        List<Student> students = new ArrayList<>();
        Student cola = new Student();
        cola.setName("Cola");
        Student rh = new Student();
        rh.setName("RH");
        students.add(cola);
        students.add(rh);

        students.forEach(student -> {
            System.out.println(student.getName().toLowerCase() +".equals(condition) = " + student.equals(condition));
        });
    }
```

```java
public class Student {
    private Integer id;
    private String name;
    private Integer age;

	// ..

    public String toString() {
        Integer var10000 = this.getId();
        return "Student(id=" + var10000 + ", name=" + this.getName() + ", age=" + this.getAge() + ")";
    }

    public boolean equals(Object o) {
        if (o == this) {
            return true;
        } else if (!(o instanceof Student)) {
            return false;
        } else {
            Student other = (Student)o;
            if (!other.canEqual(this)) {
                return false;
            } else {
                label47: {
                    Object this$id = this.getId();
                    Object other$id = other.getId();
                    if (this$id == null) {
                        if (other$id == null) {
                            break label47;
                        }
                    } else if (this$id.equals(other$id)) {
                        break label47;
                    }

                    return false;
                }

                Object this$age = this.getAge();
                Object other$age = other.getAge();
                if (this$age == null) {
                    if (other$age != null) {
                        return false;
                    }
                } else if (!this$age.equals(other$age)) {
                    return false;
                }

                Object this$name = this.getName();
                Object other$name = other.getName();
                if (this$name == null) {
                    if (other$name != null) {
                        return false;
                    }
                } else if (!this$name.equals(other$name)) {
                    return false;
                }

                return true;
            }
        }
    }

    protected boolean canEqual(Object other) {
        return other instanceof Student;
    }

    public int hashCode() {
        int PRIME = true;
        int result = 1;
        Object $id = this.getId();
        result = result * 59 + ($id == null ? 43 : $id.hashCode());
        Object $age = this.getAge();
        result = result * 59 + ($age == null ? 43 : $age.hashCode());
        Object $name = this.getName();
        result = result * 59 + ($name == null ? 43 : $name.hashCode());
        return result;
    }
}
```



有了 `@EqualsAndHashCode` 注解，`Student` 类就拥有了自己的 `equals` 和 `hashCode` 方法，你可以像使用自定义方法一样使用它们。

Lombok 提供了一些选项，让你可以自定义 `equals` 和 `hashCode` 方法的行为。这些选项包括：

- `doNotUseGetters`：是否直接使用字段值而非调用 getter 方法，默认为 `false`。
- `callSuper`：是否在 `equals` 和 `hashCode` 方法中调用超类的方法，默认为 `false`。
- `exclude`：排除某些字段，不在 `equals` 和 `hashCode` 方法中使用。
- `of`：明确要在 `equals` 和 `hashCode` 方法中使用的字段。

这是一个使用了这些选项的例子：

```java
@Getter
@Setter
@ToString
@EqualsAndHashCode(of = {"id","name"})
public class Student {
    private Integer id;
    private String name;
    private Integer age;
}
```

在这个例子中，`Student` 类的 `equals` 和 `hashCode` 方法，并且只会使用 `id 和 name` 字段，不会使用 `age` 字段。

### 2.4 Constructor 注解

首先，让我们来了解一下这三个注解：

- `@NoArgsConstructor`：这个注解会让 Lombok 为你的类生成一个无参数的构造方法。非常简单，对吧？
- `@RequiredArgsConstructor`：这个注解稍微复杂一些，它会让 Lombok 为你的类生成一个构造方法，构造方法的参数是类中所有需要特殊处理的字段。
- `@AllArgsConstructor`：这个注解会让 Lombok 为你的类生成一个包含所有字段的构造方法。

Lombok 的注解用起来就像点菜一样容易。你只需要在你的类上添加这些注解，Lombok 就会按照你的要求为你生成相应的构造方法。下面我给大家演示一下：

```java
import lombok.NoArgsConstructor;
import lombok.RequiredArgsConstructor;
import lombok.AllArgsConstructor;
import lombok.NonNull;

@AllArgsConstructor
@NoArgsConstructor
@RequiredArgsConstructor
@ToString
public class Student {
    @NonNull
    private Integer id;
    private final String name = "Cola";
    @NonNull
    private Integer age;
    private LocalDate birthday;
}
```

这由于 `id` 和 `age` 字段标记了 `@NonNull`，`name` 字段标记了 `final`，因此，Lombok 会生成以下三个构造方法：

- 无参数的构造方法：`public Student()`
- 包含所有特殊字段（`id` 和 `age`）的构造方法：`public Student(@NonNull Integer id, @NonNull Integer age)`
- 包含所有字段(除了 final )的构造方法：`public Student(@NonNull Integer id, @NonNull Integer age, LocalDate birthday) `

当然，Lombok 还提供了一些选项，让你可以对生成的构造方法进行自定义。比如：

- `@NoArgsConstructor(force = true)`：当有 `final` 字段没有被初始化时，这个选项可以强制 Lombok 生成一个无参数的构造方法，并将所有 `final` 字段初始化为其默认值（0、false、null等）。
- `@AllArgsConstructor(access = AccessLevel.PROTECTED)`：这个选项可以用来改变生成的构造方法的访问级别。
- `@RequiredArgsConstructor(staticName = "of")`：这个选项可以让 Lombok 为你生成一个静态的工厂方法，而不是一个构造方法。

### 2.5 @Data 注解

在 Lombok 中，`@Data` 是个万金油注解。一个 `@Data` 注解相当于同时使用了 `@Getter` 、`@Setter` 、`@RequiredArgsConstructor`、`@ToString`、`@EqualsAndHashCode`。



### 2.6 @Builder 注解

在构建复杂对象或者需要多个参数来构造对象的情况下，Builder 模式是一个非常有用的设计模式。然而，手动实现 Builder 模式可能会变得极其繁琐。幸运的是，Lombok 提供了一个非常强大的工具——@Builder 注解，可以帮助我们自动生成 builder 代码。

Builder 设计模式是一种**创建型设计模式**，主要解决了一些对象的构造过程中的问题。它提供了一种链式方法来创建一个复杂的对象。

Lombok 提供了 @Builder 注解，可以**帮助我们简化 builder 模式的实现过程**。

例如，考虑一个 User 类，包含 name、age 和 email 这三个字段。如果我们希望通过 Builder 模式创建 User 对象，那么可以这样做：

```java
@Data
@Builder
public class Student {
    private Integer id ;
    private String name;
    @NonNull
    private Integer age;

}
```

然后，我们可以通过下面的方式来创建 User 对象：

```java
    @Test
    void testDataAndBuilder() {
        Student student = Student.builder().id(1).name("Cola").age(21).build();
        System.out.println("student = " + student);
    }
```

这段代码会输出：`student = Student(id=1, name=Cola, age=21)`

从上面的例子可以看出，Lombok 生成了一个名为 builder 的静态方法，以及 name，age 和 email 的链式设置方法，最后通过 build 方法来构建 User 对象。

有时候，我们可能想要在构造函数上使用 @Builder 注解，这样我们就可以控制哪些字段需要在 builder 中出现。比如，我们可能有一个包含很多字段的类，但只希望部分字段可以通过 builder 来设置：

```java
@Data
public class Student {
    private Integer id;
    private String name;
    private Integer age;

    @Builder
    public Student(Integer id, String name) {
        this.id = id;
        this.name = name;
    }
}
```

在上面的例子中，age 字段不会出现在 builder 中，我们只能设置 name 和 id。

如果我们希望某些字段在 builder 模式中有默认值，我们可以在构造函数中设置：

```java
@Data
public class Student {
    private Integer id;
    private String name;
    private Integer age;

    @Builder
    public Student(Integer id, String name) {
        this.id = id;
        this.name = name;
        this.age = 21;
    }
}
```

这样，除非我们在 builder 中显式地设置 age，否则 age的值将默认为 21。

如果我们不想为某个字段设置值，那么这个字段的值就会默认为 null。例如，如果我们没有设置 age 的值，那么 age 的值就会是 null。

```java
    @Test
    void testCustomBuilder() {
        Student student = Student.builder().name("Cola").id(1).build();
        System.out.println("student = " + student);
    }
```

这段代码会输出：student = Student(id=1, name=Cola, age=21)

在使用 builder 模式时，这是一个需要注意的地方，因为 null 值可能会引发 NullPointerException。

### 2.7 @Value 注解

`@Value` 是 Lombok 提供的一个强大的注解，可以**帮助我们快速创建不可变类**。所谓 "不可变类"，就是指一旦创建，它的状态就不能改变的类。这样的类在多线程环境下特别有用，因为它们不需要任何同步。Java 中最典型的不可变类就是 `String` 类。

使用 `@Value` 非常简单，只需要在类定义上添加 `@Value` 注解即可：

```java
@Value
public class Student {
     Integer id;
     Integer age;
}
```

上面这段代码定义了一个 `Student` 类。因为我们在类定义上添加了 `@Value` 注解，Lombok 会为我们做以下的事情：

- 自动为所有字段添加 `private final` 修饰符，使得它们在初始化后就不能再被改变。
- 自动生成所有字段的 Getter 方法，因为字段是 `final` 的，所以没有 Setter 方法。
- 自动生成 `equals()`, `hashCode()` 和 `toString()` 方法。
- 自动生成一个全参数的构造方法。

实际上，`@Value` 就是 `@Getter @FieldDefaults(makeFinal = true, level = AccessLevel.PRIVATE) @AllArgsConstructor @EqualsAndHashCode @ToString` 的集合。

既然 `@Value` 创建的是不可变对象，那如果我需要修改对象的状态怎么办呢？别担心，这种情况下你可以创建一个新的对象。例如，如果你需要改变一个 `Student` 对象，你可以这样做：

```java
    @Test
    void testValue() {
        Student student = new Student(1, 21);
        Student studentAdd = new Student(student.getId() + 1, student.getAge() + 1);
        System.out.println("studentAdd = " + studentAdd);
        System.out.println("student = " + student);
    }
```

### 2.8 @Log 注解

**实际企业级开发中，推荐使用 `@Slf4j` 注解。** SLF4J 是一个抽象的日志框架，它可以在运行时绑定到具体的日志实现（例如 Logback、Log4j2 等），也就是说，使用这个注解，可以无需管项目中具体使用的日志框架是啥，它会动态检测，使用起来也更加友好。

```java
@Slf4j
public class Log {
    public static void printLog(){
        log.info("I am Log");
    }
}
```
