import React, { useEffect, useState } from "react";
import Link from "next/link";
import getStarredRepos from "@lib/getStarredRepos";
import userData from "@constants/data";

export default function LatestCode({ repositories }) {
  const [repos, setRepos] = useState(repositories);

  return (
    <section className="bg-white dark:bg-gray-900 pb-10">
      <div className="flex flex-col md:flex-row justify-between items-center md:pt-10 px-[8vw]">
        <header className="flex flex-col md:flex-col items-start pt-10">
          <div className="w-full inline-flex justify-between items-center">
            <p className="dark:text-slate-200 border-l-8 border-blue-400 pl-2 text-5xl font-bold my-2">
              Latest Code
            </p>
            <a
              target="_blank"
              href={`https://github.com/${userData.githubUsername}`}
              className="flex justify-center items-center rounded-sm bg-slate-700 px-5 text-sm text-white h-8 mr-10 hover:bg-blue-400"
            >
              View GitHub
            </a>
          </div>

          <p className="text-lg my-6 dark:text-slate-300">
            Throughout my time at Waterloo, I had the opportunity to work with a
            group of amazing individuals all with varying skillsets to create
            various projects showcased here. I couldn't have completed these
            projects without them and it strengthened my teamwork skill.
            However, my role was to bring our business ideas to fruition through
            using my expertise, software development. I was primarily the only
            developer on the projects, so the technical portion of the work that
            is being shown is not shared and is my own work.
          </p>
        </header>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-10 px-[8vw] mt-10">
        {repos &&
          repos.map((latestRepo, idx) => (
            <GithubRepoCard latestRepo={latestRepo} key="idx" />
          ))}
      </div>
    </section>
  );
}

const GithubRepoCard = ({ latestRepo }) => {
  return (
    <div className="github-repo">
      <h1 className="font-semibold text-xl dark:text-slate-300 text-slate-900">
        {latestRepo.name}
      </h1>
      <p className="text-lg font-normal mt-2 mb-4 text-gray-500 dark:text-slate-500">
        {latestRepo.description}
      </p>
      <a
        href={latestRepo.clone_url}
        target="_blank"
        className="dark:text-slate-400 text-medium font-medium group flex flex-row space-x-2 w-full items-center hover:text-blue-400 hover:dark:text-blue-400"
      >
        <p>View Repository </p>
        <div className="transform  group-hover:translate-x-2 transition duration-300">
          &rarr;
        </div>
      </a>
    </div>
  );
};
