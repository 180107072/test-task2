import { motion } from "framer-motion";
import { ReactNode, useEffect, useRef, useState } from "react";
import { useDimensions } from "../hooks/useDimensions";
import { useClickOutside } from "../hooks/useOutsideClick";
import { drowdown } from "../utils/animations";

interface DropdownMenuProps {
  menu: ReactNode;
  children: (close: () => void, open: () => void, isOpen: boolean) => ReactNode;
  className?: string;
  onClose?: () => void;
}

export const DropdownMenu = ({
  menu,
  children,
  className,
  onClose,
}: DropdownMenuProps) => {
  const [isOpen, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const { height } = useDimensions(containerRef);

  useClickOutside(containerRef, () => setOpen(false));

  useEffect(() => {
    if (!isOpen && onClose) {
      onClose();
    }
  }, [isOpen]);

  return (
    <motion.div
      initial={false}
      animate={isOpen ? "open" : "closed"}
      custom={height}
      className={`h-full flex-col flex text-center justify-center items-center ${className}`}
      ref={containerRef}
    >
      {children(
        () => setOpen(false),
        () => setOpen(true),
        isOpen
      )}
      <motion.div
        className="absolute flex shadow shadow-black/20 flex-col top-16 w-56 h-fit text-sm gap-2 p-2 text-left  bg-dark-400  border-dark-300 border-4 rounded-lg"
        variants={drowdown}
      >
        {menu}
      </motion.div>
    </motion.div>
  );
};
