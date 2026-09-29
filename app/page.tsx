// Must be accessed directly (not destructured) so Next.js inlines it at build time.
const greeting = process.env.NEXT_PUBLIC_GREETING || "Hello from Vercel";

export default function Home() {
  return (
    <div className="flex flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="px-6 text-center">
        <h1 className="text-4xl font-semibold tracking-tight text-black dark:text-zinc-50">
          {greeting}
        </h1>
      </main>
    </div>
  );
}
