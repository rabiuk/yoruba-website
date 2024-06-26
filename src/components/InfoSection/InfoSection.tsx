// src/components/InfoSection/Info.tsx
"use client";
import Image, { StaticImageData } from "next/legacy/image";
import Button from "@/components/ui/Button";
import React from "react";

interface InfoSectionProps {
  lightBg: boolean;
  id: string;
  imgStart: boolean;
  topLine: string;
  lightText: boolean;
  darkText: boolean;
  headline: string;
  description: string;
  buttonLabel: string;
  pageLink: string;
  imgSrc: StaticImageData | null;
  alt: string;
  width: number | null;
  height: number | null;
  className: string;
}

const InfoSection: React.FC<InfoSectionProps> = ({
  lightBg,
  id,
  imgStart,
  topLine,
  lightText,
  darkText,
  headline,
  description,
  buttonLabel,
  pageLink,
  imgSrc,
  alt,
  width,
  height,
  className,
}) => {
  return (
    <div
      className={`section bg-${
        lightBg ? "bg-background-500" : "bg-background-500"
      } py-40`}
      id={id}
    >
      <div
        className={`container mx-auto flex w-full max-w-screen-lg flex-col justify-between px-0 lg:w-full lg:flex-row 2xl:max-w-screen-xl ${
          imgStart ? "flex-row-reverse" : "flex-row"
        } items-center gap-10`}
      >
        <div className="text-content w-full max-w-[60%]">
          <div className="text-wrap flex w-full flex-col items-center lg:items-start">
            <p className="top-line text-center text-sm font-bold uppercase tracking-widest text-primary-500 lg:text-left">
              {topLine}
            </p>
            <h1
              className={`heading ${
                lightText ? "text-zinc-700" : "text-zinc-700"
              } mt-2 w-[90vw] text-center text-3xl font-bold uppercase leading-tight -tracking-wider sm:text-3xl lg:w-auto lg:text-left`}
            >
              {headline}
            </h1>
            <p className="description mt-4 w-[90vw] text-center text-sm leading-normal text-zinc-700 sm:text-base lg:w-auto lg:text-left">
              {description.split("\n").map((text, i) => (
                <React.Fragment key={`${text}-${i}`}>
                  {text}
                  <br />
                </React.Fragment>
              ))}
            </p>
            <div className="button-wrap mb-8 mt-6 lg:mb-0">
              <Button href={pageLink} isLink>
                {buttonLabel}
              </Button>
            </div>
          </div>
        </div>
        <div className="image-content flex justify-center">
          {imgSrc && (
            <div
              className={`image-wrap ${className} relative h-72 w-72 overflow-hidden rounded-3xl shadow-lg sm:h-80 sm:w-80 2xl:h-96 2xl:w-96`}
            >
              <Image
                src={imgSrc}
                alt={alt}
                width={width!}
                height={height!}
                className="image absolute inset-0 h-full w-full rounded-3xl bg-gray-200 object-cover"
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default InfoSection;
