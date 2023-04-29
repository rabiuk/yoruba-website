import { ReactComponent as WelcomeElder } from "../../images/welcome-hands.svg";
import { ReactComponent as Notepad } from "../../images/notepad-with-pencil.svg";
import { ReactComponent as Laptop } from "../../images/laptop-displaying-bird.svg";

export const homeObjOne = {
  id: "curriculum",
  lightBg: true,
  lightText: false,
  lightTextDesc: false,
  topLine: "CURRICULUM",
  headline: "Follow Our Structured Lesson Plan",
  description:
    "Take advantage of our comprehensive and structured lesson plan that covers everything from basic Yoruba vocabulary to advanced grammar concepts.",
  buttonLabel: "View Curriculum",
  pageLink: "#",
  imgStart: false,
  img: <Notepad />,
  alt: "",
  dark: false,
  primary: true,
  darkText: true,
  className: "curriculum-section",
};

export const homeObjTwo = {
  id: "interactive-quizes",
  lightBg: true,
  lightText: false,
  lightTextDesc: false,
  topLine: "Test Your Knowledge After Each Lesson",
  headline: "INTERACTIVE QUIZZES",
  description:
    "After completing each lesson, challenge your newly acquired Yoruba language skills with our interactive quizzes. These quizzes are tailored to assess your comprehension, vocabulary, and grammar skills based on the content of the corresponding lesson, providing instant feedback and enabling you to pinpoint areas for improvement.",
  buttonLabel: "Start",
  pageLink: "/improve-skills/learn-the-yoruba-alphabet",
  imgStart: true,
  img: <Laptop />,
  alt: "",
  dark: false,
  primary: true,
  darkText: true,
  className: "proverbs-and-wisdom-section",
};
