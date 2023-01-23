export enum NotionBlockTypes {
  rich_text = "rich_text",
  multi_select = "multi_select",
  select = "select",
  title = "title",
  last_edited_time = "last_edited_time",
  date = "date",
  url = "url",
}

export type SelectColor =
  | "default"
  | "gray"
  | "brown"
  | "orange"
  | "yellow"
  | "green"
  | "blue"
  | "purple"
  | "pink"
  | "red";

export type SelectProperty = { color: SelectColor; name: string; id: string };

export type NotionDatabaseProperty =
  | string
  | SelectProperty
  | SelectProperty[]
  | null;
