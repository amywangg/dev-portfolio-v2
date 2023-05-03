"use strict";
(() => {
var exports = {};
exports.id = 405;
exports.ids = [405];
exports.modules = {

/***/ 6880:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Home),
  "getServerSideProps": () => (/* binding */ getServerSideProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
// EXTERNAL MODULE: ./components/ContainerBlock.js + 3 modules
var ContainerBlock = __webpack_require__(3426);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: ./components/FavouriteProjects.js



function FavouriteProjects() {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "bg-slate-100 dark:bg-slate-800 px-[8vw] pb-14",
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("header", {
                className: "flex flex-col md:flex-col items-start pt-10",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        className: " border-l-8 border-yellow-400 pl-2 text-5xl font-bold my-2",
                        children: "Favourite Projects"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        className: "text-base my-6",
                        children: "Here are my favourite projects at a glance. All are fullstack applications developed by me. Some projects were created while working in a team with classmates of other skillsets varying from business, project management, UI design, and data science."
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "flex-col",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 w-full gap-8 gap-y-5",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                                        className: "font-semibold text-lg",
                                        children: "MyTime"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                        className: "text-sm text-slate-700 mt-1",
                                        children: "A multiclient volunteer app that connects volunteers to organizations and validates them through the school system in Ontario."
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                        target: "_blank",
                                        href: "https://harjotb03.wixsite.com/mytime?fbclid=IwAR0eDpELJrc5Ckoh_tkiMmlaEqZjZlAEdRl5GXilFENJnPewKuTChnBMd_A",
                                        className: "mt-4 w-full block col-span-3 rounded-md shadow-md",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "flex justify-center items-center overflow-hidden",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                src: "/mytime.png",
                                                alt: "mytime",
                                                className: "flex-shrink-0 min-w-full min-h-full transform hover:scale-105 transition duration-2000 ease-out shadow-2xl"
                                            })
                                        })
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                                        className: "font-semibold text-lg",
                                        children: "Resumate"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                        className: "text-sm text-slate-700 mt-1",
                                        children: "An application for hiring managers and prospective hirees to intelligently rank and apply for jobs using NLP to parse candidate resumes against a job description."
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                        target: "_blank",
                                        href: "https://www.youtube.com/watch?v=9P_0iDiAV3A",
                                        className: "mt-4 w-full block shadow-md",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "flex justify-center items-center overflow-hidden",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                src: "/resumate.png",
                                                alt: "portfolio",
                                                className: "flex-shrink-0 min-w-full min-h-full transform hover:scale-105 transition duration-2000 ease-out shadow-2xl"
                                            })
                                        })
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                                className: "font-semibold text-lg mt-8",
                                children: "Portfolio V1"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                className: "text-sm text-slate-700 mt-1",
                                children: "A portfolio I made in 2021 just before graduating to showcase all of my co-op experience to increase visibility."
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                target: "_blank",
                                href: "https://v1.amywangg.com",
                                className: "w-full mt-4 block col-span-3 sm:col-span-1 object-cover",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "relative overflow-hidden shadow-2xl",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                        src: "/portfolioV1.png",
                                        alt: "portfolio",
                                        className: "transform hover:scale-105 transition duration-2000 ease-out object-cover shadow-2xl"
                                    })
                                })
                            })
                        ]
                    })
                ]
            })
        ]
    });
}

;// CONCATENATED MODULE: external "axios"
const external_axios_namespaceObject = require("axios");
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_namespaceObject);
;// CONCATENATED MODULE: ./lib/getStarredRepos.js

const getStarredRepos = async (data, token)=>{
    try {
        const username = data.githubUsername;
        if (token) {
            const res = await external_axios_default().get(`https://api.github.com/search/repositories?q=user:${username}&sort=stargazers_count&order=asc`, {
                headers: {
                    Authorization: `token ${token}`
                }
            });
            let repos = res.data.items;
            let starredRepos = repos.splice(0, 6);
            return starredRepos;
        } else {
            const res1 = await external_axios_default().get(`https://api.github.com/search/repositories?q=user:${username}&sort=stargazers_count&order=asc`);
            let repos1 = res1.data.items;
            let starredRepos1 = repos1.splice(0, 6);
            return starredRepos1;
        }
    } catch (err) {
        console.log(err);
    }
};
/* harmony default export */ const lib_getStarredRepos = (getStarredRepos);

// EXTERNAL MODULE: ./constants/data.js
var data = __webpack_require__(9536);
;// CONCATENATED MODULE: ./components/LatestCode.js





