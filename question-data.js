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
            a: "Given INTEGER, ADD INTEGER +1, ADD INTEGER -1",
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
    }
];