import React from 'react';

export const TableHeaderFilter = (props: {
    fieldName: string;
    filterValue: string;
    changeHandler: (event: any) => void;
    filterType?: 'select' | 'text';
    filterOptions?: Array<{
        value: string;
        optionText: string;
    }>;
}) => {
    return (
        <div>
            {props.filterType === 'select' && props.filterOptions?.length ? (
                <select
                    id={props.fieldName + '_search'}
                    name={props.fieldName + '_search'}
                    onChange={(e) => {
                        props.changeHandler(e);
                    }}
                    autoComplete={props.fieldName}
                    value={props.filterValue}
                    required
                    className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 border focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md disabled:cursor-not-allowed"
                >
                    <option value="" disabled>
                        Select Value
                    </option>
                    {props.filterOptions.map((item) => {
                        return (
                            <option key={item.optionText + '_searchoption'} value={item.value}>
                                {item.optionText}
                            </option>
                        );
                    })}
                </select>
            ) : (
                <input
                    id={props.fieldName + '_search'}
                    name={props.fieldName + '_search'}
                    value={props.filterValue}
                    className="block w-full pl-4 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    placeholder="Filter"
                    type="search"
                    onChange={props.changeHandler}
                />
            )}
        </div>
    );
};
