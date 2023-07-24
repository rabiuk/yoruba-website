"use client";
import PropTypes from "prop-types";
import Link from "next/link";
import { Link as LinkScroll } from "react-scroll";
import Spinner from "@/components/ui/Spinner";

const BUTTON_CLASSES = {
  regular:
    "bg-primary-500 text-white hover:bg-primary-600 px-8 py-2 w-fit h-auto flex justify-center items-center rounded-md shadow-lg whitespace-nowrap cursor-pointer ease-in-out duration-300",
  transparent:
    "button__transparent border px-8 py-3 hover:border-primary-500 hover:text-primary-500 cursor-pointer ease-in-out duration-300",
};

const Button = ({
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
      <Link href={href} className={`button__link ${buttonClassName}`}>
        {children}
      </Link>
    );
  }

  if (isScroll) {
    return (
      <LinkScroll
        to={to}
        smooth={true}
        duration={300}
        spy={true}
        exact="true"
        offset={0}
        className={`button__scroll ${buttonClassName}`}
      >
        {children}
      </LinkScroll>
    );
  }
  return (
    <button
      className={`button ${buttonClassName}`}
      onClick={onClick} // attach onClick handler
    >
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
Button.propTypes = {
  isLink: PropTypes.bool,
  isScroll: PropTypes.bool,
  isTransparent: PropTypes.bool,
  href: PropTypes.string,
  to: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
  isLoading: PropTypes.bool,
  onClick: PropTypes.func,
};

export default Button;
