import { ActionLink } from "@/components/ActionLink";
import AdminLayout from "@/components/Layouts/AdminLayout";
import { PageContainer } from "@/components/PageContainer";
import { TableComponent, TableHeader } from "@/components/tables/TableComponent";
import axios from "@/lib/axios";
import React, { useState } from "react";
import useSWR from "swr";
import { useRouter } from 'next/router';
import { RowData } from "@/components/tables/TableRow";
import { PaginationProps } from "@/components/tables/PaginationFooter";

const RecipeIndex = () => {

    const router = useRouter();
    const [pagination, setPagination] = useState<PaginationProps | undefined>(undefined)
    const { data: recipes, error } = useSWR('/api/recipes', () =>
        axios
            .get('/api/recipes')
            .then(res => {
                setPagination(res.data.meta)

                return res.data.data
            })
    )

    const tableHeaders: Array<TableHeader> = [
        {
            fieldName: 'name',
            fieldLabel: 'name',
            sortable: true,
            filterable: true
        },
        {
            fieldName: 'description',
            fieldLabel: 'Description',
            sortable: true,
            filterable: false
        }
    ];

    return (
        <AdminLayout header="">
            <PageContainer>
                <div className="sm:flex sm:items-center mb-4">
                    <div className="sm:flex-auto">
                        <h1 className="text-3xl font-semibold text-gray-900">Recipes</h1>
                    </div>
                    <div className="mt-4 sm:mt-0 sm:ml-16 sm:flex-none">
                        <ActionLink to={'/admin/recipes/create'}>
                            Create New Recipe
                        </ActionLink>
                    </div>
                </div>

                <TableComponent
                    tableName="recipeTable"
                    headers={tableHeaders}
                    rows={recipes}
                    viewRecord={(id) => {
                        router.push(`/admin/recipes/${id}`);
                    }}
                    deleteRecord={async (id) => {
                        if (
                            confirm(`Are you sure you'd sure you like to delete the Recipe #${id}?`)
                        ) {
                            alert("test");
                        }
                    }}
                    // sortByCallback={sortByCallback}
                    // filterByCallback={filterByCallback}
                    canSortAndFilter={false}
                    paginationProps={pagination}
                />

            </PageContainer>
        </AdminLayout>

    )
}

export default RecipeIndex;