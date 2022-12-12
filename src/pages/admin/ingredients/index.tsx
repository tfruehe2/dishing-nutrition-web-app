import { ActionLink } from "@/components/ActionLink";
import AdminLayout from "@/components/Layouts/AdminLayout";
import { PageContainer } from "@/components/PageContainer";
import { PaginationProps } from "@/components/tables/PaginationFooter";
import { TableComponent, TableHeader } from "@/components/tables/TableComponent";
import axios from "@/lib/axios";
import { useRouter } from "next/router";
import React, { useState } from "react";
import useSWR from "swr";

const IngredientsPage = () => {
    const router = useRouter();
    const [pagination, setPagination] = useState<PaginationProps|undefined>(undefined)
    const { data: ingredients, error } = useSWR('/api/ingredients', () =>
        axios
            .get('/api/ingredients')
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
            fieldName: 'allergens',
            fieldLabel: 'Allergens',
            sortable: true,
            filterable: false
        }
    ];
    return (
    <AdminLayout header="">
        <PageContainer>
            <div>
                Ingredients Index Page
            </div>

            <div className="sm:flex sm:items-center mb-4">
                    <div className="sm:flex-auto">
                        <h1 className="text-3xl font-semibold text-gray-900">Ingredients</h1>
                    </div>
                    <div className="mt-4 sm:mt-0 sm:ml-16 sm:flex-none">
                        <ActionLink to={'/admin/ingredients/create'}>
                            Create New Ingredient
                        </ActionLink>
                    </div>
                </div>

                <TableComponent
                    tableName="ingredientTable"
                    headers={tableHeaders}
                    rows={ingredients}
                    viewRecord={(id) => {
                        router.push(`/admin/ingredients/${id}`);
                    }}
                    deleteRecord={async (id) => {
                        if (
                            confirm(`Are you sure you'd sure you like to delete the Ingredient #${id}?`)
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

export default IngredientsPage;