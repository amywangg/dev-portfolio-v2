import React from "react";
import Link from "next/link";

export default function FavouriteProjects() {
  return (
    <div className="bg-slate-100 dark:bg-slate-800 px-[8vw] pb-20">
      <header className="flex flex-col md:flex-col items-start pt-10 pb-5">
        <p className=" border-l-8 border-yellow-400 pl-2 text-4xl font-bold my-4">
          Favourite Projects
        </p>
        <p className="text-xl my-6">
          Here are my favourite projects at a glance. All are fullstack
          applications developed by me. Some projects were created while working
          in a team with classmates of other skillsets varying from business,
          project management, UI design, and data science.
        </p>
      </header>

      {/* Grid starts here */}
      <div className="flex-col">
        {/* double/single card */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 w-full gap-8 gap-y-5">
          {/* First card */}
          <div>
            <h1 className="font-semibold text-2xl">MyTime</h1>
            <p className="text-lg text-slate-700 dark:text-slate-400 mt-1">
              A multiclient volunteer app that connects volunteers to
              organizations and validates them through the school system in
              Ontario.
            </p>
            <a
              target="_blank"
              href="https://harjotb03.wixsite.com/mytime?fbclid=IwAR0eDpELJrc5Ckoh_tkiMmlaEqZjZlAEdRl5GXilFENJnPewKuTChnBMd_A"
              className="mt-4 w-full block col-span-3 rounded-md shadow-md"
            >
              <div className="flex justify-center items-center overflow-hidden">
                <img
                  src="/mytime.png"
                  alt="mytime"
                  className="flex-shrink-0 min-w-full min-h-full transform hover:scale-105 transition duration-2000 ease-out shadow-2xl"
                />
              </div>
            </a>
          </div>
          {/* Second Card */}
          <div>
            <h1 className="font-semibold text-2xl">Resumate</h1>
            <p className="text-lg text-slate-700 dark:text-slate-400 mt-1">
              An application for hiring managers and prospective hirees to
              intelligently rank and apply for jobs using NLP to parse candidate
              resumes against a job description.
            </p>
            <a
              target="_blank"
              href="https://www.youtube.com/watch?v=9P_0iDiAV3A"
              className="mt-4 w-full block shadow-md"
            >
              <div className="flex justify-center items-center overflow-hidden">
                <img
                  src="/resumate.png"
                  alt="portfolio"
                  className="flex-shrink-0 min-w-full min-h-full transform hover:scale-105 transition duration-2000 ease-out shadow-2xl"
                />
              </div>
            </a>
          </div>
        </div>
        <div>
          {/* Single card */}
          <h1 className="font-semibold text-2xl mt-8">Portfolio V1</h1>
          <p className="text-lg text-slate-700 dark:text-slate-400 mt-1">
            A portfolio I made in 2021 just before graduating to showcase all of
            my co-op experience to increase visibility.
          </p>
          <a
            target="_blank"
            href="https://v1.amywangg.com"
            className="w-full mt-4 block col-span-3 sm:col-span-1  object-cover"
          >
            <div className="relative overflow-hidden shadow-2xl">
              <img
                src="/portfolioV1.png"
                alt="portfolio"
                className="flex-shrink-0 min-w-full min-h-full transform hover:scale-105 transition duration-2000 ease-out shadow-2xl"
              />
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}
