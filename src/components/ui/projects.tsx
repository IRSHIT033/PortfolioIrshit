import React from "react";
import { BentoGrid, BentoGridItem } from "../ui/bento-grid";

import Cardheader from "./Cardheader";
import GithubLink from "./githubprojectlink";

export function Projects() {
  return (
    <div
      id="Projects"
      className="max-w-7xl mx-auto py-20 px-4 md:px-8 lg:px-10 "
    >
      <h2 className="relative  z-10 text-4xl md:text-7xl py-5 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600  text-center font-sans font-bold">
        Projects
      </h2>
      <BentoGrid className="max-w-4xl mx-auto mt-10">
        {items.map((item, i) => (
          <BentoGridItem
            key={i}
            title={item.title}
            description={item.description}
            header={item.header}
            icon={item.icon}
            className={i === 3 || i === 6 ? "md:col-span-2" : ""}
          />
        ))}
      </BentoGrid>
    </div>
  );
}

const items = [
  {
    title: "Blaze Cache",
    description:
      "Published npm package provides a simple utility for caching the results of functions based on their input arguments.",
    header: <Cardheader image_src="/blaze-cache.webp" />,
    icon: <GithubLink github_link="https://github.com/IRSHIT033/LRU-CACHE" />,
  },
  {
    title: "Flint",
    description: `Team management web application with interactive Kanbanboards, Realtime drawing board in a room for collaboration, scheduled notifications for task assigment`,
    header: <Cardheader image_src="/flint.webp" />,
    icon: (
      <GithubLink github_link="https://github.com/orgs/collab-hub12/repositories" />
    ),
  },

  {
    title: "VIBE-n",
    description:
      "Realtime chat application in MERN stack deployed on digital ocean droplet ",
    header: <Cardheader image_src="/viben.webp" />,
    icon: <GithubLink github_link="https://github.com/IRSHIT033/VIBE-n" />,
  },
  {
    title: "GolangMicro",
    description:
      "Ecommerce application's server but in Microservices architecture",
    header: <Cardheader image_src="/micro.webp" />,
    icon: (
      <GithubLink github_link="https://github.com/IRSHIT033/Microservice-in-Golang" />
    ),
  },
  {
    title: "LinkHub",
    description:
      "LinkHub is an Android app that allows users to store and edit important links in one place.",
    header: <Cardheader image_src="/linkhub.webp" />,
    icon: <GithubLink github_link="https://github.com/IRSHIT033/Link-Hub" />,
  },
];
