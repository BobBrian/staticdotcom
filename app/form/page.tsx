import React, { useState } from 'react'

export default function PostForm() {

    //Will be used to store the data of the Json file
    const [title,setTitle] = useState('')
    const [body,setBody] = useState('')
    const [author,setAuthor] = useState('')

  return (
    <div>
        <h1 className='text-4xl font-bold underline'>Json Server POST form Template</h1>
        <form>
            <div className="mb-6">
                <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Title</label>
                <input value={title} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg 
                focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" required/>
            </div>

            <div className="mb-6">
                <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Body</label>
                <input value={body}  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg 
                focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" required/>
            </div>

            <div className="mb-6">
                <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Author</label>
                <input value={author}  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg 
                focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" required/>
            </div>
        </form>
    </div>
  )
}
