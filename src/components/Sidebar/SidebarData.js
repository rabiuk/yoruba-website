import React from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import * as RiIcons from "react-icons/ri";

export const SidebarData = [
  {
    title: "Home",
    path: "/",
    icon: <AiIcons.AiFillHome />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
    // subNav: [
    //   {
    //     title: "About",
    //     path: "/",
    //     icon: <IoIcons.IoIosPaper />,
    //   },
    //   {
    //     title: "Learn",
    //     path: "/",
    //     icon: <IoIcons.IoIosPaper />,
    //   },
    //   {
    //     title: "Proverbs & Wisdom",
    //     path: "/",
    //     icon: <IoIcons.IoIosPaper />,
    //   },
    // ],
  },
  {
    title: "Lessons",
    path: "#",
    icon: <AiIcons.AiFillEdit />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
    subNav: [
      {
        title: "I",
        path: "#",
        icon: <IoIcons.IoIosSquareOutline />,
      },
      {
        title: "II",
        path: "#",
        icon: <IoIcons.IoIosSquareOutline />,
      },
      {
        title: "III",
        path: "/improve-skills/lesson-three-learn-basic-phrases-i",
        icon: <IoIcons.IoIosSquareOutline />,
      },
    ],
  },
];
