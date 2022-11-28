import React from 'react';
import { EditableTextField } from '../../forms/EditableTextField';
import { BaseCellProps } from './BaseCell';

export const TextCell = (props: BaseCellProps) => {
    return (
        <>
            {props.editable ? (
                <EditableTextField
                    fieldName={props.fieldName}
                    fieldLabel={props.fieldLabel}
                    fieldValue={String(props.value)}
                    onChange={props.onChange}
                    editable={props.editable}
                />
            ) : (
                <p>{String(props.value)}</p>
            )}
        </>
    );
};
