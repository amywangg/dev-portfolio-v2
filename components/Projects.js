import React from "react";
import userData from "@constants/data";

export default function Projects() {
  return (
    <section className="bg-white dark:bg-gray-800">
      <div className="bg-slate-100 dark:bg-gray-800 px-[8vw] py-12 ">
        <p className=" border-l-8 border-yellow-400 pl-2 text-6xl font-bold my-8">
          Projects
        </p>
        <p className="text-lg my-6">
          Below showcases projects I've worked on from school, on my own time,
          and from work. Throughout my time at Waterloo, I had the opportunity
          to work with a group of amazing individuals all with varying skillsets
          to create various projects showcased here. I couldn't have completed
          these projects without them and it strengthened my teamwork skill.
          However, my role was to bring our business ideas to fruition through
          using my expertise, software development. I was primarily the only
          developer on the projects, so the technical portion of the work that
          is being shown (i.e the github code) is not shared and is my own work!
        </p>
      </div>
      {/* Grid starts here */}
      <div className="bg-white dark:bg-gray-900">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 py-20 pb-10 px-[8vw]">
          {userData.projects.map((proj, idx) => (
            <ProjectCard
              title={proj.title}
              link={proj.link}
              imgUrl={proj.imgUrl}
              number={`${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

const ProjectCard = ({ title, link, imgUrl, number }) => {
  return (
    <a href={link} className="w-full block shadow-2xl">
      <div className="relative overflow-hidden">
        <div className="h-[45vh] min-h-[300px] object-cover">
          <img
            src={imgUrl}
            alt="portfolio"
            className="transform hover:scale-105 transition duration-2000 ease-out object-cover h-full w-full"
          />
        </div>
        <h1 className="absolute top-10 left-10 text-gray-50 font-bold text-xl bg-indigo-500 rounded-md px-2">
          {title}
        </h1>
      </div>
    </a>
  );
};
