import React from 'react';

const defaultProps = {
    showSelectAll: true
};

const CustomDataMultiSelect = (props: {
    fieldName: string;
    data: Array<{
        key: string;
        value: string;
    }>;
    value: Array<string>;
    onChange: (e: any) => void;
    fieldLabel?: string;
    disabled?: boolean;
    showSelectAll?: boolean;
}) => {
    function onChange(e: any) {
        let value = Array.from(e.target.selectedOptions, (option) => option.value);
        props.onChange({
            target: {
                value: value,
                name: props.fieldName
            }
        });
    }

    return (
        <div>
            <label htmlFor="state" className="block text-sm font-medium text-gray-700 capitalize">
                {props.fieldLabel || props.fieldName.replace('_', ' ')}{' '}
                <small>(hold cmd on Mac or ctrl on Windows to select multiple)</small>
            </label>
            <select
                id={props.fieldName + '_select'}
                name={props.fieldName + '[]'}
                multiple={true}
                onChange={onChange}
                autoComplete={props.fieldName}
                value={props.value}
                required
                disabled={props.disabled}
                className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 border focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md disabled:cursor-not-allowed"
            >
                {props.showSelectAll && (
                    <option value="">Select All</option>
                )}

                {props.data.map((item) => {
                    return (
                        <option key={item.key + '_option'} value={item.value}>
                            {item.key}
                        </option>
                    );
                })}
            </select>
        </div>
    );
};

CustomDataMultiSelect.defaultProps = defaultProps;

export { CustomDataMultiSelect };
