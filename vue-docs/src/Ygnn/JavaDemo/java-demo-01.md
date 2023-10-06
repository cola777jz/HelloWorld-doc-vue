---
title: Java 基础部分 Demo(周哥 Java 基础)
order: 1
category:
  - Ygnn
  - JavaDemo
  - MD
---

## 一、基本语法

### 1.1 JDK 的安装

```java
    public static void main(String[] args) {
        System.out.println("Hello World");
    }
```

### 1.2 IDEA 的使用

```java
    public static void main(String[] args) {
        String name = "BaoQi Cao";
        int age = 21;
        String school = "JinZhong Collage";

        System.out.println("name = " + name + " age = " + age + " school = " + school);

    }
```

### 1.3 常用运算符

```java
    public static void main(String[] args) {
        int a = 10;
        int b = 2;
        System.out.println("a + b = " + (a + b));
        System.out.println("a - b = " + (a - b));
        System.out.println("a * b = " + (a * b));
        System.out.println("a / b = " + (a / b));
    }
```



### 1.4 条件 + 循环语句

```java
    public static void main(String[] args) {
        int num_0 = 0;
        int num_1 = 0;
        for (int i = 1; i <= 100; i++) {
            if (i % 2 == 0){
                num_0 += i;
            }
            if (i % 2 == 1){
                num_1 += i;
            }
        }
        System.out.println("1 - 100 偶数 = " + num_0);
        System.out.println("1 - 100 奇数 = " + num_1);
    }
```

```java
    public static final int COUNTS = 10;
    public static void main(String[] args) {
        int[] array = new int[COUNTS];
        Random random = new Random();
        int sum = 0;
        for (int i = 0; i < array.length; i++) {
            array[i] = random.nextInt(1,101);
            sum += array[i];
        }
        System.out.println("sum = " + sum);


    }
```



### 1.5 初识方法

```java
    public static void main(String[] args) {
        System.out.println("sum = " + getSum());
    }

    public static int getSum() {
        int sum = 0;
        for (int i = 1; i <= 100; i++) {
            if (i % 2 == 1) {
                sum += i;
            }
        }
        return sum;
    }
```



## 二、面向对象

### 2.1 封装

#### 2.1.1 初识类

```java
public class Student {
    private String name;
    private Integer age;
    private String school;

    public Student() {
    }

    public Student(String name, Integer age, String school) {
        this.name = name;
        this.age = age;
        this.school = school;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Integer getAge() {
        return age;
    }

    public void setAge(Integer age) {
        this.age = age;
    }

    public String getSchool() {
        return school;
    }

    public void setSchool(String school) {
        this.school = school;
    }

    @Override
    public String toString() {
        return "Student{" +
            "name='" + name + '\'' +
            ", age=" + age +
            ", school='" + school + '\'' +
            '}';
    }
}
```



#### 2.1.2 字符串常用函数

```java
    public static void main(String[] args) {
        String name = "Cola777";
        System.out.println("name.length() = " + name.length());
        System.out.println("name.charAt(0) = " + name.charAt(0));
        String school = "JinZhong Collage";
        System.out.println("name.equals(school) = " + name.equals(school));
        System.out.println("school.trim() = " + school.trim());
        String[] split = school.split(" ");
        Arrays.stream(split).forEach(System.out::println);

    }
```



#### 2.1.3 ArrayList 的使用

```java
  public static final int COUNTS = 100;
    public static void main(String[] args) {
        List<Student> students = new ArrayList<>();
        Random random = new Random();
        for (int i = 0; i < COUNTS; i++) {
            Student student = new Student(
                random.nextInt(16, 100),
                random.nextBoolean()
            );
            students.add(student);
        }

        System.out.println("过滤前: ");
        students.forEach(System.out::println);

        List<Student> list = students
            .stream().filter(Objects::nonNull)
            .filter(student -> !student.getBoy())
            .filter(student -> 18 <= student.getAge())
            .filter(student -> student.getAge() <= 22)
            .toList();

        System.out.println("过滤后：");
        list.forEach(System.out::println);

    }
```



### 2.2 继承

#### 2.2.1 static 静态变量 （类变量）

```java
    private static final double PI = 3.14;

    public static void sayPI(){
        System.out.println("PI = " + PI);
    }
```

```java
    public static void main(String[] args) {
        StaticDemo.sayPI();
    }
```



#### 2.2.2 初识继承

```java
public class Animal {
    private Integer age;

    public void eat(){
        System.out.println("Animal is eating. ");
    }

    public Animal() {
    }

    public Animal(Integer age) {
        this.age = age;
    }

    public Integer getAge() {
        return age;
    }

    public void setAge(Integer age) {
        this.age = age;
    }
}
```

