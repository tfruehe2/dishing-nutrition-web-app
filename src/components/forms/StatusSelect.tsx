import React from 'react';

export const StatusSelect = (props: {
    value: string;
    onChange: (e: any) => void;
    disabled?: boolean;
    editable?: boolean;
}) => {
    const options = ['Active', 'Inactive'];

    return (
        <div>
            <label htmlFor="status" className="block text-sm font-medium text-gray-700">
                Status
            </label>
            {props.editable ? (
                <select
                    id="status"
                    name="status"
                    onChange={(e) => {
                        props.onChange(e);
                    }}
                    autoComplete="status"
                    value={props.value}
                    required
                    disabled={props.disabled}
                    className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 border focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md disabled:cursor-not-allowed"
                >
                    <option value="" disabled>
                        Select Status
                    </option>

                    {options.map((option) => {
                        return (
                            <option key={option + '_option'} value={option}>
                                {option}
                            </option>
                        );
                    })}
                </select>
            ) : (
                <p className="font-semibold text-gray-900">{props.value || 'N/A'}</p>
            )}
        </div>
    );
};
