import { FAQ } from "@/components/accordion/FAQ";
import { Button } from "@/components/button/Button";
import { BiographySteps } from "@/components/cards/BiographySteps";
import { Insights } from "@/components/cards/Insights";
import { Keypoints } from "@/components/cards/Keypoints";
import { SchoolStrategy } from "@/components/cards/SchoolStrategy";
import { StrategyReasons } from "@/components/cards/StrategyReasons";
import Image from "next/image";

export default function ServiceIntroductionPage() {
  return (
    <main className="overflow-hidden  max-w-[1550px] mx-auto">
      <section className="flex flex-col items-center justify-between relative bg-[#F2EFE7] px-4 max-h-[calc(100dvh-96px)] ">
        <div className="flex flex-col items-center justify-center h-full ">
          <div className="text-black text-center mt-[5rem] md:mt-10 ">
            <h1 className="text-5xl md:text-6xl lg:text-[60px] font-semibold leading-tight">
              나를 가장 잘 아는 입시 전략 <br /> AI가 설계합니다
            </h1>
            <p className="text-lg md:text-xl lg:text-[20px] font-medium mt-4">
              생기부, 교과, 목표 대학까지 정밀 분석, 단 하나뿐인 나만의 입시
              전략.
            </p>
          </div>
        </div>

        <div className="mt-[4rem]">
          <Image
            src="/images/macbook.png"
            alt="ai-intro-bg"
            width={1000}
            height={1000}
            className="w-[90%] sm:w-[80%] md:w-[700px] lg:w-[1000px] mx-auto h-auto"
          />
        </div>
      </section>

      {/* entrance exam strategy */}
      <section className="bg-white py-16 px-4 mt-20">
        <div className=" mx-auto text-center">
          <h2 className="text-[48px]">
            혼자 찾기 어려운 입시 전략, 왜 그럴까요?
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-10  mx-auto">
            <StrategyReasons />
          </div>
        </div>
      </section>
      {/* biographies  */}
      <section className=" py-16 px-4 mt-20">
        <div className="text-center relative">
          <h3 className="md:!text-[80px] !text-[48px]">
            생기부를 제대로 읽어야 전략이 <br /> 보입니다
          </h3>
          <Image
            className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] md:w-[450px] w-[300px] -z-1"
            src="/images/three-blue-lines.png"
            alt=""
            width={450}
            height={200}
          />
        </div>
        <div
          style={{ backgroundImage: "url('/icons/biography_steps/bg.png')" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 gap-y-10 mt-[6rem]  mx-auto  bg-[#F8F8F8] py-[5rem] bg-cover bg-center"
        >
          <BiographySteps />
        </div>
      </section>

      {/* vitality level */}
      <section className="py-16 px-4 mt-20">
        <div className="text-center">
          <h3 className="md:!text-[80px] !text-[48px]">
            생기부만 올려도 최적 전략이 착착!
          </h3>
        </div>
        <div className="flex flex-col items-center justify-center gap-10 relative">
          {/* Main Image */}
          <Image
            className="w-[90%] max-w-[579px] h-auto object-contain"
            src="/images/vitality1.png"
            alt="vitality-level"
            width={1000}
            height={1000}
          />

          {/* Overlay 1 */}
          <Image
            className="absolute object-contain
               w-[60%] max-w-[433px] h-auto
               top-[30%] right-[5%]
               md:w-[433px] md:h-[197px] md:top-[30%] md:right-[15%]"
            src="/images/vitality2.png"
            alt="vitality-level"
            width={1000}
            height={1000}
          />

          {/* Overlay 2 */}
          <Image
            className="absolute object-contain
               w-[70%] max-w-[488px] h-auto
               top-[65%] left-[5%]
               md:w-[488px] md:h-[367px] md:top-[55%] md:left-[10%]"
            src="/images/vitality3.png"
            alt="vitality-level"
            width={1000}
            height={1000}
          />
        </div>
      </section>

      <section className="py-16 px-4 mt-20">
        <div className="grid grid-cols-1 md:grid-cols-2  gap-10">
          <Keypoints />
        </div>
      </section>

      <section className="py-16 px-4 mt-20">
        <div className="text-center">
          <h3 className="md:!text-[80px] !text-[48px]">
            분석은 끝났습니다. <br />
            이제 전략을 실행할 차례
          </h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2  gap-5 mt-16  mx-auto max-w-[1000px] ">
          <Insights />
        </div>
      </section>

      <section className="py-16 px-4 mt-20 flex flex-col-reverse lg:flex-row-reverse justify-evenly items-center gap-10 md:gap-5">
        <div className="space-y-5 text-center md:text-left">
          <h3 className="!text-[48px] md:!text-[80px] leading-tight">
            학종 전략의 방향이 <br />
            보이는 매칭 리포트
          </h3>
          <p className="text-black">
            대학/학과/전형 조건과 매칭하여 최적의 학종 지원 전략을 추천합니다.
          </p>
          <Button
            text="목표 대학 합격률 확인하기"
            variant="outlineFilled"
            className="!rounded-xs"
          />
        </div>
        <div className="flex flex-col gap-5">
          <SchoolStrategy />
        </div>
      </section>

      <section className="py-16 px-4 mt-20">
        <Image className="w-[1334px] h-[718px] mx-auto object-contain" src="/images/best.png" alt="" width={2000} height={2000} />
      </section>

      <section className="px-4 py-10 mt-[10rem]">
          <FAQ />
        </section>
    </main>
  );
}
