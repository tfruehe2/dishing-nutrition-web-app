import React from 'react';

export const FormContainer = (props: { children: React.ReactNode; shadowClass?: string }) => {
    return (
        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-3xl">
            <div
                className={
                    props.shadowClass == null
                        ? 'bg-white py-8 px-4 sm:rounded-lg sm:px-10 shadow'
                        : 'bg-white py-8 px-4 sm:rounded-lg sm:px-10 ' + props.shadowClass
                }
            >
                {props.children}
            </div>
        </div>
    );
};
