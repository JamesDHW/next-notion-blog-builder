"use client";

import { FC, useCallback, useState } from "react";
import classes from "classnames";
import { SearchList } from "components/common/SearchList";
import { ResourcesLinkCard } from "components/resources/ResourcesLinkCard";
import { LearningResource } from "types/cms";
import { RESOURCE_ICONS, ResourceType } from "app/resources/constants";

interface ResourceList {
  data: LearningResource[];
}

export const ResourceList: FC<ResourceList> = ({ data }) => {
  const [selectedCategories, setSelectedCategories] = useState<ResourceType[]>(
    []
  );

  const toggleCategory = (cat: ResourceType) => {
    if (!selectedCategories.includes(cat))
      return setSelectedCategories((v) => [...v, cat]);

    return setSelectedCategories((v) => v.filter((c) => c !== cat));
  };

  const fetchData = useCallback(
    (query: string) =>
      data.filter(
        ({ title, type, tags }) =>
          isCategorySelected(selectedCategories, type.name) &&
          (title.toLowerCase().includes(query) ||
            type.name.toLowerCase().includes(query) ||
            tags.some(({ name }) => name.toLowerCase().includes(query)))
      ),
    [data, selectedCategories]
  );

  return (
    <SearchList<LearningResource>
      ListItem={ResourcesLinkCard}
      fetchData={fetchData}
      keyExtractor={({ id }) => id}
      placeholder="Search Recommendations"
    >
      <div className="flex justify-around sm:justify-start gap-1">
        {Object.entries(RESOURCE_ICONS).map(([k, Icon]) => (
          <button
            key={k}
            onClick={() => toggleCategory(k as ResourceType)}
            className={classes("rounded-lg p-2", {
              "bg-gray-200 dark:bg-gray-900 shadow dark:shadow-gray-600":
                selectedCategories.includes(k as ResourceType),
              "bg-gray-100 dark:bg-gray-700": !selectedCategories.includes(
                k as ResourceType
              ),
            })}
          >
            <Icon width={24} height={24} />
          </button>
        ))}
      </div>
    </SearchList>
  );
};

const isCategorySelected = (categories: ResourceType[], cat: ResourceType) =>
  categories.includes(cat) || categories.length === 0;
