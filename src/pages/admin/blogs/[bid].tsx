import { EditPageHeader } from "@/components/EditPageHeader";
import { FormContainer } from "@/components/FormContainer";
import AdminLayout from "@/components/Layouts/AdminLayout";
import { PageContainer } from "@/components/PageContainer";
import { TableComponent } from "@/components/tables/TableComponent";
import axios from "@/lib/axios";
import { Blog } from "@/models/blogs";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import useSWR from "swr";
import { BlogForm } from "./components/BlogForm";

const BlogDetailPage = () => {
    const router = useRouter()
    const { bid } = router.query
    const [draftBlog, setDraftRecipe] = useState<Blog>({
        title:'',
        description:'',
        feature_image: "",
        contentHTML: ""
    })
    const { data: blogPost, mutate: blogMutate,  error } = useSWR(`/api/blogs/${bid}`, () =>
        axios
            .get(`/api/blogs/${bid}`)
            .then(res => {
                console.log(res.data)
                return res.data.data
            })
        )

    useEffect(() => {
        console.log(bid)
        console.log(router)
        setDraftRecipe(blogPost)
    }, [blogPost])

    function onChange(e: any) {
        if (e && e.target) {
            setDraftRecipe({ ...draftBlog, [e.target.name]: e.target.value });
        }
    }

    function onSubmit(e: any) {
        if(e)
        {
            e.preventDefault()
        }
    }
    return (
        <AdminLayout header="">
            <PageContainer>
                <EditPageHeader
                    pageTitle="Edit Blog"
                    linkTo="/admin/blogs"
                />

                {
                    blogPost && (
                        <FormContainer>
                            <BlogForm
                                blog={blogPost}
                                onChange={onChange}
                                onSubmit={onSubmit}
                            />
                        </FormContainer>

                    )
                }


            </PageContainer>
        </AdminLayout>
    )
}


export default BlogDetailPage;