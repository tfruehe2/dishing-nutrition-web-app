import { Recipe } from "@/models/recipes";
import Link from "next/link";
import React from "react";

export const RecipeCell = (
    props: {
        recipe: Recipe
    }
) => {
    return (
        <Link href={`/recipes/${props.recipe.id}`}>
            <li
            key={props.recipe.id}
            className="col-span-1 group flex flex-col divide-y bg-white text-center"
            >
            <div className="flex flex-1 flex-col p-2">
                <img className="mx-auto w-full h-auto hover:rounded-lg hover:shadow-2xl flex-shrink-0" src={props.recipe.feature_image} alt="" />
                <div className="p-4">
                    <h3 className="text-sm font-medium text-gray-900">{props.recipe.name}</h3>
                    <dl className="mt-1 flex flex-grow flex-col justify-between">
                    <dt className="sr-only">Description</dt>
                    <dd className="text-sm text-gray-500">{props.recipe.description}</dd>
                    <dt className="sr-only">Tags</dt>
                    <dd className="mt-3">
                        <span className="rounded-full bg-green-100 px-2 py-1 text-xs font-medium text-green-800">
                        tag
                        </span>
                    </dd>
                    </dl>
                </div>

            </div>
            </li>
        </Link>
    )
}