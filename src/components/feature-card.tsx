import React from "react";
import { type AcademicCapIcon } from "@heroicons/react/24/outline";
import Link from "@docusaurus/Link";
import { Icon } from "@site/static/icons";

export interface cardprops {
  title: string;
  href: string;
  description: string;
  Icon: Icon;
}

export default function FeatureCard({
  title,
  href,
  description,
  Icon,
  ...props
}: cardprops) {
  const IconX = Icon;
  return (
    <Link
      {...props}
      to={href}
      className=" p-4 border border-gray-600 hover:border-gray-300 text-current   hover:text-current hover:no-underline  rounded-lg bg-slate-500/40 cursor-pointer  transition-all duration-150"
    >
      <div className="relative w-8 h-8 lg:w-10 lg:h-10 font-bold ">
        <IconX />
      </div>
      <h1 className="font-bold my-2 text-2xl">{title}</h1>
      <p className="text-sm"> {description}</p>
    </Link>
  );
}
