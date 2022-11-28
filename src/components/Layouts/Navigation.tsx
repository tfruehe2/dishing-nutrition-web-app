import React, { Component, Fragment, useCallback, useEffect } from 'react';
import Link from 'next/link'
import NavLink from '@/components/NavLink'
import { Disclosure, Menu, Transition } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import {
    ChevronDownIcon,
    UserCircleIcon
} from '@heroicons/react/24/solid';
import { useAuth } from '@/hooks/auth'
import { useRouter } from 'next/router'
import { useState } from 'react'

interface NavLink {
    name: string;
    href: string;
    children?: Array<NavLink>;
}

const Navigation = (props: {
    user: any
}) => {
    const router = useRouter()

    const { logout } = useAuth()

    const [y, setY] = useState(0);

    const handleNavigation = useCallback(
    e => {
        const window = e.currentTarget;
        setY(window.scrollY);
    }, [y]
    );

    useEffect(() => {
        setY(window.scrollY);
        window.addEventListener("scroll", handleNavigation);

        return () => {
            window.removeEventListener("scroll", handleNavigation);
        };
    }, [handleNavigation]);

    const mainNavigation: Array<NavLink> = [
        {
            name: 'Home',
            href: '/'
        },
        {
            name: 'Work With Me',
            href: '/work-with-me'
        },
        {
            name: 'Recipes',
            href: '/recipes'
        },
        {
            name: 'Blog',
            href: '/blog'
        },
        {
            name: 'About',
            href: '/about'
        },
        {
            name: 'Contact',
            href: '/contact'
        },
    ];

    const guestNavigation = [{ name: 'Login', href: '/login' }];

    function classNames(...classes: string[]) {
        return classes.filter(Boolean).join(' ');
    }

    return (
        <Disclosure as="nav" 
            className={classNames(
                y > 0 ? 'shadow-lg' : '',
                "bg-white py-8 sticky top-0 z-30"
            )}
        >
            {({ open }) => (
                <>
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="flex justify-between h-16">
                            <div className="flex">
                                <div className="-ml-2 mr-2 flex items-center md:hidden">
                                    {/* Mobile menu button */}
                                    <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">

                                        {open ? (
                                            <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                                        ) : (
                                            <Bars3Icon
                                                className="block h-6 w-6"
                                                aria-hidden="true"
                                            />
                                        )}
                                    </Disclosure.Button>
                                </div>
                                <div className="flex-shrink-0 flex items-center">
                                    <Link href="/">
                                        <p className="text-2xl font-semibold">
                                            Dishing Nutrition
                                        </p>
                                    </Link>
                                </div>
     
                            </div>
                            <div className="flex items-center">
                                <div className="hidden md:ml-4 md:flex-shrink-0 md:flex md:items-center">
                                <div className="hidden md:ml-6 md:flex md:items-center md:space-x-4">
                                    {mainNavigation.map((item) => {
                                        return item.children?.length ? (
                                            <Menu
                                                key={item.name}
                                                as="div"
                                                className="relative block text-left"
                                            >
                                                <div>
                                                    <Menu.Button className="inline-flex text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                                                        {item.name}
                                                        <ChevronDownIcon
                                                            className="-mr-1 ml-2 h-5 w-5"
                                                            aria-hidden="true"
                                                        />
                                                    </Menu.Button>
                                                </div>

                                                <Transition
                                                    as={Fragment}
                                                    enter="transition ease-out duration-100"
                                                    enterFrom="transform opacity-0 scale-95"
                                                    enterTo="transform opacity-100 scale-100"
                                                    leave="transition ease-in duration-75"
                                                    leaveFrom="transform opacity-100 scale-100"
                                                    leaveTo="transform opacity-0 scale-95"
                                                >
                                                    <Menu.Items className="origin-top-left absolute z-10 left-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                                                        <div className="">
                                                            {item.children.map((child) => (
                                                                <Menu.Item key={child.name}>
                                                                    <NavLink
                                                                        href={child.href}
                                                                        className={({ isActive }) =>
                                                                            classNames(
                                                                                isActive
                                                                                    ? 'bg-gray-900 text-white'
                                                                                    : 'bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white',
                                                                                'block px-4 py-2 text-sm'
                                                                            )
                                                                        }
                                                                    >
                                                                        {child.name}
                                                                    </NavLink>
                                                                </Menu.Item>
                                                            ))}
                                                        </div>
                                                    </Menu.Items>
                                                </Transition>
                                            </Menu>
                                        ) : (
                                            <NavLink
                                                key={item.name}
                                                href={item.href}
                                                active={router.pathname === item.href}
                                            >
                                                {item.name}
                                            </NavLink>
                                        );
                                    })}
                                </div>
                                    {/* Profile dropdown or Login/Register Nav Items */}
                                    {props.user ? (
                                        <Menu as="div" className="relative ml-3">
                                            <div>
                                                <Menu.Button className="flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                                                    <span className="sr-only">Open user menu</span>
                                                    <UserCircleIcon className="h-8 w-8 rounded-full bg-gray-200" />
                                                </Menu.Button>
                                            </div>
                                            <Transition
                                                as={Fragment}
                                                enter="transition ease-out duration-100"
                                                enterFrom="transform opacity-0 scale-95"
                                                enterTo="transform opacity-100 scale-100"
                                                leave="transition ease-in duration-75"
                                                leaveFrom="transform opacity-100 scale-100"
                                                leaveTo="transform opacity-0 scale-95"
                                            >
                                                <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                                    <Menu.Item>
                                                        {({ active }) => (
                                                            <NavLink
                                                                href="/users/me"
                                                                className={({ isActive }) =>
                                                                    classNames(
                                                                        isActive
                                                                            ? 'bg-gray-900 text-white'
                                                                            : 'text-gray-400 hover:bg-gray-700 hover:text-white',
                                                                        'px-3 py-2 text-sm font-medium block'
                                                                    )
                                                                }
                                                            >
                                                                Profile
                                                            </NavLink>
                                                        )}
                                                    </Menu.Item>
                                                    <Menu.Item>
                                                        {({ active }) => (
                                                            <NavLink
                                                                href="/"
                                                                active={active}
                                                                className={({ isActive }) =>
                                                                    classNames(
                                                                        active
                                                                            ? 'bg-gray-900 text-white'
                                                                            : 'text-gray-400 hover:bg-gray-700 hover:text-white',
                                                                        'px-3 py-2 text-sm font-medium block'
                                                                    )
                                                                }
                                                                onClick={(e) => {
                                                                    logout();
                                                                }}
                                                            >
                                                                Logout
                                                            </NavLink>
                                                        )}
                                                    </Menu.Item>
                                                </Menu.Items>
                                            </Transition>
                                        </Menu>
                                    ) : (
                                        <div className="px-2 space-y-1 sm:px-3">
                                            {guestNavigation.map((item) => (
                                                <NavLink
                                                    key={item.name}
                                                    href={item.href}
                                                    className={({ isActive }) =>
                                                        classNames(
                                                            isActive
                                                                ? 'bg-gray-900 text-white'
                                                                : 'text-gray-400 hover:bg-gray-700 hover:text-white',
                                                            'px-3 py-2 rounded-md text-sm font-medium block'
                                                        )
                                                    }
                                                >
                                                    {item.name}
                                                </NavLink>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>

                    <Disclosure.Panel className="md:hidden">
                        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                            {mainNavigation.map((item) => {
                                return item.children?.length ? (
                                    <Menu
                                        key={item.name}
                                        as="div"
                                        className="relative inline-block text-left"
                                    >
                                        <div>
                                            <Menu.Button className="inline-flex text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                                                {item.name}
                                                <ChevronDownIcon
                                                    className="-mr-1 ml-2 h-5 w-5"
                                                    aria-hidden="true"
                                                />
                                            </Menu.Button>
                                        </div>

                                        <Transition
                                            as={Fragment}
                                            enter="transition ease-out duration-100"
                                            enterFrom="transform opacity-0 scale-95"
                                            enterTo="transform opacity-100 scale-100"
                                            leave="transition ease-in duration-75"
                                            leaveFrom="transform opacity-100 scale-100"
                                            leaveTo="transform opacity-0 scale-95"
                                        >
                                            <Menu.Items className="origin-top-right absolute left-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                                                <div className="">
                                                    {item.children.map((child) => (
                                                        <Menu.Item key={child.name}>
                                                            <NavLink
                                                                href={child.href}
                                                                className={({ isActive }) =>
                                                                    classNames(
                                                                        isActive
                                                                            ? 'bg-gray-900 text-white'
                                                                            : 'bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white',
                                                                        'block px-4 py-2 text-sm'
                                                                    )
                                                                }
                                                            >
                                                                {child.name}
                                                            </NavLink>
                                                        </Menu.Item>
                                                    ))}
                                                </div>
                                            </Menu.Items>
                                        </Transition>
                                    </Menu>
                                ) : (
                                    <NavLink
                                        key={item.name}
                                        href={item.href}
                                        className={({ isActive }) =>
                                            classNames(
                                                isActive
                                                    ? 'bg-gray-900 text-white'
                                                    : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                                                'px-3 py-2 rounded-md text-sm font-medium block'
                                            )
                                        }
                                    >
                                        {item.name}
                                    </NavLink>
                                );
                            })}
                        </div>
                        <div className="pt-4 pb-3 border-t border-gray-700">
                            {props.user ? (
                                <Menu as="div" className="relative ml-3">
                                    <div>
                                        <Menu.Button className="flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                                            <span className="sr-only">Open user menu</span>
                                            <UserCircleIcon className="h-8 w-8 rounded-full" />
                                        </Menu.Button>
                                    </div>
                                    <Transition
                                        as={Fragment}
                                        enter="transition ease-out duration-100"
                                        enterFrom="transform opacity-0 scale-95"
                                        enterTo="transform opacity-100 scale-100"
                                        leave="transition ease-in duration-75"
                                        leaveFrom="transform opacity-100 scale-100"
                                        leaveTo="transform opacity-0 scale-95"
                                    >
                                        <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                            <Menu.Item>
                                                {({ active }) => (
                                                    <NavLink
                                                        href="/users/me"
                                                        className={({ isActive }) =>
                                                            classNames(
                                                                isActive
                                                                    ? 'bg-gray-900 text-white'
                                                                    : 'text-gray-400 hover:bg-gray-700 hover:text-white',
                                                                'px-3 py-2 text-sm font-medium block'
                                                            )
                                                        }
                                                    >
                                                        Profile
                                                    </NavLink>
                                                )}
                                            </Menu.Item>
                                            <Menu.Item>
                                                {({ active }) => (
                                                    <NavLink
                                                        href="/"
                                                        className={({ isActive }) =>
                                                            classNames(
                                                                isActive
                                                                    ? 'bg-gray-900 text-white'
                                                                    : 'text-gray-400 hover:bg-gray-700 hover:text-white',
                                                                'px-3 py-2 text-sm font-medium block'
                                                            )
                                                        }
                                                        onClick={(e) => {
                                                            logout();
                                                        }}
                                                    >
                                                        Logout
                                                    </NavLink>
                                                )}
                                            </Menu.Item>
                                        </Menu.Items>
                                    </Transition>
                                </Menu>
                            ) : (
                                <div className="mt-3 px-2 space-y-1 sm:px-3">
                                    {guestNavigation.map((item) => (
                                        <NavLink
                                            key={item.name}
                                            href={item.href}
                                            className={({ isActive }) =>
                                                classNames(
                                                    isActive
                                                        ? 'bg-gray-900 text-white'
                                                        : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                                                    'px-3 py-2 text-sm font-medium'
                                                )
                                            }
                                        >
                                            {item.name}
                                        </NavLink>
                                    ))}
                                </div>
                            )}
                        </div>
                    </Disclosure.Panel>
                </>
            )}
        </Disclosure>
    );
};

export default Navigation;