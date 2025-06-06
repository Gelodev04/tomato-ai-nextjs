"use client";

import { menuItems as originalMenuItems } from "@/data/content";

interface MenuItemsProps {
  activeMenuIndex: number;
  onMenuChange: (index: number) => void;
}

export default function MenuItems({
  activeMenuIndex,
  onMenuChange,
}: MenuItemsProps) {
  const handleClick = (clickedLabel: string, index: number) => {
    onMenuChange(index);
  };

  return (
    <>
      {originalMenuItems.map((item, index) => (
        <span
          key={item.label}
          onClick={() => handleClick(item.label, index)}
          className={`py-5 px-5 text-[24px] cursor-pointer  ${
            activeMenuIndex === index
              ? "font-medium border-b-[3px] border-black"
              : ""
          }`}
        >
          {item.label}
        </span>
      ))}
    </>
  );
}
