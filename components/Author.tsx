import Image from "next/image";
import { site_config } from "@/config/site.config";
import Link from "next/link";
import { LazyContainer } from "./LazyContainer";

export function Author() {
  return (
    <LazyContainer className="py-10 flex flex-col md:flex-row max-w-lg">
      <Link href={"/about"} className="w-full">
        <Image
          src={"/profile.png"}
          alt="profile"
          width={500}
          height={500}
          className="animate-fade-left animate-delay-500 w-[60px] h-[60px] object-cover rounded-full mb-4"
        />
      </Link>
      <Link
        href={"/about"}
        className="animate-fade-right animate-delay-500 flex flex-col gap-2"
      >
        <p className="font-medium">{site_config.author.name}</p>
        <p className="text-sm">{site_config.author.bio}</p>
      </Link>
    </LazyContainer>
  );
}
