import { HTMLProps, ReactNode } from "react";
import { Wrapper, WrapperProps } from "./wrapper";

interface SidebarProps extends WrapperProps {
  children?: ReactNode;
}

export function Sidebar({
  children,
  className,
  style,
  ...props
}: SidebarProps) {
  return (
    <Wrapper
      {...props}
      className={`w-56 min-w-[14rem] p-2 bg-dark-300 overflow-auto ${className}`}
    >
      {children}
    </Wrapper>
  );
}
