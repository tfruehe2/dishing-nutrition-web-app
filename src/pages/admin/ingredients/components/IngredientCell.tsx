import { Ingredient } from "@/models/recipes";
import React from "react";

export const IngredientCell = (props: {
    ingredient: Ingredient
}) => {
    return (
        <div>
            {props.ingredient.name}
        </div>
    )
}