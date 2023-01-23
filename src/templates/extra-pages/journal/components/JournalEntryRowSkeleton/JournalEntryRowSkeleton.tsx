import { Chip } from "components/Common/Chip";
import { CalendarIcon } from "icons/calendar";

export const JournalEntryRowSkeleton = () => (
  <div className="flex flex-col sm:flex-row w-full p-2 shadow-md justify-between">
    <div className="flex-col my-auto">
      <p className="italic">
        <div role="status" className="animate-pulse w-full">
          <div className="h-3 bg-gray-200 rounded-full dark:bg-gray-700 m-2" />
        </div>
      </p>
      <div className="flex flex-row gap-1 font-semibold text-gray-600 dark:text-gray-500">
        <CalendarIcon className="my-auto" />
        <div role="status" className="animate-pulse w-36">
          <div className="h-3 bg-gray-200 rounded-full dark:bg-gray-700 m-2" />
        </div>
      </div>
    </div>
    <div className="flex flex-col sm:flex-row gap-2 py-2 sm:px-2 my-auto">
      <Chip>
        <div role="status" className="animate-pulse w-16">
          <div className="h-3 bg-gray-200 rounded-full dark:bg-gray-700 my-1" />
        </div>
      </Chip>
    </div>
  </div>
);
