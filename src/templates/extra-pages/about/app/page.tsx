import { PageTitle } from "components/common/PageTitle";
import Image from "next/image";
import Link from "next/link";
import about from "/public/about.jpg";

export default function About() {
  return (
    <div className="flex flex-col px-8">
      <PageTitle>
        Hey! I{`'`}m Albert Einstein
        <span className="inline-block ml-2 animate-waving-hand">👋</span>
      </PageTitle>
      <div className="grid grid-cols-1 sm:grid-cols-2 w-100 ltr justify-center flex-wrap">
        <div className="flex flex-col justify-evenly align-middle text-xl">
          <p className="py-2">
            I{`'`}m a German-born theoretical physicist, widely acknowledged to
            be one of the greatest and most influential physicists of all time.
          </p>
          <p className="py-2">
            Currently, I{`'`}m working as an{" "}
            <span className="font-semibold">Assistant Examiner</span> evaluating
            patent applications at the{" "}
            <Link
              className="font-semibold"
              href="https://en.wikipedia.org/wiki/Swiss_Federal_Institute_of_Intellectual_Property"
              target="_blank"
              rel="noreferrer"
            >
              Swiss Patent Office
            </Link>
            .
          </p>
          <p className="py-2">
            <span className="font-semibold">Fun Fact:</span> In 1905, I
            published 4 papers which all provided a major contribution to modern
            Physics today, including my famous{" "}
            <span className="font-semibold">E = mc²</span>!
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
