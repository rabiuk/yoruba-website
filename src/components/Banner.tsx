import { FC } from "react";
import Button from "@/components/ui/Button";


const Banner:FC = () => {
  return (
    <div className="banner__container -mt-40 mb-20 flex h-[400px] w-full flex-col items-center justify-center px-4 text-zinc-700">
      <h1 className="mb-4 text-center text-3xl font-bold">
        Embrace Yoruba Today
      </h1>
      <p className="mb-4 text-center text-base">
        Join our community. Experience the language and culture. Become part of
        the Yoruba story.
      </p>
      <Button href="/log-in" isLink={true}>
        Start Now
      </Button>
    </div>
  );
};

export default Banner;
