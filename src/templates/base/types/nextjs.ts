import { ReactNode } from "react";

export type PageProps<T extends PageParams | CatchAllPageParams> =
  | {
      params?: T;
      children?: ReactNode;
    }
  | undefined;

export type PageParams = {
  slug?: string;
};

export type CatchAllPageParams = {
  slug?: string[];
};
