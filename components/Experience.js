import userData from "@constants/data";
import React from "react";

export default function Experience() {
  return (
    <div>
      <div className="flex flex-col justify-start items-start bg-white dark:bg-slate-800 px-[8vw] pb-6">
        <div className="text-black dark:text-white mt-10">
          <p className=" border-l-8 border-indigo-400 pl-2 text-5xl font-bold my-2">
            Experience
          </p>
          <p className="text-base my-6">
            I have been so fortunate to be able to gather work experience while
            attending Waterloo in their Management Engineering Co-op program.
            University taught me so much and helped build my discipline and
            resourcefulness which came in handy in the real world. However,
            nothing can replace some good old fashioned hands on experience.
            This experience helped me gain mentorship and make connections that
            even to this day still reach out. Showcased here is a high level
            overview of my education and professional work experiences with job
            title, location, duration, tech stack, and an brief summary of my
            role and team.
          </p>
        </div>
      </div>

      <div className="bg-slate-100 dark:bg-gray-900 pt-6 pb-20">
        <div className="grid grid-cols-1 dark:bg-gray-900 max-w-xl mx-auto pt-20">
          {userData.experience.map((exp, idx) => (
            <>
              <ExperienceCard
                key={idx}
                title={exp.title}
                desc={exp.desc}
                year={exp.year}
                company={exp.company}
                companyLink={exp.companyLink}
              />
              {idx === userData.experience.length - 1 ? null : (
                <div className="divider-container flex flex-col items-center -mt-2">
                  <div className="w-4 h-4 bg-yellow-500 rounded-full relative z-10">
                    <div className="w-4 h-4 bg-yellow-500 rounded-full relative z-10 animate-ping"></div>
                  </div>
                  <div className="w-1 h-24 bg-gray-200 dark:bg-gray-500 rounded-full -mt-2"></div>
                </div>
              )}
            </>
          ))}
        </div>
      </div>
    </div>
  );
}

const ExperienceCard = ({ title, desc, year, company, companyLink }) => {
  return (
    <div className="relative experience-card border p-4 rounded-md shadow-xl bg-white dark:bg-gray-800 z-10 mx-4">
      <h1 className="absolute -top-10 md:-left-10 md:-top-10 text-4xl text-gray-200 font-bold dark:text-gray-400">
        {year}
      </h1>
      <h1 className="font-semibold text-xl">{title}</h1>
      <a href={companyLink} className="text-gray-500">
        {company}
      </a>
      <p className="text-gray-600 dark:text-gray-400 my-2">{desc}</p>
    </div>
  );
};
