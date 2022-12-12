import { EditPageHeader } from "@/components/EditPageHeader";
import AdminLayout from "@/components/Layouts/AdminLayout";
import { MultipartFormContainer } from "@/components/MultipartFormContainer";
import { PageContainer } from "@/components/PageContainer";
import axios from "@/lib/axios";
import { Recipe } from "@/models/recipes";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import useSWR from "swr";
import { IngredientList } from "./components/IngredientList";
import { InstructionsList } from "./components/InstructionsList";
import { RecipeForm } from "./components/RecipeForm";

const RecipeDetailPage = (props: {

}) => {
    const router = useRouter()
    const { rid } = router.query
    const [draftRecipe, setDraftRecipe] = useState<Recipe>({
        name:'',
        description:'',
        ingredients:[],
        instructions: [],
        feature_image: ""
    })
    const { data: recipe, mutate: recipeMutate,  error } = useSWR(`/api/recipes/${rid}`, () =>
        axios
            .get(`/api/recipes/${rid}`)
            .then(res => {
                return res.data.recipe
            })
        )

    const { data: instructions, mutate: instructionsMutate } = useSWR(`/api/recipes/${rid}/instructions`, () =>
        axios
            .get(`/api/recipes/${rid}/instructions`)
            .then(res => {
                return res.data.data
            })
        )

    useEffect(() => {
        setDraftRecipe(recipe)
    }, [recipe])

    function onChange(e: any) {
        if (e && e.target) {
            setDraftRecipe({ ...draftRecipe, [e.target.name]: e.target.value });
        }
    }

    async function onSubmit(e:any) {
        if(e)
        {
            e.preventDefault()
            if(confirm("Are you sure you'd like to update the recipe?"))
            {
                recipeMutate(draftRecipe)
            }
        }
    }
    return (
        <AdminLayout header="">
            <PageContainer>
                <EditPageHeader
                    pageTitle="Edit Recipe"
                    linkTo="/admin/recipes"
                />
                { draftRecipe ? 
                    <MultipartFormContainer
                        shadowClass=""
                        mainForm={
                            <div>
                                <RecipeForm
                                    onSubmit={onSubmit}
                                    onChange={onChange}
                                    recipe={draftRecipe}
                                    shadowClass=""
                                />
                                <div className="h-80">

                                </div>
                                <InstructionsList
                                    recipe_id={Number(rid)}
                                    instructions={instructions}
                                />
                            </div>
                        }
                        sideForm={
                            <div>
                                Ingredients
                                <IngredientList
                                    ingredientList={recipe?.ingredients || []}
                                />
                            </div>
                            
                        }
                    /> : 
                    <p>
                        Loading...
                    </p>
                }


            </PageContainer>
        </AdminLayout>
    )
}

export default RecipeDetailPage;