"use client";
import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

export default function RootTemplate({ children }: { children: React.ReactNode }) {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!container.current) return;
    gsap.fromTo(
      container.current,
      { opacity: 0, filter: "blur(10px)", scale: 0.985 },
      { opacity: 1, filter: "blur(0px)", scale: 1, duration: 0.55, ease: "power2.out" }
    );
  }, { scope: container });

  return (
    <div ref={container} className="will-change-[opacity,filter,transform] w-full min-h-screen">
      {children}
    </div>
  );
}
