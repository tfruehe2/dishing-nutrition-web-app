import AppLayout from "@/components/Layouts/AppLayout";
import React from "react";
import axios from '@/lib/axios'
import useSWR from 'swr'
import { useRouter } from 'next/router'
import Tiptap from "@/components/TipTap";

const RecipeDetail = () => {
    const router = useRouter()
    const { rid } = router.query

    const { data: recipe, error } = useSWR(`/api/recipes/${rid}`, () =>
        axios
            .get(`/api/recipes/${rid}`)
            .then(res => {
                return res.data.recipe
            })
    )
    return (
        <AppLayout
            header={
                <div></div>
            }
        >

            <div>
                <h2 className="font-bold text-2xl">
                {
                    recipe?.name
                }
                </h2>

                <div className="flex">

                <div className="w-1/2 md:w-1/3">
                    <p className="font-bold text-lg">
                        Ingredients
                    </p>
                    <ul>
                        {
                            recipe?.ingredients?.map(ingredient => {
                                return (
                                <li>
                                    {ingredient.name}
                                </li>
                                )
                            })
                        }

                    </ul>
                </div>
                <div className="w-1/2 md:w-2/3">
                    <p className="font-bold text-lg">
                        Instructions
                    </p>
                    <ul>
                        {
                            recipe?.instructions?.map((instruction) => {
                                return (
                                <li>
                                  {instruction.order} : {instruction.instruction}
                                </li>
                                )
                            })
                        }

                    </ul>
                </div>
                </div>


            </div>
        </AppLayout>
    )
}

export default RecipeDetail