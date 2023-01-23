import Link from "next/link";
import { FC } from "react";
import { NAVBAR_ITEMS, PATHS } from "app/constants";

export const Footer: FC = () => {
  return (
    <footer className="flex flex-col justify-center items-start mx-auto w-full px-8">
      <hr className="w-full border-1 border-gray-200 dark:border-gray-800 mb-8" />
      <div className="w-full grid grid-cols-1 gap-4 pb-16 sm:grid-cols-3 sm:gap-32">
        <div className="flex flex-col space-y-4">
          {NAVBAR_ITEMS.map(({ label, href }) => (
            <Link
              key={href}
              href={href}
              className="text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 transition"
            >
              {label}
            </Link>
          ))}
        </div>
        <div className="flex flex-col space-y-4">
          <Link
            href={PATHS.TECH}
            className="text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 transition"
          >
            Tech
          </Link>
          <Link
            href={PATHS.RESOURCES}
            className="text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 transition"
          >
            Resources
          </Link>
        </div>
        <div className="flex flex-col space-y-4">
          <Link
            href="https://github.com/<your-github-profile>/"
            className="text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 transition"
          >
            GitHub
          </Link>
          <Link
            href="https://www.linkedin.com/in/<your-linkedin-profile>/"
            className="text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 transition"
          >
            LinkedIn
          </Link>
        </div>
      </div>
    </footer>
  );
};
