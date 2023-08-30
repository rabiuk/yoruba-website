// components/Navbar/Navbar.jsx

"use client";
import { useEffect, useState } from "react";
import { useSession, signIn, signOut } from "next-auth/react";
import { useRouter, usePathname } from "next/navigation";
import ScrollToTop from "./ScrollToTop";
import Link from "@/components/ui/Link";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import Button from "@/components/ui/Button";
import UserAccountNav from "@/components/UserAccountNav";
import LoginModal from "@/components/LoginModal";

const Navbar = () => {
  const [isHome, setIsHome] = useState<boolean>(false);
  const [isInLearn, setIsInLearn] = useState<boolean>(false);
  const [isInAbout, setIsInAbout] = useState<boolean>(false);
  const [isInProverbs, setIsInProverbs] = useState<boolean>(false);
  const [nav, setNav] = useState<boolean>(false);
  const [color, setColor] = useState("transparent");
  const [textColor, setTextColor] = useState(`white`);
  const [backDrop, setBackDrop] = useState("");

  const currentPage = usePathname();

  const { data: session } = useSession();

  const [showLoginModal, setShowLoginModal] = useState(false);

  useEffect(() => {
    const updateNavbarStyle = () => {
      if (
        (window.scrollY >= 90 && currentPage === "/") ||
        currentPage !== "/"
      ) {
        setColor(`rgba(245, 245, 220, 0.97)`);
        setTextColor("rgb(63 63 70)");
        setBackDrop("blur(10px)");
      } else {
        setColor("transparent");
        setTextColor("white");
        setBackDrop("");
      }
    };
    window.addEventListener("scroll", updateNavbarStyle);
    updateNavbarStyle();

    return () => {
      window.removeEventListener("scroll", updateNavbarStyle);
    };
  }, [currentPage]);
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
        style={{
          backgroundColor: `${color}`,
          backdropFilter: `${backDrop}`,
        }}
        className={`fixed left-0 top-0 z-40 w-full duration-300 ease-in-out ${
          color !== "transparent" ? "shadow-lg" : ""
        }`}
      >
        <div
          style={{
            color: `${textColor}`,
          }}
          className={`m-auto flex h-[75px] max-w-screen-xl items-center justify-between px-4 font-medium text-white duration-300 ease-in-out xl:px-8`}
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
                <Link isScroll={true} to="about">
                  About
                </Link>
              </li>
              <li className="cursor-pointer p-4 duration-300 ease-in-out hover:text-primary-500">
                <Link isScroll={true} to="learn">
                  Learn
                </Link>
              </li>
              <li className="cursor-pointer p-4 duration-300 ease-in-out hover:text-primary-500">
                <Link isScroll={true} to="proverbs-and-wisdom">
                  Proverbs
                </Link>
              </li>
            </ul>
          </div>

          {session?.user ? (
            <UserAccountNav user={session.user} />
          ) : (
            <Button
              className={`login__button hidden sm:flex sm:border border-[${textColor}] duration-300 ease-in-out sm:px-8 sm:py-2 sm:hover:border-primary-500 sm:hover:text-primary-500`}
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
                style={{ color: `${textColor}`, cursor: "pointer" }}
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
              className={`login__button flex border border-[${textColor}] px-8 py-2 duration-300 ease-in-out hover:border-primary-500 hover:text-primary-500`}
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
