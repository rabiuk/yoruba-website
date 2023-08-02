import { useState } from "react";
import Button from "../ui/Button";
import { homeObjOne, homeObjTwo } from "./Data";
import dynamic from "next/dynamic";
import Books from "@/components/svg/bookstack.png";

const Modal = dynamic(() => import("@/components/Modal"), { ssr: false });

const CurriculumContent = () => (
  <ul className="text-zinc-700">
    {[
      "The Yoruba Alphabet",
      "Numbers & Counting",
      "Basic Phrases I (Verbs)",
      "Basic Phrases II (Nouns)",
      "Advanced Phrases I",
      "Sentences",
    ].map((item, index) => (
      <li key={index}>
        <p className="pb-1 text-center text-base font-normal leading-normal">
          {item}
        </p>
      </li>
    ))}
  </ul>
);

const ImproveSkillsSection = (props) => {
  const {
    id,
    imgStart,
    topLine,
    lightText,
    headline,
    darkText,
    description,
    buttonLabel,
    pageLink,
    img,
    alt,
    dark,
    dark2,
    className,
  } = props;
  const [showModal, setShowModal] = useState(false);
  const openModal = () => setShowModal((prev) => !prev);

  const buttonHref = id === "master-skills" ? undefined : pageLink;

  return (
    <div
      id={id}
      className="z-0 mx-auto flex h-[860px] w-full max-w-screen-lg justify-center"
    >
      <div className="flex w-full flex-row-reverse items-center justify-center">
        <div className="text-field flex flex-col justify-center">
          <div className="max-w-md">
            <p className="topline mb-4 whitespace-nowrap text-sm font-semibold uppercase tracking-widest text-orange-500">
              {topLine}
            </p>
            <h1 className="heading mb-6 text-3xl font-semibold uppercase leading-tight -tracking-wider text-zinc-700">
              {headline}
            </h1>
            <p className="description mb-8 max-w-md text-base leading-normal text-zinc-700">
              {description}
            </p>
          </div>
          <div className="flex justify-start">
            {id === "master-skills" ? (
              <Button onClick={openModal}>{buttonLabel}</Button>
            ) : (
              <Button isLink={true} href={buttonHref}>
                {buttonLabel}
              </Button>
            )}
          </div>
        </div>
        <div className={`${className} img-field flex w-1/4 justify-center`}>
          {img}
        </div>
      </div>
      {id === "master-skills" && (
        <Modal
          showModal={showModal}
          setShowModal={setShowModal}
          imgSrc={Books}
          alt={"books"}
          width={300}
          height={300}
        >
          <h1 className="pb-2 text-2xl font-medium text-zinc-700">Modules</h1>
          <CurriculumContent />
        </Modal>
      )}
    </div>
  );
};

const ImproveSkillsWelcome = () => (
  <div className="flex flex-col items-center justify-center px-6 text-white">
    <ImproveSkillsSection {...homeObjOne} />
    <ImproveSkillsSection {...homeObjTwo} />
  </div>
);

export default ImproveSkillsWelcome;
