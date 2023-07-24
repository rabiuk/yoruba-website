"use client";
import { animateScroll as scroll } from "react-scroll";
import { FaFacebook, FaLinkedin, FaInstagram } from "react-icons/fa";
import Link from "next/link";

import { usePathname } from "next/navigation";

const Footer = () => {
  const currentPage = usePathname();
  const scrollToTop = () => {
    scroll.scrollToTop();
  };
  if (currentPage === "/auth/signin" || currentPage === "/log-in") {
    return null;
  }
  return (
    <footer className="footer__container w-full bg-tertiary-500 text-white">
      <div className="footer__wrap mx-auto flex max-w-[1100px] flex-col items-center justify-center px-6 py-12">
        <div className="footer__links-container flex w-full justify-center pt-8 md:pt-0">
          <div className="footer__links-wrapper flex h-fit flex-col md:flex-row">
            <div className="footer__link-items mx-6 flex w-[160px] flex-col items-start text-left text-sm text-white sm:m-4">
              <h1 className="footer__link-title mb-4 font-bold">About Us</h1>
              <Link
                href="#"
                className="footer__link mb-2 cursor-pointer duration-300 ease-in-out hover:text-primary-500"
              >
                Contact Information
              </Link>
              <Link
                href="#"
                className="footer__link mb-2 cursor-pointer duration-300 ease-in-out hover:text-primary-500"
              >
                Social Media Links
              </Link>
              <Link
                href="#"
                className="footer__link mb-2 cursor-pointer duration-300 ease-in-out hover:text-primary-500"
              >
                Privacy Policy
              </Link>
              <Link
                href="#"
                className="footer__link mb-2 cursor-pointer duration-300 ease-in-out hover:text-primary-500"
              >
                Terms and Conditions
              </Link>
            </div>

            <div className="footer__link-items mx-6 flex w-[160px] flex-col items-start text-left text-sm text-white sm:m-4">
              <h1 className="footer__link-title mb-4 font-bold">Feedback</h1>
              <Link
                href="#"
                className="footer__link mb-2 cursor-pointer duration-300 ease-in-out hover:text-primary-500"
              >
                Send Feedback
              </Link>
              <Link
                href="#"
                className="footer__link mb-2 cursor-pointer duration-300 ease-in-out hover:text-primary-500"
              >
                Social Media Links
              </Link>
              <Link
                href="#"
                className="footer__link mb-2 cursor-pointer duration-300 ease-in-out hover:text-primary-500"
              >
                Privacy Policy
              </Link>
              <Link
                href="#"
                className="footer__link mb-2 cursor-pointer duration-300 ease-in-out hover:text-primary-500"
              >
                Terms and Conditions
              </Link>
            </div>
          </div>

          <div className="footer__links-wrapper flex flex-col md:flex-row">
            <div className="footer__link-items mx-6 flex w-[160px] flex-col items-start text-left text-sm text-white sm:m-4">
              <h1 className="footer__link-title mb-4 font-bold">Resourses</h1>
              <Link
                href="#"
                className="footer__link mb-2 cursor-pointer duration-300 ease-in-out hover:text-primary-500"
              >
                Yoruba Dictionary
              </Link>
              <Link
                href="#"
                className="footer__link mb-2 cursor-pointer duration-300 ease-in-out hover:text-primary-500"
              >
                Yoruba Textbook
              </Link>
              <Link
                href="#"
                className="footer__link mb-2 cursor-pointer duration-300 ease-in-out hover:text-primary-500"
              >
                Destinations
              </Link>
              <Link
                href="#"
                className="footer__link mb-2 cursor-pointer duration-300 ease-in-out hover:text-primary-500"
              >
                Sponsorships
              </Link>
            </div>

            <div className="footer__link-items mx-6 flex w-[160px] flex-col items-start text-left text-sm text-white sm:m-4">
              <h1 className="footer__link-title mb-4 font-bold">
                Social Media
              </h1>
              <a
                href="//www.linkedin.com/in/kehinde-rabiu/"
                className="footer__link mb-2 cursor-pointer duration-300 ease-in-out hover:text-primary-500"
              >
                LinkedIn
              </a>
              <a
                href="#"
                className="footer__link mb-2 cursor-pointer duration-300 ease-in-out hover:text-primary-500"
              >
                Threads
              </a>
              <a
                href="//www.instagram.com/kotrabiu/"
                className="footer__link mb-2 cursor-pointer duration-300 ease-in-out hover:text-primary-500"
              >
                Instagram
              </a>
            </div>
          </div>
        </div>

        <section className="socials mt-10 w-full max-w-[1000px] text-sm">
          <div className="socials__wrap mx-auto mt-5 flex max-w-[1100px] flex-col items-center justify-between md:flex-row">
            <Link
              className="logo mb-6 flex cursor-pointer items-center justify-start text-xl font-bold md:mb-0"
              href="/"
              onClick={() => scrollToTop()}
            >
              Yoruba
            </Link>

            <div className="website_rights mb-6 md:mb-0">
              Yoruba © {new Date().getFullYear()} All rights reserved.
            </div>
            <div className="social__icons__container flex w-[240px] justify-between text-lg">
              <Link
                className="social__icon__link"
                href="https://www.linkedin.com/in/kehinde-rabiu/"
                target="_blank"
                rel="noopener noreferrer"
                passHref={true}
              >
                <FaLinkedin />
              </Link>
              <Link
                className="social__icon__link"
                href="https://www.instagram.com/kotrabiu/"
                target="_blank"
                rel="noopener noreferrer"
                passHref={true}
              >
                <FaInstagram />
              </Link>
              <Link
                className="social__icon__link"
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                passHref={true}
              >
                <FaFacebook />
              </Link>
            </div>
          </div>
        </section>
      </div>
    </footer>
  );
};

export default Footer;
