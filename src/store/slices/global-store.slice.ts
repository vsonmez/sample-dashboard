import { createSlice } from "@reduxjs/toolkit";
import AppStore from "..";
namespace GLobalStore {
  type GlobalStoreType = {
    preloaderStatus: boolean;
    requestCount: number;
  };
  const initialState: GlobalStoreType = {
    preloaderStatus: false,
    requestCount: 0,
  };
  const globalStoreSlice = createSlice({
    initialState,
    name: "global",
    reducers: {
      increaseRequestCount(state) {
        state.requestCount++;
        state.preloaderStatus = state.requestCount > 0;
      },
      decreaseRequestCount(state) {
        state.requestCount = Math.max(state.requestCount - 1, 0);
        state.preloaderStatus = state.requestCount > 0;
      },
      reset(state) {
        state.requestCount = 0;
        state.preloaderStatus = false;
      },
    },
  });
  export const actions = globalStoreSlice.actions;
  export const reducer = globalStoreSlice.reducer;
  export const select = {
    getPreloaderStatus: (state: AppStore.RootState) => state.global.preloaderStatus,
  };
}

export default GLobalStore;
