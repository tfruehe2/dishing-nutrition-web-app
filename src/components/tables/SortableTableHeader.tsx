import React, { useState } from 'react';
import { TableHeaderItem } from './SortableTableHeaderItem';
import { TableHeader } from './TableComponent';

export const SortableTableHeader = (props: {
    headers: Array<TableHeader>;
    sortByCallback: (fieldName: string, sortDirection: 'ASC' | 'DESC') => void;
    filterByCallback: (fieldName: string, value: string) => void;
}) => {
    return (
        <thead className="bg-gray-50">
            <tr>
                {props.headers.map((header) => {
                    return header.sortable || header.filterable ? (
                        <TableHeaderItem
                            key={header.fieldName}
                            fieldLabel={header.fieldLabel}
                            fieldName={header.fieldName}
                            sortByCallback={props.sortByCallback}
                            filterByCallback={props.filterByCallback}
                            sortable={header.sortable}
                            filterable={header.filterable}
                            filterType={header.filterType}
                            filterOptions={header.filterOptions}
                        />
                    ) : (
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
