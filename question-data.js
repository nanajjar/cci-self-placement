const questionDataTemplate = [
    {
        "title": "",
        "text": "",
        "answer": ""
    },
];

const questionDataPython = [
    {
        "title": "Problem Solving & Algorithms",
        "text": "Programming is, at it's core, all about solving problems. Read the following cases and try to determine how you would approach each one. You may want to think in terms of pseudo-code or flow charts.",
        "question": {
            "a": "Given a whole number (an integer), determine the previous and next whole numbers.",
            "b": "Given the width and height of a right triangle, determine the area of the shape. (Area of a right triangle = 0.5 * width * height)",
            "c": "Given the cost of an order, the tip percentage, and the tax percentage, calculate the total amount to be paid.",
        },
        "answer": {
            "a": "Given INTEGER, ADD INTEGER + 1, SUBTRACT INTEGER - 1",
            "b": "Given WIDTH and HEIGHT, MULTIPLY 0.5 * WIDTH * HEIGHT",
            "c": "Given COST and TIP_PERCENT and TAX_PERCENT, ADD COST + (COST * TIP_PERCENT) + (COST * TAX_PERCENT)",
        }
    },
    {
        "title": "Data Types & Variables",
        "text": "While some programming languages vary in which data types they contain and how they are named, most of the concepts are very similar. In Python for example, some of the more basic data types are listed below. See how familiar you are with these and if you can define them.",
        "question": {
            "a": "str",
            "b": "int",
            "c": "float",
            "d": "bool",
            "e": "NoneType",
        },
        "answer": {
            "a": "String: a sequence of characters",
            "b": "Integer: a whole number",
            "c": "Floating-point Number: a number that contains a decimal value",
            "d": "Boolean: an on/off type of value that is either true or false",
            "e": "None Type: represents the absence of a value (often Null in other programming languages)",
        },
    },
    {
        "title": "Moving from Pseudo-code/Flowcharts to Python",
        "text": "If you felt comfortable planning a solution to the previous scenarios using pseudo-code or flowcharts, the next step is to translate those plans into a usable code. In this case, we'll ask you to use the Python programming language (or feel free to use another if you're already familiar with a different programming language).",
        "question": {
            "a": "Given an integer NUM, determine the previous and next integers.",
            "b": "Given the values WIDTH and HEIGHT of a right triangle, calculate the area of the shape. (Area of a right triangle = 0.5 * width * height)",
            "c": "Given the cost of an order , the tip percentage , and the tax percentage , calculate the total amount to be paid.",
        },
        "answer": {
            "a": "PREVIOUS = NUM - 1; NEXT = NUM + 1",
            "b": "AREA = 0.5 * WIDTH * HEIGHT",
            "c": "TOTAL = COST + (COST * TIP_PERCENT) + (COST * TAX_PERCENT)",
        },
    },
    {
        "title": "Functions & Methods",
        "text": "If you are familiar with data types in programming languages, the next thing to cover is actually doing something with data after knowing how it is stored. Functions and methods are the way we do this. For this exercise, assume you're given two variables: NAME and AGE. These variables are to be used in the following code: <code>def greetPerson(name, age):\n    return f\"{name} is {age} years old.\"</code>. See if you can determine what the output of this function will be depending on what the variables are set to.",
        "question": {
            "a": "name = 'John Doe', age = 37",
            "b": "name = 'Jane Doe', age = 35"
        },
        "answer": {
            "a": "John Doe is 37 years old.",
            "b": "Jane Doe is 35 years old."
        }
    },
    {
        "title": "Loops",
        "text": "Loops allow us to repeat code multiple times, just as the name suggests. This is useful for many cases, such as going through a list of items or doing some mathematical operation each time the code block loops. Consider the following code: <code>def add_by_twos():\n    total = 0\n    for i in range(5):\n        total = total + 2\n    return total</code>. Trace through this loop step by step.",
        "question": {
            "a": "What does add_by_twos() return?",
            "b": "If we changed range(5) to range(3), what would the function return?",
            "c": "If we changed 'total + 2' to 'total + 3', what would the original function return?"
        },
        "answer": {
            "a": "10",
            "b": "6",
            "c": "15"
        }
    },
    {
        "title": "Conditionals",
        "text": "Conditionals allow us to check to see if a set of specified conditions are met, much like the name of the topic sounds. Such uses could be to check if a piece of food is cooked thoroughly (checking to see if the internal temperature of the food meets the minimum required temperature to be considered fully cooked) or to decide how to dress for the day (Is it raining? Is the temperature below 70 degrees?). Consider this code: <code>def check_steak(temp):\n    if temp >= 145:\n        return \"Ready to eat\"\n    else:\n        return \"Keep cooking\"</code>",
        "question": {
            "a": "check_steak(150)",
            "b": "check_steak(140)",
            "c": "check_steak(145)"
        },
        "answer": {
            "a": "\"Ready to eat\"",
            "b": "\"Keep cooking\"",
            "c": "\"Ready to eat\""
        }
    },
    {
        "title": "Advanced Conditionals",
        "text": "Building on simple if statements, we can use elif (else if) and else to handle multiple conditions. This allows us to check for multiple different conditions and execute different blocks of code depending on which (none, one, or multiple) sets of conditions are met. One use case for this would be to match a student's grade as a percentile to the corresponding letter grade. Consider this code: <code>def grade_letter(score):\n    if score >= 90:\n        return \"A\"\n    elif score >= 80:\n        return \"B\"\n    elif score >= 70:\n        return \"C\"\n    elif score >= 60:\n        return \"D\"\n    else:\n        return \"F\"</code>",
        "question": {
            "a": "grade_letter(85)",
            "b": "grade_letter(92)",
            "c": "grade_letter(58)",
            "d": "grade_letter(70)"
        },
        "answer": {
            "a": "\"B\"",
            "b": "\"A\"",
            "c": "\"F\"",
            "d": "\"C\""
        }
    },
    {
        "title": "Arrays & Lists",
        "text": "Arrays and lists are collections that allow us to store multiple values in a single variable. We can access individual items in these arrays using their position (index). (Hint: remember that computers typically count from 0 not 1). Arrays are used when organizing and processing groups of related data. Consider this code: <code>def get_student_info(students, grades):\n    first_student = students[0]\n    last_grade = grades[2]\n    total_students = len(students)\n    return f\"{first_student} and there are {total_students} students\"</code>",
        "question": {
            "a": "get_student_info(['Alice', 'Bob', 'Charlie'], [85, 90, 78])",
            "b": "get_student_info(['Emma', 'David'], [92, 88, 95])",
            "c": "What would grades[1] return from the first example?",
            "d": "What would len(['x', 'y', 'z', 'w']) return?"
        },
        "answer": {
            "a": "\"Alice and there are 3 students\"",
            "b": "\"Emma and there are 2 students\"",
            "c": "90",
            "d": "4"
        }
    }
];

