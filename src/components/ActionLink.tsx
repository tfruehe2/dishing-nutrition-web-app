import React from 'react';
import Link from 'next/link'

export const ActionLink = (props: {
    to: string;
    children: React.ReactNode;
    className?: string;
}) => {
    let classList =
        'inline-flex items-center font-bold justify-center rounded-md border border-transparent bg-blue-800 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:w-auto';

    return (
        <Link
            href={props.to}
            className={props.className ? props.className + ' ' + classList : classList}
        >
            {props.children}
        </Link>
    );
};
