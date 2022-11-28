import React from 'react';
import { PlusIcon } from '@heroicons/react/solid';
import { EditableTextField } from './EditableTextField';

export const RequestedFarmField = (props: {
    editable: boolean;
    onChange: (e: any) => void;
    fieldName: string;
    fieldValue: string | number;
    openSaveFarmModal: (open: boolean) => void;
    fieldLabel?: string;
    fieldType?: string;
    error?: string;
    canCreateFarm: boolean;
}) => {
    return (
        <div className="mt-1 flex border-gray-300 rounded-md justify-between">
            <EditableTextField
                fieldName="requested_farm"
                fieldValue={props.fieldValue}
                onChange={props.onChange}
                editable={props.editable}
                className="flex-grow"
            />

            {props.canCreateFarm && (
                <button
                    className="h-10 w-10 p-1 mt-auto mb-0 bg-gray-100 my-auto text-green-500 rounded-r-md shadow-sm hover:shadow-lg disabled:cursor-not-allowed disabled:hover:shadow-sm"
                    type="button"
                    disabled={props.fieldValue ? false : true}
                    onClick={() => props.openSaveFarmModal(true)}
                >
                    <PlusIcon />
                </button>
            )}
        </div>
    );
};
