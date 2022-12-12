import React from 'react';

export const EditableTextArea = (props: {
    editable: boolean;
    onChange: (e: any) => void;
    fieldName: string;
    fieldValue: string;
    fieldLabel?: string;
    error?: string;
    className?: string;
    required?: boolean;
    maxCharacters?: number
}) => {
    function onChange(e: any)
    {
        if(props.maxCharacters && e.target.value.length > props.maxCharacters)
        {
            return
        }
        props.onChange(e);
    }

    function displayValue()
    {
        return props.fieldValue.replaceAll(/(?:\r\n|\r|\n)/g, '<br \>')
    }
    
    return (
        <div className={props.className}>
            <label
                htmlFor={props.fieldName}
                className="block text-sm font-medium text-gray-700 capitalize"
            >
                {props.fieldLabel || props.fieldName.replace('_', ' ')}
            </label>
            {props.editable === true ? (
                <div className="mt-1">
                    <textarea
                        id={props.fieldName}
                        name={props.fieldName}
                        onChange={onChange}
                        rows={3}
                        autoComplete={props.fieldName}
                        value={props.fieldValue}
                        required={props.required}
                        className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                    {
                        props.maxCharacters ? (
                        <span 
                            className={'text-sm font-semibold mt-1 flex justify-end ' + (props.fieldValue.length < props.maxCharacters ? 'text-green-400' : 'text-red-400')}
                        >
                            {props.fieldValue.length} / {props.maxCharacters}
                        </span>
                        ) : ''
                    }

                    {props.error && (
                        <div>
                            <p className="text-sm text-red-400 font-bold capitalize">
                                {props.error}
                            </p>
                        </div>
                    )}
                </div>
            ) : (
                <p className="font-semibold text-gray-900" 
                    dangerouslySetInnerHTML={{ __html: 
                        displayValue()
                    }}
                >
                </p>
            )}
        </div>
    );
};
