import React from "react";
import IconErrorPageComponent from "../shared-components/icons/IconErrorPage.component";
import { NavLink } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div
      className="h-full flex flex-col justify-center items-center bg-indigo-800 text-white"
      aria-roledescription="404 Page"
    >
      <div className="bg-white rounded p-2">
        <img src="https://img.logoipsum.com/262.svg" alt="Logo" />
      </div>
      <IconErrorPageComponent className="w-20 h-20" />
      <div className="text-center">
        <p className="text-2xl font-medium">Page not found</p>
        <NavLink to="/" className="inline-block text-lg font-medium bg-indigo-500 px-4 py-2 rounded mt-5">
          Go Home
        </NavLink>
      </div>
    </div>
  );
};

export default React.memo(ErrorPage);