```java
public class Cat extends Animal {
    private String name;

    public Cat() {
    }

    public Cat(String name) {
        this.name = name;
    }

    public Cat(Integer age, String name) {
        super(age);
        this.name = name;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    @Override
    public void eat() {
        System.out.println("A cat " + " is eating " + " which age`s " + super.getAge() + " name`s " + this.name);
    }

    @Override
    public String toString() {
        return "Cat{" +
            "name='" + name + '\'' +
            '}';
    }
}
```

```java
    public static void main(String[] args) {
        Cat cat = new Cat(7, "Tom");
        cat.eat();
    }
```



### 3. 多态

#### 3.1 权限修饰符



#### 3.2 初识多态

```java
public class Animal {
    public void sayHello(){
        System.out.println("animal sayHello ");
    }
}
```

```java
public class Cat extends Animal{
    @Override
    public void sayHello() {
        System.out.println("cat sayHello ");
    }
}

```

```java
public class Dog extends Animal{
    @Override
    public void sayHello() {
        System.out.println("dog sayHello ");
    }
}

```

```java
    public static void main(String[] args) {
        Animal[] animals = {new Cat(), new Dog(),new Animal()};
        welcome(animals);
    }

    public static void welcome(Animal[] animal){
        for (Animal item : animal) {
            item.sayHello();
        }
    }
```

### 4. 接口

#### 4.1 初识接口

```java
public interface EndAble {
    void end();
}
```

```java
public interface StartAble {
    void start();
}
```

```java
public class Computer implements StartAble, EndAble {
    @Override
    public void end() {
        System.out.println("computer is end");
    }

    @Override
    public void start() {
        System.out.println("computer is start");
    }
}
```

```java
    public static void main(String[] args) {
        Computer computer = new Computer();
        computer.start();
        computer.end();
    }
```

---

```java
@FunctionalInterface
public interface MovieAble {
    void movie();
}
```

```java
public class TV implements MovieAble{
    private MovieAble target;

    public TV() {
    }

    public TV(MovieAble target) {
        this.target = target;
    }

    @Override
    public void movie() {
        if (target != null){
            target.movie();
        }
    }
}
```

```java
    public static void main(String[] args) {

        TV tv = new TV(new MovieAble() {
            @Override
            public void movie() {
                System.out.println("tv is moving");
            }
        });

        tv.movie();

    }
```



## 三、常用库

### 3.1 Math

```java
    public static void main(String[] args) {
        double sum = 0.0;
        for (int i = 0; i < 1000_0000; i++) {
            sum += Math.sin(i);
        }
        System.out.println("sum = " + sum);
    }
```



### 3.2 Pattern

```java
    public static void main(String[] args) {
        String regex = "\\d+";
        String text = "asb123dfa456";
        Pattern compile = Pattern.compile(regex);
        Matcher matcher = compile.matcher(text);

        List<Integer> list = matcher.results().map(MatchResult::group).map(Integer::parseInt).toList();
        System.out.println("list = " + list);
        String[] split = text.split("[a-z]+");
        System.out.println("split = " + Arrays.toString(split));
    }
```



### 3.3 System

```java
    public static void main(String[] args) {
        double sum = 0.0;
        long start = System.currentTimeMillis();
        for (int i = 0; i < 1000_0000; i++) {
            sum += Math.sin(i);
        }
        System.out.println("sum = " + sum);
        long end = System.currentTimeMillis();
        System.out.println((end - start) + " ms");
    }
```



### 3.4 Stream

```java
    public static void main(String[] args) {
        Random random = new Random();
        Integer[] ids = new Integer[10];
        for (int i = 0; i < ids.length; i++) {
            ids[i] = random.nextInt(1, 101);
        }
        Arrays.stream(ids).sorted((o1, o2) -> o2 - o1).forEach(System.out::println);
    }
```



## 四、集合

### 4.1 集合的遍历

```java
 /**
     * 根据传入的 counts 生成对应的班级
     *
     * @param counts counts
     * @return 生成的班级
     */
    public static Map<String, List<Student>> randomClass(int[] counts) {
        String classNamePrefix = "class_";
        int classIndex = 1;
        Random random = new Random();
        Map<String, List<Student>> classMap = new HashMap<>();

        for (int count : counts) {
            List<Student> students = new ArrayList<>();
            String className = classNamePrefix + classIndex;
            while (count != 0) {
                Student student = new Student(
                    "student_" + count + "_" + classIndex,
                    random.nextInt(18, 21),
                    random.nextInt(1, 13)
                );
                students.add(student);
                count--;
            }
            classMap.put(className, students);
            classIndex++;
        }
        return classMap;
    }
```

```java
 /**
     * 将 classMap 中的学生按照 month 重新分组
     * @param classMap classMap
     * @return 分组后的学生 map
     */
    public static Map<Integer, List<Student>> countByMonth(Map<String, List<Student>> classMap) {
        Map<Integer, List<Student>> mapByMonth = new HashMap<>();

        mapByMonth =
            classMap
                .values()
                .stream()
                .flatMap(List::stream)
                .collect(Collectors.groupingBy(Student::getMonth));

        return mapByMonth;
    }
```

