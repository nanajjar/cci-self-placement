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
            a: "Given a whole number (integer), determine the previous and next number.",
            b: "Given the width and height of a right triangle, determine the area of the shape. (Area of a right triangle = 0.5 * width * height)",
            c: "Given the cost of an order, the tip percentage, and the tax percentage, calculate the total amount to be paid.",
        },
        answer: {
            a: "Given INTEGER, ADD INTEGER +1, ADD INTEGER - 1",
            b: "Given WIDTH and HEIGHT, MULTIPLY 0.5 * WIDTH * HEIGHT",
            c: "Given COST and TIP_PERCENT and TAX_PERCENT, ADD COST + (COST * TIP_PERCENT) + (COST * TAX_PERCENT)",
        }
    },
    {
        title: "Moving from Pseudo-code/Flowcharts to Python",
        text: "If you felt comfortable planning a solution to the previous scenarios using pseudo-code or flowcharts, the next step is to translate those plans into a usable code. In this case, we'll ask you to use the Python programming language (or feel free to use another if you're already familiar with a different programming language).",
        question: {
            a: "Given an integer NUM, determine and the previous and next integers.",
            b: "Given the values (integer) WIDTH and HEIGHT of a right triangle, calculate the area of the shape. (Area of a right triangle = 0.5 * width * height)",
            c: "Given the cost of an order (float), the tip percentage (float), and the tax percentage (float), calculate the total amount to be paid.",
        },
        answer: {
            a: "PREVIOUS = NUM - 1; NEXT = NUM + 1",
            b: "AREA = 0.5 * WIDTH * HEIGHT",
            c: "TOTAL = COST + (COST * TIP_PERCENT / 100) + (COST + TAX_PERCENT / 100)",
        },
    }
];