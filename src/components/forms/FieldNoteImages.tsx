import React, { useEffect, useState } from 'react';
import { FieldNoteImage } from '../../stores/FarmStore';
import { FieldNoteImageCell } from '../FieldNoteImageCell';
import { ImageInputSVG } from '../ImageInputSVG';

export const FieldNoteImages = (props: {
    editable: boolean;
    imageChangeHandler: (e: any) => void;
    fieldName: string;
    fieldValue: Array<FieldNoteImage>;
    validationRequirements?: string;
    fieldLabel?: string;
    fieldType?: string;
    error?: string;
    className?: string;
    required?: boolean;
    deleteFieldNoteImageHandler?: (id: number) => void;
}) => {
    let [tempFileNames, setTempFileNames] = useState('');
    let [errorString, setErrorString] = useState(props.error || '');

    function fileChange(event) {
        var fileCount = event?.currentTarget?.files?.length ?? 0;
        if (fileCount) {
            var tempfilename = '';
            for (var i = 0; i < event.currentTarget.files.length; i++) {
                var FileSize = event.currentTarget.files[i].size / 1024 / 1024;
                if (FileSize > 4) {
                    setErrorString('Max File Size is 4 MiB');
                    setTempFileNames('');
                    return;
                }

                tempfilename += event.currentTarget.files[i].name;
                if (i + 1 < event.currentTarget.files.length) {
                    tempfilename += ', ';
                }
            }
            setTempFileNames(tempfilename);
            let e = {
                target: {
                    name: props.fieldName,
                    value: event.currentTarget.files
                }
            };
            props.imageChangeHandler(e);
        }
    }

    useEffect(() => {
        if(!props.editable)
        {
            setTempFileNames('')
        }
    }, [props.editable])

    return (
        <>
            <div>
                <label
                    htmlFor={props.fieldName}
                    className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2 capitalize truncate"
                >
                    {props.fieldLabel || props.fieldName.replace('_', ' ')}{' '}
                    {props.fieldValue.length && !tempFileNames ? (
                        <span style={{ wordBreak: 'break-word' }}>
                            : ({props.fieldValue.length + " Images"})
                        </span>
                    ) : (
                        <span className="lowercase word-break">
                            {tempFileNames ? `: add (${tempFileNames})` : ''}
                        </span>
                    )}
                </label>
                {props.editable === true ? (
                    <>
                        <div className="mt-1 sm:mt-0 sm:col-span-2">
                            <div
                                className={
                                    (props.fieldValue.length || tempFileNames
                                        ? 'border-green-300'
                                        : 'border-gray-300') +
                                    ' max-w-2xl flex justify-center px-6 pt-5 pb-6 border-2 border-dashed rounded-md'
                                }
                            >
                                <div className="space-y-1 text-center">
                                    <ImageInputSVG
                                        onClick={(event) => {
                                            document!.getElementById('files')!.click();
                                        }}
                                    />
                                    <div className="flex text-sm text-gray-600">
                                        <label
                                            htmlFor={props.fieldName}
                                            className="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
                                        >
                                            <span>
                                                {props.fieldValue.length || tempFileNames
                                                    ? 'Add file(s)'
                                                    : 'Upload a file(s)'}
                                            </span>
                                            <input
                                                id={props.fieldName}
                                                name={props.fieldName}
                                                type="file"
                                                required={props.required}
                                                accept="image/*,video/*"
                                                multiple
                                                onChange={fileChange}
                                                className="form-control"
                                                hidden
                                            />
                                        </label>
                                    </div>
                                    <p className="text-xs text-gray-500">
                                        {props.validationRequirements || 'PNG or JPG 4MB'}
                                    </p>
                                </div>
                            </div>
                            {errorString && (
                                <div>
                                    <p className="text-sm text-red-400 font-bold capitalize">
                                        {errorString}
                                    </p>
                                </div>
                            )}
                        </div>
                    </>
                ) : (
                    null
                )}
                <div className="grid grid-cols-3 my-3">
                        {props.fieldValue.map((image, index) => {
                            return (
                                <FieldNoteImageCell
                                    key={index+"_field_note_image_cell"}
                                    fieldNoteImage={image}
                                    deleteHandler={props.deleteFieldNoteImageHandler}
                                />
                            );
                        })}
                </div>
            </div>
        </>
    );
};
