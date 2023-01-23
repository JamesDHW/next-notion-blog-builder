import Link from "next/link";
import { FC } from "react";
import { Chip } from "components/Common/Chip";
import { Article } from "types/cms";
import { CalendarIcon } from "icons/calendar";
import { PATHS } from "app/constants";

type BlogLinkCardProps = Article;

export const BlogLinkCard: FC<BlogLinkCardProps> = ({
  slug,
  tags,
  title,
  published,
  summary,
}) => {
  const formattedDate = published.replace(new RegExp("/", "g"), "-");
  const articleSlug = `${PATHS.BLOG}/${formattedDate}/${slug}`;

  return (
    <Link key={slug} href={articleSlug} className="w-full py-4">
      <p className="text-lg font-medium md:text-xl">{title}</p>
      <div className="flex flex-col sm:flex-row gap-2 py-2 sm:p-2 justify-between">
        <div className="flex flex-row gap-2 items-center text-gray-600 dark:text-gray-500">
          <CalendarIcon />
          <p>{new Date(published).toLocaleDateString("en-GB")}</p>
        </div>
        {tags.length > 0 && (
          <div className="flex flex-row gap-2 flex-wrap">
            {tags.map(({ name }) => (
              <Chip key={name}>{name}</Chip>
            ))}
          </div>
        )}
      </div>
      <p className="text-gray-600 dark:text-gray-400">{summary}</p>
      <hr className="my-4 border-gray-500" />
    </Link>
  );
};
