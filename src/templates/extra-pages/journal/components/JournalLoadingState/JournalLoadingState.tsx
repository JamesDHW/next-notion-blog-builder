"use client";

import { FC } from "react";
import { usePathname } from "next/navigation";
import { ContentPageLoadingState } from "components/common/ContentPageLoadingState";
import { PATHS } from "app/constants";
import { JournalHeader } from "../JournalHeader/index";
import { JournalEntryRowSkeleton } from "../JournalEntryRowSkeleton/index";
import { JournalEntryList } from "../JournalEntryList/index";

export const JournalLoadingState: FC = () => {
  const path = usePathname();

  if (path === PATHS.JOURNAL)
    return (
      <div className="flex flex-col px-8">
        <JournalHeader />
        <JournalEntryList data={[]} />
        <div className="my-4">
          {Array.from({ length: 5 }).map((_, i) => (
            <JournalEntryRowSkeleton key={i} />
          ))}
        </div>
      </div>
    );

  return <ContentPageLoadingState />;
};