const questionDataJava = [
    {
        "title": "Problem Solving & Algorithms",
        "text": "Programming is, at it's core, all about solving problems. Read the following cases and try to determine how you would approach each one. You may want to think in terms of pseudo-code or flow charts.",
        "question": {
            "a": "Given a whole number (an integer), determine the previous and next whole numbers.",
            "b": "Given the width and height of a right triangle, determine the area of the shape. (Area of a right triangle = 0.5 * width * height)",
            "c": "Given the cost of an order, the tip percentage, and the tax percentage, calculate the total amount to be paid.",
        },
        "answer": {
            "a": "Given INTEGER, ADD INTEGER + 1, SUBTRACT INTEGER - 1",
            "b": "Given WIDTH and HEIGHT, MULTIPLY 0.5 * WIDTH * HEIGHT",
            "c": "Given COST and TIP_PERCENT and TAX_PERCENT, ADD COST + (COST * TIP_PERCENT) + (COST * TAX_PERCENT)",
        }
    },
    {
        "title": "Data Types & Variables",
        "text": "While some programming languages vary in which data types they contain and how they are named, most of the concepts are very similar. In Java for example, some of the more basic data types are listed below. See how familiar you are with these and if you can define them.",
        "question": {
            "a": "String",
            "b": "int",
            "c": "double",
            "d": "boolean",
            "e": "null",
        },
        "answer": {
            "a": "String: a sequence of characters (reference type in Java)",
            "b": "Integer: a whole number (primitive type, 32-bit)",
            "c": "Double: a floating-point number with double precision (primitive type, 64-bit)",
            "d": "Boolean: a primitive type that is either true or false",
            "e": "Null: represents the absence of a value for reference types",
        },
    },
    {
        "title": "Moving from Pseudo-code/Flowcharts to Java",
        "text": "If you felt comfortable planning a solution to the previous scenarios using pseudo-code or flowcharts, the next step is to translate those plans into usable code. In this case, we'll ask you to use the Java programming language.",
        "question": {
            "a": "Given an integer num, determine the previous and next integers.",
            "b": "Given the values width and height of a right triangle, calculate the area of the shape. (Area of a right triangle = 0.5 * width * height)",
            "c": "Given the cost of an order, the tip percentage, and the tax percentage, calculate the total amount to be paid.",
        },
        "answer": {
            "a": "int previous = num - 1; int next = num + 1;",
            "b": "double area = 0.5 * width * height;",
            "c": "double total = cost + (cost * tipPercent) + (cost * taxPercent);",
        },
    },
    {
        "title": "Methods",
        "text": "If you are familiar with data types in programming languages, the next thing to cover is actually doing something with data after knowing how it is stored. Methods are the way we do this in Java. For this exercise, assume you're given two variables: name and age. These variables are to be used in the following code: <code>public static String greetPerson(String name, int age) {\n    return name + \" is \" + age + \" years old.\";\n}</code>. See if you can determine what the output of this method will be depending on what the variables are set to.",
        "question": {
            "a": "name = \"John Doe\", age = 37",
            "b": "name = \"Jane Doe\", age = 35"
        },
        "answer": {
            "a": "John Doe is 37 years old.",
            "b": "Jane Doe is 35 years old."
        }
    },
    {
        "title": "Loops",
        "text": "Loops allow us to repeat code multiple times, just as the name suggests. This is useful for many cases, such as going through an array of items or doing some mathematical operation each time the code block loops. Consider the following code: <code>public static int addByTwos() {\n    int total = 0;\n    for (int i = 0; i < 5; i++) {\n        total = total + 2;\n    }\n    return total;\n}</code>. Trace through this loop step by step.",
        "question": {
            "a": "What does addByTwos() return?",
            "b": "If we changed 'i < 5' to 'i < 3', what would the method return?",
            "c": "If we changed 'total + 2' to 'total + 3', what would the original method return?"
        },
        "answer": {
            "a": "10",
            "b": "6",
            "c": "15"
        }
    },
    {
        "title": "Conditionals",
        "text": "Conditionals allow us to check to see if a set of specified conditions are met, much like the name of the topic sounds. Such uses could be to check if a piece of food is cooked thoroughly (checking to see if the internal temperature of the food meets the minimum required temperature to be considered fully cooked) or to decide how to dress for the day (Is it raining? Is the temperature below 70 degrees?). Consider this code: <code>public static String checkSteak(int temp) {\n    if (temp >= 145) {\n        return \"Ready to eat\";\n    } else {\n        return \"Keep cooking\";\n    }\n}</code>",
        "question": {
            "a": "checkSteak(150)",
            "b": "checkSteak(140)",
            "c": "checkSteak(145)"
        },
        "answer": {
            "a": "\"Ready to eat\"",
            "b": "\"Keep cooking\"",
            "c": "\"Ready to eat\""
        }
    },
    {
        "title": "Advanced Conditionals",
        "text": "Building on simple if statements, we can use else if and else to handle multiple conditions. This allows us to check for multiple different conditions and execute different blocks of code depending on which (none, one, or multiple) sets of conditions are met. One use case for this would be to match a student's grade as a percentile to the corresponding letter grade. Consider this code: <code>public static String gradeLetter(int score) {\n    if (score >= 90) {\n        return \"A\";\n    } else if (score >= 80) {\n        return \"B\";\n    } else if (score >= 70) {\n        return \"C\";\n    } else if (score >= 60) {\n        return \"D\";\n    } else {\n        return \"F\";\n    }\n}</code>",
        "question": {
            "a": "gradeLetter(85)",
            "b": "gradeLetter(92)",
            "c": "gradeLetter(58)",
            "d": "gradeLetter(70)"
        },
        "answer": {
            "a": "\"B\"",
            "b": "\"A\"",
            "c": "\"F\"",
            "d": "\"C\""
        }
    },
    {
        "title": "Arrays",
        "text": "Arrays are collections that allow us to store multiple values of the same type in a single variable. We can access individual items in these arrays using their position (index). (Hint: remember that computers typically count from 0 not 1). Arrays are used when organizing and processing groups of related data. Consider this code: <code>public static String getStudentInfo(String[] students, int[] grades) {\n    String firstStudent = students[0];\n    int lastGrade = grades[2];\n    int totalStudents = students.length;\n    return firstStudent + \" and there are \" + totalStudents + \" students\";\n}</code>",
        "question": {
            "a": "getStudentInfo([\"Alice\", \"Bob\", \"Charlie\"], [85, 90, 78])",
            "b": "getStudentInfo([\"Emma\", \"David\"], [92, 88, 95])",
            "c": "What would grades[1] return from the first example?",
            "d": "What would new String[]{\"x\", \"y\", \"z\", \"w\"}.length return?"
        },
        "answer": {
            "a": "\"Alice and there are 3 students\"",
            "b": "\"Emma and there are 2 students\"",
            "c": "90",
            "d": "4"
        }
    }
];

