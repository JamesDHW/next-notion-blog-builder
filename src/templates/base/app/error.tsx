"use client";

import Link from "next/link";

export default function Error() {
  return (
    <div className="flex flex-col justify-between max-w-2xl mx-auto mb-16 px-8">
      <div className="font-bold text-center tracking-tight">
        <h1 className="text-8xl my-4">500</h1>
        <h2 className="text-xl md:text-3xl my-4">~ Something went wrong ~</h2>
      </div>
      <Link
        href="/"
        className="bg-gray-200 rounded-lg dark:bg-gray-600 mx-auto p-3 hover:ring-2 ring-gray-300 transition-all"
      >
        Return Home
      </Link>
    </div>
  );
}
