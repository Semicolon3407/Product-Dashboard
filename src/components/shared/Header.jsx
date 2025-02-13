import {
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
  Popover,
  PopoverButton,
  PopoverPanel,
} from "@headlessui/react";
import React from "react";
import {
  HiOutlineBell,
  HiOutlineChatAlt,
  HiOutlineSearch,
} from "react-icons/hi";
import { useNavigate } from "react-router-dom";
import backgroundImage from '../../assets/person.jpg';


const Header = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-white h-16 px-4 flex justify-between items-center border-b border-gray-200">
      <div className="relative">
        <HiOutlineSearch
          fontSize={20}
          className="text-green-400 absolute top-1/2 -translate-y-1/2 left-3"
        />
        <input
          type="text"
          placeholder="Search..."
          className="text-sm focus:outline-none active:outline-none h-10 w-[24rem] border border-gray-300 rounded-sm pl-11 pr-4"
        />
      </div>

      <div className="flex items-center gap-2 mr-2">
        <Popover>
          <PopoverButton className="inline-flex items-center text-gray-700 hover:text-opacity-100 focus:outline-none active:bg-gray-100 p-1.5 rounded-sm">
            <HiOutlineChatAlt fontSize={24} />
          </PopoverButton>

          <PopoverPanel
            transition
            anchor="bottom"
            className="w-80 pr-[65px] pt-3 divide-y divide-white/5 rounded-lg bg-white/5 text-sm/6 transition duration-200 ease-in-out [--anchor-gap:var(--spacing-5)] data-[closed]:-translate-y-1 data-[closed]:opacity-0"
          >
            <div className="bg-white rounded-sm shadow-md ring-1 ring-black ring-opacity-5 px-2 py-2.5">
              <strong className="text-gray-700 font-medium">Messages</strong>
              <div className="mt-2 py-1 text-sm">This is a message</div>
            </div>
          </PopoverPanel>
        </Popover>

        <Popover>
          <PopoverButton className="inline-flex items-center text-gray-700 hover:text-opacity-100 focus:outline-none active:bg-gray-100 p-1.5 rounded-sm">
            <HiOutlineBell fontSize={24} />
          </PopoverButton>

          <PopoverPanel
            transition
            anchor="bottom"
            className="w-80 pr-[30px] pt-3 divide-y divide-white/5 rounded-lg bg-white/5 text-sm/6 transition duration-200 ease-in-out [--anchor-gap:var(--spacing-5)] data-[closed]:-translate-y-1 data-[closed]:opacity-0"
          >
            <div className="bg-white rounded-sm shadow-md ring-1 ring-black ring-opacity-5 px-2 py-2.5">
              <strong className="text-gray-700 font-medium">
                Notifications
              </strong>
              <div className="mt-2 py-1 text-sm">These are Notifications</div>
            </div>
          </PopoverPanel>
        </Popover>

        <Menu as="div" className="relative">
          <div>
            <MenuButton className="ml-2 inline-flex rounded-full focus:outline-none focus:ring-2 focus:ring-neutral-400">
              <span className="sr-only">Open User Menu</span>
              <div
                className="h-10 w-10  rounded-full bg-cover bg-no-repeat bg-center"
                style={{
                  backgroundImage: `url(${backgroundImage})`,
                }}
              >
                <span className="sr-only">Dilip Shrestha</span>
              </div>
            </MenuButton>
          </div>

          <MenuItems
            transition
            anchor="bottom end"
            className="origin-top-right z-10 absolute right-0 mt-2 w-48 rounded-sm shadow-md p-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none transition duration-100 ease-out [--anchor-gap:var(--spacing-1)] data-[closed]:scale-95 data-[closed]:opacity-0"
          >
            <MenuItem>
              {({ active }) => (
                <div
                  className={`${
                    active ? 'bg-gray-200' : ''
                  } text-gray-700 block cursor-pointer rounded-sm px-4 py-2`}
                  onClick={() => navigate("/profile")}
                >
                  Your Profile
                </div>
              )}
            </MenuItem>
            <MenuItem>
              {({ active }) => (
                <div
                  className={`${
                    active ? 'bg-gray-200' : ''
                  } text-gray-700 block cursor-pointer rounded-sm px-4 py-2`}
                  onClick={() => navigate("/settings")}
                >
                  Settings
                </div>
              )}
            </MenuItem>
            <MenuItem>
              {({ active }) => (
                <div
                  className={`${
                    active ? 'bg-gray-200' : ''
                  } text-gray-700 block cursor-pointer rounded-sm px-4 py-2`}
                  onClick={() => navigate("/logout")}
                >
                  Logout
                </div>
              )}
            </MenuItem>
          </MenuItems>
        </Menu>
      </div>
    </div>
  );
};

export default Header;
