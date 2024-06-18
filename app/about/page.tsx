import { Header } from "@/components/Header";
import { AuthorMarkup } from "@/components/SEO/AuthorMarkup";
import {
  EnvelopeClosedIcon,
  GitHubLogoIcon,
  LinkedInLogoIcon,
} from "@radix-ui/react-icons";
import Link from "next/link";

export default function About() {
  return (
    <section className="mx-auto flex flex-col gap-6 pt-20">
      <Header />
      <ul className="animate-fade-up animate-delay-700 list-inside flex flex-wrap items-center gap-4 pb-6">
        <li className="flex gap-2 items-center">
          <EnvelopeClosedIcon className="w-5 h-5" /> Email:{" "}
          <Link
            className="underline"
            href={"mailto:ilhammaulana.dev@gmail.com"}
          >
            ilhammaulana.dev@gmail.com
          </Link>
        </li>
        <li className="flex gap-2 items-center">
          <GitHubLogoIcon className="w-5 h-5" /> Github:{" "}
          <Link
            className="underline"
            href={"https://github.com/impfundev"}
            target="_blank"
          >
            impfundev
          </Link>
        </li>
        <li className="flex gap-2 items-center">
          <LinkedInLogoIcon className="w-5 h-5" /> LinkedIn:{" "}
          <Link
            className="underline"
            href={"https://www.linkedin.com/in/ilhammp"}
            target="_blank"
          >
            ilhammp
          </Link>
        </li>
      </ul>
      <div className="grid gap-4 animate-fade-up animate-delay-1000">
        <p>
          Passionate full-stack web developer with a strong foundation in
          Javascript and React for creating exceptional web applications. My
          journey began at Harisenin.com's Full-Stack Web Development Bootcamp,
          where I honed my skills in teamwork with Agile fondation, JavaScript,
          React, Node.js, REST API, and Database.
        </p>
        <p>
          This combination of practical development skills and theoretical
          knowledge equips me to contribute meaningfully to the ever-evolving
          world of technology. I'm proficient in leveraging CI/CD practices,
          also frameworks like Next.js combined with Typescript to ensure
          efficient development and delivery of high-quality, functional web
          applications.
        </p>
      </div>
      <AuthorMarkup />
    </section>
  );
}
