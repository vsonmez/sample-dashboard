import React from "react";
import { RouterProvider } from "react-router-dom";
import router from "./router";
import PreloaderComponent from "./shared-components/Preloader.component";
import useGlobalStore from "./store/hooks/use-global-store.hook";

const App: React.FC = (): JSX.Element => {
  const { preloaderStatus } = useGlobalStore();
  return (
    <>
      <RouterProvider router={router} />
      {preloaderStatus && <PreloaderComponent />}
    </>
  );
};

export default React.memo(App);
