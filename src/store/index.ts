import { configureStore } from "@reduxjs/toolkit";

import { useDispatch, useSelector } from "react-redux";

import type { TypedUseSelectorHook } from "react-redux";
import UserStore from "./slices/user-store.slice";
import GLobalStore from "./slices/global-store.slice";

namespace AppStore {
  export const store = configureStore({
    reducer: {
      global: GLobalStore.reducer,
      user: UserStore.reducer,
    },
  });
  export type RootState = ReturnType<typeof store.getState>;
  export type AppDispatch = typeof store.dispatch;
  export const useAppDispatch: () => AppDispatch = useDispatch;
  export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
}
export default AppStore;
