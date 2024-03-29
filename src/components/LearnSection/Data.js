import NotepadWithPencilSVG from "@/components/svg/NotepadWithPencilSVG.svg";
import LaptopDisplayingBirdSVG from "@/components/svg/LaptopDisplayingBirdSVG.svg";

export const homeObjOne = {
  id: "master-skills",
  lightBg: true,
  lightText: false,
  lightTextDesc: false,
  topLine: "MASTER YOUR SKILLS",
  headline: "Explore Our Comprehensive Modules",
  description:
    "Take advantage of our comprehensive and structured lesson plan that covers everything from basic Yoruba vocabulary to advanced grammar concepts.",
  buttonLabel: null,
  pageLink: "#",
  imgStart: false,
  img: <NotepadWithPencilSVG style={{ fontSize: 300 }} />,
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
    "After completing each lesson, challenge your newly acquired Yoruba language skills with our interactive quizzes. These quizzes are tailored to assess your comprehension, vocabulary, and grammar skills based on the content of the corresponding lesson.",
  buttonLabel: "Start Learning",
  pageLink: "learn/lessons/yoruba-alphabet/learn",
  imgStart: true,
  img: <LaptopDisplayingBirdSVG style={{ fontSize: 600 }} />,
  alt: "",
  dark: false,
  primary: true,
  darkText: true,
  className: "proverbs-and-wisdom-section",
};
