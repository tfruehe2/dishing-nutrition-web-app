import React from 'react';
import { ImageInputSVG } from '../ImageInputSVG';

export const ImageField = (props: {
    editable: boolean;
    imageChangeHandler: (e: any) => void;
    fieldName: string;
    fieldValue: string | number;
    validationRequirements?: string;
    fieldLabel?: string;
    fieldType?: string;
    error?: string;
    className?: string;
    required?: boolean;
}) => {
    return (
        <>
            <div>
                <label
                    htmlFor={props.fieldName}
                    className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2 capitalize"
                >
                    {props.fieldLabel || props.fieldName.replace('_', ' ')}{' '}
                    {props.fieldValue ? (
                        <span style={{ wordBreak: 'break-word' }}>: ({props.fieldValue})</span>
                    ) : (
                        ''
                    )}
                </label>
                {props.editable === true ? (
                    <div className="mt-1 sm:mt-0 sm:col-span-2">
                        <div className="max-w-2xl flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                            <div className="space-y-1 text-center">
                                <ImageInputSVG />
                                <div className="flex text-sm text-gray-600">
                                    <label
                                        htmlFor={props.fieldName}
                                        className="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
                                    >
                                        <span>
                                            {props.fieldValue ? 'Change file' : 'Upload a file'}
                                        </span>
                                        <input
                                            id={props.fieldName}
                                            name={props.fieldName}
                                            type="file"
                                            required={props.required}
                                            onChange={(e) => props.imageChangeHandler(e)}
                                            className="sr-only"
                                        />
                                    </label>
                                </div>
                                <p className="text-xs text-gray-500">
                                    {props.validationRequirements || 'PNG or JPG 4MB'}
                                </p>
                            </div>
                        </div>
                        {props.error && (
                            <div>
                                <p className="text-sm text-red-400 font-bold capitalize">
                                    {props.error}
                                </p>
                            </div>
                        )}
                    </div>
                ) : (
                    <>
                        {props.fieldValue ? (
                            <image
                                href={String(props.fieldValue)}
                                className="w-16 h-16 aspect-ratio rounded"
                            />
                        ) : (
                            <p className="font-semibold text-gray-900">No Images Found.</p>
                        )}
                    </>
                )}
            </div>
        </>
    );
};
