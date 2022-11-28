import React from 'react';
import { CustomDataSelect } from '../../forms/CustomDataSelect';
import { BaseCellProps } from './BaseCell';

export const YesNoCell = (props: BaseCellProps) => {
    let value = Boolean(props.value);
    function onChange(e: any) {
        if (e && e.target) {
            let event = {
                target: {
                    value: e.target.value === 'Yes' ? 1 : 0,
                    name: e.target.name
                }
            };
            props.onChange(event);
        }
    }
    return (
        <>
            {props.editable ? (
                <CustomDataSelect
                    fieldName={props.fieldName}
                    fieldLabel={props.fieldLabel}
                    value={value ? 'Yes' : 'No'}
                    onChange={onChange}
                    data={[
                        {
                            key: 'Yes',
                            value: 'Yes'
                        },
                        {
                            key: 'No',
                            value: 'No'
                        }
                    ]}
                />
            ) : (
                <p>{value ? 'Yes' : 'No'}</p>
            )}
        </>
    );
};
