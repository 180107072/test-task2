import { HTMLProps, ReactNode } from "react";

interface SidebarProps extends HTMLProps<HTMLDivElement> {
  children?: ReactNode;
}

export function Sidebar({
  children,
  className,
  style,
  ...props
}: SidebarProps) {
  return (
    <div
      {...props}
      className={`w-56 min-w-[14rem] p-2 bg-dark-300 overflow-auto ${className}`}
      style={{ height: "calc(100vh - 3.75rem)", ...style }}
    >
      {children}
    </div>
  );
}
