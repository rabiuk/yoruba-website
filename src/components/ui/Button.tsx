"use client";
import Link from "next/link";
import { Link as LinkScroll } from "react-scroll";
import Spinner from "@/components/ui/Spinner";

interface ButtonProps {
  isLink?: boolean;
  isScroll?: boolean;
  isTransparent?: boolean;
  href?: string;
  to?: string;
  className?: string;
  isLoading?: boolean;
  onClick?: () => void;
  children: React.ReactNode;
}

const BUTTON_CLASSES = {
  regular:
    "bg-primary-500 text-white hover:bg-primary-600 px-8 py-2 w-fit h-auto flex justify-center items-center rounded-md shadow-lg whitespace-nowrap cursor-pointer ease-in-out duration-300",
  transparent:
    "button__transparent border px-8 py-3 hover:border-primary-500 hover:text-primary-500 cursor-pointer ease-in-out duration-300",
};

const Button: React.FC<ButtonProps> = ({
  isLink = false,
  isScroll = false,
  isTransparent = false,
  href,
  to,
  className,
  isLoading = false,
  onClick,
  children,
}) => {
  const buttonClassName = className
    ? className
    : isTransparent
    ? BUTTON_CLASSES.transparent
    : BUTTON_CLASSES.regular;

  if (isLink) {
    return (
      <Link href={href || "#"} className={`button__link ${buttonClassName}`}>
        {children}
      </Link>
    );
  }

  if (isScroll) {
    return (
      <LinkScroll
        to={to || ""}
        smooth={true}
        duration={300}
        spy={true}
        offset={0}
        className={`button__scroll ${buttonClassName}`}
      >
        {children}
      </LinkScroll>
    );
  }

  return (
    <button className={`button ${buttonClassName}`} onClick={onClick}>
      {isLoading ? (
        <>
          <Spinner /> {children}
        </>
      ) : (
        children
      )}
    </button>
  );
};

export default Button;
