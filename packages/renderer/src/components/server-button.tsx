import { HTMLMotionProps, motion } from "framer-motion";
import { ReactNode } from "react";

interface ServerButtonProps extends HTMLMotionProps<"button"> {
  children: ReactNode;
}

export const ServerButton = ({ children, ...props }: ServerButtonProps) => {
  return (
    <motion.button
      {...props}
      whileTap={{ scale: 0.9 }}
      transition={{ delay: 0 }}
      className="rounded-button  w-11 h-11 bg-dark-100 overflow-hidden"
    >
      {children}
    </motion.button>
  );
};
