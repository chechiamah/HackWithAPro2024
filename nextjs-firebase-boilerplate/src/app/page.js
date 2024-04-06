
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 w-full max-w-5xl flex items-center justify-center font-mono text-lg lg:text-xl">
        Study Buddy
      </div>

      <div className="mb-32 grid justify-center lg:mb-0">
        {/* Button Link*/}
        <Link
          href="/survey"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800 hover:dark:bg-opacity-30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className="mb-3 text-2xl font-semibold">
            Button
          </h2>
        </Link>

      </div>
    </main>
  );
}

