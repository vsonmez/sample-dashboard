import React from "react";
import SectionHeadingComponent from "../shared-components/SectionHeading.component";
import useUserStore from "../store/hooks/use-user-store.hook";
import ButtonComponent from "../shared-components/buttons/Button.component";

const ProfilePage = () => {
  const { user } = useUserStore();
  return (
    <div aria-roledescription="profile" className="h-full">
      <SectionHeadingComponent title="Home" subtitle="View and edit your profile" />
      <div className="px-5 pt-10 flex items-start gap-20 h-[calc(100%-64px)] overflow-auto">
        <div className="flex items-center gap-5">
          <img src={user?.image} alt="" className="w-24 h-24 rounded-full p-0.5 ring-4 ring-gray-300" />
          <div className="flex flex-col gap-2">
            <ButtonComponent text="Change Avatar" />
            <p>JPG, GIF or PNG. 1MB max.</p>
          </div>
        </div>
        <ul className="divide-y-2 flex-1">
          <li className="flex items-center py-1">
            <span className="min-w-96 font-medium">Full Name:</span>
            <span className="flex-1">
              {user?.firstName} {user?.lastName}
            </span>
            <div className="flex justify-end">
              <ButtonComponent text="Edit" isButtonBordered />
            </div>
          </li>
          <li className="flex items-center py-1">
            <span className="min-w-96 font-medium">Email:</span>
            <span className="flex-1">{user?.email}</span>
            <div className="flex justify-end">
              <ButtonComponent text="Edit" isButtonBordered />
            </div>
          </li>
          <li className="flex items-center py-1">
            <span className="min-w-96 font-medium">Username:</span>
            <span className="flex-1">{user?.username}</span>
            <div className="flex justify-end">
              <ButtonComponent text="Edit" isButtonBordered />
            </div>
          </li>
          <li className="flex items-center py-1">
            <span className="min-w-96 font-medium">Gender:</span>
            <span className="flex-1">{user?.gender}</span>
            <div className="flex justify-end">
              <ButtonComponent text="Edit" isButtonBordered />
            </div>
          </li>
          <li className=" py-5 flex items-start">
            <div className="w-96 pr-5">
              <h3 className="text-base font-medium">Suspend Account</h3>
              <p className="text-gray-600 italic">You can temporarily suspend your account here.</p>
            </div>
            <div className="flex flex-col gap-2">
              <ButtonComponent text="Suspend my account" variant="warning" />
            </div>
          </li>
          <li>
            <div className=" py-5 flex items-start">
              <div className="w-96 pr-5">
                <h3 className="text-base font-medium">Delete Account</h3>
                <p className="text-gray-600 italic">
                  No longer want to use our service? You can delete your account here. This action is not reversible.
                  All information related to this account will be deleted permanently.
                </p>
              </div>
              <div className="flex flex-col gap-2">
                <ButtonComponent text="Delete my account" variant="danger" />
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default React.memo(ProfilePage);
