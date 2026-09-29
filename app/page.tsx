import { connection } from "next/server";

// Must be accessed directly (not destructured) so Next.js inlines it at build time.
const greeting = process.env.NEXT_PUBLIC_GREETING || "Hello from Vercel";

export default async function Home() {
  // Render per request so the date is current, not frozen at build time.
  await connection();
  const today = new Date().toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  });

  return (
    <div className="flex flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="px-6 text-center">
        <h1 className="text-4xl font-semibold tracking-tight text-black dark:text-zinc-50">
          {greeting}
        </h1>
        <p className="mt-4 text-lg text-zinc-600 dark:text-zinc-400">{today}</p>
      </main>
    </div>
  );
}