const oopQuestionData = [
    {
        "title": "Encapsulation",
        "text": "Encapsulation is the principle of bundling data and methods that work on that data within a single unit (class) and restricting access to some components. This is achieved through access modifiers and getter/setter methods. Consider this enhanced class: <code>public class BankAccount {\n    private double balance;\n    private String accountNumber;\n    \n    public BankAccount(String accountNumber, double initialBalance) {\n        this.accountNumber = accountNumber;\n        this.balance = initialBalance;\n    }\n    \n    public void deposit(double amount) {\n        if (amount > 0) {\n            balance += amount;\n        }\n    }\n    \n    public boolean withdraw(double amount) {\n        if (amount > 0 && amount <= balance) {\n            balance -= amount;\n            return true;\n        }\n        return false;\n    }\n    \n    public double getBalance() {\n        return balance;\n    }\n}</code>",
        "question": {
            "a": "Why doesn't this class have a setBalance() method?",
            "b": "What happens if you try to deposit a negative amount?",
            "c": "What does the withdraw method return if you try to withdraw more money than the balance?",
            "d": "How does this class demonstrate the principle of encapsulation?"
        },
        "answer": {
            "a": "To prevent unauthorized direct modification of the balance - balance should only change through controlled deposit/withdraw operations",
            "b": "Nothing happens - the deposit method checks if amount > 0 before adding to balance",
            "c": "false (the withdrawal is rejected)",
            "d": "It hides the internal balance field and controls access through specific methods that enforce business rules"
        }
    },
    {
        "title": "Inheritance",
        "text": "Inheritance allows a class to inherit properties and behaviors from another class, promoting code reuse and creating hierarchical relationships. The subclass extends the superclass using the 'extends' keyword. Consider these classes: <code>public class Vehicle {\n    protected String brand;\n    protected int year;\n    \n    public Vehicle(String brand, int year) {\n        this.brand = brand;\n        this.year = year;\n    }\n    \n    public void start() {\n        System.out.println(\"Vehicle starting...\");\n    }\n}\n\npublic class Car extends Vehicle {\n    private int doors;\n    \n    public Car(String brand, int year, int doors) {\n        super(brand, year);\n        this.doors = doors;\n    }\n    \n    @Override\n    public void start() {\n        System.out.println(\"Car engine starting...\");\n    }\n    \n    public void honk() {\n        System.out.println(\"Beep beep!\");\n    }\n}</code>",
        "question": {
            "a": "What does 'super(brand, year)' do in the Car constructor?",
            "b": "If you create: Car myCar = new Car(\"Toyota\", 2020, 4); and call myCar.start(), what will be printed?",
            "c": "Can a Car object access the 'brand' field directly? Why or why not?",
            "d": "What's the difference between the start() method in Vehicle and Car?"
        },
        "answer": {
            "a": "It calls the parent class (Vehicle) constructor to initialize the brand and year fields",
            "b": "\"Car engine starting...\"",
            "c": "Yes, because 'brand' is declared as protected in the Vehicle class, making it accessible to subclasses",
            "d": "Car overrides the start() method to provide its own implementation instead of using the parent's version"
        }
    },
    {
        "title": "Polymorphism",
        "text": "Polymorphism allows objects of different types to be treated as objects of a common base type, with the actual method implementation determined at runtime. This enables flexible and extensible code. Consider this example: <code>public class Animal {\n    public void makeSound() {\n        System.out.println(\"Some generic animal sound\");\n    }\n}\n\npublic class Dog extends Animal {\n    @Override\n    public void makeSound() {\n        System.out.println(\"Woof!\");\n    }\n}\n\npublic class Cat extends Animal {\n    @Override\n    public void makeSound() {\n        System.out.println(\"Meow!\");\n    }\n}\n\n// Usage:\nAnimal[] animals = {new Dog(), new Cat(), new Animal()};\nfor (Animal animal : animals) {\n    animal.makeSound();\n}</code>",
        "question": {
            "a": "What will be printed when the loop executes?",
            "b": "How does Java determine which makeSound() method to call for each animal?",
            "c": "What is this type of polymorphism called?",
            "d": "Could you assign: Animal myPet = new Dog(); ? Why or why not?"
        },
        "answer": {
            "a": "\"Woof!\" then \"Meow!\" then \"Some generic animal sound\"",
            "b": "Through dynamic method dispatch - Java determines the actual object type at runtime and calls the appropriate overridden method",
            "c": "Runtime polymorphism (or method overriding)",
            "d": "Yes, because Dog IS-A Animal (inheritance relationship allows this assignment)"
        }
    },
    {
        "title": "Interfaces",
        "text": "Interfaces define contracts that implementing classes must follow. They contain method signatures that must be implemented by any class that implements the interface. Unlike inheritance, a class can implement multiple interfaces. Consider this example: <code>public interface Drawable {\n    void draw();\n    double getArea();\n}\n\npublic interface Colorable {\n    void setColor(String color);\n    String getColor();\n}\n\npublic class Circle implements Drawable, Colorable {\n    private double radius;\n    private String color;\n    \n    public Circle(double radius) {\n        this.radius = radius;\n        this.color = \"black\";\n    }\n    \n    @Override\n    public void draw() {\n        System.out.println(\"Drawing a circle with radius \" + radius);\n    }\n    \n    @Override\n    public double getArea() {\n        return Math.PI * radius * radius;\n    }\n    \n    @Override\n    public void setColor(String color) {\n        this.color = color;\n    }\n    \n    @Override\n    public String getColor() {\n        return color;\n    }\n}</code>",
        "question": {
            "a": "What must any class that implements Drawable provide?",
            "b": "Why can Circle implement both Drawable and Colorable interfaces?",
            "c": "What would happen if Circle didn't implement the getArea() method?",
            "d": "Can you create: Drawable shape = new Circle(5.0); ?"
        },
        "answer": {
            "a": "Implementations for both draw() and getArea() methods",
            "b": "Java allows multiple interface implementation, unlike single inheritance with classes",
            "c": "Compilation error - Circle must implement all methods from interfaces it implements",
            "d": "Yes, because Circle implements Drawable interface (polymorphic assignment)"
        }
    },
    {
        "title": "Abstract Classes",
        "text": "Abstract classes are classes that cannot be instantiated and may contain both abstract methods (without implementation) and concrete methods (with implementation). They provide a middle ground between interfaces and regular classes. Consider this example: <code>public abstract class Shape {\n    protected String name;\n    \n    public Shape(String name) {\n        this.name = name;\n    }\n    \n    // Abstract method - must be implemented by subclasses\n    public abstract double getArea();\n    \n    // Concrete method - inherited by all subclasses\n    public void printInfo() {\n        System.out.println(\"Shape: \" + name + \", Area: \" + getArea());\n    }\n}\n\npublic class Rectangle extends Shape {\n    private double width, height;\n    \n    public Rectangle(double width, double height) {\n        super(\"Rectangle\");\n        this.width = width;\n        this.height = height;\n    }\n    \n    @Override\n    public double getArea() {\n        return width * height;\n    }\n}</code>",
        "question": {
            "a": "Can you create an object like: Shape s = new Shape(\"test\"); ?",
            "b": "What must the Rectangle class provide since it extends Shape?",
            "c": "Does Rectangle inherit the printInfo() method?",
            "d": "What's the main difference between an abstract class and an interface?"
        },
        "answer": {
            "a": "No, compilation error - cannot instantiate abstract classes",
            "b": "An implementation of the abstract getArea() method",
            "c": "Yes, concrete methods in abstract classes are inherited normally",
            "d": "Abstract classes can have constructors, instance variables, and concrete methods; interfaces (before Java 8) could only have abstract methods"
        }
    },
    {
        "title": "Aggregation",
        "text": "Aggregation represents a 'has-a' relationship where objects are composed of other objects, but the contained objects can exist independently. It's a weaker form of composition. Consider this example: <code>public class Student {\n    private String name;\n    private int id;\n    \n    public Student(String name, int id) {\n        this.name = name;\n        this.id = id;\n    }\n    \n    public String getName() { return name; }\n    public int getId() { return id; }\n}\n\npublic class Course {\n    private String courseName;\n    private List<Student> enrolledStudents;\n    \n    public Course(String courseName) {\n        this.courseName = courseName;\n        this.enrolledStudents = new ArrayList<>();\n    }\n    \n    public void enrollStudent(Student student) {\n        enrolledStudents.add(student);\n    }\n    \n    public void removeStudent(Student student) {\n        enrolledStudents.remove(student);\n    }\n    \n    public int getEnrollmentCount() {\n        return enrolledStudents.size();\n    }\n}</code>",
        "question": {
            "a": "What type of relationship exists between Course and Student?",
            "b": "If a Course object is destroyed, what happens to the Student objects?",
            "c": "Can a Student be enrolled in multiple courses?",
            "d": "What does the enrollStudent() method demonstrate about aggregation?"
        },
        "answer": {
            "a": "Aggregation (has-a relationship) - a Course has Students",
            "b": "Nothing - Student objects continue to exist independently",
            "c": "Yes, the same Student object can be referenced by multiple Course objects",
            "d": "It shows that objects can be added to aggregations dynamically, and they maintain their independent existence"
        }
    },
    {
        "title": "Association",
        "text": "Association represents relationships between classes where objects of one class are connected to objects of another class. Unlike aggregation, association doesn't imply ownership. Consider this example: <code>public class Author {\n    private String name;\n    private List<Book> booksWritten;\n    \n    public Author(String name) {\n        this.name = name;\n        this.booksWritten = new ArrayList<>();\n    }\n    \n    public void addBook(Book book) {\n        booksWritten.add(book);\n        book.setAuthor(this);\n    }\n    \n    public String getName() { return name; }\n}\n\npublic class Book {\n    private String title;\n    private Author author;\n    \n    public Book(String title) {\n        this.title = title;\n    }\n    \n    public void setAuthor(Author author) {\n        this.author = author;\n    }\n    \n    public Author getAuthor() { return author; }\n    public String getTitle() { return title; }\n}\n\n// Usage:\nAuthor author = new Author(\"J.K. Rowling\");\nBook book = new Book(\"Harry Potter\");\nauthor.addBook(book);</code>",
        "question": {
            "a": "What type of association exists between Author and Book?",
            "b": "How many authors can a book have in this design?",
            "c": "What happens when author.addBook(book) is called?",
            "d": "Is this association unidirectional or bidirectional?"
        },
        "answer": {
            "a": "Author knows about Books, and Book knows about its Author (Bidirectional)",
            "b": "One - each Book has a single Author reference",
            "c": "The book is added to the author's list AND the book's author reference is set to this author",
            "d": "Bidirectional - both classes maintain references to each other"
        }
    },
    {
        "title": "Exception Handling",
        "text": "Exception handling allows programs to gracefully handle runtime errors and unexpected situations. Java uses try-catch-finally blocks to handle exceptions, and you can create custom exceptions for specific scenarios. Consider this example: <code>public class BankingService {\n    public static class InsufficientFundsException extends Exception {\n        public InsufficientFundsException(String message) {\n            super(message);\n        }\n    }\n    \n    public void transferMoney(BankAccount from, BankAccount to, double amount) \n            throws InsufficientFundsException {\n        try {\n            if (from.getBalance() < amount) {\n                throw new InsufficientFundsException(\n                    \"Insufficient funds. Available: \" + from.getBalance());\n            }\n            \n            from.withdraw(amount);\n            to.deposit(amount);\n            System.out.println(\"Transfer successful\");\n            \n        } catch (IllegalArgumentException e) {\n            System.err.println(\"Invalid transfer amount: \" + e.getMessage());\n            throw e;\n        } finally {\n            System.out.println(\"Transfer operation completed\");\n        }\n    }\n    \n    public static void main(String[] args) {\n        BankAccount acc1 = new BankAccount(\"123\", 100.0);\n        BankAccount acc2 = new BankAccount(\"456\", 50.0);\n        BankingService service = new BankingService();\n        \n        try {\n            service.transferMoney(acc1, acc2, 150.0);\n        } catch (InsufficientFundsException e) {\n            System.err.println(\"Transfer failed: \" + e.getMessage());\n        }\n    }\n}</code>",
        "question": {
            "a": "What type of exception is InsufficientFundsException and why does the transferMoney method need 'throws' in its signature?",
            "b": "What will be printed when the main method tries to transfer $150 from an account with $100?",
            "c": "When does the finally block execute?",
            "d": "What's the difference between throwing an InsufficientFundsException and an IllegalArgumentException in this code?"
        },
        "answer": {
            "a": "It's a checked exception (extends Exception) - checked exceptions must be declared in method signatures with 'throws' or handled with try-catch",
            "b": "\"Transfer operation completed\" (from finally) then \"Transfer failed: Insufficient funds. Available: 100.0\" (from catch in main)",
            "c": "Always - whether the try block succeeds, an exception is thrown, or an exception is caught",
            "d": "InsufficientFundsException is custom/checked and must be declared; IllegalArgumentException is unchecked (runtime) and doesn't need to be declared"
        }
    },
    {
        "title": "Generics",
        "text": "Generics enable type safety by allowing classes, interfaces, and methods to operate on objects of various types while providing compile-time type checking. They eliminate the need for casting and prevent ClassCastException at runtime. Consider this example: <code>public class DataContainer<T> {\n    private List<T> items;\n    \n    public DataContainer() {\n        this.items = new ArrayList<T>();\n    }\n    \n    public void addItem(T item) {\n        items.add(item);\n    }\n    \n    public T getItem(int index) {\n        if (index >= 0 && index < items.size()) {\n            return items.get(index);\n        }\n        return null;\n    }\n    \n    public <U extends Comparable<U>> U findMax(List<U> list) {\n        if (list.isEmpty()) return null;\n        \n        U max = list.get(0);\n        for (U item : list) {\n            if (item.compareTo(max) > 0) {\n                max = item;\n            }\n        }\n        return max;\n    }\n    \n    public int getSize() {\n        return items.size();\n    }\n}\n\n// Usage:\nDataContainer<String> stringContainer = new DataContainer<>();\nstringContainer.addItem(\"Hello\");\nString result = stringContainer.getItem(0); // No casting needed\n\nDataContainer<Integer> intContainer = new DataContainer<>();\nintContainer.addItem(42);</code>",
        "question": {
            "a": "What does the <T> in the class declaration mean and what advantage does it provide?",
            "b": "Why doesn't stringContainer.getItem(0) require casting to String?",
            "c": "What does <U extends Comparable<U>> mean in the findMax method signature?",
            "d": "What would happen if you tried: stringContainer.addItem(123)?"
        },
        "answer": {
            "a": "T is a type parameter that acts as a placeholder for any type; it provides compile-time type safety and eliminates the need for casting",
            "b": "Because generics preserve type information - the compiler knows stringContainer holds String objects, so getItem(0) returns a String",
            "c": "U is a bounded type parameter that must implement Comparable<U> interface, ensuring objects can be compared with compareTo()",
            "d": "Compilation error - 123 is an Integer, but stringContainer only accepts String objects"
        }
    }
];