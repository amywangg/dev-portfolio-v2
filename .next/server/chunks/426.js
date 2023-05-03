"use strict";
exports.id = 426;
exports.ids = [426];
exports.modules = {

/***/ 3426:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ ContainerBlock)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: external "next-themes"
var external_next_themes_ = __webpack_require__(1162);
// EXTERNAL MODULE: ./constants/data.js
var data = __webpack_require__(9536);
;// CONCATENATED MODULE: ./components/Socials.js



function Socials({ tooltipTop =false  }) {
    const [tooltip, setTooltip] = (0,external_react_.useState)(false);
    const onEmailClick = ()=>{
        navigator.clipboard.writeText("a84wang@gmail.com");
        setTooltip(true);
        setTimeout(()=>{
            setTooltip(false);
        }, 1000);
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "space-x-4 flex flex-row items-center",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                target: "_blank",
                href: data/* default.socialLinks.github */.Z.socialLinks.github,
                className: "text-base font-normal dark:text-gray-300 ",
                children: /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                    width: "21",
                    height: "21",
                    preserveAspectRatio: "",
                    viewBox: "0 0 98 98",
                    xmlns: "http://www.w3.org/2000/svg",
                    fill: "currentColor",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        d: "M48.854 0C21.839 0 0 22 0 49.217c0 21.756 13.993 40.172 33.405 46.69 2.427.49 3.316-1.059 3.316-2.362 0-1.141-.08-5.052-.08-9.127-13.59 2.934-16.42-5.867-16.42-5.867-2.184-5.704-5.42-7.17-5.42-7.17-4.448-3.015.324-3.015.324-3.015 4.934.326 7.523 5.052 7.523 5.052 4.367 7.496 11.404 5.378 14.235 4.074.404-3.178 1.699-5.378 3.074-6.6-10.839-1.141-22.243-5.378-22.243-24.283 0-5.378 1.94-9.778 5.014-13.2-.485-1.222-2.184-6.275.486-13.038 0 0 4.125-1.304 13.426 5.052a46.97 46.97 0 0 1 12.214-1.63c4.125 0 8.33.571 12.213 1.63 9.302-6.356 13.427-5.052 13.427-5.052 2.67 6.763.97 11.816.485 13.038 3.155 3.422 5.015 7.822 5.015 13.2 0 18.905-11.404 23.06-22.324 24.283 1.78 1.548 3.316 4.481 3.316 9.126 0 6.6-.08 11.897-.08 13.526 0 1.304.89 2.853 3.316 2.364 19.412-6.52 33.405-24.935 33.405-46.691C97.707 22 75.788 0 48.854 0z"
                    })
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                onClick: onEmailClick,
                className: `text-base font-normal ${tooltip ? "text-slate-600 dark:text-gray-100" : "dark:text-gray-300"} `,
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "relative flex justify-center cursor-pointer",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                            xmlns: "http://www.w3.org/2000/svg",
                            width: "22",
                            height: "22",
                            fill: "currentColor",
                            viewBox: "0 0 24 24",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                d: "M12 .02c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6.99 6.98l-6.99 5.666-6.991-5.666h13.981zm.01 10h-14v-8.505l7 5.673 7-5.672v8.504z"
                            })
                        }),
                        tooltip && /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: `absolute px-4 py-1 ${tooltipTop ? "-top-14" : "top-10"} transition-all rounded bg-slate-600 dark:bg-gray-700 text-xs text-white scale-100 w-30`,
                            children: "Copied to Clipboard!"
                        })
                    ]
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                target: "_blank",
                href: data/* default.socialLinks.linkedin */.Z.socialLinks.linkedin,
                className: "text-base font-normal dark:text-gray-300",
                children: /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    width: "16",
                    height: "16",
                    fill: "currentColor",
                    className: "bi bi-linkedin h-5 w-5",
                    viewBox: "0 0 16 16",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        d: "M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"
                    })
                })
            })
        ]
    });
}

;// CONCATENATED MODULE: ./components/Navbar.js







