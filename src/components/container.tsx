import { cn } from "@/utils/cn";
import { motion } from "framer-motion";
import React from "react";

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}
export default function Container({
  children,
  className,
  ...rest
}: ContainerProps) {
  return (
    <motion.div
      className={cn(
        "rounded-[25px] lg:rounded-[30px] bg-black animationcontainer",
        className
      )}
    >
      {children}
    </motion.div>
  );
}
