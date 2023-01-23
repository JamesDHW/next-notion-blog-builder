import { FC, ReactNode } from "react";

export interface ChipProps {
  children: ReactNode;
}

export const PageTitle: FC<ChipProps> = ({ children }) => {
  return (
    <h1 className="font-bold text-3xl md:text-4xl mb-5 text-black dark:text-white">
      {children}
    </h1>
  );
};
