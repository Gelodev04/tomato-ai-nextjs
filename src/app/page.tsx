import Image from "next/image";
import { Button } from "@/components/button/Button";
import Link from "next/link";

import { steps, navTabs } from "@/data/content";
import SectionBlock from "@/components/block/SectionBlock";
import MenuCarouselSection from "@/components/carousel/MenuCarouselSection";
import { TestimonialCards } from "@/components/cards/TestimonialCard";
import { FAQ } from "@/components/accordion/FAQ";

export default function Home() {
  return (
    <>
      <main className="overflow-hidden px-4 max-w-[1550px] mx-auto">
        {/* Hero Section */}
        <section className=" h-[calc(100dvh-96px)]  overflow-hidden">
          {/* Hero Content */}
          <div className="relative   px-4 sm:px-6 lg:px-8 pt-16 lg:pt-0 flex lg:items-center justify-center lg:justify-start h-full">
            <div className="text-center lg:text-left max-w-4xl">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-black leading-tight mb-6">
                <span className="block">AI가 설계하는 나만의</span>
                <span className="block ">합격 전략</span>
              </h1>

              <p className="text-lg sm:text-xl md:text-2xl text-black mb-8 md:mb-12 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                성취할 목표에서의 대학 목표, 입시 전략까지 개별 맞춤 분석으로
                <br className="hidden sm:block" />
                성공 확률을 효과적으로 관리하고 최적화하는 서비스입니다.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-col justify-center items-center lg:flex-row gap-2  lg:max-w-lg ">
                <Link className="w-full lg:w-1/2" href="/ai-analysis">
                  <Button
                    text="AI 분석 받기"
                    variant="outlineFilled"
                    className="w-full py-3"
                  />
                </Link>
                <Link className="w-full lg:w-1/2" href="/free-report">
                  <Button
                    text="무료 리포트 보기"
                    variant="outline"
                    className="w-full py-3"
                  />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* SECOND SECTION */}
        <section className="relative  ">
          <Image
            className="w-full h-full"
            src="/images/문제점.webp"
            alt=""
            width={2000}
            height={2000}
          />
          <div className="bg-[#F8F8F8] flex items-center justify-center rounded-[24px] py-16 px-3">
            <div className="relative text-center">
              <p className="relative text-[#08080C] text-3xl md:text-[45px] font-semibold leading-[60px] md:leading-[90px] z-50">
                이러한 고민을 하고 계시다면,
                <br />
                지금 필요한 건 나만의 전략입니다.
                <br />
                토마토 AI는 여러분의 현재를 분석해
                <br />
                목표에 가장 가까운 길을 제시합니다.
              </p>
              <div className="absolute -bottom-1 left-0  bg-[#92FF51] w-full h-[30px]  md:h-[51px] "></div>
            </div>
          </div>
        </section>
        {/* FIRST SOLUTION */}
        <section className=" flex flex-col lg:flex-row items-center justify-center px-6 sm:px-10 gap-[5rem] lg:gap-8 py-[8rem]">
          <SectionBlock
            label="Solution 1. 생기부 분석"
            heading={
              <>
                생기부만 업로드하면, 전<br />
                략은 AI가 설계합니다
              </>
            }
            description="생기부 전체를 AI가 분석하여, 핵심 키워드와 역량을 자동 추출합니다."
            buttonText="지원 가능 대학 확인하기"
          />

          <ul className="flex flex-col  gap-6 sm:gap-8 lg:gap-[4rem] lg:w-1/2">
            {steps.map((step) => (
              <li key={step.title} className="flex items-start gap-4 lg:gap-5">
                <div className="relative">
                  <div className="bg-[#1f1f1f] aspect-square flex items-center size-12 sm:size-14 lg:size-[63px]  justify-center rounded-full">
                    <Image
                      src={step.icon}
                      alt={step.title}
                      width={20}
                      height={20}
                      className="lg:w-6 lg:h-6"
                    />
                  </div>
                </div>
                <div className="space-y-1 lg:space-y-2 flex-1">
                  <h4 className="text-lg sm:text-xl lg:text-[26px] font-[700]">
                    {step.title}
                  </h4>
                  <p className="text-sm sm:text-base lg:text-[21px] font-[500] text-[#545454] leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </section>

        {/* SECOND SOLUTION */}
        <section className="bg-[url('/images/section4bg.png')] bg-cover bg-center  flex items-center justify-center px-6 sm:px-10 rounded-[24px] py-[8rem]">
          <div className="flex flex-col lg:flex-row items-center lg:items-end justify-evenly w-full gap-6 lg:gap-8 max-w-[1200px]">
            <div className="w-full flex justify-center lg:w-auto">
              <Image
                src="/images/section4data.png"
                alt="data"
                width={1000}
                height={1000}
                className="w-full max-w-[545px] h-auto lg:h-[528px] object-contain"
              />
            </div>
            <SectionBlock
              label="Solution 2. 학종 매칭"
              heading={
                <>
                  학종 전략의 방향이
                  <br /> 보이는 매칭 리포트
                </>
              }
              description="생기부 전체를 AI가 분석하여, 핵심 키워드와 역량을 자동 추출합니다."
              buttonText="목표 대학 합격률 확인하기"
            />
          </div>
        </section>

        {/* THIRD SOLUTION */}
        <section className="flex flex-col lg:flex-row items-center justify-center gap-6 lg:gap-8 px-6 sm:px-10 py-[8rem]">
          <SectionBlock
            label="Solution 3.  교과 성적 분석"
            heading={
              <>
                교과 성적 변동 추이,
                <br /> 과목별 강약점 분석
              </>
            }
            description={
              <>
                단순 평균이 아닌, 성적 추이와 과목별 성향을 종합 분석합니다.
                교과전형 <br /> 가능성부터 내신 개선 전략까지 한 번에
                확인하세요.
              </>
            }
            buttonText="지원 가능 대학 확인하기"
          />
          <div className="w-full max-w-[507px] h-auto lg:h-[489px]">
            <Image
              className="w-full h-full object-contain"
              src="/images/solution3.png"
              alt="solution 3"
              width={1000}
              height={1000}
            />
          </div>
        </section>

        {/* FOURTH SOLUTION */}
        <section className="flex flex-col lg:flex-row items-center justify-center  gap-6 lg:gap-8 px-6 sm:px-10 bg-[url('/images/section4bg.png')] bg-cover bg-center py-[8rem]">
          <div className="w-full max-w-[507px] h-auto lg:h-[489px]">
            <Image
              className="w-full h-full object-contain"
              src="/images/solution4.png"
              alt="solution 4"
              width={1000}
              height={1000}
            />
          </div>
          <SectionBlock
            label="Solution 4. 면접 코칭"
            heading={
              <>
                생기부 기반 맞춤형b
                <br /> 면접 코칭
              </>
            }
            description={
              <>질문 의도 파악부터 답변 구조화까지, 실전형 코칭을 제공합니다.</>
            }
            buttonText="목표 대학 면접 분석하기"
          />
        </section>

        {/* AI entrance exam consulting */}
        <MenuCarouselSection />

        {/* TESTIMONIAL */}
        <section className="bg-[url('/images/section4bg.png')] bg-cover bg-center flex flex-col items-center justify-center px-6 sm:px-10 rounded-[24px] py-10 mt-[10rem]">
          <div className="flex flex-col text-center items-center gap-5">
            <div className="flex flex-col sm:flex-row gap-5 sm:gap-[4.5rem]">
              {navTabs.map((tab) => (
                <span className="text-[#344054] text-center" key={tab.label}>
                  {tab.label}
                </span>
              ))}
            </div>
            <h3 className="font-semibold  md:text-current">
              AI 분석, 실제 사용자의 생생한 <br /> 반응으로 증명됩니다
            </h3>
            <p className="text-[#6B7280]  ">
              학생부터 학부모, 교사까지. <br /> 토마토 AI와 함께한 사람들이
              전하는 변화의 순간을 확인해보세요.
            </p>
          </div>
          <div className="max-w-[500px] mx-auto md:max-w-full">
            <div className="grid grid-cols-1 md:grid-cols-3 items-start gap-4 mt-10 ">
              <TestimonialCards />
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="px-6 sm:px-10 py-10 mt-[10rem]">
          <FAQ />
        </section>
      </main>
    </>
  );
}
