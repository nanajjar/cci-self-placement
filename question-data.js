const questionDataTemplate = [
    {
        title: "",
        text: "",
        answer: ""
    },
];

const questionData = [
    {
        title: "Problem Solving & Algorithms",
        text: "Programming is, at it's core, all about solving problems. Read the following cases and try to determine how you would approach each one. You may want to think in terms of pseudo-code or flow charts.",
        question: {
            a: "Given a whole number (an integer), determine the previous and next whole numbers.",
            b: "Given the width and height of a right triangle, determine the area of the shape. (Area of a right triangle = 0.5 * width * height)",
            c: "Given the cost of an order, the tip percentage, and the tax percentage, calculate the total amount to be paid.",
        },
        answer: {
            a: "Given INTEGER, ADD INTEGER + 1, SUBTRACT INTEGER - 1",
            b: "Given WIDTH and HEIGHT, MULTIPLY 0.5 * WIDTH * HEIGHT",
            c: "Given COST and TIP_PERCENT and TAX_PERCENT, ADD COST + (COST * TIP_PERCENT) + (COST * TAX_PERCENT)",
        }
    },
    {
        title: "Data Types & Variables",
        text: "While some programming languages vary in which data types they contain and how they are named, most of the concepts are very similar. In Python for example, some of the more basic data types are listed below. See how familiar you are with these and if you can define them.",
        question: {
            a: "str",
            b: "int",
            c: "float",
            d: "bool",
            e: "NoneType",
        },
        answer: {
            a: "String: a sequence of characters",
            b: "Integer: a whole number",
            c: "Floating-point Number: a number that contains a decimal value",
            d: "Boolean: an on/off type of value that is either true or false",
            e: "None Type: represent the absence of a value (often Null in other progamming languages)",
        },
    },
    {
        title: "Moving from Pseudo-code/Flowcharts to Python",
        text: "If you felt comfortable planning a solution to the previous scenarios using pseudo-code or flowcharts, the next step is to translate those plans into a usable code. In this case, we'll ask you to use the Python programming language (or feel free to use another if you're already familiar with a different programming language).",
        question: {
            a: "Given an integer NUM, determine and the previous and next integers.",
            b: "Given the values WIDTH and HEIGHT of a right triangle, calculate the area of the shape. (Area of a right triangle = 0.5 * width * height)",
            c: "Given the cost of an order , the tip percentage , and the tax percentage , calculate the total amount to be paid.",
        },
        answer: {
            a: "PREVIOUS = NUM - 1; NEXT = NUM + 1",
            b: "AREA = 0.5 * WIDTH * HEIGHT",
            c: "TOTAL = COST + (COST * TIP_PERCENT) + (COST + TAX_PERCENT)",
        },
    },
    {
        title: "Functions & Methods",
        text: "If you are familiar with data types in programming languages, the next thing to cover is actually doing something with data after knowing how it is stored. Functions and methods are the way we do this. For this exercise, assume you're given two variables: NAME and AGE. These variables are to be used in the following code: <code>def greetPerson(name, age):\n    return f\"{name} is {age} years old.\"</code>. See if you can determine what the output of this function will be depending on what the variables are set to.",
        question: {
            a: "name = 'John Doe', age = 37",
            b: "name = 'Jane Doe', age = 35"
        },
        answer: {
            a: "John Doe is 37 years old.",
            b: "Jane Doe is 35 years old."
        }
    },
    {
        title: "Loops",
        text: "Loops allow us to repeat code multiple times, just as the name suggests. This is useful for many cases, such as going through a list of items or doing some mathematical operation each time the code block loops. Consider the following code: <code>def add_by_twos():\n    total = 0\n    for i in range(5):\n        total = total + 2\n    return total</code>. Trace through this loop step by step.",
        question: {
            a: "What does add_by_twos() return?",
            b: "If we changed range(5) to range(3), what would the function return?",
            c: "If we changed 'total + 2' to 'total + 3', what would the original function return?"
        },
        answer: {
            a: "10",
            b: "6",
            c: "15"
        }
    },
    {

    }
];