function LatestCode({ repositories  }) {
    const [repos, setRepos] = (0,external_react_.useState)(repositories);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("section", {
        className: "bg-white dark:bg-gray-900",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "flex flex-col md:flex-row justify-between items-center md:pt-10 px-[8vw]",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("header", {
                    className: "flex flex-col md:flex-col items-start pt-10",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "w-full inline-flex justify-between items-center",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                    className: " border-l-8 border-blue-400 pl-2 text-5xl font-bold my-2",
                                    children: "Latest Code"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                    target: "_blank",
                                    href: `https://github.com/${data/* default.githubUsername */.Z.githubUsername}`,
                                    className: "flex justify-center items-center rounded-sm bg-slate-700 px-5 text-sm text-white h-8 mr-10 hover:bg-blue-400",
                                    children: "View GitHub"
                                })
                            ]
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                            className: "text-base my-6",
                            children: "Throughout my time at Waterloo, I had the opportunity to work with a group of amazing individuals all with varying skillsets to create various projects showcased here. I couldn't have completed these projects without them and it strengthened my teamwork skill. However, my role was to bring our business ideas to fruition through using my expertise, software development. I was primarily the only developer on the projects, so the technical portion of the work that is being shown is not shared and is my own work."
                        })
                    ]
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-10 px-[8vw]",
                children: repos && repos.map((latestRepo, idx)=>/*#__PURE__*/ jsx_runtime_.jsx(GithubRepoCard, {
                        latestRepo: latestRepo
                    }, "idx"))
            })
        ]
    });
}
const GithubRepoCard = ({ latestRepo  })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "github-repo",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                className: "font-semibold text-normal dark:text-gray-200 text-slate-900",
                children: latestRepo.name
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                className: "text-sm font-normal mt-2 mb-4 text-gray-500 dark:text-slate-300",
                children: latestRepo.description
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                href: latestRepo.clone_url,
                className: "text-sm font-medium group flex flex-row space-x-2 w-full items-cente hover:text-blue-400",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        children: "View Repository "
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "transform group-hover:translate-x-2 transition duration-300",
                        children: "→"
                    })
                ]
            })
        ]
    });
};

;// CONCATENATED MODULE: ./components/Intro.js




function Intro() {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "flex flex-row justify-start items-center dark:bg-slate-800 bg-slate-100 h-[45vh] px-[8vw]",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("img", {
                src: data/* default.avatarUrl */.Z.avatarUrl,
                alt: "avatar",
                className: "rounded-sm h-[30vh]"
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "mx-16 text-slate-800 dark:text-slate-100",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        className: " text-lg font-extralight",
                        children: "Hello there, my name is"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        className: "border-l-4 border-yellow-400 pl-2 text-4xl font-bold my-2",
                        children: "Amy Wang"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        className: "text-sm",
                        children: "I am a software engineer with experience in various parts of the tech stack including frontend, backend, and devops for complex scalable web apps. I've worked on teams and companies ranging from small to large following agile processes. My goal is to learn as much as I can in whichever direction my career takes me!"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "mt-5 text-white",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                target: "_blank",
                                href: "https://amy-wang-dev-portfolio-v2.s3.us-east-2.amazonaws.com/Amy-Wang-Resume.pdf",
                                className: "rounded-sm bg-slate-700 px-5 py-2 text-sm",
                                children: "View Resume"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                href: "/projects",
                                className: "rounded-sm ml-3 bg-blue-600 dark:bg-sky-800 px-5 py-2 text-sm",
                                children: "View Projects"
                            })
                        ]
                    })
                ]
            })
        ]
    });
}

;// CONCATENATED MODULE: ./components/Skills.js


