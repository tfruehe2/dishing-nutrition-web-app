import React from 'react';
import { ActionLink } from './ActionLink';

export const EditPageHeader = (props: {
    pageTitle: string;
    linkTo: string;
    linkTitle?: string;
}) => {
    return (
        <div className="sm:mx-auto sm:w-full sm:max-w-2xl">
            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
                {props.pageTitle}
            </h2>
            <div className="w-full flex justify-end">
                <ActionLink to={props.linkTo}>
                    {props.linkTitle ? props.linkTitle : 'View All'}
                </ActionLink>
            </div>
        </div>
    );
};
