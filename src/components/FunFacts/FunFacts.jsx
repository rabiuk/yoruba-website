"use client";
// FunFacts.jsx

import { MapOfAfricaSVG } from "../svg";
import { ToneSVG } from "../svg";
import { TwinSVG } from "../svg";

const facts = [
  {
    SVG: MapOfAfricaSVG,
    title: "Origins",
    description:
      "The Yoruba people reside mainly in southwest Nigeria, Benin, and Togo, making them one of Africa's largest ethnic groups with 20-40 million people.",
  },
  {
    SVG: ToneSVG,
    title: "Tonal language",
    description:
      "Yoruba is a tonal language with three basic tones (high, mid, and low), where the meaning of a word can change depending on tone.",
  },
  {
    SVG: TwinSVG,
    title: "Twins",
    description:
      "Yoruba has one of the highest twin birth rates in the world, with some studies showing 45-50 per 1,000 live births, compared to the global average of 12-16.",
  },
];

export default function FunFacts() {
  return (
    <div
      id="fun-facts"
      className="funfacts__container bg-beige flex h-[1300px] flex-col justify-center  sm:h-[1300px] md:h-[1100px]"
    >
      <h1 className="funfacts__h1 mx-auto mb-16 text-3xl font-bold uppercase text-primary-500">
        Fun Facts
      </h1>

      <div className="funfacts__wrapper mx-auto flex w-full max-w-[900px] flex-col items-center justify-between gap-4 text-zinc-700 md:flex-row lg:max-w-[900px] ">
        {facts.map(({ SVG: FactSVG, title, description }, index) => (
          <div
            key={index}
            className="funfacts__card flex h-[340px] w-[270px] cursor-pointer flex-col items-center rounded-xl bg-white p-6 shadow-md transition duration-200 ease-in-out md:hover:scale-110 lg:h-[360px] lg:w-[270px] "
          >
            <div className="funfacts__svg-icon mb-4 w-[100px] sm:h-[100px] lg:h-[130px] lg:w-[130px]">
              <FactSVG />
            </div>
            <h2 className="funfacts__h2 mb-2 text-lg font-bold lg:mb-4">
              {title}
            </h2>
            <p className="funfacts__p text-center text-sm">{description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
