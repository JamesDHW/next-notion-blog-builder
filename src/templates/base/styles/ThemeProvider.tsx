"use client";

import { ThemeProvider as NextThemeProvider } from "next-themes";
import { FC, ReactNode } from "react";

interface ThemeProviderProps {
  children: ReactNode;
  attribute?: "class";
}

export const ThemeProvider: FC<ThemeProviderProps> = ({
  children,
  attribute,
}) => <NextThemeProvider attribute={attribute}>{children}</NextThemeProvider>;
