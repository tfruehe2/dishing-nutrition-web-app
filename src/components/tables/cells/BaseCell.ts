export interface BaseCellProps {
    editable: boolean;
    value: string | number | boolean | object;
    onChange: (e: any) => void;
    fieldName: string;
    fieldLabel: string;
}
