import { Instruction } from "@/models/recipes";
import React from "react";

export const InstructionCell = (props: {
    instruction: Instruction
}) => {
    return (
        <div className="bg-gray-200 p-4 rounded">
            Order: {props.instruction.order} - {props.instruction.instruction}
        </div>
    )
}