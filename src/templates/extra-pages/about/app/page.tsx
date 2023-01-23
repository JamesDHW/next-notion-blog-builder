import { PageTitle } from "components/common/PageTitle";
import Image from "next/image";
import about from "/public/about.jpg";

export default function About() {
  return (
    <div className="flex flex-col px-8">
      <PageTitle>
        Hey! I{`"`}m {`<your-name>`}
        <span className="inline-block ml-2 animate-waving-hand">👋</span>
      </PageTitle>
      <div className="grid grid-cols-1 sm:grid-cols-2 w-100 ltr justify-center flex-wrap">
        <div className="flex flex-col justify-evenly align-middle text-xl">
          <p className="py-2">
            I{`"`}m {`<someone>`}
          </p>
          <p className="py-2">
            Currently, I{`"`}m working as a{" "}
            <span className="font-semibold">{`<job-title>`}</span> on{" "}
            {`<some-projects>`} at{" "}
            <a
              href="https://www.google.com"
              className="font-semibold underline"
            >
              {`<your-company>`}
            </a>
            .
          </p>
          <p className="py-2">
            <span className="font-semibold">Fun Fact:</span> {`<fun-fact>`}
          </p>
        </div>
        <div className="relative sm:order-none order-first w-100 sm:w-72 h-96 overflow-hidden rounded-lg m-5 hover:scale-[1.02] transition-all hover:shadow-xl">
          <Image
            className="object-cover transition-all"
            src={about}
            alt="me"
            placeholder="blur"
            fill
          />
        </div>
      </div>
    </div>
  );
}
