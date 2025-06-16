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