import React from "react";

const skills = [
  {
    name: "JavaScript & TypeScript",
    images: ["javascript", "typescript"],
    description:
      "My primary languages used in almost every project and most recent work experience, usually in conjunction with React. TypeScript makes code easier to read and consume.",
  },
  {
    name: "React & Redux",
    images: ["react", "redux"],
    description:
      "My frontend library of choice, most of my work experience & projects use React! It's super lightweight and intuitive. With that comes experience with state management via Context, Redux, LocalStorage.",
  },
  {
    name: "Node.js",
    images: ["nodejs"],
    description:
      "Worked with Node.js professionally and in projects to setup the backend to communicate with db, provide REST endpoints, and setup Redis cache for authentication and session management.",
  },
  {
    name: "Python & Flask",
    images: ["python", "flask"],
    description:
      "Used Python & Flask combo in earlier projects such as Resumate and Oink. Learned basic machine learning concepts and how to build neural networks via Python and various libraries such as SpaCy, numPy, etc.",
  },
  {
    name: "HTML, CSS & Tailwind",
    images: ["html", "css", "tailwind"],
    description:
      "The fundamental building blocks of frontend web development! (minus Tailwind) Even when using popular frontend frameworks and libraries, these are the foundational languages.",
  },
  {
    name: "npm, lerna & yarn",
    images: ["npm", "lerna", "yarn"],
    description:
      "Package and project managers I've worked with to build out versioned microservices and monorepos. I've also published packages to npm!",
  },
  {
    name: "Git & Gitlab CI",
    images: ["git", "gitlab"],
    description:
      "Git is essential for any developers toolkit. I'm well versed in git best practices for coding, committing, PR reviews, etc. Additionally, I've worked on optimizing Gitlab CI pipelines!",
  },
  {
    name: "AWS & Docker",
    images: ["aws", "docker"],
    description:
      "I've dabbled in AWS' S3, CloudFront, and Route 53. In fact, this porfolio is auto-deployed via GitHub Actions and served on AWS. Plus I've used Docker to containerize fullstack apps and visual regression tests.",
  },
  {
    name: "PostgreSQL & GraphQL",
    images: ["postgresql", "graphql"],
    description:
      "Built to extend SQL's capabilities, these query languages come in handy for database management for fullstack apps. I have also used ORMs like Cube.js and Knex.js to more easily manipulate and display data!",
  },
  {
    name: "Storybook.js",
    images: ["storybook"],
    description:
      "Essential to every frontend project, I've used Storybook to visualize, test, and develop components. The most notable project was leveraging Storybook to create a visual regression framework.",
  },
  {
    name: "Unit & Functional Testing",
    images: ["jest", "rtl"],
    description:
      "Core fundamentals to any kind of test-driven development to ensure methods or systems function as prescribed following AAA (Arrange-Act-Assert).",
  },
  {
    name: "Jira & Scrum",
    images: ["jira"],
    description:
      "Have always worked in an Agile  development environment following scrum methodologies and participating in various scrum ceremonies! Jira is definitely in my comfort zone.",
  },
];

const SkillsCard = ({ skill }) => {
  return (
    <div className="github-repo">
      <div className="inline-flex gap-2">
        {skill.images.map((image) => (
          <img className="h-5 pr-2" src={`/skills-images/${image}.png`} />
        ))}
      </div>
      <h1 className="font-semibold text-normal dark:text-gray-200 text-slate-900">
        {skill.name}
      </h1>
      <p className="text-sm font-normal mt-2 mb-4 text-gray-500 dark:text-slate-300">
        {skill.description}
      </p>
    </div>
  );
};

export default function Skills() {
  return (
    <div className="flex flex-col justify-start items-start bg-white dark:bg-slate-700 px-[8vw] pb-8">
      <div className="text-black dark:text-white my-10">
        <p className="border-l-4 border-blue-400 pl-2  text-2xl font-bold my-2">
          What I do
        </p>
        <p className="text-sm">
          I have over 3 years of experience building software on agile teams for
          early startups, large companies, financial companies, etc.
          Additionally, I have engineered several full stack applications during
          my time at Waterloo with differing use cases and stakeholders. Below
          is a quick overview of the tools and technologies that I've worked
          with, but I'm looking to expand that to more or strengthen the
          knowledge I have already accumulated!
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 w-full gap-8 gap-y-5">
        {skills.map((skill, idx) => (
          <SkillsCard skill={skill} key={idx} />
        ))}
      </div>
    </div>
  );
}
