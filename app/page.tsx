import { AuthorMarkup } from "@/components/SEO/AuthorMarkup";
import { SiteMarkup } from "@/components/SEO/SiteMarkup";

export default function About() {
  return (
    <section className="flex flex-col gap-8 items-cemter justify-center text-center">
      <h1 className="animate-fade-right text-4xl md:text-6xl font-bold leading-snug">
        Crafting Digital Experiences,
      </h1>
      <p className="flex flex-col items-center">
        <span className="animate-fade-right animate-delay-500 text-xl md:text-4xl relative w-[max-content] font-mono before:absolute before:inset-0 before:animate-typewriter before:bg-background after:absolute after:inset-0 after:w-[0.125em] after:animate-caret after:bg-black">
          One Line of Code at a Time.
        </span>
      </p>
      <p className="text-base md:text-xl animate-fade-up animate-delay-1000">
        Hii!👋, my name is <b className="font-bold">Ilham Maulana Pratama</b>{" "}
        and I am a <b className="font-bold">full-stack web developer</b>,
        passionate about digital product that help people execute they needs
        more easier.
      </p>
      <AuthorMarkup />
      <SiteMarkup />
    </section>
  );
}
