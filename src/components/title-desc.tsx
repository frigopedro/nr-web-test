import { Colors } from "@/constants/colors";
import { cn } from "@/utils/cn";
import React from "react";

interface TitleDescProps {
  title?: string;
  desc?: string;
  titleClassName: string;
}
export default function TitleDesc({
  title,
  desc,
  titleClassName,
}: TitleDescProps) {
  return (
    <div className="px-6 pt-5 lg:px-10 lg:pt-9">
      <h3 className={cn("text-xl font-semibold textanimation", titleClassName)}>
        {title}
      </h3>
      <p className="font-medium textanimation">{desc}</p>
    </div>
  );
}
