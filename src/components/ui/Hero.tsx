import React from "react";
import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandYoutube,
  IconCode,
  IconHome,
  IconRoute,
  IconTerminal2,
} from "@tabler/icons-react";
import { Spotlight } from "./Spotlight";
import { FloatingDock } from "./floating-dock";

import { Button } from "./button";

export function HeroSection() {
  const links = [
    {
      title: "Home",
      icon: <IconHome className="h-full w-full text-neutral-300" />,
      href: "#Home",
    },
    {
      title: "Journey",
      icon: <IconRoute className="h-full w-full text-neutral-300" />,
      href: "#Journey",
    },
    {
      title: "Projects",
      icon: <IconTerminal2 className="h-full w-full text-neutral-300" />,
      href: "#Projects",
    },

    {
      title: "Blogs",
      icon: <IconCode className="h-full w-full text-neutral-300" />,
      href: "https://irshitmukherjee55.hashnode.dev/",
    },
    {
      title: "Youtube",
      icon: <IconBrandYoutube className="h-full w-full text-neutral-300" />,
      href: "https://www.youtube.com/@irshitmukherjee7943",
    },
    {
      title: "LinkedIn",
      icon: <IconBrandLinkedin className="h-full w-full text-neutral-300" />,
      href: "https://www.linkedin.com/in/irshit-mukherjee-693a99219",
    },
    {
      title: "GitHub",
      icon: <IconBrandGithub className="h-full w-full text-neutral-300" />,
      href: "https://github.com/IRSHIT033",
    },
  ];

  return (
    <div
      id="Home"
      className="h-[100vh]  z-10 w-full rounded-md flex items-center justify-center bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden"
    >
      <div className="fixed z-50  bottom-6 md:left-1/2 md:transform md:-translate-x-1/2 left-80">
        <FloatingDock items={links} />
      </div>
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />
      <div className=" p-4 max-w-7xl  mx-auto relative z-10  w-full ">
        <h1 className="text-4xl md:text-7xl   font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
          Hi ! I am{" "}
          <span className="text-4xl md:text-7xl  bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600  text-center font-sans font-bold">
            Irshit Mukherjee
          </span>{" "}
          <br /> A Person who loves to explore.
        </h1>
        <p className="mt-4 font-normal text-sm md:text-xl text-neutral-300 max-w-3xl text-center mx-auto">
          I build scalable, efficient applications and infrastructure with a
          focus on performance, security, and collaboration. I&apos;m passionate
          about solving complex problems through code.
        </p>
        <div className="text-center mx-auto pt-4">
          <Button text={"Resume"} />
        </div>
      </div>
    </div>
  );
}
