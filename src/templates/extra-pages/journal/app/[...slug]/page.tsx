import { notFound } from "next/navigation";
import { serverSideCmsClient } from "api/services/cms/cms.client";
import { NotionRenderer } from "components/Common/NotionRenderer";

import { CatchAllPageParams, PageProps } from "types/nextjs";
import { isJournalEntry, isTwoStringArray } from "types/guards";

export default async function JournalPage(
  props: PageProps<CatchAllPageParams>
) {
  const pathParams = props?.params?.slug;
  if (!isTwoStringArray(pathParams)) throw notFound();

  const [date, slug] = pathParams;
  const journalEntry = await getJournalEntry(date, slug);

  return (
    <div className="mb-8">
      <NotionRenderer recordMap={journalEntry} />
    </div>
  );
}

const getJournalEntry = async (date: string, slug: string) => {
  try {
    return await serverSideCmsClient.getPageContent(process.env.JOURNAL_DB_ID, {
      and: [
        { property: "date", date: { equals: date } },
        {
          property: "slug",
          rich_text: { equals: slug },
        },
      ],
    });
  } catch {
    throw notFound();
  }
};

export async function generateStaticParams() {
  const journalEntries = await serverSideCmsClient.getDatabaseEntries(
    process.env.JOURNAL_DB_ID,
    isJournalEntry
  );

  return journalEntries.map(({ date, slug }) => ({ slug: [date, slug] }));
}
