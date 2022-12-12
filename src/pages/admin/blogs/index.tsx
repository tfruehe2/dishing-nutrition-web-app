import { ActionLink } from "@/components/ActionLink";
import AdminLayout from "@/components/Layouts/AdminLayout";
import { PageContainer } from "@/components/PageContainer";
import { PaginationProps } from "@/components/tables/PaginationFooter";
import { TableComponent, TableHeader } from "@/components/tables/TableComponent";
import axios from "@/lib/axios";
import { useRouter } from "next/router";
import React, { useState } from "react";
import useSWR from "swr";

const BlogsPage = () => {
    const router = useRouter();
    const [pagination, setPagination] = useState<PaginationProps | undefined>(undefined)
    const { data: blogs, error } = useSWR('/api/blogs', () =>
        axios
            .get('/api/blogs')
            .then(res => {
                setPagination(res.data.meta)

                return res.data.data
            })
    )
    const tableHeaders: Array<TableHeader> = [
        {
            fieldName: 'title',
            fieldLabel: 'title',
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
                    <h1 className="text-3xl font-semibold text-gray-900">Blogs</h1>
                </div>
                <div className="mt-4 sm:mt-0 sm:ml-16 sm:flex-none">
                    <ActionLink to={'/admin/blogs/create'}>
                        Create New Blog
                    </ActionLink>
                </div>
            </div>

            <TableComponent
                tableName="blogTable"
                headers={tableHeaders}
                rows={blogs}
                viewRecord={(id) => {
                    router.push(`/admin/blogs/${id}`);
                }}
                deleteRecord={async (id) => {
                    if (
                        confirm(`Are you sure you'd sure you like to delete the Blog #${id}?`)
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

export default BlogsPage;