import React from 'react';

export function TagBadge(props: 
    { 
        tagName: string; 
        onDelete: (e: any) => void; 
        color?: string 
    }
) {
    let tagColorClasses = '';
    let buttonColorClasses = '';
    switch (props.color) {
        case 'green':
            tagColorClasses = 'bg-green-100 text-green-700';
            buttonColorClasses =
                'text-green-400 hover:bg-green-200 hover:text-green-500 focus:bg-green-500 focus:text-white';
            break;

        case 'orange':
            tagColorClasses = 'bg-orange-100 text-orange-700';
            buttonColorClasses =
                'text-orange-400 hover:bg-orange-200 hover:text-orange-500 focus:bg-orange-500 focus:text-white';
            break;

        case 'purple':
            tagColorClasses = 'bg-purple-100 text-purple-700';
            buttonColorClasses =
                'text-purple-400 hover:bg-purple-200 hover:text-purple-500 focus:bg-purple-500 focus:text-white';
            break;

        case 'red':
            tagColorClasses = 'bg-red-100 text-red-700';
            buttonColorClasses =
                'text-red-400 hover:bg-red-200 hover:text-red-500 focus:bg-red-500 focus:text-white';
            break;

        case 'yellow':
            tagColorClasses = 'bg-yellow-100 text-yellow-700';
            buttonColorClasses =
                'text-yellow-400 hover:bg-yellow-200 hover:text-yellow-500 focus:bg-yellow-500 focus:text-gray-400';
            break;

        default:
            tagColorClasses = 'bg-indigo-100 text-indigo-700';
            buttonColorClasses =
                'text-indigo-400 hover:bg-indigo-200 hover:text-indigo-500 focus:bg-indigo-500 focus:text-white';
    }

    return (
        <span
            className={
                'inline-flex rounded-full items-center py-0.5 pl-2.5 pr-1 text-sm font-medium ' +
                tagColorClasses
            }
        >
            {props.tagName}
            <button
                type="button"
                className={
                    'flex-shrink-0 ml-0.5 h-4 w-4 rounded-full inline-flex items-center justify-center focus:outline-none ' +
                    buttonColorClasses
                }
                onClick={props.onDelete}
            >
                <span className="sr-only">Remove {props.tagName}</span>
                <svg className="h-2 w-2" stroke="currentColor" fill="none" viewBox="0 0 8 8">
                    <path strokeLinecap="round" strokeWidth="1.5" d="M1 1l6 6m0-6L1 7" />
                </svg>
            </button>
        </span>
    );
}
