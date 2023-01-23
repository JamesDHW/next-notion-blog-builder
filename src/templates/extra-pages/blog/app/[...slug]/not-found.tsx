import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col justify-between max-w-2xl mx-auto mb-16 px-8">
      <div className="font-bold text-center tracking-tight">
        <h1 className="text-8xl my-4">404</h1>
        <h2 className="text-xl md:text-3xl my-4">~ Article Not Found ~</h2>
      </div>
      <p className="text-gray-600 dark:text-gray-400 my-16 text-xl sm:text-3xl text-center font-bold">
        This isn{`'`}t the webpage you{`'`}re looking for!
      </p>
      <Link
        href="/"
        className="bg-gray-200 rounded-lg dark:bg-gray-600 mx-auto p-3 hover:ring-2 ring-gray-300 transition-all"
      >
        Return Home
      </Link>
    </div>
  );
}
