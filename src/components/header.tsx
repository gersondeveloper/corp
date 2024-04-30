import Link from "next/link";
import React from "react";

export default function Header() {
  return (
    <div className="w-full absolute text-white z-10">
      <nav className="container flex flex-wrap items-center justify-between p-4 mx-auto md:p-8">
        <Link href="/">Home</Link>
        <Link href="/performance">Performance</Link>
        <Link href="/reliability">Reliability</Link>
        <Link href="/scale">Scale</Link>
      </nav>
    </div>
  );
}
