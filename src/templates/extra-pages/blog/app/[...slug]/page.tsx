import { notFound } from "next/navigation";
import { cache } from "react";
import { serverSideCmsClient } from "api/services/cms/cms.client";
import { NotionRenderer } from "components/Common/NotionRenderer";

import { CatchAllPageParams, PageProps } from "types/nextjs";
import { isArticle, isTwoStringArray } from "types/guards";

export default async function ArticlePage(
  props: PageProps<CatchAllPageParams>
) {
  const pathParams = props?.params?.slug;
  if (!isTwoStringArray(pathParams)) throw notFound();

  const [date, slug] = pathParams;
  const article = await getArticle(date, slug);

  return (
    <div className="mb-8">
      <NotionRenderer recordMap={article} />
    </div>
  );
}

const getArticle = cache(async (date: string, slug: string) => {
  try {
    return await serverSideCmsClient.getPageContent(process.env.BLOG_DB_ID, {
      and: [
        { property: "published", date: { equals: date } },
        {
          property: "slug",
          rich_text: { equals: slug },
        },
      ],
    });
  } catch {
    throw notFound();
  }
});

export async function generateStaticParams() {
  const articles = await serverSideCmsClient.getDatabaseEntries(
    process.env.BLOG_DB_ID,
    isArticle
  );

  return articles.map(({ published, slug }) => ({ slug: [published, slug] }));
}
