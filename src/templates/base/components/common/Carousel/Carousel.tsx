import { FC, ReactNode } from "react";
import classes from "classnames";

interface CarouselProps {
  children: ReactNode;
}

export const Carousel: FC<CarouselProps> = ({ children }) => {
  return (
    <div
      className={classes(
        "relative flex overflow-x-hidden pb-4",
        "before:bg-gradient-to-r before:z-10 before:absolute before:w-24 before:top-0 before:bottom-0 before:pointer-events-none",
        "after:bg-gradient-to-l after:z-10 after:absolute after:w-24 after:top-0 after:bottom-0 after:right-0 after:pointer-events-none",
        "dark:from-gray-900 from-white to-transparent"
      )}
    >
      <div className="flex animate-marquee whitespace-nowrap">{children}</div>
      <div className="absolute flex animate-marquee2 whitespace-nowrap">
        {children}
      </div>
    </div>
  );
};
