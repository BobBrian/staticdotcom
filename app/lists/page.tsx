//This first line will be testing if useEffects can work while in typescript
//But this specifically focuses on lists
"use client"
import React from 'react'
import {useState, useEffect} from 'react'

//This is here to define our itmes
// interface Todo {
//     title: string,
//     body: string,
//     author: string,
//     id: number
// }


export default function List() {

    const [todos,setTodo] = useState([
        {title: "Buy Milk", body:"Item 1", author:"Chibuikem", id:1},
        {title: "Shave Cat", body:"Item 2", author:"Leo", id:2},
        {title: "Burndown House", body:"Item 3", author:"Alex", id:3}
    ])

    //This is a temporary fix to the error
    //I am more invested in seeing how I can rectify it by using the Interface Object
    //It works but it is only temporary delete
    const handelDelete = (id:any) => {
        const newTodo = todos.filter(todo =>todo.id !== id)
        setTodo(newTodo)
    }

    //Code to run everytime the code is rerendered
    useEffect(() =>{
        console.log("'Use Effect Ran")
        console.log(todos)
    })

  return (
    <div>
        {todos.map((todo)=>(
            <div key={todo.id}>
                <div className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg mb-6">

                <h2 className="text-center">{todo.title}</h2>

                <p className="text-center">Written by {todo.author}</p>

                <button className="text-center inline-flex items-center px-3 py-2 text-sm font-medium 
                text-center text-white bg-blue-700 rounded-lg" onClick={() => handelDelete(todo.id)}>Click Me</button>

                </div>
             
            </div>
        ))}
    </div>
  )
}
