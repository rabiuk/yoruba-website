"use client";
import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import { usePathname } from "next/navigation";
import ScrollToTop from "./ScrollToTop";
import Link from "@/components/ui/Link";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import Button from "@/components/ui/Button";
import UserAccountNav from "@/components/UserAccountNav";
import LoginModal from "@/components/LoginModal";

interface NavbarProps {
  toggle: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ toggle }) => {
  const [nav, setNav] = useState<boolean>(false);
  const [isSticky, setIsSticky] = useState(false);
  const [hasPassed, setHasPassed] = useState(false);

  const currentPage = usePathname();
  const { data: session } = useSession();
  const [showLoginModal, setShowLoginModal] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const heroSectionHeight = window.innerHeight + 75; // Adjust this value based on your hero section height
      if (window.scrollY >= heroSectionHeight) {
        setHasPassed(true);
      } else {
        setHasPassed(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (hasPassed || currentPage !== "/") {
      setIsSticky(true);
    } else {
      setIsSticky(false);
    }
  }, [hasPassed, currentPage]);

  if (
    currentPage === "/auth/signin" ||
    currentPage === "/log-in" ||
    currentPage === "/api/auth/verify-request"
  ) {
    return null;
  }

  const handleNav = () => {
    setNav(!nav);
  };

  const closeMobileNav = () => {
    setNav(false);
  };

  return (
    <>
      <ScrollToTop />
      <div
        className={`navbar-container ${
          isSticky ? "sticky top-0 bg-beige-300 backdrop-blur-lg text-zinc-700 shadow-lg" : "relative bg-transparent text-white"
        } left-0 z-40 w-full ease-in-out`}
      >
        <div
          className={`nav-content-container m-auto flex h-[75px] max-w-screen-xl items-center justify-between px-4 font-medium xl:px-8`}
        >
          <Link href="/" isLink={true}>
            <h1 className="title text-2xl font-extrabold">Yoruba</h1>
          </Link>
          <div className="hidden sm:flex sm:items-center sm:justify-between sm:text-base sm:font-semibold">
            <ul className="flex">
              <li className="cursor-pointer p-4 duration-300 ease-in-out hover:text-primary-500">
                <Link isLink={true} href="/">
                  Home
                </Link>
              </li>
              <li className="cursor-pointer p-4 duration-300 ease-in-out hover:text-primary-500">
                {currentPage === "/" ? (
                  <Link isScroll={true} to="about">
                    About
                  </Link>
                ) : (
                  <Link isLink={true} href="/#about">
                    About
                  </Link>
                )}
              </li>
              <li className="cursor-pointer p-4 duration-300 ease-in-out hover:text-primary-500">
                {currentPage === "/" ? (
                  <Link isScroll={true} to="learn">
                    Learn
                  </Link>
                ) : (
                  <Link isLink={true} href="/#learn">
                    Learn
                  </Link>
                )}
              </li>
              <li className="cursor-pointer p-4 duration-300 ease-in-out hover:text-primary-500">
                {currentPage === "/" ? (
                  <Link isScroll={true} to="proverbs-and-wisdom">
                    Proverbs
                  </Link>
                ) : (
                  <Link isLink={true} href="/#proverbs-and-wisdom">
                    Proverbs
                  </Link>
                )}
              </li>
            </ul>
          </div>

          {session?.user ? (
            <UserAccountNav user={session.user} />
          ) : (
            <Button
              className={`login__button hidden sm:flex sm:border duration-300 ease-in-out sm:px-8 sm:py-2 sm:hover:border-primary-500 sm:hover:text-primary-500 ${
                isSticky ? "border-gray-700 text-gray-700" : "border-white text-white"
              }`}
              onClick={() => setShowLoginModal(true)}
            >
              LOGIN
            </Button>
          )}

          {/* Mobile Button */}
          <div className="z-10 block sm:hidden">
            {nav ? (
              <AiOutlineClose
                size={20}
                style={{ color: `white`, cursor: "pointer" }}
                onClick={handleNav}
              />
            ) : (
              <AiOutlineMenu
                size={20}
                style={{ color: `${isSticky ? "gray-700" : "white"}`, cursor: "pointer" }}
                onClick={handleNav}
              />
            )}
          </div>

          {/* Mobile Menu */}
          <div
            className={
              nav
                ? "absolute bottom-0 left-0 right-0 top-0 flex h-screen w-full flex-col items-center justify-center bg-black text-center text-white duration-300 ease-in sm:hidden"
                : "absolute bottom-0 left-[100%] right-[100%] top-0 flex h-screen w-full flex-col items-center justify-center bg-black text-center text-white duration-300 ease-in sm:hidden"
            }
            onClick={closeMobileNav}
          >
            <ul>
              <li
                className="p-4 text-xl duration-300 ease-in-out hover:text-primary-500"
                onClick={closeMobileNav}
              >
                <Link isLink={true} href="/">
                  Home
                </Link>
              </li>
              <li
                className="p-4 text-xl duration-300 ease-in-out hover:text-primary-500"
                onClick={closeMobileNav}
              >
                <Link isLink={true} href="/#about">
                  About
                </Link>
              </li>
              <li
                className="p-4 text-xl duration-300 ease-in-out hover:text-primary-500"
                onClick={closeMobileNav}
              >
                <Link isLink={true} href="/#learn">
                  Learn
                </Link>
              </li>
              <li
                className="p-4 text-xl duration-300 ease-in-out hover:text-primary-500"
                onClick={closeMobileNav}
              >
                <Link isLink={true} href="/#proverbs-and-wisdom">
                  Proverbs
                </Link>
              </li>
            </ul>
            <Button
              className={`login__button flex border px-8 py-2 duration-300 ease-in-out hover:border-primary-500 hover:text-primary-500 ${
                isSticky ? "border-gray-700 text-gray-700" : "border-white text-white"
              }`}
              onClick={() => setShowLoginModal(true)}
            >
              LOGIN
            </Button>
          </div>
        </div>
      </div>
      {showLoginModal && (
        <LoginModal
          showLoginModal={showLoginModal}
          setShowLoginModal={setShowLoginModal}
        />
      )}
    </>
  );
};

export default Navbar;