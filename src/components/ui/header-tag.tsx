import { SparklesIcon } from "@heroicons/react/24/outline";
import React from "react";

interface IHeaderTag {
  title: string;
  className?: string;
}

const HeaderTag: React.FC<IHeaderTag> = ({ title, ...props }) => {
  return (
    <div
      className={`inline-flex items-center gap-2 px-4 py-2 text-sm font-medium transition-colors rounded-full bg-primary/10 text-primary hover:bg-primary/20 ${props.className}`}
    >
      <SparklesIcon className="w-4 h-4" />
      <span>{title}</span>
    </div>
  );
};

export default HeaderTag;
