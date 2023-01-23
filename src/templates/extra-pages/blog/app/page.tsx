import { serverSideCmsClient } from "api/services/cms/cms.client";
import { BlogHeader } from "components/blog/BlogHeader";
import { BlogList } from "components/blog/BlogList";
import { isArticle } from "types/guards";

export default async function Blog() {
  const articles = await serverSideCmsClient.getDatabaseEntries(
    process.env.BLOG_DB_ID,
    isArticle
  );

  return (
    <div className="flex flex-col px-8">
      <BlogHeader />
      <BlogList data={articles} />
    </div>
  );
}