```java
 /**
     * 打印输出 map
     * @param map map
     */
    public static void printMap(Map<?,List<Student>> map){
        for (Object key : map.keySet()) {
            System.out.println("key = " + key);
            map.get(key).forEach(System.out::println);
        }
    }
```

```java
 public static void main(String[] args) {
        /**
         * 随机生成 3 个班 每个班 42，53，62 人
         * age 18 - 20
         * month 1 - 12
         */
        int[] counts = {48, 53, 62};

        Map<String, List<Student>> map = randomClass(counts);
        System.out.println("生成的班级信息：");
        printMap(map);

        Map<Integer, List<Student>> countedByMonth = countByMonth(map);

        System.out.println("统计每个月的学生：");
        printMap(countedByMonth);

```



## 五、IO 流

### 5.1 IO 案例

```java
    public static Map<String, List<Student>> randomClass(int[] counts) {
        String classNamePrefix = "class_";
        int classIndex = 1;
        Map<String, List<Student>> classMap = new HashMap<>();
        Random random = new Random();

        for (int count : counts) {
            List<Student> students = new ArrayList<>();
            String className = classNamePrefix + classIndex;
            while (count != 0) {
                Student student = new Student(
                    "student_" + count + "_" + classIndex,
                    random.nextInt(18, 21),
                    random.nextInt(1, 13)
                );
                students.add(student);
                count--;
            }
            classMap.put(className, students);
            classIndex++;
        }
        return classMap;
    }

    public static void printMapInfo(Map<?, List<Student>> map) {
        map.forEach((o, students) -> {
            System.out.println(o);
            students.forEach(System.out::println);
        });
    }
```



```java
  public static void writeInfo2CSV(Map<String, List<Student>> map) {
        try (BufferedWriter writer = new BufferedWriter(new FileWriter(FILE))) {
            for (String key : map.keySet()) {
                for (Student student : map.get(key)) {
                    writer.write(student.toString() + "\n");
                }
            }
        } catch (IOException e) {
            System.out.println(e.getMessage());
        }
    }
```



```java
  public static List<Student> readFromCSV(){
        List<Student> students = new ArrayList<>();

        try (BufferedReader reader = new BufferedReader(new FileReader(FILE))){
            String line;
            while ((line = reader.readLine()) != null){
                Pattern pattern = Pattern.compile("Student\\{name='(.+)', age=(\\d+), month=(\\d+)\\}");
                Matcher matcher = pattern.matcher(line);
                if (matcher.find()){
                    String name = matcher.group(1);
                    int age = Integer.parseInt(matcher.group(2));
                    int month = Integer.parseInt(matcher.group(3));

                    // 创建Student对象并添加到List中
                    Student student = new Student(name, age, month);
                    students.add(student);
                }
            }
        }catch (IOException e){
            System.out.println(e.getMessage());
        }

        return students;
    }
```



## 六、多线程

### 6.1 多线程案例

```java
 private static final File FILE = new File("./sin-num.csv");

    public static void main(String[] args) {
        try (BufferedWriter writer = new BufferedWriter(new FileWriter(FILE))) {
            for (int i = 1; i <= 1000_0000; i++) {
                writer.write(i + "\n");
            }
        } catch (IOException e) {
            System.out.println(e.getMessage());
        }
    }
```

```java
  private static Object lock = new Object();
    private static final File FILE = new File("./sin-num.csv");
    private static final List<List<Integer>> subList = new ArrayList<>();
    private static final int NUM_COUNT = 1000_0000;
    private static final int NUM_THREAD = 4;

    private static double TOTAL_SUM = 0.0;
    private static final int count = NUM_COUNT / NUM_THREAD;
    private static SinThread[] threads = null;


    static {
        try (BufferedReader reader = new BufferedReader(new FileReader(FILE))) {
            List<Integer> totalList = new ArrayList<>();
            String line;
            while ((line = reader.readLine()) != null) {
                totalList.add(Integer.parseInt(line));
            }
            for (int i = 0; i < totalList.size(); i += count) {
                int endIndex = Math.min(i + count, totalList.size());
                List<Integer> group = totalList.subList(i, endIndex);
                subList.add(group);
            }
            threads = new SinThread[NUM_THREAD];
            for (int i = 0; i < NUM_THREAD; i++) {
                threads[i] = new SinThread(
                    subList.get(i),
                    "Thread-" + i
                );
            }

        } catch (IOException e) {
            System.out.println(e.getMessage());
        }
    }

    public static void main(String[] args) throws InterruptedException {
        long start = System.currentTimeMillis();

        for (SinThread thread : threads) {
            thread.start();
        }
        for (SinThread thread : threads) {
            thread.join();
        }
        System.out.println("TOTAL_SUM = " + TOTAL_SUM);
        long end = System.currentTimeMillis();
        System.out.println("time = " + (end - start) + "ms");

    }

    static class SinThread extends Thread {
        List<Integer> nums;
        String name;


        public SinThread(List<Integer> nums, String name) {
            this.nums = nums;
            this.name = name;
        }


        @Override
        public void run() {
            double sum = 0.0;
            for (Integer num : nums) {
                sum += Math.sin(num);
            }
            System.out.println(name + " sum = " + sum);

            synchronized (lock) {
                TOTAL_SUM += sum;
            }
        }


    }
```

