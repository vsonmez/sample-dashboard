import React from "react";
import { NavLink } from "react-router-dom";
import IconHomeComponent from "../shared-components/icons/IconHome.component";
import IconBoxesComponent from "../shared-components/icons/IconBoxes.component";
import IconUsersComponent from "../shared-components/icons/IconUsers.component";
import IconPostComponent from "../shared-components/icons/IconPost.component";
import IconCommentsComponent from "../shared-components/icons/IconComments.component";
import IconTodoListComponent from "../shared-components/icons/IconTodoList.component";

const LayoutSideBar = () => {
  const menuData = [
    {
      name: "Home",
      path: "/",
      icon: <IconHomeComponent className="w-5 h-5" />,
    },
    {
      name: "Products",
      path: "/products",
      icon: <IconBoxesComponent className="w-5 h-5" />,
    },
    {
      name: "Users",
      path: "/users",
      icon: <IconUsersComponent className="w-5 h-5" />,
    },
    {
      name: "Posts",
      path: "/posts",
      icon: <IconPostComponent className="w-5 h-5" />,
    },
    {
      name: "Comments",
      path: "/comments",
      icon: <IconCommentsComponent className="w-5 h-5" />,
    },
    {
      name: "Todos",
      path: "/todos",
      icon: <IconTodoListComponent className="w-5 h-5" />,
    },
  ];

  const checkIsActive = React.useCallback(
    ({ isActive }: { isActive: boolean }) =>
      `block hover:bg-indigo-500/50 transition-colors p-2 rounded flex items-center gap-2 hover:text-white ${
        isActive ? "text-white bg-indigo-500/50" : ""
      }`,
    []
  );

  return (
    <aside aria-roledescription="sidebar" className="w-72 border-r bg-indigo-800 text-white/70">
      <div className="bg-white m-3 rounded p-1">
        <img src="https://img.logoipsum.com/262.svg" alt="Logo" />
      </div>
      <ul className="flex flex-col gap-2 p-5 font-semibold">
        {menuData.map((item) => (
          <li key={item.name}>
            <NavLink to={item.path} className={checkIsActive} end>
              {item.icon} {item.name}
            </NavLink>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default React.memo(LayoutSideBar);
