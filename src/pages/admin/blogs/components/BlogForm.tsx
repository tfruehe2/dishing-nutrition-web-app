import { FormContainer } from "@/components/FormContainer";
import { EditableTextArea } from "@/components/forms/EditableTextArea";
import { EditableTextField } from "@/components/forms/EditableTextField";
import { ImageField } from "@/components/forms/ImageField";
import Tiptap from "@/components/TipTap";
import { Blog } from "@/models/blogs";
import React from "react";

export const BlogForm = (props: {
    blog: Blog;
    onChange: (e: any) => void;
    onSubmit: (e: any) => void;
    shadowClass?: string
}) => {

    return (
        <form
            method="POST"
            className="space-y-6 mb-8"
            onSubmit={(e) => {
                props.onSubmit(e)
            }}
        >
            <EditableTextField
                editable={true}
                onChange={props.onChange}
                fieldName="title"
                fieldLabel="Blog Title"
                fieldValue={props.blog.title}
            />

            <EditableTextArea
                editable={true}
                onChange={props.onChange}
                fieldName="description"
                fieldLabel="Description"
                fieldValue={props.blog.description}
            />

            <ImageField
                editable={true}
                fieldName="feature_image"
                fieldLabel="Feature Image"
                fieldValue={props.blog.feature_image || ''}
                imageChangeHandler={props.onChange}
            /> 
            <Tiptap
                content={props.blog.contentHTML}
                onChange={props.onChange}
            /> 
            <div>
                <button
                    type="submit"
                    onSubmit={props.onSubmit}
                    className="w-40 ml-auto mr-0 flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blush hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                    Save Blog
                </button>
            </div>
        </form>
    )
}