import { CreatePageHeader } from "@/components/CreatePageHeader";
import { FormContainer } from "@/components/FormContainer";
import AdminLayout from "@/components/Layouts/AdminLayout";
import { PageContainer } from "@/components/PageContainer";
import { Blog } from "@/models/blogs";
import React, { useState } from "react";
import { BlogForm } from "./components/BlogForm";

const CreateBlogPage = () => {
    let [blog, setBlog] = useState<Blog>({
        title:'',
        description:'',
        feature_image: "",
        contentHTML: ""
    });

    function onChange(e: any) {
        if (e && e.target) {
            setBlog({ ...blog, [e.target.name]: e.target.value });
        }
    }

    async function onSubmit(e: any) {
        if(e)
        {
            e.preventDefault()
        }
    }


    return (
    <AdminLayout header="">
        <PageContainer>
            <CreatePageHeader
                pageTitle="Create Blog"
                baseUrl="/admin/blogs"
            />

            <FormContainer>
                <BlogForm
                    blog={blog}
                    onChange={onChange}
                    onSubmit={onSubmit}
                />
            </FormContainer>

        </PageContainer>
    </AdminLayout>
    )

}

export default CreateBlogPage;