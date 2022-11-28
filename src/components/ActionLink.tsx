import React from 'react';
import { Link } from 'react-router-dom';

export const ActionLink = (props: {
    to: string;
    children: React.ReactNode;
    className?: string;
}) => {
    let classList =
        'inline-flex items-center justify-center rounded-md border border-transparent bg-blue-800 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:w-auto';

    return (
        <Link
            to={props.to}
            className={props.className ? props.className + ' ' + classList : classList}
        >
            {props.children}
        </Link>
    );
};
