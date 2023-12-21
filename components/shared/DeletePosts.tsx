"use client"

import { useState } from "react"
import { deletePost } from "@/app/actions/blogActions"
import Button from "../ui/Button"
import { PostTypes } from "@/types/postTypes"
import { type DropzoneOptions } from 'react-dropzone';
import Input from "../ui/Input"
import Posts from '@/components/shared/Posts';

const DeletePosts: React.FC<{post: PostTypes}> = ({post}) => {
    const [showModel, setShowModel] = useState(false)

    const handleDelete = ()=>{
        setShowModel(true)
    }
    const closeModel = ()=>{
        setShowModel(false)
    }
   
  return (
    <div>
        <Button
        aria="delete post"
        onClick={handleDelete}
        text="Delete"
        action
        />

{showModel && (
    <>
    <div
    className="fixed inset-0 flex items-center justify-center z-50"
    onClick={()=>setShowModel(false)}
    >
<div className="w-screen h-screen bg-black/40 absolute " />
    <div
    className="bg-white p-6 rounded shadow-lg z-40"
    onClick={(e)=>e.stopPropagation()}
    >
        <p>Are you sure you want to delete this post?</p>
        <div className="flex gap-3 mt-5 ">
            <form action={deletePost} onSubmit={closeModel}>
 
                <Input
                type ="hidden"
                name="postId"
                value={post.id}                               
                />
                <Button
                aria="delete post"
                type="submit"
                text="Yes"
                />
            </form>
            <Button 
            aria= "cancle delete post"
            onClick={closeModel}
            text="No"
            />
        </div>
   </div>
    </div>
    </>
)}
    </div>
  )
}

export default DeletePosts