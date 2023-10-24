import { revalidateTag } from 'next/cache'
import React from 'react'

export interface Posts {
  userId?: number
  id?: number,
  title: string,
  body: string
}

export default async  function Home() {

  //100% Verified to Work
  const res = await fetch("http://localhost:3100/posts",{
    cache: 'no-cache',
    next:{
      tags:["posts"]
    }
  })

  //100% Verified to Work
  const posts: Posts[] = await res.json()

  //100% Verified to Work
  const addPosttoDatabase = async (e:FormData) => {
    "use server"
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

  const deletePostfromDatabase = async (id:number) =>{
    await fetch(`http://localhost:3100/posts/${id}`,{
      method:'DELETE'
    }).then(() => {
      console.log('Todo Deleted')
    })

    revalidateTag('posts')

  }

  return (
    <main>
      <h1 className="text-3xl font-bold text-center">Hello World</h1>

      <form action={addPosttoDatabase} className="flex flex-col gap-5 max-w-xl mx-auto p-5">
        <input name="title" className="border border-gray-300 p-2 rounded-md"/>
        <input name="body" className="border border-gray-300 p-2 rounded-md"/>
        <button className="border bg-blue-500 text-white p-2 rounded-md">Add Post</button>
      </form>

      <h2 className="font-bold p-5">List of Posts</h2>
      <div className="flex flex-wrap gap-5">
        {posts.map(post => (
          <div key={post.id} className="p-5 shadow">
            <p>{post.title}</p>
            <p>{post.body}</p>
          </div>
        ))}

      </div>
    </main>
  )
}
