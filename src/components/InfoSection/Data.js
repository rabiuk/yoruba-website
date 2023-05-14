import YorubaCultureCelebrationSVG from "../../components/svg/YorubaCultureCelebrationSVG.svg";
import YorubaFlashCardSVG from "../../components/svg/YorubaFlashCardSVG.svg";
import YorubaManTeachingKidsSVG from "../../components/svg/YorubaManTeachingKidsSVG.svg";

export const homeObjOne = {
  id: "about",
  lightBg: true,
  lightText: false,
  lightTextDesc: false,
  topLine: "About Yoruba",
  headline: "Discover the Richness of the Yoruba Culture",
  description:
    "Yoruba culture is known for its deep roots in traditions, art, music, food, and religion, which have been passed down through generations. Our aim is to showcase these elements and share their stories with the world. We offer a range of resources, from language learning tools to cultural insights, to help you immerse yourself in the world of Yoruba and appreciate its uniqueness.",
  buttonLabel: "More About Yoruba",
  pageLink: "/about",
  imgStart: false,
  imgSrc: <YorubaCultureCelebrationSVG style={{ fontSize: 600 }} />,
  alt: "Yoruba culture celebration",
  // width: 555,
  // height: 100,
  dark: false, //is Dark
  primary: true, //if dark then primary
  darkText: true, //dark text?
  className: "about-section",
};

export const homeObjTwo = {
  id: "learn",
  lightBg: true,
  lightText: false,
  lightTextDesc: false,
  topLine: "Test and Improve Your Yoruba Skills",
  headline: "Unlock Your Language Potential",
  description:
    "Discover the ultimate destination for evaluating and improving your Yoruba language skills. Featuring interactive quizzes and lessons for all skill levels, you'll challenge your grammar, vocabulary, and pronunciation. Embark on this engaging learning experience to boost your Yoruba proficiency and connect with the language's vibrant culture.",
  buttonLabel: "Lets Go",
  pageLink: "/learn",
  imgStart: true,
  imgSrc: <YorubaFlashCardSVG style={{ fontSize: 600 }} />,
  alt: "Yoruba flashcard",
  // width: 555,
  // height: 100,
  dark: true,
  primary: true,
  darkText: true,
  className: "learn-section",
};

export const homeObjThree = {
  id: "proverbs-and-wisdom",
  lightBg: false,
  lightText: true,
  lightTextDesc: true,
  topLine: "Proverbs & Wisdom",
  headline: "Explore Cultural Insights",
  description:
    "Immerse yourself in the captivating realm of Yoruba proverbs, a tradition cherished by the Yoruba people for their significant cultural value. These insightful sayings embody the culture's values and wisdom, serving as a fascinating resource that strengthens your connection with the Yoruba language and heritage.",
  buttonLabel: "Dive Deeper",
  pageLink: "/proverbs-and-wisdom",
  imgSrc: <YorubaManTeachingKidsSVG style={{ fontSize: 600 }} />,
  alt: "Yoruba elder teaching kids",
  // width: 555,
  // height: 100,
  dark: true,
  primary: true,
  darkText: false,
  className: "proverbs-and-wisdom-section",
};
