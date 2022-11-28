import React from 'react';

export const RequiresCalibrationSelect = (props: {
    value: string;
    onChange: (e: any) => void;
    disabled?: boolean;
}) => {
    const options = ['Yes', 'No'];

    return (
        <div>
            <label
                htmlFor="requires_calibration"
                className="block text-sm font-medium text-gray-700"
            >
                Requires Calibration?
            </label>
            <select
                id="requires_calibration"
                name="requires_calibration"
                onChange={(e) => {
                    props.onChange(e);
                }}
                autoComplete="requires_calibration"
                value={props.value}
                required
                disabled={props.disabled}
                className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 border focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md disabled:cursor-not-allowed"
            >
                <option value="" disabled>
                    Select Value
                </option>
                {options.map((option) => {
                    return (
                        <option key={option + '_option'} value={option}>
                            {option}
                        </option>
                    );
                })}
            </select>
        </div>
    );
};
