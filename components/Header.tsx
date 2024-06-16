"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";

export function Header() {
  const pathname = usePathname();
  const isProjects = pathname.startsWith("/projects");
  const isBlog = pathname.startsWith("/blog");
  const isDashboard = pathname.startsWith("/dashboard");

  if (isProjects || isBlog || isDashboard) return null;

  return (
    <section className="flex justify-between gap-6 pb-10">
      <div className="grid gap-2">
        <h1 className="animate-fade-right font-bold text-lg md:text-2xl">
          Ilham Maulana Pratama
        </h1>
        <p className="text-sm md:text-base animate-fade-right animate-delay-200">
          Full-Stack Web Developer
        </p>
      </div>
      <Image
        src={"/profile.png"}
        alt="profile"
        width={500}
        height={500}
        className="animate-fade-left animate-delay-500 w-[100px] h-[100px] object-cover rounded-full"
      />
    </section>
  );
}
