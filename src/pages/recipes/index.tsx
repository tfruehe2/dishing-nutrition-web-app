import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'
import AppLayout from '@/components/Layouts/AppLayout'
import axios from '@/lib/axios'
import useSWR from 'swr'
import { RecipeCell } from '@/components/cells/RecipeCell'

export default function RecipesPage() {
    
    const { data: recipes, error } = useSWR('/api/recipes', () =>
        axios
            .get('/api/recipes')
            .then(res => {
                return res.data.data
            })
    )

    return (
        <AppLayout
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Recipes
                </h2>
            }>
            <Head>
                <title>Recipes</title>
            </Head>


            <div className="relative flex p-8 mt-8 justify-center min-h-screen sm:pt-0">

                <ul role="list" className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                    {recipes?.map((recipe) => <RecipeCell recipe={recipe} />)}
                </ul>
 
            </div>
        </AppLayout>
    )
}
