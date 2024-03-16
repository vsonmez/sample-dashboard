import React from "react";
import IconErrorPageComponent from "../shared-components/icons/IconErrorPage.component";
import { NavLink } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="h-full flex flex-col justify-center items-center" aria-roledescription="404 Page">
      <IconErrorPageComponent className="w-20 h-20" />
      <div className="text-center">
        <p className="text-2xl font-medium">Page not found</p>
        <NavLink to="/" className="inline-block text-lg font-medium bg-indigo-500 px-4 py-2 rounded mt-5 text-white">
          Go Home
        </NavLink>
      </div>
    </div>
  );
};

export default React.memo(ErrorPage);
