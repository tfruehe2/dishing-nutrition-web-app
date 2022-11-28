import React from 'react';

export const SeedTreatmentFlowRateField = (props: {
    editable: boolean;
    onChange: (e: any) => void;
    fieldName: string;
    fieldValue: string | number | undefined;
    fieldLabel?: string;
    error?: string;
    className?: string;
    required?: boolean;
}) => {
    function toFixed(num, fixed) {
        var re = new RegExp('^-?\\d+(?:\.\\d{0,' + (fixed || -1) + '})?');
        return num.toString().match(re)[0];
    }

    function onChange(e: any)
    {
        let value = (e.target.value.includes('.') && e.target.value.split('.')[1].length > 3) 
                    ? toFixed(e.target.value,3) : e.target.value
        let event = {
            target : {
                name: e.target.name,
                value: value
            }
        }
        props.onChange(event)
    }
    return (
        <div className={props.className}>
            <label
                htmlFor={props.fieldName}
                className="block text-sm font-medium text-gray-700 capitalize"
            >
                {props.fieldLabel || props.fieldName.replaceAll('_', ' ')}
            </label>
            {props.editable === true ? (
                <div className="mt-1">
                    <input
                        id={props.fieldName}
                        name={props.fieldName}
                        type='number'
                        step='.001'
                        onChange={onChange}
                        placeholder="0.000"
                        autoComplete={props.fieldName}
                        value={props.fieldValue}
                        required={props.required}
                        className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                    {props.error && (
                        <div>
                            <p className="text-sm text-red-400 font-bold capitalize">
                                {props.error}
                            </p>
                        </div>
                    )}
                </div>
            ) : (
                <p className="font-semibold text-gray-900">{props.fieldValue || 'N/A'}</p>
            )}
        </div>
    );
};
