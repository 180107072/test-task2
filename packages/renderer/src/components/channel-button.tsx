import { AnimatePresence, motion, useCycle } from "framer-motion";
import { FC, PropsWithChildren } from "react";
import { ArrowIcon } from "./icons";

interface ChannelButtonProps extends PropsWithChildren {
  title: string;
}

export const ChannelButton: FC<ChannelButtonProps> = ({ children, title }) => {
  const [isOpen, toggleOpen] = useCycle(true, false);

  return (
    <motion.div className="flex flex-col" layout="position">
      <button
        className="text-gray-300 text-sm flex items-center hover:text-gray-50 my-1 w-full text-left"
        onClick={() => toggleOpen()}
      >
        <span
          className="mr-1 transition"
          style={{ transform: `rotate(${isOpen ? 90 : 0}deg)` }}
        >
          <ArrowIcon className="w-2 h-2" />
        </span>
        <b>{title}</b>
      </button>
      <div className="w-full h-full overflow-hidden">
        <AnimatePresence initial={false}>
          {isOpen ? (
            <motion.div
              initial={{ opacity: 0, translateY: -100 }}
              animate={{ opacity: 1, translateY: 0 }}
              exit={{ opacity: 0, translateY: -100 }}
              className="text-sm w-full"
              transition={{ duration: 0.2 }}
            >
              {children}
            </motion.div>
          ) : null}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};


