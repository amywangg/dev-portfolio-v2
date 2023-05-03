import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useTheme } from "next-themes";
import { useRouter } from "next/router";
import userData from "@constants/data";
import Socials from "./Socials";

export default function Navbar() {
  const router = useRouter();
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const routes = ["About", "Projects", "Experience", "Contact"];

  return (
    <div className=" bg-blue-600 mx-auto px-12 py-6 md:py-2 text-gray-50 dark:bg-sky-800">
      <div className="flex  md:flex-row sm:flex-col justify-between items-center">
        <div className="inline-flex">
          <Link href="/">
            <img
              className="rounded-sm w-12 h-12 mx-3 mt-[2px]"
              src="/logo.png"
              alt="avatar"
            />
          </Link>
          <Link href="/">
            <h1 className="font-semibold text-lg text-gray-100">
              {userData.name}
            </h1>
            <p className="text-base font-light text-gray-300">
              {userData.designation}
            </p>
          </Link>
        </div>

        <div className="space-x-8 md:block">
          {routes.map((route) => (
            <Link
              href={`/${route === "About" ? "" : route.toLowerCase()}`}
              className={`text-lg px-1 ${
                router.asPath ===
                `/${route === "About" ? "" : route.toLowerCase()}`
                  ? `highlight-${route.toLowerCase()} font-semibold text-white`
                  : "text-gray-200 font-normal hover:text-white hover:font-semibold"
              }`}
            >
              {route}
            </Link>
          ))}
        </div>

        <div className="space-x-4 flex flex-row items-center">
          <Socials />
          <button
            aria-label="Toggle Dark Mode"
            type="button"
            className="w-10 h-10 p-2 rounded focus:outline-none"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          >
            {mounted && (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                stroke="currentColor"
                className="w-5 h-5 text-amber-500 dark:text-amber-400"
              >
                {theme === "dark" ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                  />
                )}
              </svg>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
