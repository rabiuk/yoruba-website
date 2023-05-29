import YorubaCultureCelebrationPNG from "@/components/svg/YorubaCultureCelebration.png";
import YorubaFlashCard from "@/components/svg/YorubaFlashCard.png";
import YorubaManTeachingKidsSVG from "@/components/svg/YorubaManTeachingKids.png";
import YorubaFlashCardSVG from "@/components/svg/YorubaFlashCardSVG.svg";

export const homeObjOne = {
  id: "about",
  lightBg: true,
  lightText: false,
  lightTextDesc: false,
  topLine: "About Yoruba",
  headline: "Discover the Richness of the Yoruba Culture",
  description:
    "Yoruba culture is a vibrant mix of traditions, art, music, food, and religion. These pillars of the Yoruba community are deeply rooted in history, passed down through many generations. \n Our aim is to showcase these elements and share their stories with the world.",
  buttonLabel: "More about yoruba",
  pageLink: "/about",
  isSVG: false,
  imgStart: false,
  imgSrc: YorubaCultureCelebrationPNG,
  alt: "Yoruba culture celebration",
  width: 555,
  height: 555,
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
    "Dive into the definitive platform for honing your Yoruba language skills. Our interactive quizzes and lessons cater to all abilities, testing your grammar, vocabulary, and pronunciation. \n Embark on this vibrant linguistic journey to enhance your Yoruba fluency and embrace its rich culture.",
  buttonLabel: "Lets Go",
  pageLink: "/learn",
  isSVG: true,
  imgStart: true,
  imgSrc: <YorubaFlashCardSVG />,
  alt: "Yoruba flashcard",
  width: null,
  height: null,
  dark: true,
  primary: true,
  darkText: true,
  className: "learn-section",
};

export const homeObjThree = {
  id: "proverbs-and-wisdom",
  lightBg: true,
  lightText: false,
  lightTextDesc: false,
  topLine: "Proverbs & Wisdom",
  headline: "Explore Cultural Insights",
  description:
    "Immerse yourself in the captivating realm of Yoruba proverbs, a tradition cherished by the Yoruba people for their significant cultural value. These insightful sayings embody the culture's values and wisdom, serving as a fascinating resource that strengthens your connection with the Yoruba language and heritage.",
  buttonLabel: "Dive Deeper",
  pageLink: "/proverbs-and-wisdom",
  isSVG: false,
  imgSrc: YorubaManTeachingKidsSVG,
  alt: "Yoruba elder teaching kids",
  width: 555,
  height: 555,
  dark: false,
  primary: true,
  darkText: true,
  className: "proverbs-and-wisdom-section",
};
