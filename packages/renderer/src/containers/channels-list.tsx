import { LayoutGroup } from "framer-motion";
import { ChannelButton } from "../components/channel-button";
import { HashtagIcon } from "../components/icons";

import { channels } from "../utils/data";

export const ChannelsList = () => {
  return (
    <LayoutGroup>
      {channels.map(({ name, children }, i) => {
        return (
          <ChannelButton title={name} key={`${name}+${i}`}>
            {children.map(({ name }, i) => {
              return (
                <button
                  key={`${name}-${i}`}
                  className="hover:bg-dark-100 leading p-1 w-full flex  items-center text-left my-1 rounded"
                >
                  <span className="mx-2 text-gray-400">
                    <HashtagIcon className="w-4 h-4" />
                  </span>
                  {name}
                </button>
              );
            })}
          </ChannelButton>
        );
      })}
    </LayoutGroup>
  );
};
