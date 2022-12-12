import { Modal } from "@/components/Modal";
import { Instruction } from "@/models/recipes";
import React from "react";
import { InstructionForm } from "./InstructionForm";

export const InstructionModal = (props: {
    instruction: Instruction
    isOpen: boolean
    setOpen: (bool: boolean) => void
}) => {
    return (
        <Modal
            modalTitle="Instructions Modal"
            open={props.isOpen}
            setOpen={props.setOpen}
        >
            <InstructionForm
                instruction={props.instruction}
                onChange={(e)=>{}}
                onSubmit={(e)=>{
                    e.preventDefault()
                }}

            />

        </Modal>
    )
}