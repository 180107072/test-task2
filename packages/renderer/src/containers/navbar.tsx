import { motion, useAnimation } from "framer-motion";
import { DropdownMenu } from "../components/dropdown";
import {
  AddMemberIcon,
  ArrowIcon,
  AtIcon,
  CloseIcon,
  HashtagIcon,
  LeaveIcon,
  MemberIcon,
  NotificationIcon,
  QuestionIcon,
  SearchIcon,
} from "../components/icons";

const ServerNavbar = () => {
  return (
    <DropdownMenu
      className="w-52 min-w-[14rem]"
      menu={
        <>
          <button className="text-left h-8 px-2 hover:bg-dark-200 rounded flex items-center">
            Invite people <AddMemberIcon className="w-4 h-4 ml-auto" />
          </button>
          <button className="text-left h-8 px-2 hover:bg-dark-200 rounded flex items-center">
            Notification settings
            <NotificationIcon className="w-4 h-4 ml-auto" />
          </button>
          <button className="text-left h-8 px-2 flex items-center text-red-500 hover:bg-red-500 hover:text-white rounded">
            Leave server <LeaveIcon className="w-4 h-4 ml-auto" />
          </button>
        </>
      }
    >
      {(close, open, isOpen) => (
        <motion.button
          className="w-full relative h-full flex items-center px-4 text-md bg-dark-300 hover:bg-dark-400/30 transition hover:text-gray-100"
          onClick={() => (isOpen ? close() : open())}
        >
          <b>Game center</b>
          <span className="ml-auto">
            {isOpen ? (
              <CloseIcon className="w-4 h-4" />
            ) : (
              <ArrowIcon className="w-4 h-4 rotate-90" />
            )}
          </span>
        </motion.button>
      )}
    </DropdownMenu>
  );
};

export const SearchResults = () => (
  <div className="w-full h-32 flex justify-center items-center">
    Search Results
  </div>
);

export const Navbar = () => {
  const controls = useAnimation();

  return (
    <div className="w-full flex h-10 min-h-[2.5rem] z-10  items-center  shadow shadow-dark-400 bg-dark-200">
      <ServerNavbar />
      <b className="mx-3 flex h-full justify-center items-center">
        <HashtagIcon className="w-5 h-5 mr-2" /> welcome
      </b>
      <div className="w-full gap-3 flex items-center justify-end px-3">
        <button className="p-1 rounded-full hover:bg-dark-300">
          <NotificationIcon className="w-5 h-5" />
        </button>
        <button className="p-1 rounded-full hover:bg-dark-300">
          <MemberIcon className="w-5 h-5" />
        </button>
        <DropdownMenu
          onClose={() => controls.start({ width: 160 })}
          menu={<SearchResults />}
        >
          {(_, open) => (
            <motion.div
              animate={controls}
              className="flex bg-dark-400 w-40 rounded-md px-2 items-center whitespace-nowrap"
            >
              <input
                type="text"
                className="bg-dark-400  w-full h-6  text-xs"
                placeholder="Search..."
                onFocus={() => {
                  controls.start({ width: 220 });
                  open();
                }}
              />
              <SearchIcon className="w-4 h-4 max-w-[1rem] max-h-[1rem] mr-auto text-gray-500" />
            </motion.div>
          )}
        </DropdownMenu>

        <button className="p-1 rounded-full hover:bg-dark-300">
          <AtIcon className="w-5 h-5" />
        </button>

        <button className="p-1 rounded-full hover:bg-dark-300">
          <QuestionIcon className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};
