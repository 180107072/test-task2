import { HTMLProps, ReactNode } from "react";
import { isMac } from "#preload";

export interface WrapperProps extends HTMLProps<HTMLDivElement> {
  children?: ReactNode;
  navbar?: boolean;
  auxulary?: boolean;
  additional?: number;
}

export function Wrapper({
  children,
  style,
  navbar,
  auxulary,
  additional,
  ...props
}: WrapperProps) {
  const navbarHeight = navbar !== undefined ? 2.5 : 0;
  const auxularybarHeight = auxulary !== undefined ? 3 : 0;
  const frameHeight = isMac() ? 0 : 1.25;

  return (
    <div
      {...props}
      style={{
        height: `calc(100vh - ${
          navbarHeight +
          auxularybarHeight +
          frameHeight +
          (additional !== undefined ? additional : 0)
        }rem)`,
        ...style,
      }}
    >
      {children}
    </div>
  );
}
