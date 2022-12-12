import React from 'react';
import { NumberCell } from './NumberCell';
import { TextAreaCell } from './TextAreaCell';
import { TextCell } from './TextCell';
import { YesNoCell } from './YesNoCell';
import { BaseCellProps } from './BaseCell';

export const CellRenderer = (props: { cellProps: BaseCellProps; cellType: string }) => {
    switch (props.cellType) {
        case 'TextCell':
            return <TextCell {...props.cellProps} />;

        case 'TextAreaCell':
            return <TextAreaCell {...props.cellProps} />;

        case 'NumberCell':
            return <NumberCell {...props.cellProps} />;

        case 'YesNoCell':
            return <YesNoCell {...props.cellProps} />;

        default:
            return <TextCell {...props.cellProps} />;
    }
};
