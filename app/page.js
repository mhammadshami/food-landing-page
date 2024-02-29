import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Menu from "@/components/Menu";
import Reservation from "@/components/Reservation";
import StyleGuide from "@/components/StyleGuide";
import Image from "next/image";

export default function Home() {
  return (
    <main className="w-full max-w-[1140px] bg-white mx-auto overflow-hidden">
      <Header />
      <Hero />
      <Menu />
      <Reservation />
      <div className="h-[4000px]"></div>
    </main>
  );
}