---

```java
  private static final File FILE = new File("./sin-num.csv");
    private static final List<List<Integer>> subList = new ArrayList<>();
    private static final int NUM_COUNT = 1000_0000;
    private static final int NUM_THREAD = 10;
    private static final int count = NUM_COUNT / NUM_THREAD;
    private static final CountDownLatch latch = new CountDownLatch(NUM_THREAD);
    private static SinThread[] threads = null;


    static {
        try (BufferedReader reader = new BufferedReader(new FileReader(FILE))) {
            List<Integer> totalList = new ArrayList<>();
            String line;
            while ((line = reader.readLine()) != null) {
                totalList.add(Integer.parseInt(line));
            }
            for (int i = 0; i < totalList.size(); i += count) {
                int endIndex = Math.min(i + count, totalList.size());
                List<Integer> group = totalList.subList(i, endIndex);
                subList.add(group);
            }
            threads = new SinThread[NUM_THREAD];
            for (int i = 0; i < NUM_THREAD; i++) {
                threads[i] = new SinThread(
                    subList.get(i),
                    "Thread-" + i,
                    latch
                );
            }

        } catch (IOException e) {
            System.out.println(e.getMessage());
        }
    }

    public static void main(String[] args) throws InterruptedException {
        long start = System.currentTimeMillis();

        for (SinThread thread : threads) {
            thread.start();
        }
        for (SinThread thread : threads) {
            thread.join();
        }

        latch.await();

        double totalSum = 0.0;
        for (SinThread thread : threads) {
            totalSum += thread.getSum();
        }
        System.out.println("totalSum = " + totalSum);
        long end = System.currentTimeMillis();
        System.out.println("time = " + (end - start) + "ms");

    }
```

```java
public class SinThread extends Thread {
    List<Integer> nums;
    String name;
    private final CountDownLatch latch;
    private double sum;



    public SinThread(List<Integer> nums, String name, CountDownLatch latch) {
        this.nums = nums;
        this.name = name;
        this.latch = latch;
    }

    public double getSum() {
        return sum;
    }

    @Override
    public void run() {
        for (Integer num : nums) {
            sum += Math.sin(num);
        }
        System.out.println(name + " sum = " + sum);
        latch.countDown();
    }


}

```

## 七、Socket 网络编程

### 7.1 实现一个简单的 C/S 架构

```java
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        try (
            Socket socket = new Socket("127.0.0.1", 7777);
            BufferedReader reader = new BufferedReader(new InputStreamReader(socket.getInputStream()));
            PrintWriter writer = new PrintWriter(socket.getOutputStream(),true)
        ) {
            String line;
            while ((line = reader.readLine()) != null){
                System.out.println("client = " + line);
            }
            System.out.println("Please Input msg: (end with 886)");
            String text = scanner.nextLine();
            while (!text.equals("886")){
                writer.write(text);
            }
        } catch (IOException e) {
            System.out.println(e.getMessage());
        }
    }
```

```java
    public static void main(String[] args) {
        try (
            ServerSocket socket = new ServerSocket(7777);
            Socket accept = socket.accept();
            BufferedReader reader = new BufferedReader(new InputStreamReader(accept.getInputStream()));
            PrintWriter writer = new PrintWriter(accept.getOutputStream(),true)
        ) {
            String line;
            while ((line = reader.readLine()) != null){
                System.out.println("server = " + line);
            }
            writer.println("I am Server");
        } catch (IOException e) {
            System.out.println(e.getMessage());
        }
    }
```

## 八、 反射

### 8.1 反射案例

```java
public class SayHello {

    public static String sayHello(String name) {
        System.out.println("Hello " + name);
        return "ok,200";
    }
}
```

```java
    public static void main(String[] args) throws ClassNotFoundException, NoSuchMethodException, InvocationTargetException, InstantiationException, IllegalAccessException {
        Class<?> aClass = Class.forName("ygnn.cola.study.day35.SayHello");
        Object o = aClass.getDeclaredConstructor().newInstance();
        Method method = aClass.getMethod("sayHello", String.class);

        System.out.println(method.invoke(o, "Cola777"));
    }
```

