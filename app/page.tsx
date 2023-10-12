//This first line will be testing if useEffects can work while in typescript
"use client"
import React from 'react'
import {useState} from 'react'

export default function Home() {
  const [name, setName] = useState("Chibuikem")

  const handelOnclick = () => {
    setName('Tadashi')

  }
  
  return (
    <div>
      <h1>Testing useState</h1>
      <p>My Name is {name}</p>
      <button onClick={handelOnclick}>Click Me</button>
    </div>
  )
}
