import { ReactNode } from "react";

export const Button = ({ text }: { text: string }): ReactNode => {
  return (
    <a
      href="/resume.pdf"
      download="irshit-resume.pdf"
      className="inline-flex text-xl h-14 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
    >
      {text}
    </a>
  );
};
