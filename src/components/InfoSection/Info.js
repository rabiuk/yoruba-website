"use client";
import Image from "next/legacy/image";
import { Balancer } from "react-wrap-balancer";
import Button from "@/components/ui/Button";
import React from "react";

const InfoSection = ({
  lightBg,
  id,
  imgStart,
  topLine,
  lightText,
  headline,
  darkText,
  description,
  buttonLabel,
  pageLink,
  isSVG,
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
      } py-60`}
      id={id}
    >
      <div
        className={`container mx-auto flex w-full max-w-screen-lg flex-col px-0 lg:w-fit lg:flex-row 2xl:max-w-screen-xl ${
          imgStart ? "flex-row-reverse" : "flex-row"
        } items-center gap-10`}
      >
        <div className="text-content w-full">
          <div className="text-wrap flex w-full flex-col items-center lg:items-start">
            <p className="top-line text-center text-sm font-bold uppercase tracking-widest text-primary-500 lg:text-left">
              {topLine}
            </p>

            <Balancer>
              <h1
                className={`heading ${
                  lightText ? "text-zinc-700" : "text-zinc-700"
                } mt-2 text-center text-3xl font-bold uppercase sm:text-3xl lg:text-left`}
              >
                {headline}
              </h1>
            </Balancer>
            <Balancer>
              <p className="description mt-4 text-center text-sm text-zinc-700 sm:text-base lg:text-left">
                {description.split("\n").map((text, i) => (
                  <React.Fragment key={`${text}-${i}`}>
                    {text}
                    <br />
                  </React.Fragment>
                ))}
              </p>
            </Balancer>

            <div className="button-wrap mb-8 mt-6 lg:mb-0">
              <Button href={pageLink} isLink>
                {buttonLabel}
              </Button>
            </div>
          </div>
        </div>

        <div className="image-content flex justify-center">
          {isSVG ? (
            imgSrc
          ) : (
            <div
              className={`image-wrap ${className} relative h-72 w-72 overflow-hidden rounded-3xl shadow-lg sm:h-80 sm:w-80 2xl:h-96 2xl:w-96`}
            >
              <Image
                src={imgSrc}
                alt={alt}
                width={width}
                height={height}
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
