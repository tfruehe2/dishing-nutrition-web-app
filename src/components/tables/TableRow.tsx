import React, { useState } from 'react';
import { EditableTextField } from '../forms/EditableTextField';
import { CellRenderer } from './cells/CellRenderer';

export interface RowData {
    recordId: number;
    data: Object;
}

export const TableRow = (props: {
    recordId: number;
    data: Object;
    editableInline?: boolean;
    viewRecord?: (id: number) => void;
    deleteRecord?: (id: number) => void;
    saveChanges?: (data: any) => void;
    headerFields: Array<{
        fieldName: string;
        fieldLabel: string;
        cellType: string;
    }>;
}) => {
    const [editing, setEditing] = useState(false);

    const [data, setData] = useState(props.data);

    const actionsAvailible: boolean = Boolean(
        props.viewRecord || props.deleteRecord || props.editableInline
    );

    function cancelEdit() {
        setData(props.data);
        setEditing(false);
    }

    function onChange(e: any) {
        setData({ ...data, [e.target.name]: e.target.value });
    }

    return (
        <>
            <tr>
                {props.headerFields.map((header) => {
                    return header.fieldName ? (
                        <td
                            key={`record_${props.recordId}_field_${header.fieldName}`}
                            className="py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6"
                        >
                            <CellRenderer
                                cellProps={{
                                    editable: editing,
                                    fieldLabel: header.fieldLabel,
                                    fieldName: header.fieldName,
                                    value: data[header.fieldName],
                                    onChange: onChange
                                }}
                                cellType={header.cellType}
                            />
                        </td>
                    ) : (
                        ''
                    );
                })}

                {actionsAvailible && (
                    <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
                        {props.viewRecord && !editing && (
                            <button
                                className="text-lightBlue hover:text-indigo-900 mr-4 "
                                onClick={() => {
                                    props.viewRecord!(props.recordId);
                                }}
                            >
                                View
                            </button>
                        )}
                        {props.editableInline && !editing && (
                            <button
                                className="text-yellow-400 hover:text-indigo-900 mr-4 "
                                onClick={() => {
                                    setEditing(!editing);
                                }}
                            >
                                Edit
                            </button>
                        )}

                        {props.editableInline && editing && (
                            <>
                                <button
                                    onClick={() => {
                                        if (props.saveChanges) {
                                            props.saveChanges(data);
                                        } else {
                                            alert('No Save Changes Function Available');
                                        }
                                        setEditing(!editing);
                                    }}
                                >
                                    Save Edits
                                </button>

                                <button
                                    className="text-gray-400 hover:text-indigo-900 ml-4 "
                                    onClick={() => {
                                        cancelEdit();
                                    }}
                                >
                                    Cancel
                                </button>
                            </>
                        )}

                        {props.deleteRecord && !editing && (
                            <button
                                className="text-red-400 hover:text-indigo-900 mr-4 "
                                onClick={() => {
                                    props.deleteRecord!(props.recordId);
                                }}
                            >
                                Delete
                            </button>
                        )}
                    </td>
                )}
            </tr>
        </>
    );
};
