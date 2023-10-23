'use client'
import React from 'react'
import { useRouter } from 'next/navigation'

export default function Home() {

  const router = useRouter()

  

  const handleSubmit = (e:any) => {
      console.log("Redirecting to New Page")
      router.push('/about')
  }
 
  return (
    <form  >
      <button type="button" onClick={handleSubmit}>
       Click me
    </button>

    </form>
    
  )
}
