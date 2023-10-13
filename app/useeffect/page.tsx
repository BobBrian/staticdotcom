//This page is used to show use-Effect fetching data from a Json.Server File
"use client"
import React from 'react'
import {useState, useEffect} from 'react'

export default function UseEffectFetch() {

    const [todos,setTodo] = useState([] as any[])

    //Code to fetch Data when ever it is rerendered
    useEffect(() =>{
       fetch('http://localhost:3004/todos')
       .then(res =>{
        return res.json()
       })
       .then((data) =>{
        // console.log(data)
        setTodo(data)
       })
       .catch( err =>{
        console.log(err.message)

       })
    },[])

  return (
     <div>
        {todos.map((todo)=>(
            <div key={todo.id}>
                <div className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg mb-6">

                <h2 className="text-center">{todo.title}</h2>

                <p className="text-center">Written by {todo.author}</p>

                <button className="text-center inline-flex items-center px-3 py-2 text-sm font-medium 
                text-center text-white bg-blue-700 rounded-lg" >Click Me</button>
                </div>
            </div>
        ))}
    </div>
  )
}
