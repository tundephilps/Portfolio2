import { navLinks } from "@/Data/Data";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { motion } from "framer-motion";
import { HiOutlineMenuAlt4, HiX } from "react-icons/hi";
import {
  AiFillGithub,
  AiFillInstagram,
  AiFillTwitterCircle,
} from "react-icons/ai";
import { useEffect, useState } from "react";

import ReactTooltip from "react-tooltip";
import ClickMe from "./ClickMe";

export default function Navbar() {
  const [showMenu, setShowMenu] = useState<boolean>(false);
  const [navScroll, setNavScroll] = useState<boolean>(false);
  const pathname = usePathname();

  useEffect(() => {
    function scrollActive() {
      setNavScroll(window.scrollY > 20);
    }
    window.addEventListener("scroll", scrollActive);
    return () => window.removeEventListener("scroll", scrollActive);
  }, []);
  const menuVariants = {
    hidden: {
      scale: 0,
    },
    visible: {
      scale: 40,
      transition: {
        type: "tween",
        duration: 0.5,
      },
    },
  };
  const navLinkVariants = {
    hidden: {
      display: "none",
      opacity: 0,
    },
    visible: {
      opacity: 1,
      y: -30,
      transition: {
        delay: 0.7,
      },
    },
  };
  const isActive = (path: string) =>
    pathname === path ? "text-Orange" : "text-WhiteGray";
  const socialClassNames = "text-3xl cursor-pointer text-White";
  return (
    <header
      className={`fixed w-full top-0 left-0 z-20 ${
        navScroll ? "bg-Glass backdrop-blur-sm" : ""
      }`}
    >
      <nav
        className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ${
          showMenu ? "hidden" : ""
        }`}
      >
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="text-3xl text-WhiteGray">
            My Portfolio
          </Link>
          <div className="hidden md:flex items-center justify-center space-x-4">
            {navLinks.map((navLink) => (
              <Link
                key={navLink.path}
                href={navLink.path}
                className={`text-lg uppercase font-medium TextShadow ${isActive(
                  navLink.path
                )}`}
              >
                {navLink.label}
              </Link>
            ))}
          </div>
          <div className="flex md:hidden items-center">
            <ClickMe />
            {""} {""}
            <HiOutlineMenuAlt4
              className="text-White cursor-pointer w-6 h-6 animate-bounce"
              onClick={() => setShowMenu(!showMenu)}
            />
          </div>
        </div>
      </nav>
      <motion.div
        variants={menuVariants}
        initial="hidden"
        animate={showMenu ? "visible" : "hidden"}
        className="bg-Black fixed top-0 right-0 w-16 h-16 rounded-full"
      ></motion.div>
      <motion.nav
        variants={navLinkVariants}
        animate={showMenu ? "visible" : "hidden"}
        className="h-screen md:hidden flex flex-col justify-center"
        id="index"
      >
        {navLinks.map((navLink) => (
          <Link
            key={navLink.label}
            href={navLink.path}
            className={`sm:block sm:z-40 px-10 py-2 text-5xl font-medium ${isActive(
              navLink.path
            )}`}
            onClick={(prev) => setShowMenu(!prev)}
          >
            {navLink.label}
          </Link>
        ))}
        <div className="fixed bottom-4 left-12 flex items-center flex-col gap-4">
          <Link href={"https://www.github.com/tundephilps"} target={"_blank"}>
            <button className="Btn">
              <span className="svgContainer">
                <svg fill="white" viewBox="0 0 496 512" height="1.6em">
                  <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"></path>
                </svg>
              </span>
              <span className="BG"></span>
            </button>
          </Link>
          <Link href={"https://www.instagram.com"} target={"_blank"}>
            <button className="IGBtn">
              <span className="IGsvgContainer">
                <svg
                  fill="white"
                  className="IGsvgIcon"
                  viewBox="0 0 448 512"
                  height="1.5em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"></path>
                </svg>
              </span>
              <span className="IGBG"></span>
            </button>
          </Link>
          <Link
            href={"https://www.linkedin.com/in/tunde-akinola-282706218/"}
            target={"_blank"}
          >
            <button className="LinkedinBtn">
              <span className="LNsvgContainer">
                <svg
                  viewBox="0 0 24 24"
                  height="24"
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path>
                </svg>
              </span>
              <span className="LNBG"></span>
            </button>
          </Link>
        </div>
        <HiX
          className="absolute text-White top-10 right-10 w-6 h-6 cursor-pointer z-50"
          onClick={(prev) => setShowMenu(!prev)}
        />
      </motion.nav>
    </header>
  );
}
