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

            <Tiptap
            />
            <div>
                {
                    recipe?.name
                }
            </div>
        </AppLayout>
    )
}

export default RecipeDetail