import { CreatePageHeader } from "@/components/CreatePageHeader";
import { FormContainer } from "@/components/FormContainer";
import AdminLayout from "@/components/Layouts/AdminLayout";
import { PageContainer } from "@/components/PageContainer";
import { Recipe } from "@/models/recipes";
import React, { useState } from "react";
import { RecipeForm } from "./components/RecipeForm";

const CreateRecipePage = () => {
    let [recipe, setRecipe] = useState<Recipe>({
        name:'',
        description:'',
        ingredients:[],
        instructions: [],
        feature_image: ""
    });

    function onChange(e: any) {
        if (e && e.target) {
            setRecipe({ ...recipe, [e.target.name]: e.target.value });
        }
    }

    return (
        <AdminLayout header="">
            <PageContainer>
                <CreatePageHeader
                    pageTitle="Create Recipe"
                    baseUrl='/admin/recipes'
                />
                <FormContainer>
                    <RecipeForm 
                        onSubmit={(e) => {e.preventDefault()}}
                        onChange={onChange}
                        recipe={recipe}
                        shadowClass=""
                    />
                </FormContainer>

            </PageContainer>
        </AdminLayout>

    );
}

export default CreateRecipePage