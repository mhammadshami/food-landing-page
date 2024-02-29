"use client";
import Image from "next/image";
import Link from "next/link";
import { IoIosArrowRoundForward } from "react-icons/io";

import { motion } from "framer-motion";
import { fadeIn } from "../variants";

const menu = [
  {
    img: "/menu/item-1.png",
    title: "Lorem ipsum dolor sit amet",
    price: "$24.00",
  },
  {
    img: "/menu/item-2.png",
    title: "Lorem ipsum dolor sit amet",
    price: "$24.00",
  },
  {
    img: "/menu/item-3.png",
    title: "Lorem ipsum dolor sit amet",
    price: "$26.00",
  },
  {
    img: "/menu/item-4.png",
    title: "Lorem ipsum dolor sit amet",
    price: "$12.00",
  },
];
const Menu = () => {
  return (
    <section className="relative py-12 xl:py-24" id="menu">
      <div className="container mx-auto">
        <motion.div
        variants={fadeIn('left', 0.3)}
        initial="hidden"
        whileInView={'show'}
        viewport={{
          once: false,
          amount: 0.2
        }}
        className="max-w-[570px] mx-auto text-center xl:text-right">
          <h2 className="mb-3 ">Favorite Menu</h2>
          <Link href="/" className="text-green flex justify-center xl:justify-end items-center mb-16 ">
            View All
            <IoIosArrowRoundForward className="text-3xl"/>
          </Link>
        </motion.div>
        {/* menu grid */}
        <motion.div 
        variants={fadeIn('up', 0.4)}
        initial="hidden"
        whileInView={'show'}
        viewport={{
          once: false,
          amount: 0.2
        }}
        className="grid grid-cols-1 gap-[30px] md:grid-cols-3 md:gap-[15px] xl:grid-cols-4 ">
            {
                menu.map((item, index) => {
                    return <div key={index} className="max-w-[270px] bg-white shadow-primary mx-auto xl:mx-0 group">
                        {/* img */}
                        <div className="overflow-hidden">
                            <Image className="group-hover:scale-110 transition-all duration-300 " src={item.img} width={270} height={270} alt="" />
                        </div>
                        {/* title & price */}
                        <div className="pt-[20px] pb-[28px] px-[30px]">
                          <Link href="/">
                            <h3 className="font-poppins text-black mb-[14px] ">{item.title}</h3>
                          </Link>
                          <div className="text-xl font-poppins font-semibold text-orange ">{item.price}</div>
                        </div>
                    </div>
                })
            }
        </motion.div>
      </div>
    </section>
  );
};

export default Menu;