function Navbar() {
    const router = (0,router_.useRouter)();
    const { theme , setTheme  } = (0,external_next_themes_.useTheme)();
    const [mounted, setMounted] = (0,external_react_.useState)(false);
    (0,external_react_.useEffect)(()=>{
        setMounted(true);
    }, []);
    const routes = [
        "About",
        "Projects",
        "Experience",
        "Contact"
    ];
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: " bg-blue-600 mx-auto px-12 py-6 md:py-2 text-gray-50 dark:bg-sky-800",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "flex md:flex-row sm:flex-col justify-between items-center",
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "inline-flex",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                            href: "/",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                className: "rounded-sm w-8 h-8 mx-3 mt-[2px]",
                                src: "/logo.png",
                                alt: "avatar"
                            })
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)((link_default()), {
                            href: "/",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                                    className: "font-semibold text-sm text-gray-100",
                                    children: data/* default.name */.Z.name
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                    className: "text-xs font-light text-gray-300",
                                    children: data/* default.designation */.Z.designation
                                })
                            ]
                        })
                    ]
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "space-x-8 md:block",
                    children: routes.map((route)=>/*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                            href: `/${route === "About" ? "" : route.toLowerCase()}`,
                            className: `text-sm px-1 ${router.asPath === `/${route === "About" ? "" : route.toLowerCase()}` ? `highlight-${route.toLowerCase()} font-semibold text-white` : "text-gray-200 font-normal hover:text-white hover:font-semibold"}`,
                            children: route
                        }))
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "space-x-4 flex flex-row items-center",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(Socials, {}),
                        /*#__PURE__*/ jsx_runtime_.jsx("button", {
                            "aria-label": "Toggle Dark Mode",
                            type: "button",
                            className: "w-10 h-10 p-2 rounded focus:outline-none",
                            onClick: ()=>setTheme(theme === "dark" ? "light" : "dark"),
                            children: mounted && /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                                xmlns: "http://www.w3.org/2000/svg",
                                viewBox: "0 0 24 24",
                                fill: "currentColor",
                                stroke: "currentColor",
                                className: "w-5 h-5 text-amber-500 dark:text-amber-400",
                                children: theme === "dark" ? /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round",
                                    strokeWidth: 2,
                                    d: "M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                                }) : /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round",
                                    strokeWidth: 2,
                                    d: "M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                                })
                            })
                        })
                    ]
                })
            ]
        })
    });
}

;// CONCATENATED MODULE: ./components/Footer.js



function Footer() {
    var d = new Date();
    var currentYear = d.getFullYear();
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "bg-white dark:bg-gray-900 px-[8vw] py-12",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "flex flex-col space-y-4 md:space-y-0 md:flex-row md:items-center mt-8 after:flex-1",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "flex-1",
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("small", {
                        children: [
                            "\xa9 Copyright ",
                            currentYear,
                            ", Amy Wang"
                        ]
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "",
                    children: /*#__PURE__*/ jsx_runtime_.jsx(Socials, {
                        tooltipTop: true
                    })
                })
            ]
        })
    });
}

;// CONCATENATED MODULE: ./components/ContainerBlock.js






function ContainerBlock({ children , ...customMeta }) {
    const router = (0,router_.useRouter)();
    const meta = {
        title: "Amy Wang - Software Engineer",
        description: `A Waterloo grad with loads of desire to learn more in the software field`,
        image: "/avatar.png",
        type: "website",
        ...customMeta
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((head_default()), {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("title", {
                        children: meta.title
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "robots",
                        content: "follow, index"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        content: meta.description,
                        name: "description"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        property: "og:url",
                        content: `https://www.amywangg.com${router.asPath}`
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("link", {
                        rel: "canonical",
                        href: `https://www.amywangg.com${router.asPath}`
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        property: "og:type",
                        content: meta.type
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        property: "og:site_name",
                        content: "Amy Wang"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        property: "og:description",
                        content: meta.description
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        property: "og:title",
                        content: meta.title
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        property: "og:image",
                        content: meta.image
                    }),
                    meta.date && /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        property: "article:published_time",
                        content: meta.date
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("main", {
                className: "dark:bg-gray-800 w-full",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(Navbar, {}),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        children: children
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(Footer, {})
                ]
            })
        ]
    });
}


/***/ }),

