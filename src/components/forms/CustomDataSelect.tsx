import React from 'react';

const defaultProps = {
    required: true
};

const CustomDataSelect = (props: {
    fieldName: string;
    data: Array<{
        key: string;
        value: string;
    }>;
    value: string;
    onChange: (e: any) => void;
    fieldLabel?: string;
    disabled?: boolean;
    required?: boolean;
    editable?: boolean;
}) => {
    return (
        <div>
            <label htmlFor="state" className="block text-sm font-medium text-gray-700 capitalize">
                {props.fieldLabel || props.fieldName.replace('_', ' ')}
            </label>
            {props.editable ? (
                <select
                    id={props.fieldName + '_select'}
                    name={props.fieldName}
                    onChange={(e) => {
                        props.onChange(e);
                    }}
                    autoComplete={props.fieldName}
                    value={props.value || ''}
                    required={props.required}
                    disabled={props.disabled}
                    className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 border focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md disabled:cursor-not-allowed"
                >
                    <option value="">
                        Select {props.fieldLabel || props.fieldName.replace('_', ' ')}
                    </option>

                    {props.data.map((item) => {
                        return (
                            <option key={item.key + '_option'} value={item.value}>
                                {item.key}
                            </option>
                        );
                    })}
                </select>
            ) : (
                <p className="font-semibold text-gray-900">
                    {props.data.find((data) => props.value == data.value)?.key || 'N/A'}
                </p>
            )}
        </div>
    );
};

CustomDataSelect.defaultProps = defaultProps;

export { CustomDataSelect };
