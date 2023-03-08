import { motion } from "framer-motion";
import { FC, useState } from "react";
import { ServerButton } from "../components/server-button";
import { Servers as ServersWrapper } from "../layouts/servers";

type Server = {
  id: number | string;
  icon: string;
};

type ServersListProps = {
  list: Server[];
};

export const ServersList: FC<ServersListProps> = ({ list }) => {
  const [selected, setSelected] = useState<string | number>(1);

  const wrappedChannel = ({ id, icon }: Server) => (
    <div className="relative flex justify-center items-center" key={id}>
      {id === selected ? (
        <motion.div
          className="absolute left-0 h-7 w-1 bg-gray-200 rounded-r-lg"
          layoutId="root"
          transition={{ type: "spring", stiffness: 200, damping: 20 }}
        />
      ) : null}
      <ServerButton key={id} onClick={() => setSelected(id)}>
        <img src={icon} />
      </ServerButton>
    </div>
  );

  return (
    <ServersWrapper>
      {wrappedChannel({ id: 0, icon: "https://picsum.photos/110" })}
      <hr className="mx-auto w-10 border rounded-md border-dark-200" />
      {list.map(wrappedChannel)}
    </ServersWrapper>
  );
};
