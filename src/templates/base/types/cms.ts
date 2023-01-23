import { SelectColor } from "api/services/cms/cms.types";
import { ResourceType } from "app/resources/constants";

export type Article = {
  id: string;
  slug: string;
  title: string;
  summary: string;
  tags: Tag[];
  published: string;
};

export type JournalEntry = {
  id: string;
  slug: string;
  title: string;
  tags: Tag[];
  date: string;
};

export type LearningResource = {
  id: string;
  uri: string;
  title: string;
  type: LearningResourceType;
  tags: Tag[];
};

type Tag = {
  id: string;
  color: SelectColor;
  name: string;
};

type LearningResourceType = {
  id: string;
  color: SelectColor;
  name: ResourceType;
};
