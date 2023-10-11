// import React from 'react'
// //To get and display static data

// const getPostData = async() => {
//     const res = await fetch("https://jsonplaceholder.typicode.com/posts")
//     return res.json();

// }

// export default async function AboutPage() {
//  const posts = await getPostData()
//  console.log(posts)

//   return (
//     <div>
//        {posts.map((post: any) =>{
//         return <p>{post.title}</p>
//        })} 
//     </div>
//   )
// }

import React from 'react'

export default function Home() {
  return (
    <div>Home</div>
  )
}
