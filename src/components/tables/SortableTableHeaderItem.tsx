import React, { useState, useMemo } from 'react';
import { ChevronUpIcon } from '@heroicons/react/solid';
import { ChevronDownIcon } from '@heroicons/react/solid';
import { FilterIcon } from '@heroicons/react/solid';
import debounce from 'lodash.debounce';
import { TableHeaderFilter } from './TableHeaderFilter';

export const TableHeaderItem = (props: {
    fieldName: string;
    fieldLabel: string;
    sortByCallback: (fieldName: string, sortDirection: 'ASC' | 'DESC') => void;
    filterByCallback: (fieldName: string, value: string) => void;
    sortable: boolean;
    filterable: boolean;
    filterType?: 'text' | 'select';
    filterOptions?: Array<{
        value: string;
        optionText: string;
    }>;
}) => {
    const [sortOrder, setSortOrder] = useState<'ASC' | 'DESC'>('ASC');
    const [filterText, setFilterText] = useState<string>('');
    const [filtering, setFiltering] = useState<boolean>(false);

    function onChange(e: any) {
        if (e && e.target) {
            setFilterText(e.target.value);
        }
    }
    const changeHandler = (event) => {
        setFilterText(event.target.value);
        debounce(props.filterByCallback(props.fieldName, event.target.value), 1500);
    };

    return (
        <th
            scope="col"
            className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6"
        >
            <span className="inline-flex w-full">
                {props.sortable ? (
                    <span
                        className="inline-flex items-center space-x-2 cursor-pointer"
                        onClick={() => {
                            props.sortByCallback(props.fieldName, sortOrder);
                            setSortOrder(sortOrder === 'ASC' ? 'DESC' : 'ASC');
                        }}
                    >
                        {props.fieldLabel}
                        {sortOrder === 'ASC' ? (
                            <ChevronUpIcon className="w-6" />
                        ) : (
                            <ChevronDownIcon className="w-6" />
                        )}
                    </span>
                ) : (
                    <span className="inline-flex items-center space-x-2 cursor-pointer">
                        {props.fieldLabel}
                    </span>
                )}

                {props.filterable && (
                    <span
                        className="ml-auto mr-0 cursor-pointer"
                        onClick={() => {
                            if (filtering) {
                                props.filterByCallback(props.fieldName, '');
                                setFilterText('');
                            }

                            setFiltering(!filtering);
                        }}
                    >
                        <FilterIcon className="w-6" />
                    </span>
                )}
            </span>
            {filtering && (
                <TableHeaderFilter
                    fieldName={props.fieldName}
                    filterValue={filterText}
                    changeHandler={changeHandler}
                    filterType={props.filterType}
                    filterOptions={props.filterOptions}
                />
            )}
        </th>
    );
};
