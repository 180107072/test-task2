import { Sidebar } from "./layouts/sidebar";
import { ServersList } from "./containers/servers-list";
import { Navbar } from "./containers/navbar";
import { servers } from "./utils/data";
import {
  AttachmentIcon,
  MicrophoneIcon,
  SendIcon,
  SettingsIcon,
  SpeakersIcon,
} from "./components/icons";
import { ChannelsList } from "./containers/channels-list";

import { maximize, minimize, close } from "#preload";

const FakeMessage = () => (
  <>
    <img
      src={`https://picsum.photos/5${Math.round(Math.random() * 9)}`}
      className="w-9 h-9 cursor-pointer rounded-full"
    />
    <div className="flex flex-col justify-center text-left   h-full">
      <b className="text-sm  w-fit cursor-pointer hover:underline">User user</b>
      <span className="text-sm leading-2 whitespace-normal">
        blablablabalbalbalblabalbabablablalbalbalb abla bla blabla ba blablV
      </span>
    </div>
  </>
);

const UserControls = () => (
  <div className="mt-auto h-12 bg-dark-400">
    <div className="w-full flex full items-center gap-2 px-2 h-full rounded-md ">
      <img
        src={`https://picsum.photos/5${Math.round(Math.random() * 9)}`}
        className="w-8 h-8 rounded-full"
      />

      <div className="flex flex-col justify-center text-left  w-full h-full">
        <p className="text-sm leading-2">User user</p>
        <span className="text-xs text-gray-500 leading-3">#someid</span>
      </div>
      <div className="flex gap-1">
        <button className="p-1 rounded-full hover:bg-dark-300">
          <MicrophoneIcon className="w-5 h-5" />
        </button>

        <button className="p-1 rounded-full hover:bg-dark-300">
          <SpeakersIcon className="w-5 h-5" />
        </button>

        <button className="p-1 rounded-full hover:bg-dark-300">
          <SettingsIcon className="w-5 h-5" />
        </button>
      </div>
    </div>
  </div>
);

function App() {
  return (
    <>
      <div className="h-5 w-full flex justify-end items-center frame bg-dark-400">
        <button className="hover:bg-dark-200 w-7 h-full leading-3 " onClick={() => minimize()}>&ndash;</button>
        <button className="hover:bg-dark-200 w-7 h-full leading-4" onClick={() => maximize()}>▢</button>
        <button className="hover:bg-red-500 w-7 h-full leading-4 mr-0.5" onClick={() => close()}>&#x2715;</button>
      </div>
      <div
        className="h-full w-full  flex bg-dark-400"
        style={{ height: "calc(100vh - 1.25rem)" }}
      >
        <ServersList list={servers} />

        <div className="flex flex-col rounded-l-lg w-full ">
          <Navbar />
          <div className="flex h-full bg-dark-300">
            <div className="flex flex-col h-full">
              <Sidebar
                className="thin-scrollbar"
                style={{ height: "calc(100vh - 6.75rem)" }}
              >
                <ChannelsList />
              </Sidebar>
              <UserControls />
            </div>
            <div className="w-full h-full pr-1 bg-dark-200">
              <div
                className="w-full default-scrollbar py-2 bg-dark-200 flex flex-col flex-1 overflow-y-auto pr-1 overflow-x-hidden whitespace-normal"
                style={{ height: "calc(100vh - 7.25rem)" }}
              >
                {[...Array(10).keys()]
                  .map((i) => i + 1)
                  .map((k, i) => (
                    <div
                      key={`${k}-${i}`}
                      className="w-full my-1 flex gap-2 p-2 h-fit hover:bg-dark-300/30 rounded-r-md"
                      style={{ marginTop: i == 0 ? "auto" : "0.25rem" }}
                    >
                      <FakeMessage />
                    </div>
                  ))}
              </div>

              <div className="w-full h-14 bg-dark-200 flex px-2">
                <div className="w-full flex  items-center h-10 bg-dark-300  rounded-md px-2 text-sm">
                  <button className="hover:text-gray-50 text-gray-400">
                    <AttachmentIcon className="w-7 h-7" />
                  </button>

                  <input
                    className="w-full h-10 bg-dark-300  rounded-md px-2 text-sm"
                    type="text"
                    placeholder="Message #Welcome"
                  />
                  <button className="hover:text-gray-50 text-gray-400">
                    <SendIcon className="w-6 h-6 mr-2 " />
                  </button>
                </div>
              </div>
            </div>
            <Sidebar className="ml-auto thin-scrollbar mr-0.5">
              {[...Array(10).keys()]
                .map((i) => i + 1)
                .map((k, i) => {
                  return (
                    <button
                      key={`${k}-${i}`}
                      className="w-full my-1 flex items-center gap-2 px-2 h-10 rounded-md hover:bg-dark-100/40"
                    >
                      <img
                        src={`https://picsum.photos/5${Math.round(
                          Math.random() * 9
                        )}`}
                        className="w-8 h-8 rounded-full"
                      />
                      <div className="flex flex-col justify-center text-left  w-full h-full">
                        <b className="text-sm leading-4">User user</b>
                        <span className="text-xs leading-3">Status status</span>
                      </div>
                    </button>
                  );
                })}
            </Sidebar>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
