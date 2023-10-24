"use server"

import { Posts } from "@/types"
import { revalidateTag } from "next/cache"

//100% Verified to Work
export const addPosttoDatabase = async (e:FormData) => {
   
    const title = e.get("title")?.toString()
    const body = e.get("body")?.toString()

    if(!body || !title) return

    const newPost: Posts = {title, body}

    await fetch("http://localhost:3100/posts",{
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newPost),
      
    })

    revalidateTag('posts')

}