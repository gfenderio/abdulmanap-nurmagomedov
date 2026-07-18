"use client";
import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

export default function RootTemplate({ children }: { children: React.ReactNode }) {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.fromTo(
      container.current,
      { opacity: 0, filter: "blur(4px)", scale: 0.99 },
      { opacity: 1, filter: "blur(0px)", scale: 1, duration: 0.6, ease: "power3.out" }
    );
  }, { scope: container });

  return (
    <div ref={container} className="will-change-transform">
      {children}
    </div>
  );
}
