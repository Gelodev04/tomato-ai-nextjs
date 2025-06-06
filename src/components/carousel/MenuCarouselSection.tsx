"use client";

import { useState } from "react";
import MenuItems from "@/components/MenuItem";
import Carousel from "@/components/carousel/Carousel";

export default function MenuCarouselSection() {
  const [activeMenuIndex, setActiveMenuIndex] = useState(0);

  const handleMenuChange = (index: number) => {
    setActiveMenuIndex(index);
  };

  return (
    <section className="flex flex-col items-center justify-center  gap-6 lg:gap-8 px-6 sm:px-10 py-10  mt-[10rem]">
      <div className="text-center">
        <p className="tracking-widest text-[#6B7280]">#AI입시컨설팅</p>
        <h3 className="">
          나에게 딱 맞는 입시 분석,
          <br /> 지금 확인해보세요
        </h3>
      </div>
      {/*  */}
      <div className="flex flex-col md:flex-row gap-[4rem]">
        <MenuItems
          activeMenuIndex={activeMenuIndex}
          onMenuChange={handleMenuChange}
        />
      </div>
      <div className="mt-10">
        <Carousel activeMenuIndex={activeMenuIndex} />
      </div>
    </section>
  );
}
