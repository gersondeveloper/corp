import React from "react";
import performanceImg from "public/performance.jpg";
import Hero from "@/components/hero";

export default function PerformancePage() {
  return (
    <div>
      <Hero
        imgData={performanceImg}
        imgAlt="Weld"
        title="We serve high performance applications"
      />
    </div>
  );
}
