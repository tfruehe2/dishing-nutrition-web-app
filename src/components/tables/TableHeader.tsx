import React from 'react';

export const TableHeader = (props: {
    headers: Array<{
        fieldName: string;
        fieldLabel: string;
    }>;
}) => {
    return (
        <thead className="bg-gray-50">
            <tr>
                {props.headers.map((header) => {
                    return (
                        <th
                            key={header.fieldName}
                            scope="col"
                            className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6"
                        >
                            {header.fieldLabel}
                        </th>
                    );
                })}
            </tr>
        </thead>
    );
};
