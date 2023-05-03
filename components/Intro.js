import React from "react";
import Link from "next/link";

import userData from "@constants/data";

export default function Intro() {
  return (
    <div className="flex flex-row justify-start items-center dark:bg-slate-800 bg-slate-100 h-[45vh] px-[8vw]">
      <img
        src={userData.avatarUrl}
        alt="avatar"
        className="rounded-sm h-[30vh]"
      />
      <div className="mx-16 text-slate-800 dark:text-slate-100">
        <p className=" text-lg font-extralight">Hello there, my name is</p>
        <p className="border-l-4 border-yellow-400 pl-2  text-4xl font-bold my-2">
          Amy Wang
        </p>
        <p className="text-sm">
          I am a software engineer with experience in various parts of the tech
          stack including frontend, backend, and devops for complex scalable web
          apps. I've worked on teams and companies ranging from small to large
          following agile processes. My goal is to learn as much as I can in
          whichever direction my career takes me!
        </p>
        <div className="mt-5 text-white">
          <a
            target="_blank"
            href="https://amy-wang-dev-portfolio-v2.s3.us-east-2.amazonaws.com/Amy-Wang-Resume.pdf"
            className="rounded-sm bg-slate-700 px-5 py-2 text-sm"
          >
            View Resume
          </a>
          <Link
            href="/projects"
            className="rounded-sm ml-3 bg-blue-600 dark:bg-sky-800 px-5 py-2 text-sm"
          >
            View Projects
          </Link>
        </div>
      </div>
    </div>
  );
}
