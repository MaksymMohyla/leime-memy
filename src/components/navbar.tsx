import { Link } from '@heroui/link';

import {
  Navbar as HeroUINavbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
} from '@heroui/navbar';
import clsx from 'clsx';

import { ThemeSwitch } from '@/components/theme-switch';
import { Logo } from '@/components/icons';
import { NavLink } from 'react-router-dom';

export const Navbar = () => {
  return (
    <HeroUINavbar
      maxWidth="xl"
      position="sticky"
      className="border-b border-gray-400"
    >
      <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
        <NavbarBrand className="gap-3 max-w-fit">
          <Link
            className="flex justify-start items-center gap-1"
            color="foreground"
            href="/"
          >
            <Logo />
            <p className="font-bold text-inherit">HOME</p>
          </Link>
        </NavbarBrand>

        <div className="flex gap-4 sm:gap-10 lg:gap-16 justify-center mx-auto h-full">
          {['Table', 'List'].map((item) => (
            <NavbarItem key={item} className="flex align-center">
              <NavLink
                className={({ isActive }) =>
                  clsx(
                    'px-4 rounded flex items-center',
                    isActive && 'bg-gray-400 italic'
                  )
                }
                to={`/${item.toLowerCase()}`}
              >
                {item}
              </NavLink>
            </NavbarItem>
          ))}
        </div>

        <NavbarItem className="basis-1 pl-4">
          <ThemeSwitch />
        </NavbarItem>
      </NavbarContent>
    </HeroUINavbar>
  );
};
