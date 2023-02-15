import { PageTitle } from "components/common/PageTitle";
import { TechListDisplay } from "components/tech/TechListDisplay";
import { TECHNOLOGIES } from "./constants";

export default function Tech() {
  return (
    <div className="flex flex-col px-8">
      <PageTitle>Tech</PageTitle>
      <p className="py-2 text-lg">
        {`<something-about-the-tech-stacks-you-use>`}
      </p>
      <div className="grid sm:grid-cols-2 sm:gap-10 gap-8 my-8">
        <div>
          <h2 className="text-2xl font-bold">Web Frontend</h2>
          <TechListDisplay list={TECHNOLOGIES.WEB} />
        </div>
        <div>
          <h2 className="text-2xl font-bold">Mobile Frontend</h2>
          <TechListDisplay list={TECHNOLOGIES.MOBILE} />
        </div>

        <div>
          <h2 className="text-2xl font-bold">Backend</h2>
          <TechListDisplay list={TECHNOLOGIES.BACKEND} />
        </div>
        <div>
          <h2 className="text-2xl font-bold">Databases</h2>
          <TechListDisplay list={TECHNOLOGIES.DATABASES} />
        </div>

        <div>
          <h2 className="text-2xl font-bold">Infrastructure</h2>
          <TechListDisplay list={TECHNOLOGIES.INFRASTRUCTURE} />
        </div>
        <div>
          <h2 className="text-2xl font-bold">Languages</h2>
          <TechListDisplay list={TECHNOLOGIES.LANGUAGES} />
        </div>

        <div>
          <h2 className="text-2xl font-bold">Development</h2>
          <TechListDisplay list={TECHNOLOGIES.DEVELOPMENT} />
        </div>
      </div>
    </div>
  );
}
