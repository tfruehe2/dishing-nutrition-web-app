import { Ingredient } from "@/models/recipes";
import React from "react";
import { IngredientCell } from "../../ingredients/components/IngredientCell";

export const IngredientList = (props: {
    ingredientList: Array<Ingredient>
}) => {
    return (
        <div>
            <ul>
                {props.ingredientList.map(ingredient => {
                    return (
                        <IngredientCell
                            ingredient={ingredient}
                        />
                    )
                })}
            </ul>
        </div>
    )
}