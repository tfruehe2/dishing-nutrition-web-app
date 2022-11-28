import React from 'react';

export const YesNoSelect = (props: {
    fieldLabel: string;
    fieldName: string;
    value: boolean;
    onChange: (e: any) => void;
    disabled?: boolean;
    editable?: boolean;
}) => {
    function onChange(e) {
        if (e && e.target) {
            let event = {
                target: {
                    value: e.target.value === 'Yes' ? 1 : 0,
                    name: e.target.name
                }
            };
            props.onChange(event);
        }
    }

    const options = ['Yes', 'No'];

    return (
        <div>
            <label htmlFor={props.fieldName} className="block text-sm font-medium text-gray-700">
                {props.fieldLabel}?
            </label>
            {props.editable ? (
                <select
                    id={props.fieldName + "_select"}
                    name={props.fieldName}
                    onChange={(e) => {
                        onChange(e);
                    }}
                    autoComplete={props.fieldName}
                    value={props.value ? 'Yes' : 'No'}
                    required
                    disabled={props.disabled}
                    className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 border focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md disabled:cursor-not-allowed"
                >
                    {options.map((option) => {
                        return (
                            <option key={option + '_option'} value={option}>
                                {option}
                            </option>
                        );
                    })}
                </select>
            ) : (
                <p className="font-semibold text-gray-900">{props.value ? 'Yes' : 'No'}</p>
            )}
        </div>
    );
};
