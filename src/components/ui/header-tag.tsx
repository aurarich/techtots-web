import { cn } from "@/lib/utils";
import { SparklesIcon } from "@heroicons/react/24/outline";
import { cva } from "class-variance-authority";
import React from "react";

interface IHeaderTag {
  title: string;
  className?: string;
}

const tagClass = cva('inline-flex items-center gap-2 px-4 py-2 text-sm font-medium transition-colors rounded-full bg-primary/10 text-primary hover:bg-primary/20')

const HeaderTag: React.FC<IHeaderTag> = ({ title, ...props }) => {
  return (
    <div
      className={cn(tagClass(), props.className)}
    >
      <SparklesIcon className="w-4 h-4" />
      <span>{title}</span>
    </div>
  );
};

export default HeaderTag;
