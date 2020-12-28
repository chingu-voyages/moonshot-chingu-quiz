import type { ChinguQuiz } from "~/models";

export const dummyData: ChinguQuiz.Quiz[] = [
  {
    id: 1200,
    subject: ["programming"],
    description: "A quiz covering general JavaScript knowledge.",
    tags: ["javascript"],
    title: "First Quiz",
    questions: [
      {
        prompt:
          "Which term in JavaScript can be used to describe a declared variable that has not yet been given a value?",
        answers: [
          {
            prompt: "null",
            id: "1",
          },
          {
            prompt: "undefined",
            id: "2",
          },
          {
            prompt: "typeError",
            id: "3",
          },
          {
            prompt: "NaN",
            id: "4",
          },
        ],
      },
      {
        prompt:
          "Which of the following snippets does not result in a return value of 8?",
        answers: [
          {
            prompt: "8**1",
            id: "11",
          },
          {
            prompt: "Math.pow(16, .75)",
            id: "22",
          },
          {
            prompt: "2 * 2 * 'two'",
            id: "33",
          },
          {
            prompt: "2**+'3'",
            id: "44",
          },
        ],
      },
      {
        prompt:
          "Which of the following is true about typeof operator in JavaScript?",
        answers: [
          {
            prompt:
              "The typeof is a unary operator that is placed before its single operand, which can be of any type.",
            id: "111",
          },
          {
            prompt:
              "Its value is a string indicating the data type of the operand.",
            id: "222",
          },
          {
            prompt: "Both of the above.",
            id: "333",
          },
          {
            prompt: "None of the above.",
            id: "444",
          },
        ],
      },
      {
        prompt:
          "Which built-in method reverses the order of the elements of an array?",
        answers: [
          {
            prompt: "changeOrder(order)",
            id: "sdasd",
          },
          {
            prompt: "reverse()",
            id: "trfagasgue",
          },
          {
            prompt: "sort(order)",
            id: "fagasgalse",
          },
          {
            prompt: "none of the above",
            id: "faasxaslse",
          },
        ],
      },
      {
        prompt:
          "Which of the following functions of String object returns a number indicating the Unicode value of the character at the given index?",
        answers: [
          {
            prompt: "charAt()",
            id: "fafaslse",
          },
          {
            prompt: "charCodeAt()",
            id: "tfaxsdwarue",
          },
          {
            prompt: "concat()",
            id: "faarwqraclse",
          },
          {
            prompt: "indexOf()",
            id: "falgasyse",
          },
        ],
      },
      {
        prompt:
          "Which of the following functions of String object returns the index within the calling String object of the last occurrence of the specified value?",
        answers: [
          {
            prompt: "search()",
            id: "adsdqwdsfalse",
          },
          {
            prompt: "lastIndexOf()",
            id: "trugsyfwe",
          },
          {
            prompt: "substr()",
            id: "falydxcacsse",
          },
          {
            prompt: "indexOf()",
            id: "falsayxawde",
          },
        ],
      },
    ],
  },
  {
    id: 1201,
    subject: ["programming"],
    description: "Check your knowledge of the basics in React.",
    tags: ["react"],
    title: "React basics",
  },
  {
    id: 1202,
    subject: ["programming"],
    description: "Using CSS in a React environment.",
    tags: ["react", "css"],
    title: "CSS in React",
  },
  {
    id: 1203,
    subject: ["programming"],
    description: "Some knowledge checks on vanilla CSS basics.",
    tags: ["css"],
    title: "CSS basics",
  },
  {
    id: 1204,
    subject: ["programming"],
    description: "Work on your markup skills.",
    tags: ["html"],
    title: "HTML element basics",
  },
  {
    id: 1205,
    subject: ["programming"],
    description:
      "How much do you know about all the different HTMl attributes?",
    tags: ["html"],
    title: "HTMl attributes",
  },
  {
    id: 1206,
    subject: ["programming"],
    description: "In depth look at event listeners.",
    tags: ["javascript"],
    title: "JavaScript event listeners",
  },
  {
    id: 1207,
    subject: ["programming"],
    description:
      "A quiz looking at the internals of JavaSctipt's Intersection Observer",
    tags: ["javascript"],
    title: "Intersection Observer",
  },
  {
    id: 1208,
    subject: ["programming"],
    description: "Review your knowledge on CSS specificity cases.",
    tags: ["css"],
    title: "Specificity",
  },
  {
    id: 1209,
    subject: ["programming"],
    description: "Using CSS in conjunction with HTML.",
    tags: ["css", "html"],
    title: "HTML elements with CSS",
  },
  {
    id: 1210,
    subject: ["programming"],
    description: "Using plain JavaScript inside of React.",
    tags: ["javascript", "react"],
    title: "JavaScript in React",
  },
  {
    id: 1211,
    subject: ["ux"],
    description: "How to use buttons properly in UX.",
    tags: ["buttons"],
    title: "Buttons in UX",
  },
  {
    id: 1212,
    subject: ["ux"],
    description: "How color can impact your UX.",
    tags: ["color"],
    title: "Colors in UX",
  },
  {
    id: 1213,
    subject: ["interview"],
    description: "Best practices in a team based workflow.",
    tags: ["workflow"],
    title: "Workflow in the workplace",
  },
  {
    id: 1214,
    subject: ["interview"],
    description: "Best practices in a team based environment.",
    tags: ["team dynamics"],
    title: "Team Dynamics example",
  },
];

export default dummyData;
