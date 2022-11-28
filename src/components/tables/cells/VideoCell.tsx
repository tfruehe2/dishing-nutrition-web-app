import React from 'react';
import { rootStore } from '../../../stores/RootStore';
import { CustomDataSelect } from '../../forms/CustomDataSelect';
import { BaseCellProps } from './BaseCell';

export const VideoCell = (props: BaseCellProps) => {
    const { optionsStore } = rootStore();
    return (
        <>
            {props.editable ? (
                <CustomDataSelect
                    fieldName={props.fieldName}
                    fieldLabel={props.fieldLabel}
                    value={String(props.value)}
                    onChange={props.onChange}
                    data={optionsStore.videoOptions.map((farm) => {
                        return {
                            key: farm.option_name,
                            value: farm.value
                        };
                    })}
                />
            ) : (
                <p>
                    {optionsStore.videoOptions.find((video) => {
                        return video.value == props.value;
                    })?.option_name || ''}
                </p>
            )}
        </>
    );
};
