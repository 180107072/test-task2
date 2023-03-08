import { HTMLProps, ReactNode } from "react";

interface ServersProps extends HTMLProps<HTMLDivElement> {
  children: ReactNode;
}

export function Servers({ children, className, ...props }: ServersProps) {
  return (
    <div
      {...props}
      className={`w-16 min-w-[4rem] hidden-scrollbar py-2 overflow-auto  flex flex-col gap-2 bg-dark-400 ${className}`}
    >
      {children}
    </div>
  );
}
