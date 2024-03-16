import React from "react";
import { Outlet } from "react-router-dom";
import useUserStore from "../store/hooks/use-user-store.hook";
import LayoutSideBarComponent from "./LayoutSideBar.component";
import LayoutHeaderComponent from "./LayoutHeader.component";

const Layout = () => {
  const [isShowSideBar, setIsShowSideBar] = React.useState(true);
  const { setUser, user } = useUserStore();

  React.useEffect(() => {
    if (!user) {
      setUser();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div aria-roledescription="layout" className="h-full flex">
      {isShowSideBar && <LayoutSideBarComponent />}
      <div aria-roledescription="content" className="w-full">
        <LayoutHeaderComponent isShowSideBar={isShowSideBar} onToggleSiderbar={setIsShowSideBar} />
        <div className="h-[calc(100vh-57px)]">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default React.memo(Layout);
