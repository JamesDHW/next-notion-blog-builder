import Link from "next/link";
import { FC } from "react";
import { Chip } from "components/Common/Chip";
import { JournalEntry } from "types/cms";
import { CalendarIcon } from "icons/calendar";
import { PATHS } from "app/constants";

type JournalEntryRowProps = JournalEntry;

export const JournalEntryRow: FC<JournalEntryRowProps> = ({
  slug,
  tags,
  title,
  date,
}) => {
  const formattedDate = date.replace(new RegExp("/", "g"), "-");

  const fullSlug = `${PATHS.JOURNAL}/${formattedDate}/${slug}`;

  return (
    <Link
      href={fullSlug}
      className="flex flex-col sm:flex-row w-full p-2 shadow-md justify-between hover:scale-[1.01] transition-all"
    >
      <div className="flex-col my-auto">
        <p className="italic">{title}</p>
        <div className="flex flex-row gap-1 text-gray-600 dark:text-gray-500">
          <CalendarIcon />
          <p>{new Date(date).toLocaleDateString("en-GB")}</p>
        </div>
      </div>
      <div className="flex flex-col sm:flex-row gap-2 py-2 sm:px-2 my-auto">
        {tags.length > 0 && (
          <div className="flex flex-row gap-2">
            {tags.map(({ name }) => (
              <Chip key={name}>{name}</Chip>
            ))}
          </div>
        )}
      </div>
    </Link>
  );
};
