"use client";
import { animateScroll as scroll } from "react-scroll";
import { FaFacebook, FaLinkedin, FaInstagram } from "react-icons/fa";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useToast } from "@/components/ui/use-toast";

const Footer = () => {
  const { toast } = useToast();
  const currentPage = usePathname();
  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  const footerSectionsOne = [
    {
      title: "About Us",
      links: [
        { name: "Contact Information", url: "#" },
        { name: "Social Media Links", url: "#" },
        { name: "Privacy Policy", url: "#" },
        { name: "Terms and Conditions", url: "#" },
      ],
    },
    {
      title: "Feedback",
      links: [
        { name: "Send Feedback", url: "#" },
        { name: "Social Media Links", url: "#" },
        { name: "Privacy Policy", url: "#" },
        { name: "Terms and Conditions", url: "#" },
      ],
    },
  ];
  const footerSectionsTwo = [
    {
      title: "Resources",
      links: [
        { name: "Yoruba Dictionary", url: "#" },
        { name: "Yoruba Textbook", url: "#" },
        { name: "Destinations", url: "#" },
        { name: "Sponsorships", url: "#" },
      ],
    },
    {
      title: "Social Media",
      links: [
        { name: "LinkedIn", url: null },
        { name: "Threads", url: null },
        { name: "Instagram", url: null },
      ],
    },
  ];

  if (currentPage === "/auth/signin" || currentPage === "/log-in") {
    return null;
  }

  return (
    <footer className="footer__container w-full bg-tertiary-500 text-white">
      <div className="footer__wrap mx-auto flex max-w-[1100px] flex-col items-center justify-center px-6 py-12">
        <div className="footer__links-container flex w-full flex-row justify-center pt-8 md:pt-0">
          <div className="footer__links-wrapper flex h-fit flex-col items-center md:flex-row">
            {footerSectionsOne.map((section, index) => (
              <div
                className="footer__link-items m-4 flex w-[160px] flex-col items-start text-left text-sm text-white sm:m-4"
                key={index}
              >
                <h1 className="footer__link-title mb-4 font-bold">
                  {section.title}
                </h1>
                {section.links.map((link, linkIndex) => (
                  <Link
                    href={link.url}
                    className="footer__link mb-2 cursor-pointer duration-300 ease-in-out hover:text-primary-500"
                    key={linkIndex}
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            ))}
          </div>
          <div className="footer__links-wrapper flex h-fit flex-col items-center md:flex-row">
            {footerSectionsTwo.map((section, index) => (
              <div
                className="footer__link-items m-4 flex w-[160px] flex-col items-start text-left text-sm text-white sm:m-4"
                key={index}
              >
                <h1 className="footer__link-title mb-4 font-bold">
                  {section.title}
                </h1>
                {section.links.map((link, linkIndex) =>
                  link.url !== null ? (
                    <Link
                      href={link.url}
                      className="footer__link mb-2 cursor-pointer duration-300 ease-in-out hover:text-primary-500"
                      key={linkIndex}
                    >
                      {link.name}
                    </Link>
                  ) : (
                    <div
                      className="footer__link mb-2 cursor-pointer duration-300 ease-in-out hover:text-primary-500"
                      key={linkIndex}
                      onClick={() => {
                        toast({
                          description: "Commig soon!",
                        });
                      }}
                    >
                      {link.name}
                    </div>
                  ),
                )}
              </div>
            ))}
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
              {/* <Link
                className="social__icon__link"
                href="https://www.linkedin.com/in/kehinde-rabiu/"
                target="_blank"
                rel="noopener noreferrer"
                passHref={true}
              > */}
              <FaLinkedin
                className="cursor-pointer"
                onClick={() => {
                  toast({
                    description: "Commig soon!",
                  });
                }}
              />
              {/* </Link> */}
              {/* <Link
                className="social__icon__link"
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                passHref={true}
              > */}
              <FaInstagram
                className="cursor-pointer"
                onClick={() => {
                  toast({
                    description: "Commig soon!",
                  });
                }}
              />
              {/* </Link> */}
              {/* <Link
                className="social__icon__link"
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                passHref={true}
              > */}
              <FaFacebook
                className="cursor-pointer"
                onClick={() => {
                  toast({
                    description: "Commig soon!",
                  });
                }}
              />
              {/* </Link> */}
            </div>
          </div>
        </section>
      </div>
    </footer>
  );
};

export default Footer;
