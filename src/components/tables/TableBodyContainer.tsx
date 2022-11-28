import React, { ReactNode } from 'react';

export const TableBodyComponent = (props: { children: ReactNode; className?: string }) => {
    return (
        <tbody className={'divide-y divide-gray-200 bg-white ' + (props.className || '')}>
            {props.children}
        </tbody>
    );
};
