"use client";
import React from "react";
import Slider from "react-slick";
import Image from "next/image";
import { Button } from "../button/Button";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// 생기부 분석 - Primary at position 1
export const cardData1 = [
  {
    id: 1,
    variant: "primary", // Primary
    title: "AI가 읽고, 핵심을 뽑다 — 생기부 분석 자동화",
    buttonLabel: "생기부 분석 받기",
    image: "/images/carousel/card1.jpg",
  },
  {
    id: 2,
    variant: "standard",
    title: "학종 매칭",
    description: "내 생기부에 맞는 전형을 따로 있다 — 학종 전형 매칭",
    buttonLabel: "학종 매칭 받기",
    image: "/images/carousel/card2.jpg",
  },
  {
    id: 3,
    variant: "standard",
    title: "교과 분석",
    description: "과목별 성취도, 세특 분석률, 대학 반영 방식까지 분석",
    buttonLabel: "교과 분석 받기",
    image: "/images/carousel/card3.jpg",
  },
  {
    id: 4,
    variant: "standard",
    title: "면접 코칭",
    description: "실제 활동 이력을 바탕으로 핵심 질문을 자동 생성",
    buttonLabel: "면접 코칭 받기",
    image: "/images/carousel/card4.jpg",
  },
];

// 학종 매칭 - Primary at position 2
export const cardData2 = [
  {
    id: 1,
    variant: "standard",
    title: "학종 매칭",
    description: "내 활동에 맞는 전형은 따로 있다 — 학종 전략 매칭",
    buttonLabel: "생기부 분석 받기",
    image: "/images/carousel/card1.jpg",
  },
  {
    id: 2,
    variant: "primary", // Primary
    title: "내 활동에 맞는 전형은 따로 있다 — 학종 전략 매칭",
    buttonLabel: "학종 매칭 받기",
    image: "/images/carousel/card2.jpg",
  },
  {
    id: 3,
    variant: "standard",
    title: "교과 분석",
    description: "과목별 성취도, 세특 분석률, 대학 반영 방식까지 분석",
    buttonLabel: "교과 분석 받기",
    image: "/images/carousel/card3.jpg",
  },
  {
    id: 4,
    variant: "standard",
    title: "면접 코칭",
    description: "실제 활동 이력을 바탕으로 핵심 질문을 자동 생성",
    buttonLabel: "면접 코칭 받기",
    image: "/images/carousel/card4.jpg",
  },
];

// 교과 분석 - Primary at position 3
export const cardData3 = [
  {
    id: 1,
    variant: "standard",
    title: "AI가 읽고, 핵심을 뽑다 — 생기부 분석 자동화",
    description: "AI 기술로 생활기록부를 자동 분석하여 핵심 내용을 추출",
    buttonLabel: "생기부 분석 받기",
    image: "/images/carousel/card1.jpg",
  },
  {
    id: 2,
    variant: "standard",
    title: "학종 매칭",
    description: "내 생기부에 맞는 전형을 따로 있다 — 학종 전형 매칭",
    buttonLabel: "학종 매칭 받기",
    image: "/images/carousel/card2.jpg",
  },
  {
    id: 3,
    variant: "primary", // Primary
    title: "성적도 전략이 된다 — 교과세부 분석 리포트",
    buttonLabel: "교과 분석 받기",
    image: "/images/carousel/card3.jpg",
  },
  {
    id: 4,
    variant: "standard",
    title: "면접 코칭",
    description: "실제 활동 이력을 바탕으로 핵심 질문을 자동 생성",
    buttonLabel: "면접 코칭 받기",
    image: "/images/carousel/card4.jpg",
  },
];

// 면접 코칭 - Primary at position 4
export const cardData4 = [
  {
    id: 1,
    variant: "standard",
    title: "AI가 읽고, 핵심을 뽑다 — 생기부 분석 자동화",
    description: "AI 기술로 생활기록부를 자동 분석하여 핵심 내용을 추출",
    buttonLabel: "생기부 분석 받기",
    image: "/images/carousel/card1.jpg",
  },
  {
    id: 2,
    variant: "standard",
    title: "학종 매칭",
    description: "내 생기부에 맞는 전형을 따로 있다 — 학종 전형 매칭",
    buttonLabel: "학종 매칭 받기",
    image: "/images/carousel/card2.jpg",
  },
  {
    id: 3,
    variant: "standard",
    title: "교과 분석",
    description: "과목별 성취도, 세특 분석률, 대학 반영 방식까지 분석",
    buttonLabel: "교과 분석 받기",
    image: "/images/carousel/card3.jpg",
  },
  {
    id: 4,
    variant: "primary", // Primary
    title: "답변 구조까지 코칭해주는 AI 맞춤 면접 시뮬레이션",
    buttonLabel: "면접 코칭 받기",
    image: "/images/carousel/card4.jpg",
  },
];

type CardData = {
  id: number;
  variant: "primary" | "standard";
  title: string;
  description?: string;
  buttonLabel: string;
  image: string;
};

interface CarouselProps {
  cardData?: CardData[];
  activeMenuIndex?: number;
}

function Carousel({ cardData, activeMenuIndex = 0 }: CarouselProps) {
  // Default to cardData1 if no data is provided
  const carouselData =
    cardData ||
    (() => {
      switch (activeMenuIndex) {
        case 0:
          return cardData1;
        case 1:
          return cardData2;
        case 2:
          return cardData3;
        case 3:
          return cardData4;
        default:
          return cardData1;
      }
    })();

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 3500,
    autoplaySpeed: 0,
    cssEase: "linear",
    pauseOnHover: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className=" w-full max-w-6xl mx-auto">
      <Slider {...settings}>
        {carouselData.map((card) => (
          <div key={card.id} className="px-2">
            {card.variant === "primary" ? (
              <div
                className="rounded w-full h-[500px] p-6 flex flex-col justify-between items-center bg-cover bg-center shadow-lg"
                style={{ backgroundImage: `url(${card.image})` }}
              >
                <h2 className="text-[40px] font-[500] mb-4 text-white ">
                  {card.title}
                </h2>
                <Button
                  text={card.buttonLabel}
                  variant="primary"
                  className=""
                />
              </div>
            ) : (
              <div className="bg-white rounded p-4 shadow-lg w-full h-[500px] flex flex-col justify-between items-center">
                <div className="">
                  <h3 className="text-[24px] font-semibold">{card.title}</h3>
                  <p className="text-[#808080] text-[16px] mt-2">
                    {card.description}
                  </p>
                </div>
                <Image
                  src={card.image}
                  alt={card.title}
                  className="w-[240px] h-[232px] mx-auto rounded-full mb-4 object-cover"
                  width={500}
                  height={500}
                />
                <Button
                  text={card.buttonLabel}
                  variant="outlineFilled"
                  className="!rounded-lg"
                />
              </div>
            )}
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default Carousel;
