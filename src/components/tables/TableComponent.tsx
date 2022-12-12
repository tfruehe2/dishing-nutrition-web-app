import { data } from 'autoprefixer';
import React from 'react';
import { PaginationFooter, PaginationProps } from './PaginationFooter';
import { SortableTableHeader } from './SortableTableHeader';
import { TableAddNewRow } from './TableAddNewRow';
import { TableBodyComponent } from './TableBodyContainer';
import { TableHeader } from './TableHeader';
import { RowData, TableRow } from './TableRow';

export interface TableHeader {
    fieldName: string;
    fieldLabel: string;
    sortable: boolean;
    filterable: boolean;
    filterType?: 'text' | 'select';
    filterOptions?: Array<{
        value: string;
        optionText: string;
    }>;
    cellType?: string;
}

export const TableComponent = (props: {
    tableName: string;
    headers: Array<TableHeader>;
    rows?: Array<any>;
    canSortAndFilter: boolean;
    sortByCallback?: (fieldName: string, sortDirection: 'ASC' | 'DESC') => void;
    filterByCallback?: (fieldName: string, value: string) => void;
    paginationProps?: PaginationProps;
    editableInline?: boolean;
    viewRecord?: (id: number) => void;
    deleteRecord?: (id: number) => void;
    saveInlineChanges?: (data: any) => void;
    canAddRecord?: boolean;
    createRecord?: (data: any) => void;
}) => {
    let headerFields: Array<{
        fieldName: string;
        fieldLabel: string;
        cellType: string;
    }> = props.headers.map((header) => {
        return {
            fieldName: header.fieldName,
            fieldLabel: header.fieldLabel,
            cellType: header.cellType || 'TextCell'
        };
    });

    console.log(props.rows)
    return (
        <div className="-mx-4 mt-8 overflow-hidden shadow ring-1 ring-black ring-opacity-5 sm:-mx-6 md:mx-0 md:rounded-lg">
            <table className="min-w-full divide-y divide-gray-300">
                {props.canSortAndFilter ? (
                    <SortableTableHeader
                        headers={props.headers}
                        sortByCallback={props.sortByCallback!}
                        filterByCallback={props.filterByCallback!}
                    />
                ) : (
                    <>
                        <TableHeader headers={props.headers} />
                    </>
                )}

                <TableBodyComponent>
                    {props.rows &&
                        props.rows.map((row) => {
                            return (
                                <TableRow
                                    key={row.id + '_' + props.tableName}
                                    data={row}
                                    recordId={row.id}
                                    editableInline={props.editableInline}
                                    headerFields={headerFields}
                                    saveChanges={props.saveInlineChanges}
                                    viewRecord={props.viewRecord }
                                    deleteRecord={props.deleteRecord}
                                />
                            );
                        })}

                    {props.canAddRecord && props.createRecord && (
                        <TableAddNewRow
                            headerFields={headerFields}
                            createRecord={props.createRecord}
                        />
                    )}
                </TableBodyComponent>
            </table>
            {props.paginationProps && <PaginationFooter pagination={props.paginationProps} />}
        </div>
    );
};
