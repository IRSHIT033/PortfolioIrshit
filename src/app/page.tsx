import { Journey } from "@/components/ui/Journey";
import { HeroSection } from "@/components/ui/Hero";
import { Projects } from "@/components/ui/projects";
import { ContactSection } from "@/components/ui/contact";

export default function Home() {
  return (
    <div className="bg-black">
      <HeroSection />
      <Journey />
      <Projects />
      <ContactSection />
    </div>
  );
}
