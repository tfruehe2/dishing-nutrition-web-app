import React from 'react';

export const DeliverySelect = (props: {
    value: boolean;
    onChange: (e: any) => void;
    disabled?: boolean;
    editable?: boolean;
}) => {
    function onChange(e) {
        if (e && e.target) {
            let event = {
                target: {
                    value: e.target.value === 'On' ? 1 : 0,
                    name: e.target.name
                }
            };
            props.onChange(event);
        }
    }

    const options = ['On', 'Off'];

    return (
        <div>
            <label htmlFor="delivery" className="block text-sm font-medium text-gray-700">
                Delivery?
            </label>
            {props.editable ? (
                <select
                    id="delivery"
                    name="delivery"
                    onChange={(e) => {
                        onChange(e);
                    }}
                    autoComplete="delivery"
                    value={props.value ? 'On' : 'Off'}
                    required
                    disabled={props.disabled}
                    className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 border focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md disabled:cursor-not-allowed"
                >
                    {options.map((option) => {
                        return (
                            <option key={option + '_delivery_option'} value={option}>
                                {option}
                            </option>
                        );
                    })}
                </select>
            ) : (
                <p className="font-semibold text-gray-900">{props.value ? 'On' : 'Off'}</p>
            )}
        </div>
    );
};
