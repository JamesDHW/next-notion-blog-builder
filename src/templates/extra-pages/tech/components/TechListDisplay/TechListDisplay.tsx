import { FC } from "react";
import classes from "classnames";
import { TECH_PROFICIENCY } from "app/tech/constants";

interface TechListDisplayProps {
  list: {
    name: string;
    icons: FC<JSX.IntrinsicElements["svg"]>[];
    experience?: TECH_PROFICIENCY;
  }[];
}

export const TechListDisplay: FC<TechListDisplayProps> = ({ list }) => {
  return (
    <div className="flex-col">
      {list.map(({ icons, name, experience }) => (
        <div key={name} className="flex my-auto">
          <div className="flex">
            {icons.map((Icon, i) => (
              <Icon
                key={`${name}-${i}`}
                width={25}
                height={25}
                className={classes(
                  "my-auto mr-1 bg-white dark:bg-slate-900 rounded-lg",
                  "hover:scale-[1.1] transition-all",
                  { "-ml-3 ": i > 0 }
                )}
              />
            ))}
          </div>

          <p
            className={classes("py-2", {
              "font-bold": experience === TECH_PROFICIENCY.PRODUCTION,
            })}
          >
            {name}
          </p>
        </div>
      ))}
    </div>
  );
};