/***/ 9536:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const userData = {
    githubUsername: "amywangg",
    name: "Amy Wang",
    designation: "Software Engineer",
    avatarUrl: "/avatar.png",
    email: "a84wang@gmail.com",
    phone: "+1 416-828-6777",
    address: "Toronto, ON, Canada.",
    projects: [
        {
            title: "Portfolio V1",
            link: "https://v1.amywangg.com",
            imgUrl: "/portfolioV1.png"
        },
        {
            title: "MyTime",
            link: "https://harjotb03.wixsite.com/mytime?fbclid=IwAR0eDpELJrc5Ckoh_tkiMmlaEqZjZlAEdRl5GXilFENJnPewKuTChnBMd_A",
            imgUrl: "/mytime.png"
        },
        {
            title: "Resumate",
            link: "https://www.youtube.com/watch?v=9P_0iDiAV3A",
            imgUrl: "/resumate.png"
        }
    ],
    about: {
        title: "I'm a software developer that loves building products and web applications that impact millions of lives",
        description: [
            `I've been developing full-stack application since I was 10 years old. I didn't know what full-stack meant at that time because the term was not coined back then. I'm so out of content right now that I'm literally crying writing this text since lorem text is so 2012 now.`,
            `After learning HTML and struggling with CSS, I came up with a brilliant idea of using bootstrap so that I don't have to style everything by myself and - for obvious reasons - if you knew bootstrap, you were cool.`,
            `But now, I'm a legend. I've been coding in React, Angular, Vue, Svelte, Node.js, Express, Fastify, MongoDB, MySQL, Bootstrap, Tailwind, C, C++, C#, Rust, Haskell, Perl, PHP, Assembly, Logo and YouDontKnowShit programming language etc to name a few. Although I barely know the syntax (Psst, Stack overflow!), I consider myself a Ninja developer I'm laughing right now.`
        ],
        currentProject: "Tailwind Master Kit",
        currentProjectUrl: "https://tailwindmasterkit.com"
    },
    experience: [
        {
            title: "Software Engineer",
            company: "Splunk",
            year: "2021",
            companyLink: "https://www.codegem.app/",
            desc: "I worked on the design systems team creating components, improving infrastructure, and more! I started as a co-op then transitioned to fulltime. The culture here was amazing!"
        },
        {
            title: "Software Engineer",
            company: "CodeGem",
            year: "2020",
            companyLink: "https://www.codegem.app/",
            desc: "My first startup! I worked extremely hard and learned so much by having total ownership and pressure to deliver."
        },
        {
            title: "Co-op Developer",
            company: "Intelex Technologies Inc.",
            year: "2019",
            companyLink: "https://intelex.com",
            desc: "Worked on the performance team to improve processes on the backend and fix bugs on the frontend."
        },
        {
            title: "Architecture Engineer",
            company: "Fidelity Investments Canada",
            year: "",
            companyLink: "https://www.fidelity.ca/en/",
            desc: "Explored possibilities of bringing the system to Angular rather than plain HTML. Additionally, learned about networking, resume building, and more!"
        },
        {
            title: "Software Developer Intern",
            company: "Morningstar",
            year: "2018",
            companyLink: "https://www.morningstar.ca/ca/",
            desc: "My first internship and office experience! I worked on developing data visualizations, QA tools, proof of concepts, and Splunk dashboards for customer success "
        },
        {
            title: "Management Engineering, BASc",
            company: "University of Waterloo",
            year: "2017",
            companyLink: "https://uwaterloo.ca/future-students/programs/management-engineering",
            desc: "Majored in Management Engineering with Computing Option, with a GPA of 3.7. Had opportunities to make lifelong friends and gain invaluable skills!"
        }
    ],
    resumeUrl: "https://amy-wang-dev-portfolio-v2.s3.us-east-2.amazonaws.com/Amy-Wang-Resume.pdf",
    socialLinks: {
        resume: "https://amy-wang-dev-portfolio-v2.s3.us-east-2.amazonaws.com/Amy-Wang-Resume.pdf",
        linkedin: "https://linkedin.com/in/amywangg",
        github: "https://github.com/amywangg"
    }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (userData);


/***/ })

};
;