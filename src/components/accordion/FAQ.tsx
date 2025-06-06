import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { accordionItems } from "@/data/content";

export function FAQ() {
  return (
    <Accordion
      type="single"
      collapsible
      className="w-full mx-auto border border-[#E5E7EB] p-8 rounded-[20px]"
      defaultValue="item-0"
    >
      <h5 className="text-[#111827]  font-[500] text-[40px] md:text-[50px] mb-10">
        토마토 AI - 자주 묻는 질문
      </h5>
      {accordionItems.map((item, index) => (
        <AccordionItem className="" key={index} value={`item-${index}`}>
          <AccordionTrigger className="md:text-[24px] text-[#111827] font-[500] px-3 text-[20px] py-5">
            {item.title}
          </AccordionTrigger>
          <AccordionContent className="">
            <p className="text-[#6B7280] px-8 md:text-[16px] text-[14px]">
              {item.content}
            </p>
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
