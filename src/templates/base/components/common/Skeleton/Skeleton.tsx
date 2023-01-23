import { FC } from "react";

interface SkeletonProps {
  numberOfLineGroups?: number;
}

export const Skeleton: FC<SkeletonProps> = ({ numberOfLineGroups = 1 }) => {
  return (
    <div role="status" className="animate-pulse mb-10">
      <div className="h-10 bg-gray-200 rounded-md dark:bg-gray-700 w-64 mb-4"></div>
      {Array.from({ length: numberOfLineGroups }).map((_, i) => (
        <>
          <div
            key={`lng-skel-${i}`}
            className="h-3 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5 mr-8"
          />
          <div
            key={`mg-skel-${i}`}
            className="h-3 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5 mr-4"
          />
          <div
            key={`sm-skel-${i}`}
            className="h-3 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5 mr-3"
          />
        </>
      ))}
    </div>
  );
};
