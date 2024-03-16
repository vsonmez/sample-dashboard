import AppStore from "..";
import UserStore from "../slices/user-store.slice";

const useUserStore = () => {
  const dispatch = AppStore.useAppDispatch();
  const selectUser = AppStore.useAppSelector(UserStore.select.user);

  const dispatchSetUser = () => {
    dispatch(UserStore.fetchUser());
  };

  const dispatchResetUserStore = () => {
    dispatch(UserStore.actions.reset());
  };

  return {
    user: selectUser,
    setUser: dispatchSetUser,
    resetUserStore: dispatchResetUserStore,
  };
};

export default useUserStore;
