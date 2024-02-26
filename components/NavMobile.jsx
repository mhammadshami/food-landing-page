"use client";
import { useState } from "react";
import { RiMenu2Line, RiHomeFill } from "react-icons/ri";
import { IoCloseOutline } from "react-icons/io5";
import { BiSolidFoodMenu } from "react-icons/bi";
import { FaUsers, FaEnvelope } from "react-icons/fa";

import { Link as ScrollLink } from "react-scroll";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";

const links = [
  {
    icon: <RiHomeFill />,
    path: "home",
    name: "home",
    offset: 0,
  },
  {
    icon: <BiSolidFoodMenu />,
    path: "menu",
    name: "menu",
    offset: 0,
  },
  {
    icon: <FaUsers />,
    path: "about",
    name: "about",
    offset: -50,
  },
  {
    icon: <RiHomeFill />,
    path: "contact",
    name: "contact",
    offset: -50,
  },
];
const NavMobile = ({ containerStyles, iconStyles, linkStyles }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`${containerStyles}`}>
      {/* nav trigger btn */}
      <div
        className="cursor-pointer outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <RiMenu2Line className="text-3xl text-white transition-all duration-200 " />
      </div>
      <aside
        className={`${
          isOpen ? "right-0" : "-right-full"
        } bg-black fixed z-20 w-full p-10 top-0 bottom-0 transition-all duration-500`}
      >
        mobile nav
      </aside>
    </div>
  );
};

export default NavMobile;
