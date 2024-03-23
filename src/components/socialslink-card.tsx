import React from "react";
import Link from "@docusaurus/Link";
import { Icon } from "@site/static/icons";
import { LucideProps } from "lucide-react";

export interface cardprops {
  name: string;
  href: string;
  Icon: Icon | ((props: LucideProps) => JSX.Element);
}

export default function SocialsCard({ name, href, Icon, ...props }: cardprops) {
  const IconX = Icon;
  return (
    <Link
      {...props}
      to={href}
      className="flex items-center justify-center gap-3 p-4 text-current border border-gray-600 hover:border-gray-300 hover:text-current hover:no-underline  rounded-lg cursor-pointer  transition-all duration-150"
    >
      <div className="relative w-8 h-8 lg:w-10 lg:h-10 font-bold text-black dark:text-white">
        <IconX />
      </div>
      <p className=" my-2 text-lg">{name}</p>
    </Link>
  );
}
