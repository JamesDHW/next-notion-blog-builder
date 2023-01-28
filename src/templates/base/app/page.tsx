import Image from "next/image";
import Link from "next/link";
import { BlogHighlightCard } from "components/home/BlogHighlightCard";
import avatar from "/public/avatar.jpg";
import { ArrowRightIcon } from "icons/arrow-right";
import { PATHS } from "./constants";

export default function Home() {
  return (
    <div className="px-8">
      <div className="flex sm:flex-row flex-col-reverse justify-between">
        <div className="flex flex-col justify-top align-top mb-8 sm:mb-14 text-center sm:text-left">
          <h1 className="font-bold text-2xl md:text-4xl mb-8 tracking-tight text-gray-700 dark:text-white">
            Albert Einstein
          </h1>
          <h2 className="text-gray-700 dark:text-gray-200 md:text-xl text-xl">
            Theoretical Physicist working at the{" "}
            <Link
              className="font-semibold"
              href="https://en.wikipedia.org/wiki/Swiss_Federal_Institute_of_Intellectual_Property"
              target="_blank"
              rel="noreferrer"
            >
              Swiss Patent Office
            </Link>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-base sm:mr-4">
            Working to become one of the greatest and most influential physicists of all time.
          </p>
        </div>
        <div className="relative mx-auto min-w-[225px] w-[225px] h-[225px] overflow-hidden rounded-full m-5 hover:scale-[1.05] transition-all hover:shadow-xl shadow-md">
          <Image
            alt="me"
            src={avatar}
            className="object-cover"
            placeholder="blur"
            fill
          />
        </div>
      </div>
      <h3 className="font-bold text-2xl md:text-4xl tracking-tight my-6">
        Articles
      </h3>
      <div className="flex gap-6 flex-col md:flex-row overflow-hidden pb-4">
        <BlogHighlightCard
          slug="YYYY-MM-DD/slug"
          title="Does the Inertia of a Body Depend Upon Its Energy Content?"
          gradient="from-gray-300 to-gray-500"
        />
        <BlogHighlightCard
          slug="YYYY-MM-DD/slug"
          title="On the Electrodynamics of Moving Bodies"
          gradient="from-gray-700 to-gray-300"
        />
        <BlogHighlightCard
          slug="YYYY-MM-DD/slug"
          title="On a Heuristic Viewpoint Concerning the Production and Transformation of Light"
          gradient="from-gray-700 to-gray-300"
        />
      </div>
      <Link className="flex text-lg justify-end" href={PATHS.BLOG}>
        More articles{" "}
        <span className="my-auto">
          <ArrowRightIcon width={20} height={20} />
        </span>
      </Link>
      <hr className="my-4 border-b-2" />

      <Link className="flex text-lg justify-end" href={PATHS.RESOURCES}>
        {`<tell-people-about-learning-resources-you-use>`}{" "}
        <span className="my-auto">
          <ArrowRightIcon width={20} height={20} />
        </span>
      </Link>
      <hr className="my-4 border-b-2" />
    </div>
  );
}
