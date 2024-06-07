import {
  EnvelopeClosedIcon,
  GitHubLogoIcon,
  LinkedInLogoIcon,
} from "@radix-ui/react-icons";
import Link from "next/link";

export function Footer() {
  const date = new Date();
  return (
    <footer className="px-10 py-20 flex items-center flex-col bg-gradient-to-b from-background to-primary">
      <hr className="border border-black" />
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
      <p>&copy; {date.getFullYear()}, MIT Licence, Ilham Maulana Pratama</p>
    </footer>
  );
}
