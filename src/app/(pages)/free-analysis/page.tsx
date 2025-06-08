import { FAQ } from "@/components/accordion/FAQ";
import StepSection from "@/components/block/StepSection";
import { Button } from "@/components/button/Button";
import { Analysis } from "@/components/cards/Analysis";
import Image from "next/image";
export default function Page() {
  return (
    <main className="max-w-[1550px] mx-auto">
      <section
        className="bg-[#C9DBF4] py-[10rem] flex flex-col justify-center  px-4 md:px-8 lg:px-[6rem] relative overflow-hidden"
        style={{
          backgroundImage: "url('/images/curlybg.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="space-y-4 z-10 relative max-w-4xl">
          <h1 className="text-4xl md:text-6xl lg:text-[80px] font-semibold text-black leading-tight">
            지금 바로 무료로 내 <br className="hidden md:block" /> 전략 확인하기
          </h1>
          <p className="text-black text-sm md:text-base">
            토마토 AI가 여러분의 생기부를 분석해 가장 유리한 전략을 무료로
            제안해 <br className="hidden md:block" /> 드립니다. 지금 바로
            확인해보세요!
          </p>
          <Button
            text="무료 분석 시작하기"
            variant="outlineFilled"
            className="w-full max-w-[400px] py-3"
          />
        </div>

        {/* Dashboard widgets positioned around the content */}
        <div className="absolute inset-0 pointer-events-none">
          {/* Top right progress widget */}
          <Image
            className="w-[200px] h-[100px] md:w-[280px] md:h-[140px] lg:w-[350px] lg:h-[170px] absolute top-[5%] md:top-[8%] right-[2%] md:right-[10%] lg:right-[18%]"
            src="/images/free_analysis_hero/rectangle1.png"
            alt="progress-widget"
            width={1000}
            height={1000}
          />

          {/* Right middle goal widget */}
          <Image
            className="w-[180px] h-[90px] md:w-[220px] md:h-[110px] lg:w-[280px] lg:h-[140px] absolute top-[25%] md:top-[32%] lg:top-[38%] right-[1%] md:right-[4%] lg:right-[6%]"
            src="/images/free_analysis_hero/rectangle2.png"
            alt="goal-widget"
            width={1000}
            height={1000}
          />

          {/* Center-right yellow financial widget - hidden on mobile */}
          <Image
            className="w-[220px] h-[180px] lg:w-[280px] lg:h-[240px] absolute top-[50%] md:top-[55%] lg:top-[60%] left-[35%] md:left-[40%] lg:left-[45%]"
            src="/images/free_analysis_hero/rectangle3.png"
            alt="financial-widget"
            width={1000}
            height={1000}
          />

          {/* Bottom right bar chart widget */}
          <Image
            className="w-[140px] h-[120px] md:w-[170px] md:h-[150px] lg:w-[200px] lg:h-[180px] absolute bottom-[5%] md:bottom-[6%] lg:bottom-[7%] right-[8%] md:right-[12%] lg:right-[15%]"
            src="/images/free_analysis_hero/Bar.png"
            alt="bar-chart-widget"
            width={1000}
            height={1000}
          />
        </div>
      </section>

      <section className="py-16 px-4 mt-20">
        <div className="text-center">
          <h3 className="!text-[48px] md:!text-[80px] leading-tight">
            어떤 분석을 받을 수 있나요?
          </h3>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mt-16 mx-auto max-w-[1050px] px-4">
          <Analysis />
        </div>
      </section>

      <section className="py-16 px-4 mt-20">
        <h3 className="!text-[48px] md:!text-[80px] leading-tight text-center mb-20">
          간단한 3단계로 생기부 분석 완료!
        </h3>
        {/* STEPS */}
        {/* STEP 1 */}
        <div className="flex flex-col gap-10">
          <StepSection
            stepNumber={1}
            title="생활기록부 업로드"
            description="정부24에서 발급한 생활기록부를 문서열람번호로 간편하게 업로드하세요."
            imageSrc="/images/steps/step1.png"
          />
          {/* STEP 2 */}
          <StepSection
            stepNumber={2}
            title="AI가 분석 중…"
            description="수천 건의 합격 데이터를 기반으로 당신의 생기부를 자동 분석합니다."
            imageSrc="/images/steps/step2.png"
            flipped={true}
            bg={false}
          />
          {/* STEP 3 */}
          <StepSection
            stepNumber={3}
            title="결과 리포트 확인"
            description="전공 추천부터 강약점까지 한눈에 보기 쉬운 리포트로 정리해드립니다."
            imageSrc="/images/steps/step3.png"
          />
        </div>
      </section>

      <section className="py-16 px-4 mt-20">
        <div
          className="bg-[#451038] w-full px-6 py-16 sm:px-10 md:px-16 lg:px-20 xl:px-[5rem] lg:py-[7rem] relative overflow-hidden"
          style={{
            backgroundImage: "url('/images/phone_in_hand.png')",
            backgroundSize: "contain",
            backgroundPosition: "right",
            backgroundRepeat: "no-repeat",
          }}
        >
          <h4 className="text-[#EDB8FE] text-3xl sm:text-4xl md:text-5xl lg:text-[62px] leading-tight">
            무료 생기부 분석 <br className="hidden sm:block" /> 친구에게
            알려주기
          </h4>

          <div className="flex flex-col sm:flex-row gap-4 max-w-full sm:max-w-md mt-10">
            <Button
              text="카카오톡 공유하기"
              variant="outlineFilled"
              className="!bg-[#f9e54c] border-none w-full !py-3"
              iconSrc="/icons/talk.svg"
              iconPosition="right"
            />
            <Button
              text="링크 공유하기"
              variant="outlineFilled"
              className="w-full !py-3"
              iconSrc="/icons/link.svg"
              iconPosition="right"
            />
          </div>
        </div>
      </section>

      <section className="px-4 py-10 mt-[10rem]">
        <FAQ />
      </section>
    </main>
  );
}
