"use client";

import { FC } from "react";
import { SearchList } from "components/common/SearchList";
import { BlogLinkCard } from "components/blog/BlogLinkCard";
import { Article } from "types/cms";

interface BlogList {
  data: Article[];
}

export const BlogList: FC<BlogList> = ({ data }) => {
  const fetchData = (query: string) =>
    data
      .filter(
        ({ title, summary, tags, published }) =>
          new Date(published) < new Date() &&
          (title.toLowerCase().includes(query) ||
            summary.toLowerCase().includes(query) ||
            summary.toLowerCase().includes(query) ||
            tags.some(({ name }) => name.toLowerCase().includes(query)))
      )
      .sort((a, b) => (a.published > b.published ? -1 : 1));

  return (
    <SearchList<Article>
      ListItem={BlogLinkCard}
      fetchData={fetchData}
      keyExtractor={({ id }) => id}
      placeholder="Search Articles"
    />
  );
};
