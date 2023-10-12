//This page is used to show use-Effect fetching data from a Json.Server File
"use client"
import React from 'react'
import {useState, useEffect} from 'react'

export default function UseEffectFetch() {

    const [todos,setTodo] = useState(null)

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
        
    },[])

  return (
    <div>UseEffectFetch</div>
  )
}
