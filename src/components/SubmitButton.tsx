import React from 'react';

export const SubmitButton = (props: { submitButtonText?: string; onClick?: (e: any) => void }) => {
    return (
        <button
            type="submit"
            className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-lightBlue text-base font-medium text-white hover:bg-indigo-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-900 sm:ml-3 sm:w-auto sm:text-sm"
            onClick={props.onClick}
        >
            {props.submitButtonText ? props.submitButtonText : 'Submit'}
        </button>
    );
};
