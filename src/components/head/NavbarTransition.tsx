import { Popover, Transition } from "@headlessui/react";
import React, { Fragment } from "react";

const NavbarTransition = ({ children }: { children: React.ReactNode }) => {
  return (
    <Transition.Root>
      <Transition.Child
        as={Fragment}
        enter='duration-150 ease-out'
        enterFrom='opacity-0'
        enterTo='opacity-100'
        leave='duration-150 ease-in'
        leaveFrom='opacity-100'
        leaveTo='opacity-0'
      >
        <Popover.Overlay className='fixed inset-0 bg-baltic-sea/75 backdrop-blur-sm' />
      </Transition.Child>
      <Transition.Child
        as={Fragment}
        enter='duration-150 ease-out'
        enterFrom='opacity-0 scale-95'
        enterTo='opacity-100 scale-100'
        leave='duration-100 ease-in'
        leaveFrom='opacity-100 scale-100'
        leaveTo='opacity-0 scale-95'
      >
        <Popover.Panel
          as='ul'
          className='absolute inset-x-0 p-6 mt-4 space-y-4 text-xl font-semibold tracking-normal origin-top border shadow-xl bg-main-back/50 border-gray-500/20 backdrop-blur-xl top-full rounded-2xl text-off-white ring-1 ring-slate-900/5'
        >
          {children}
        </Popover.Panel>
      </Transition.Child>
    </Transition.Root>
  );
};

export default NavbarTransition;
