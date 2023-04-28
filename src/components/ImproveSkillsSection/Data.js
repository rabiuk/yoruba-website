export const homeObjOne = {
  id: "about",
  lightBg: true,
  lightText: false,
  lightTextDesc: false,
  topLine: "",
  headline: "Improve Your Skills",
  description:
    "Welcome to the Improve Your Skills section, offering a structured curriculum for Yoruba language proficiency and cultural understanding. Explore Yoruba through our progressive lessons and quizzes, designed for all skill levels.",
  buttonLabel: "Next",
  pageLink: "learn",
  imgStart: true,
  img: require("../../images/welcome-hands.png"),
  alt: "",
  dark: false, //is Dark
  primary: true, //if dark then primary
  darkText: true, //dark text?
  className: "about-section",
};

export const homeObjTwo = {
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
  img: require("../../images/notepad-with-pencil.png"),
  alt: "",
  dark: false,
  primary: true,
  darkText: true,
  className: "learn-section",
};

export const homeObjThree = {
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
  img: require("../../images/laptop-displaying-bird.png"),
  alt: "",
  dark: false,
  primary: true,
  darkText: true,
  className: "proverbs-and-wisdom-section",
};
