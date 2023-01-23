import Link from "next/link";
import { FC, SVGProps } from "react";
import { Chip } from "components/Common/Chip";
import { LearningResource } from "types/cms";
import { RESOURCE_ICONS } from "app/resources/constants";

type ResourcesLinkCardProps = LearningResource;

export const ResourcesLinkCard: FC<ResourcesLinkCardProps> = ({
  title,
  uri,
  type,
  tags,
}) => {
  const ResourceTypeIcon: FC<SVGProps<SVGSVGElement>> =
    RESOURCE_ICONS[type.name];

  return (
    <Link
      href={uri}
      target="_blank"
      className="flex flex-row w-full p-2 my-1 shadow hover:scale-[1.01] transition-all"
    >
      <ResourceTypeIcon width={25} height={25} className="m-2 my-auto" />
      <div className="flex sm:flex-row flex-col w-full justify-between">
        <p className="my-auto px-2">{title}</p>
        {tags.length > 0 && (
          <div className="flex flex-row gap-1 sm:my-auto my-1 px-2">
            {tags.map(({ name }) => (
              <Chip key={name}>{name}</Chip>
            ))}
          </div>
        )}
      </div>
    </Link>
  );
};
