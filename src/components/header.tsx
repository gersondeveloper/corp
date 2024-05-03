import Link from "next/link";
import React from "react";

export default function Header() {
  return (
    <div className="w-full absolute text-white z-10">
      <nav className="container flex flex-wrap items-center justify-between p-4 mx-auto md:p-8">
        <div className="font-bold text-xl">
          <Link href="/">Home</Link>
        </div>
        <div className="space-x-4 text-xl">
          <Link href="/performance">Performance</Link>
          <Link href="/reliability">Reliability</Link>
          <Link href="/scale">Scale</Link>
        </div>
      </nav>
    </div>
  );
}
