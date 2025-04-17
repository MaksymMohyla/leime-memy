import { Link } from '@heroui/link';

import {
  Navbar as HeroUINavbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
} from '@heroui/navbar';
import { link as linkStyles } from '@heroui/theme';
import clsx from 'clsx';

import { ThemeSwitch } from '@/components/theme-switch';
import { Logo } from '@/components/icons';

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

        <div className="flex gap-8 sm:gap-10 lg:gap-16 justify-center mx-auto h-full">
          {['Table', 'List'].map((item) => (
            <NavbarItem key={item} className="flex align-center">
              <Link
                className={clsx(
                  linkStyles({ color: 'foreground' }),
                  'data-[active=true]:text-primary data-[active=true]:font-medium data-[active=true]:bg-gray-200 px-4 rounded'
                )}
                href={`/${item.toLowerCase()}`}
              >
                {item}
              </Link>
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
