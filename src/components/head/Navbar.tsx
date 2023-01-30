import { Fragment } from "react";
import Link from "next/link";
import { Popover, Transition } from "@headlessui/react";
import clsx from "clsx";
import { IoSearch } from "react-icons/io5";
import { Button, ButtonLink } from "@components/Button";
import { Container } from "@components/Container";
import { navlinks } from "@contents/links";
import Image from "next/image";
import MenuButton from "./MenuButton";
import NavbarTransition from "./NavbarTransition";
import SearchBar from "./SearchBar";
import Logo from "./Logo";

function MobileNavigation() {
  return (
    <Popover>
      {({ open, close }) => (
        <>
          <MenuButton open={open} />
          <NavbarTransition>
            {navlinks.map((nav, index) => (
              <li key={"navigation-" + nav.id}>
                <Link href={nav.link}>
                  <span
                    className='inline-flex items-center justify-start w-full gap-x-3'
                    onClick={() => close()}
                  >
                    <nav.Icon className='transition duration-1000' />
                    {nav.name}
                  </span>
                </Link>
              </li>
            ))}
          </NavbarTransition>
        </>
      )}
    </Popover>
  );
}

const Navbar = () => {
  return (
    <header className='py-10'>
      <Container>
        <nav className='relative z-50 text-sm'>
          <ul className='flex items-center gap-x-2'>
            <li>
              <Logo />
            </li>
            <li>
              <SearchBar />
            </li>
            <Navlinks />

            <li className='hidden ml-auto md:block'>
              <Link href='/login'>
                <span className='px-2 py-1 rounded-lg text-off-white hover:bg-slate-900/20 hover:text-slate-100'>
                  Sign in
                </span>
              </Link>
            </li>

            <li className='ml-auto text-xs md:ml-8'>
              <ButtonLink
                href='/register'
                color='blue'
                className='text-xs bg-purple-700'
              >
                <span>
                  Get started<span className='hidden lg:inline'> today</span>
                </span>
              </ButtonLink>
            </li>
            <li className='lg:hidden'>
              <button
                type='button'
                className='inline-flex items-center justify-center text-white bg-transparent outline-none appearance-none ring-0 h-7 place-content-center'
              >
                <span>
                  <IoSearch className='w-6 h-6' />
                </span>
              </button>
            </li>
            <li className='-mr-1 md:hidden'>
              <MobileNavigation />
            </li>
          </ul>
        </nav>
      </Container>
    </header>
  );
};

export const Navlinks: React.FC = () => {
  return (
    <>
      {navlinks.slice(0, 3).map((nav, index) => (
        <li
          className='hidden ml-12 md:block'
          key={"Desktop-navigation-" + nav.id}
        >
          <Link href={nav.link}>
            <span className='px-2 py-1 rounded-lg text-off-white hover:bg-slate-900/20 hover:text-slate-100'>
              {nav.name}
            </span>
          </Link>
        </li>
      ))}
    </>
  );
};

export default Navbar;
