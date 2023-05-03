import React from "react";
import Socials from "./Socials";

export default function Footer() {
  var d = new Date();
  var currentYear = d.getFullYear();

  return (
    <div className="bg-white dark:bg-gray-900 px-[8vw] py-12">
      <div className="flex flex-col space-y-4 md:space-y-0 md:flex-row md:items-center mt-8 after:flex-1">
        <div className="flex-1">
          <small>&copy; Copyright {currentYear}, Amy Wang</small>
        </div>
        <div className="">
          <Socials tooltipTop={true} />
        </div>
      </div>
    </div>
  );
}
