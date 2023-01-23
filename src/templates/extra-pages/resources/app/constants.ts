import { FC } from "react";

import { BookIcon } from "icons/book";
import { VideoIcon } from "icons/video";
import { ChannelIcon } from "icons/channel";
import { ArticleIcon } from "icons/article";
import { LinkIcon } from "icons/link";
import { EnvelopeIcon } from "icons/envelope";

export type ResourceType = keyof typeof RESOURCE_ICONS;
export const RESOURCE_ICONS = {
  BOOK: BookIcon,
  ARTICLE: ArticleIcon,
  CHANNEL: ChannelIcon,
  VIDEO: VideoIcon,
  NEWSLETTER: EnvelopeIcon,
  WEBSITE: LinkIcon,
} as const;
