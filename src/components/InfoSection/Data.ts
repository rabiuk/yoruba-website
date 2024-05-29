import { StaticImageData } from "next/image";
import YorubaCultureCelebrationPNG from "../../components/svg/YorubaCultureCelebration.png";
import YorubaFlashCardPNG from "../../components/svg/YorubaFlashCard.png";
import YorubaManTeachingKidsSVG from "../../components/svg/YorubaManTeachingKids.png";

interface InfoSectionData {
  id: string;
  lightBg: boolean;
  lightText: boolean;
  lightTextDesc: boolean;
  topLine: string;
  headline: string;
  description: string;
  buttonLabel: string;
  pageLink: string;
  isSVG: boolean;
  imgStart: boolean;
  imgSrc: StaticImageData | null;
  alt: string;
  width: number | null;
  height: number | null;
  dark: boolean;
  primary: boolean;
  darkText: boolean;
  className: string;
}

export const homeObjOne: InfoSectionData = {
  id: "about",
  lightBg: true,
  lightText: false,
  lightTextDesc: false,
  topLine: "About Yoruba",
  headline: "Discover the Richness of Yoruba ",
  description:
    "Yoruba culture is a vibrant mix of traditions, art, music, food, and religion. These pillars of the Yoruba community are deeply rooted in history, passed down through many generations. Our aim is to showcase these elements and share their stories with the world.",
  buttonLabel: "More",
  pageLink: "/about",
  isSVG: false,
  imgStart: false,
  imgSrc: YorubaCultureCelebrationPNG,
  alt: "Yoruba culture celebration",
  width: 555,
  height: 555,
  dark: false,
  primary: true,
  darkText: true,
  className: "about-section",
};

export const homeObjTwo: InfoSectionData = {
  id: "learn",
  lightBg: true,
  lightText: false,
  lightTextDesc: false,
  topLine: "Test and Improve",
  headline: "Unlock Your Language Potential",
  description:
    "Dive into the definitive platform for honing your Yoruba language skills. Our interactive quizzes and lessons cater to all abilities, testing your grammar, vocabulary, and pronunciation.Embark on this vibrant linguistic journey to enhance your Yoruba fluency and embrace its rich culture.",
  buttonLabel: "Lets Go",
  pageLink: "/learn",
  isSVG: true,
  imgStart: true,
  imgSrc: null,
  alt: "Yoruba flashcard",
  width: null,
  height: null,
  dark: true,
  primary: true,
  darkText: true,
  className: "learn-section",
};

export const homeObjThree: InfoSectionData = {
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
  imgStart: false,
  imgSrc: YorubaManTeachingKidsSVG,
  alt: "Yoruba elder teaching kids",
  width: 555,
  height: 555,
  dark: false,
  primary: true,
  darkText: true,
  className: "proverbs-and-wisdom-section",
};
