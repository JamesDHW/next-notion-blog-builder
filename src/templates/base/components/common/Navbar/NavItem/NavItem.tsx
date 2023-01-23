import { usePathname } from "next/navigation";
import { FC } from "react";
import classes from "classnames";
import Link from "next/link";

export interface NavItemPops {
  href: string;
  label: string;
}

export const NavItem: FC<NavItemPops> = ({ href, label }) => {
  const path = usePathname();
  const isActive = href.split("/")[1] === path.split("/")[1];

  return (
    <li className="flex justify-center">
      <Link
        href={href}
        key={href}
        className={classes(
          {
            "text-gray-800 dark:text-gray-200": isActive,
            "text-gray-400 dark:text-gray-400": !isActive,
          },
          "py-10 text-3xl",
          "sm:py-2 sm:text-base",
          "px-3 w-full font-semibold rounded-lg hover:dark:bg-gray-800 hover:bg-gray-200 transition-all"
        )}
      >
        {label}
      </Link>
    </li>
  );
};
