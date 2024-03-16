import { createHashRouter } from "react-router-dom";
import LoginPage from "../pages/Login.page";
import RouteGuardComponent from "../auth/RouteGuard.component";
import ErrorPage from "../pages/Error.page";
import ErrorSubPage from "../pages/ErrorSub.page";

const router = createHashRouter([
  {
    path: "/",
    element: <RouteGuardComponent />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        lazy: async () => {
          const LayoutComponent = await import("../layout/Layout.component");
          return { Component: LayoutComponent.default };
        },
        children: [
          {
            path: "/*",
            element: <ErrorSubPage />,
          },
          {
            path: "/",
            lazy: async () => {
              const ProfileComponent = await import("../pages/Profile.page");
              return { Component: ProfileComponent.default };
            },
          },
        ],
      },
    ],
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
]);

export default router;
