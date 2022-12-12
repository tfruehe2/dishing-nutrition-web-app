import { Instruction } from "@/models/recipes";
import React, { useEffect, useState } from "react";
import { Reorder } from "framer-motion"
import { ActionButton } from "@/components/ActionButton";
import { InstructionModal } from "./InstructionModal";

const List = ["Item One", "Item Two", "Item Three", "Item Four"];

export const InstructionsList = (props: {
    instructions: Array<Instruction>
    recipe_id: number
}) => {
    const [instructions, setInstructions] = useState<string[]>([])
    const [instructionModalOpen, setInstructionModalOpen] = useState(false)
    const [draftInstruction, setDraftInstruction] = useState<Instruction>(
        {
            recipe_id: props.recipe_id,
            instruction: "",
            order: (instructions.length + 1)
        })

    function addNewInstruction()
    {
        setInstructionModalOpen(true)
    }

    function setInstructionsFunc(items)
    {   
        console.log(items)
    }

    useEffect(()=> {
        if(props.instructions)
        {
            const instructions = props.instructions.map(instruction => instruction.instruction)
            console.log(props.instructions)
            console.log(instructions)
            setInstructions(instructions)
        }
    }, [props.instructions])
    return (
    <>
    <Reorder.Group axis="y" values={instructions} onReorder={setInstructionsFunc}>
        <div className="space-y-3">
        {instructions?.map((instruction, index) => (
          <Reorder.Item key={index} value={index}>
            <div className="bg-gray-400 w-full p-4 rounded">
                {instruction}
            </div>
          </Reorder.Item>
        ))}
        </div>

    </Reorder.Group>

    <ActionButton
        onClick={addNewInstruction}
    >
        Add New Instruction
    </ActionButton>

    <InstructionModal 
        instruction={draftInstruction}
        isOpen={instructionModalOpen}
        setOpen={setInstructionModalOpen}
    />
    </>
    )
}
