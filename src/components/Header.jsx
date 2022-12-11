import { Fragment } from "react";
import React from "react";
import { useEffect, useState } from "react";
import { Link } from "gatsby";

import { Popover, Transition } from "@headlessui/react";
import {
  Bars3Icon,
  XMarkIcon,
  ShoppingBagIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/outline";
import { ChevronDownIcon } from "@heroicons/react/20/solid";

import Logo from "../images/logo-white.png";
import LogoColor from "../images/logo-color.png";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Header({ siteTitle }) {

  /* transparent header functionality - source: https://dev.to/cesareuseche/react-navbar-change-background-color-on-scroll-react-js-gatsby-2a39 */
  const [navbar, setNavbar] = useState(false);
  const changeBackground = () => {
    if (window.scrollY >= 80) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeBackground);
  });

  return (
    /* Source: https://tailwindui.com/components/marketing/elements/headers */
    <Popover className={navbar ? "navbar active" : "navbar"}>
      <div>
        <div className="grid grid-cols-3 w-full justify-between items-center">
          {/* Burger menu */}
          <div className="md:hidden">
            <Popover.Button className="inline-flex items-center justify-center">
              <span className="sr-only">Open menu</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </Popover.Button>
          </div>

          {/* Navigation items */}
          <Popover.Group as="nav" className="hidden space-x-10 md:flex">
            <Popover className="relative">
              {({ open }) => (
                <>
                  <Popover.Button
                    className={classNames(
                      open ? "text-white" : "text-white",
                      "group inline-flex items-center rounded-md text-base font-light"
                    )}
                  >
                    <span id="nav-item">Patterns</span>
                    <ChevronDownIcon
                      id="nav-item"
                      className={classNames("ml-2 h-5 w-5")}
                      aria-hidden="true"
                    />
                  </Popover.Button>

                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-200"
                    enterFrom="opacity-0 translate-y-1"
                    enterTo="opacity-100 translate-y-0"
                    leave="transition ease-in duration-150"
                    leaveFrom="opacity-100 translate-y-0"
                    leaveTo="opacity-0 translate-y-1"
                  >
                    <Popover.Panel className="absolute z-10 -left-16">
                      <div className="overflow-hidden">
                        <div
                          id="dropdown-container"
                          className="relative flex flex-col gap-8 pl-12 pr-56 py-6 my-8 rounded-b-lg"
                        >
                          <Link id="nav-item" to="/collection/english">
                            English
                          </Link>
                          <Link id="nav-item" to="/collection/dansk">
                            Dansk
                          </Link>
                        </div>
                      </div>
                    </Popover.Panel>
                  </Transition>
                </>
              )}
            </Popover>

            <Link to="/guides" id="nav-item" className="text-base font-light">
              Guides
            </Link>
            <Link to="/about" id="nav-item" className="text-base font-light">
              About
            </Link>
          </Popover.Group>

          {/* Logo */}
          <div className="flex justify-center">
            <Link to="/">
              <img
                src={Logo}
                alt={siteTitle}
                className="header-logo"
                id="logo-primary"
                width={70}
                height={70}
                loading="lazy"
              />
            </Link>
            <Link to="/">
              <img
                src={LogoColor}
                alt={siteTitle}
                className="header-logo"
                id="logo-secondary"
                width={70}
                height={70}
                loading="lazy"
              />
            </Link>
          </div>

          {/* Icon items */}
          <div className="md-hidden items-center justify-end flex gap-4">
            {/* Search functionality */}
            <input
              type="text"
              placeholder="Search..."
              aria-label="Search"
              className="bg-transparent placeholder-current hidden md:block"
            />
            <button type="button">
              <Link to="/search-results">
                <MagnifyingGlassIcon id="nav-item" className="h-5 w-5" />
              </Link>
            </button>

            <Link to="/cart">
              <ShoppingBagIcon id="nav-item" className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <Transition
        as={Fragment}
        enter="duration-200 ease-out"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="duration-100 ease-in"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <Popover.Panel
          focus
          className="absolute text-white focus:text-white bg-[#F4BBF8] inset-x-0 top-0 h-screen transform transition md:hidden"
        >
          <div>
            <div className="menu-container">
              <div className="flex items-center justify-between">
                <div className="-mr-2">
                  <Popover.Button className="inline-flex items-center justify-center">
                    <span className="sr-only">Close menu</span>
                    <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                  </Popover.Button>
                </div>
              </div>
            </div>
            <div className="space-y-12 py-12 px-8">
              <div className="grid grid-cols-1 gap-y-8">
                <Link
                  to="/products"
                  id="navbar-alt"
                  className="text-3xl font-light"
                >
                  Patterns
                </Link>

                <Link
                  to="/guides"
                  id="navbar-alt"
                  className="text-3xl font-light"
                >
                  Guides
                </Link>

                <Link
                  to="/about"
                  id="navbar-alt"
                  className="text-3xl font-light"
                >
                  About
                </Link>
              </div>
            </div>
            <div className="flex justify-center my-56 h-full w-screen">
              <Link to="/">
                <img
                  src={Logo}
                  alt={siteTitle}
                  className="header-logo"
                  id="logo-primary"
                  width={120}
                  height={120}
                  loading="lazy"
                />
              </Link>
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  );
}
