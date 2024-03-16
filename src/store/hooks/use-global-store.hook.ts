import AppStore from "..";
import GLobalStore from "../slices/global-store.slice";

const useGlobalStore = () => {
  const dispatch = AppStore.useAppDispatch();

  const selectPreloaderStatus = AppStore.useAppSelector(GLobalStore.select.getPreloaderStatus);

  const dispatchIncreaseRequestCount = () => {
    dispatch(GLobalStore.actions.increaseRequestCount());
  };

  const dispatchDecreaseRequestCount = () => {
    dispatch(GLobalStore.actions.decreaseRequestCount());
  };

  const dispatchResetGlobalStore = () => {
    dispatch(GLobalStore.actions.reset());
  };

  return {
    preloaderStatus: selectPreloaderStatus,
    increaseRequestCount: dispatchIncreaseRequestCount,
    decreaseRequestCount: dispatchDecreaseRequestCount,
    resetGlobalStore: dispatchResetGlobalStore,
  };
};

export default useGlobalStore;
