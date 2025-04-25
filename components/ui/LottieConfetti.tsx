"use client";

import Lottie from "lottie-react";
import animationData from "@/data/confetti.json";

export default function LottieConfetti({ copied }: { copied: boolean }) {
  return (
    <Lottie
      animationData={animationData}
      loop={copied}
      autoplay={copied}
      style={{ height: 200, width: 400 }}
    />
  );
}
