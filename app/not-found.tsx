import Link from "next/link";

export const runtime = "edge";

export default async function NotFound() {
  return (
    <section className="flex flex-col gap-8 items-cemter justify-center text-center">
      <h1 className="animate-fade-right text-4xl md:text-6xl font-bold leading-snug">
        Not Found
      </h1>
      <Link href={"/"} className="text-lg md:text-xl underline">
        Back to home
      </Link>
    </section>
  );
}
