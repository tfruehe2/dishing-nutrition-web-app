import { RowData } from '../TableRow';

export function formatRowData(data: Array<any>): Array<RowData> {
    return data.map(
        (row) =>
            ({
                recordId: row.id,
                data: row
            } as RowData)
    );
}