const skills = [
    {
        name: "JavaScript & TypeScript",
        images: [
            "javascript",
            "typescript"
        ],
        description: "My primary languages used in almost every project and most recent work experience, usually in conjunction with React. TypeScript makes code easier to read and consume."
    },
    {
        name: "React & Redux",
        images: [
            "react",
            "redux"
        ],
        description: "My frontend library of choice, most of my work experience & projects use React! It's super lightweight and intuitive. With that comes experience with state management via Context, Redux, LocalStorage."
    },
    {
        name: "Node.js",
        images: [
            "nodejs"
        ],
        description: "Worked with Node.js professionally and in projects to setup the backend to communicate with db, provide REST endpoints, and setup Redis cache for authentication and session management."
    },
    {
        name: "Python & Flask",
        images: [
            "python",
            "flask"
        ],
        description: "Used Python & Flask combo in earlier projects such as Resumate and Oink. Learned basic machine learning concepts and how to build neural networks via Python and various libraries such as SpaCy, numPy, etc."
    },
    {
        name: "HTML, CSS & Tailwind",
        images: [
            "html",
            "css",
            "tailwind"
        ],
        description: "The fundamental building blocks of frontend web development! (minus Tailwind) Even when using popular frontend frameworks and libraries, these are the foundational languages."
    },
    {
        name: "npm, lerna & yarn",
        images: [
            "npm",
            "lerna",
            "yarn"
        ],
        description: "Package and project managers I've worked with to build out versioned microservices and monorepos. I've also published packages to npm!"
    },
    {
        name: "Git & Gitlab CI",
        images: [
            "git",
            "gitlab"
        ],
        description: "Git is essential for any developers toolkit. I'm well versed in git best practices for coding, committing, PR reviews, etc. Additionally, I've worked on optimizing Gitlab CI pipelines!"
    },
    {
        name: "AWS & Docker",
        images: [
            "aws",
            "docker"
        ],
        description: "I've dabbled in AWS' S3, CloudFront, and Route 53. In fact, this porfolio is auto-deployed via GitHub Actions and served on AWS. Plus I've used Docker to containerize fullstack apps and visual regression tests."
    },
    {
        name: "PostgreSQL & GraphQL",
        images: [
            "postgresql",
            "graphql"
        ],
        description: "Built to extend SQL's capabilities, these query languages come in handy for database management for fullstack apps. I have also used ORMs like Cube.js and Knex.js to more easily manipulate and display data!"
    },
    {
        name: "Storybook.js",
        images: [
            "storybook"
        ],
        description: "Essential to every frontend project, I've used Storybook to visualize, test, and develop components. The most notable project was leveraging Storybook to create a visual regression framework."
    },
    {
        name: "Unit & Functional Testing",
        images: [
            "jest",
            "rtl"
        ],
        description: "Core fundamentals to any kind of test-driven development to ensure methods or systems function as prescribed following AAA (Arrange-Act-Assert)."
    },
    {
        name: "Jira & Scrum",
        images: [
            "jira"
        ],
        description: "Have always worked in an Agile  development environment following scrum methodologies and participating in various scrum ceremonies! Jira is definitely in my comfort zone."
    }
];
const SkillsCard = ({ skill  })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "github-repo",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "inline-flex gap-2",
                children: skill.images.map((image)=>/*#__PURE__*/ jsx_runtime_.jsx("img", {
                        className: "h-5 pr-2",
                        src: `/skills-images/${image}.png`
                    }))
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                className: "font-semibold text-normal dark:text-gray-200 text-slate-900",
                children: skill.name
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                className: "text-sm font-normal mt-2 mb-4 text-gray-500 dark:text-slate-300",
                children: skill.description
            })
        ]
    });
};
function Skills() {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "flex flex-col justify-start items-start bg-white dark:bg-slate-700 px-[8vw] pb-8",
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "text-black dark:text-white my-10",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        className: "border-l-4 border-blue-400 pl-2 text-2xl font-bold my-2",
                        children: "What I do"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        className: "text-sm",
                        children: "I have over 3 years of experience building software on agile teams for early startups, large companies, financial companies, etc. Additionally, I have engineered several full stack applications during my time at Waterloo with differing use cases and stakeholders. Below is a quick overview of the tools and technologies that I've worked with, but I'm looking to expand that to more or strengthen the knowledge I have already accumulated!"
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 w-full gap-8 gap-y-5",
                children: skills.map((skill, idx)=>/*#__PURE__*/ jsx_runtime_.jsx(SkillsCard, {
                        skill: skill
                    }, idx))
            })
        ]
    });
}

;// CONCATENATED MODULE: ./pages/index.js










function Home({ repositories  }) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(ContainerBlock/* default */.Z, {
        title: "Amy | Dev",
        description: "My V2 Dev Portfolio Built from a Template",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(Intro, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(Skills, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(FavouriteProjects, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(LatestCode, {
                repositories: repositories
            })
        ]
    });
}
const getServerSideProps = async ()=>{
    console.log(process.env.GITHUB_AUTH_TOKEN);
    let token = process.env.GITHUB_AUTH_TOKEN;
    const repositories = await lib_getStarredRepos(data/* default */.Z, token);
    return {
        props: {
            repositories
        }
    };
};


/***/ }),

/***/ 1162:
/***/ ((module) => {

module.exports = require("next-themes");

/***/ }),

/***/ 3280:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4406:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 6220:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/compare-states.js");

/***/ }),

/***/ 299:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-next-pathname-info.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 5789:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-next-pathname-info.js");

/***/ }),

/***/ 1897:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-bot.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 4567:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/path-has-prefix.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 968:
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ 1853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 6405:
/***/ ((module) => {

module.exports = require("react-dom");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [676,664,426], () => (__webpack_exec__(6880)));
module.exports = __webpack_exports__;

})();