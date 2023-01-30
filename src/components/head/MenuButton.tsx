import { Popover } from "@headlessui/react";
import clsx from "clsx";
import React from "react";

const MenuButton = ({ open, close }: { open: Boolean; close?: boolean }) => {
  return (
    <Popover.Button className='relative z-10 flex items-center justify-center w-8 h-8 focus:outline-none focus:ring-0'>
      <span className='sr-only'>Toggle Navigation</span>
      <svg
        aria-hidden='true'
        className='h-3.5 w-3.5 overflow-visible stroke-off-white'
        fill='none'
        strokeWidth={2}
        strokeLinecap='round'
      >
        <path
          d='M0 1H14M0 7H14M0 13H14'
          className={clsx("origin-center transition", {
            "scale-90 opacity-0": open,
          })}
        />
        <path
          d='M2 2L12 12M12 2L2 12'
          className={clsx("origin-center transition", {
            "scale-90 opacity-0": !open,
          })}
        />
      </svg>
    </Popover.Button>
  );
};

export default MenuButton;
