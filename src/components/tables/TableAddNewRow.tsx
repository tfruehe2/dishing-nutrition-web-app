import React, { useEffect, useState } from 'react';
import { EditableTextField } from '../forms/EditableTextField';
import { CellRenderer } from './cells/CellRenderer';

export const TableAddNewRow = (props: {
    createRecord: (data: any) => void;
    headerFields: Array<{
        fieldName: string;
        fieldLabel: string;
        cellType: string;
    }>;
}) => {
    const [creating, setCreating] = useState(false);

    const [data, setData] = useState({});

    function cancelCreating() {
        setCreating(false);
    }

    function onChange(e: any) {
        setData({ ...data, [e.target.name]: e.target.value });
    }

    useEffect(() => {
        const data = props.headerFields.reduce((acc, curr) => {
            if (curr.fieldName !== '') {
                acc[curr.fieldName] = '';
            }
            return acc;
        }, {});
        setData(data);
    }, []);

    return (
        <>
            <tr>
                {creating ? (
                    <>
                        {props.headerFields.map((header) => {
                            return header.fieldName ? (
                                <td className="py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
                                    <CellRenderer
                                        cellProps={{
                                            editable: creating,
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
                    </>
                ) : (
                    <>
                        {props.headerFields.map((header) => {
                            return header.fieldName ? (
                                <td
                                    key={header.fieldName + '_placeholder_td'}
                                    className="py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6"
                                ></td>
                            ) : (
                                ''
                            );
                        })}
                    </>
                )}

                <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
                    {!creating && (
                        <button
                            className="text-green-400 hover:text-indigo-900 mr-4"
                            onClick={() => {
                                setCreating(!creating);
                            }}
                        >
                            Create New
                        </button>
                    )}

                    {creating && (
                        <>
                            <button
                                className="text-green-400 hover:text-indigo-900 ml-4"
                                onClick={async () => {
                                    await props.createRecord(data);
                                    setCreating(!creating);
                                }}
                            >
                                Save
                            </button>

                            <button
                                className="text-gray-400 hover:text-indigo-900 ml-4"
                                onClick={() => {
                                    cancelCreating();
                                }}
                            >
                                Cancel
                            </button>
                        </>
                    )}
                </td>
            </tr>
        </>
    );
};
