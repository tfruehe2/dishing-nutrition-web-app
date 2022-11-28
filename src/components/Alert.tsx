import React from 'react';
import { CheckCircleIcon, XIcon, ExclamationCircleIcon } from '@heroicons/react/solid';

export function Alert(props: {
    message: string;
    kind?: 'danger' | 'success' | 'info' | 'default';
    className?: string;
    callback?: () => void;
}) {
    let colorName;
    let icon;
    switch (props.kind) {
        case 'success':
            // Hacky method of safelisting classes
            // Better here than hidden in tailwind configs purge.options.safelist
            // bg-green-50 bg-green-100 bg-green-200
            // text-green-500 text-green-800
            // ring-offset-green-50 ring-green-600
            colorName = 'green';
            icon = <CheckCircleIcon className="h-5 w-5 text-green-400" aria-hidden="true" />;
            break;
        case 'danger':
            // Hacky method of safelisting classes
            // Better here than hidden in tailwind configs purge.options.safelist
            // bg-red-50 bg-red-100 bg-red-200
            // text-red-500 text-red-800
            // ring-offset-red-50 ring-red-600
            colorName = 'red';
            icon = <ExclamationCircleIcon className="h-5 w-5 text-red-400" aria-hidden="true" />;
            break;
        default:
            colorName = 'green';
            icon = <CheckCircleIcon className="h-5 w-5 text-green-400" aria-hidden="true" />;
    }

    return (
        <div className={`rounded-md bg-${colorName}-200 p-4 h-12`}>
            <div className="flex">
                <div className="flex-shrink-0">{icon}</div>
                <div className="ml-3">
                    <p className={`text-sm font-medium text-${colorName}-800`}>{props.message}</p>
                </div>
                <div className="ml-auto pl-3">
                    <div className="-mx-1.5 -my-1.5">
                        <button
                            type="button"
                            className={`inline-flex bg-${colorName}-50 rounded-md p-1.5 text-${colorName}-500 hover:bg-${colorName}-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-${colorName}-50 focus:ring-${colorName}-600`}
                            onClick={(e) => {
                                if (props.callback) {
                                    props.callback();
                                }
                            }}
                        >
                            <span className="sr-only">Dismiss</span>
                            <XIcon className="h-5 w-5" aria-hidden="true" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
