//This is the Final Verision of the Static code
//The Purpose of this is to fill in the space for the Todo Application
//This code is specfically for 4 functions
//GET
//GET with id
//POST
//DELETE
import Link from 'next/link'
import React from 'react'


export default async function Home() {
  
  return (
    <>
      <header className="flex justify-between items-center mb-4">
        <h1 className="text-2xl">Welcome to the Static Todo List</h1>
        <Link className="border border-slate-300 text-slate-300 px-2 py-1 
        rounded hover:bg-slate-700 outline-none" href="/create">Create</Link>
      </header>

      
    </>
)}
