import { EditableTextField } from "@/components/forms/EditableTextField";
import { Instruction } from "@/models/recipes";
import React from "react";

export const InstructionForm = (props:{
    instruction: Instruction,
    onChange: (e:any) => void,
    onSubmit: (e:any) => void
}) => {

    return (
        <form
            onSubmit={props.onSubmit}
        >
            <EditableTextField
                editable={true}
                fieldName="instruction"
                fieldValue={props.instruction.instruction}
                onChange={props.onChange}
            />
            <EditableTextField
                editable={true}
                fieldName="order"
                fieldType="number"
                fieldValue={props.instruction.order}
                onChange={props.onChange}
            />
            <div>
                <button
                    type="submit"
                    className="w-40 ml-auto mr-0 flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blush hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                    Save Instruction
                </button>
            </div>
        </form>
    )
}