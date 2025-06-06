import React from "react";
import { strategyReasons } from "@/data/content";

export const StrategyReasons = () => {
  return (
    <>
      {strategyReasons.map((reason, index) => (
        <div
          key={index}
          className="bg-white p-6 rounded-[16px] h-[170px] text-[20px] leading-tight text-[#1A1A1A] strategy-reason-card py-[24px] px-[32px] flex items-center justify-center"
        >
          {reason}
        </div>
      ))}
    </>
  );
};
