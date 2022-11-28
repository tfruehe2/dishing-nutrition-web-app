import React from 'react';

export const ActionButton = (props: {
    onClick: (e: any) => void;
    children: React.ReactNode;
    className?: string;
}) => {
    let classList =
        'inline-flex items-center justify-center rounded-md border border-transparent bg-blue-800 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:w-auto';

    return (
        <button
            onClick={props.onClick}
            className={props.className ? props.className + ' ' + classList : classList}
            type="button"
        >
            {props.children}
        </button>
    );
};
