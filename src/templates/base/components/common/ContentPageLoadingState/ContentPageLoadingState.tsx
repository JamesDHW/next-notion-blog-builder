import { FC } from "react";
import { Skeleton } from "components/common/Skeleton";

export const ContentPageLoadingState: FC = () => {
  return (
    <div className="flex flex-col mt-20 px-8">
      <Skeleton numberOfLineGroups={9} />
    </div>
  );
};
