import { Icon, Icons } from "@site/static/icons";
import {
  AcademicCapIcon,
  RocketLaunchIcon,
  CpuChipIcon,
} from "@heroicons/react/24/outline";
import { LucideProps } from "lucide-react";

export const socialsLinks: {
  name: string;
  href: string;
  Icon: Icon | ((props: LucideProps) => JSX.Element);
}[] = [
  {
    name: "Discord",
    href: "https://discord.com/invite/MPAmCCzT7S",
    Icon: Icons.discord,
  },
  {
    name: "X(Twitter)",
    href: "https://twitter.com/koanprotocol",
    Icon: Icons.twitternew,
  },
  {
    name: "Github",
    href: "https://github.com/Koan-Protocol",
    Icon: Icons.gitHub,
  },
];

export const featuresData = [
  {
    title: "Core Concepts",
    description:
      "Learn about swap, limitorder, crosschain swap, pools, farming games governance, and staking",
    href: "/introduction/coming-soon",
    Icon: AcademicCapIcon,
  },
  {
    title: "Contracts - Dev",
    description:
      "Learn about the architecture of the Koanprotocol smart contracts and how to build on top of the protocol.",
    href: "/developers/coming-soon",
    Icon: CpuChipIcon,
  },

  {
    title: "Tutorials",
    description:
      "Learn step by step on how to use Koan protocol suite if service and how to effectively leverage it",
    href: "/apps/coming-soon",
    Icon: RocketLaunchIcon,
  },
];
