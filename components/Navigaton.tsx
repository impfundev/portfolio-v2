"use client";

import { TokensIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export function Navigation() {
  const pathname = usePathname();
  const isDashboard = pathname.startsWith("/dashboard");
  const [show, setShow] = useState(false);

  if (isDashboard) return null;

  return (
    <header className="flex flex-col items-center">
      <nav className="container mx-auto animate-fade-up fixed top-6 md:top-10 w-[80vw] md:w-[24rem] overflow-x-auto bg-white/75 rounded-full backdrop-blur-md z-50">
        <div className="w-full flex items-center justify-between text-sm md:text-base">
          <Link
            href={"/"}
            className={`py-2 ${
              pathname === "/" && "border-b border-foreground font-mono"
            }`}
          >
            &#123; IMP &#125;
          </Link>
          <nav className="hidden md:flex md:items-center md:justify-between">
            <Link
              href={"/about"}
              className={`px-4 py-2 ${
                pathname === "/about" && "border-b border-foreground"
              }`}
            >
              About
            </Link>
            <Link
              className={`px-4 py-2 ${
                pathname === "/projects" && "border-b border-foreground"
              }`}
              href={"/projects"}
            >
              Projects
            </Link>
            <Link
              className={`px-4 py-2 ${
                pathname === "/blog" && "border-b border-foreground"
              }`}
              href={"/blog"}
            >
              Blog
            </Link>
          </nav>
          <button onClick={() => setShow(!show)} className="rounded-full">
            <TokensIcon
              className={`md:hidden w-5 h-5 md:w-6 md:h-6 ${
                show && "rotate-45"
              } transition-all duration-500`}
            />
          </button>
        </div>
      </nav>

      <nav
        className={`${
          show ? "w-full px-6" : "w-0 px-0"
        } h-screen fixed top-0 right-0 flex flex-col items-center gap-6 pt-20 bg-white/75 backdrop-blur-md z-40 transition-all`}
      >
        <Link
          href={"/"}
          onClick={() => setShow(!show)}
          className={`${!show && "hidden"} px-4 py-2 ${
            pathname === "/" && "border-b border-foreground font-mono"
          }`}
        >
          Home
        </Link>
        <Link
          href={"/about"}
          onClick={() => setShow(!show)}
          className={`${!show && "hidden"} px-4 py-2 ${
            pathname === "/about" && "border-b border-foreground"
          }`}
        >
          About
        </Link>
        <Link
          onClick={() => setShow(!show)}
          className={`${!show && "hidden"} px-4 py-2 ${
            pathname === "/projects" && "border-b border-foreground"
          }`}
          href={"/projects"}
        >
          Projects
        </Link>
        <Link
          onClick={() => setShow(!show)}
          className={`${!show && "hidden"} px-4 py-2 ${
            pathname === "/blog" && "border-b border-foreground"
          }`}
          href={"/blog"}
        >
          Blog
        </Link>
      </nav>
    </header>
  );
}
