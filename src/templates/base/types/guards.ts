import { NotionDatabaseProperty } from "api/services/cms/cms.types";
import { Article, JournalEntry, LearningResource } from "./cms";

export const isTwoStringArray = (
  value: string[] | undefined
): value is [string, string] => {
  return (
    Array.isArray(value) &&
    value.length === 2 &&
    value.every((item) => typeof item === "string")
  );
};

export const isArticle = (obj: {
  [key: string]: NotionDatabaseProperty;
}): obj is Article => {
  return (
    typeof obj === "object" &&
    typeof obj.id === "string" &&
    typeof obj.slug === "string" &&
    typeof obj.title === "string" &&
    typeof obj.summary === "string" &&
    Array.isArray(obj.tags) &&
    typeof obj.published === "string"
  );
};

export const isJournalEntry = (obj: {
  [key: string]: NotionDatabaseProperty;
}): obj is JournalEntry => {
  return (
    typeof obj === "object" &&
    typeof obj.id === "string" &&
    typeof obj.slug === "string" &&
    typeof obj.title === "string" &&
    Array.isArray(obj.tags) &&
    typeof obj.date === "string"
  );
};

export const isLearningResource = (obj: {
  [key: string]: NotionDatabaseProperty;
}): obj is LearningResource => {
  return (
    typeof obj === "object" &&
    typeof obj.id === "string" &&
    typeof obj.uri === "string" &&
    typeof obj.title === "string" &&
    typeof obj.type === "object" &&
    !Array.isArray(obj.type) &&
    typeof obj.type?.name === "string" &&
    Array.isArray(obj.tags)
  );
};
