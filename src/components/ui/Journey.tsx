import Image from "next/image";
import React from "react";
import { Timeline } from "@/components/ui/timeline";

export function Journey() {
  const data = [
    {
      title: "Youtuber",
      content: (
        <div>
          <ol className="text-neutral-200 text-sm md:text-sm font-normal mb-8">
            <li>Started my youtube channel contibuting to the community</li>
          </ol>
          <div className="grid grid-cols-2 gap-4">
            <Image
              src="/youtube-image-5.webp"
              alt="startup template"
              width={500}
              height={500}
              className="rounded-lg grayscale transition-all duration-300 hover:grayscale-0 object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src="/youtube-image-1.webp"
              alt="startup template"
              width={500}
              height={500}
              className="rounded-lg object-cover grayscale transition-all duration-300 hover:grayscale-0 h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src="/youtube-image-3.webp"
              alt="startup template"
              width={500}
              height={500}
              className="rounded-lg object-cover grayscale transition-all duration-300 hover:grayscale-0 h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src="/youtube-image-4.webp"
              alt="startup template"
              width={500}
              height={500}
              className="rounded-lg object-cover grayscale transition-all duration-300 hover:grayscale-0 h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div>
        </div>
      ),
    },
    {
      title: "Hackathon winner",
      content: (
        <div>
          <ol className="text-neutral-200 text-xs md:text-sm font-normal mb-8">
            <li>Won hackathon organized by MLH (HACKHEIST 2.0)</li>
            <li>Built desentralized email service built on top polygon</li>
            <li>
              Won track prize in DIVERSION 2K22 (5ire Blockchain, LightHouse)
            </li>
            <li>
              Won track prize in HackForBengal (Postman, Best Google Cloud
              Project)
            </li>
          </ol>
          <div className="grid grid-cols-2 gap-4">
            <Image
              src="/mlh-hackthon.webp"
              alt="hero template"
              width={500}
              height={500}
              className="rounded-lg object-cover grayscale transition-all duration-300 hover:grayscale-0 h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src="/mlh-hackathon.webp"
              alt="feature template"
              width={500}
              height={500}
              className="rounded-lg object-cover grayscale transition-all duration-300 hover:grayscale-0 h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div>
        </div>
      ),
    },
    {
      title: "Hackathon mentor",
      content: (
        <div>
          <ol className="text-neutral-200 text-xs md:text-sm font-normal mb-8">
            <li>Selected as a mentor in Diversion 2K23</li>
          </ol>
          <div className="grid grid-cols-2 gap-4">
            <Image
              src="/hackathonmentor2.webp"
              alt="hero template"
              width={500}
              height={500}
              className="rounded-lg object-cover grayscale transition-all duration-300 hover:grayscale-0 h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src="/hackathon-mentor.webp"
              alt="feature template"
              width={500}
              height={500}
              className="rounded-lg object-cover  grayscale transition-all duration-300 hover:grayscale-0 h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div>
        </div>
      ),
    },
    {
      title: "Speaker at GDG Event",
      content: (
        <div>
          <ol className="text-neutral-200 text-xs md:text-sm font-normal mb-4">
            <li>
              Selected as a speaker for Backend & DevOps at a Google Developers
              Group Event
            </li>
          </ol>

          <div className="grid grid-cols-2 gap-4">
            <Image
              src="/speaker.webp"
              alt="hero template"
              width={500}
              height={500}
              className="rounded-lg object-cover grayscale transition-all duration-300 hover:grayscale-0 h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src="/speaker-2.webp"
              alt="feature template"
              width={500}
              height={500}
              className="rounded-lg object-cover grayscale transition-all duration-300 hover:grayscale-0 h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div>
        </div>
      ),
    },
  ];
  return (
    <div id="Journey" className="w-full ">
      <Timeline data={data} />
    </div>
  );
}
