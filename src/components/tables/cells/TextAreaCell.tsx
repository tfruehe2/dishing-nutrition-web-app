import React from 'react';
import { EditableTextArea } from '../../forms/EditableTextArea';
import { BaseCellProps } from './BaseCell';

export const TextAreaCell = (props: BaseCellProps) => {
    return (
        <>
            {props.editable ? (
                <EditableTextArea
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
