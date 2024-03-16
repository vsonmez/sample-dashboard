import React from "react";
import useUserStore from "../store/hooks/use-user-store.hook";
import { useNavigate } from "react-router-dom";
import ButtonIconComponent from "../shared-components/buttons/ButtonIcon.component";
import IconMenuComponent from "../shared-components/icons/IconMenu.component";
import useGlobalStore from "../store/hooks/use-global-store.hook";

const LayoutHeader = ({
  isShowSideBar,
  onToggleSiderbar,
}: {
  isShowSideBar: boolean;
  onToggleSiderbar: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const { user, resetUserStore } = useUserStore();
  const { resetGlobalStore } = useGlobalStore();
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("accessToken");
    resetUserStore();
    resetGlobalStore();
    navigate("/login");
  };

  const handleToggleSidebar = React.useCallback(() => {
    onToggleSiderbar(!isShowSideBar);
  }, [isShowSideBar, onToggleSiderbar]);

  return (
    <header aria-roledescription="header" className="border-b flex items-center justify-between p-2">
      <ButtonIconComponent onClick={handleToggleSidebar}>
        <IconMenuComponent className="w-5 h-5" />
      </ButtonIconComponent>
      <div>
        <details className="relative" open={false}>
          <summary className="flex items-center gap-3 cursor-pointer" title={`${user?.firstName} ${user?.lastName}`}>
            <img src={user?.image} alt="user avatar" className="w-10 rounded-full ring-2 ring-gray-300 p-0.5" />
            <span className="text-ellipsis w-24 inline-block text-nowrap overflow-hidden">
              {user?.firstName} {user?.lastName}
            </span>
          </summary>
          <div className="absolute right-0 left-0 top-[100%] bg-white shadow-lg rounded ring-1 ring-gray-200 flex flex-col overflow-hidden">
            <button className="text-left p-2 hover:bg-gray-100 transition-colors" onClick={handleLogout}>
              Logout
            </button>
          </div>
        </details>
      </div>
    </header>
  );
};

export default React.memo(LayoutHeader);
