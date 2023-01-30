import clsx from "clsx";
import React from "react";

type ContainerProps = {
  className?: string | string[];
  children: React.ReactNode;
};

export function Container({ className, children, ...props }: ContainerProps) {
  return (
    <div
      className={clsx("mx-auto max-w-9xl px-4 sm:px-6 lg:px-8", className)}
      {...props}
    >
      {children}
    </div>
  );
}
