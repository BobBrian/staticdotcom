import React from 'react'


interface Post {
  userId:number,
  id:number,
  title:string,
  body:string
}

const getPostData = async() => {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts")
    return res.json();
}

export default async function Home() {

  const posts:Post []= await getPostData()

  return (
    <>
     <h1>Posts</h1>
     <div>
      {posts.map(post =>
        <ul key={post.id}>
          <li className="text-xl">{post.title}</li>
        </ul>)}
     </div>
     
    </>
  )
}