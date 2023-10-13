"use client"
import React, { useState } from 'react'

export default function PostForm() {

    //Will be used to store the data of the Json file
    const [title,setTitle] = useState('')
    const [body,setBody] = useState('')
    const [author,setAuthor] = useState('')

    //POST request using a JSON file
    const handleSubmit = (e:any) => {
        e.preventDefault();

        const todo = {title, body, author}

        console.log(todo) //To show that the code does indeed appear in the console Log

        fetch('http://localhost:3004/todos', {
        method: 'POST',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(todo)
        }).then(() => {
        console.log('new blog added');
        })

    }

  return (
    <div>
        <h1 className='text-4xl font-bold underline'>Json Server POST form Template</h1>
        <form onSubmit={handleSubmit}>
            <div className="mb-6">
                <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Title</label>
                <input value={title} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg 
                focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                onChange={(e) =>setTitle(e.target.value)} required/>
            </div>

            <div className="mb-6">
                <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Body</label>
                <input value={body}  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg 
                focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" 
                onChange={(e) =>setBody(e.target.value)}required/>
            </div>

            <div className="mb-6">
                <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Author</label>
                <input value={author}  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg 
                focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" 
                onChange={(e) =>setAuthor(e.target.value)} required/>
            </div>

            <button className="text-center inline-flex items-center px-3 py-2 text-sm font-medium 
            text-center text-white bg-blue-700 rounded-lg">Click Me</button>
        </form>
        <p>{title}</p>
        <p>{body}</p>
        <p>{author}</p>
    </div>
  )
}
