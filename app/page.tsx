import React from 'react'
import Link from "next/link";

export default function Home() {
  return (
    <div>
      This is the Home Page 
      <div>
      <Link href="/about">Click to go to the About Page</Link>
      </div>
    </div>
  )
}
