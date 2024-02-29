"use client";
import { motion } from "framer-motion";
import { fadeIn } from "@/variants";
import ReservationForm from "./ReservationForm";

const Reservation = () => {
  return (
    <section className="xl:my-32 xl:h-[1020px] xl:bg-reservation xl:bg-no-repeat xl:flex xl:flex-col xl:justify-end xl:items-end" id="reservation">
        <div className="bg-black w-full xl:max-w-[868px] min-h-[518px] p-8 md:m-14 xl:p-16 ">
            <h2 className="text-white mb-9 capitalize ">Book a table</h2>
            <ReservationForm />
        </div>
    </section>
  )
}

export default Reservation