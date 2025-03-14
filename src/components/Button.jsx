import React from 'react'
import "./Button.css"

export default function Button({click}) {
  return (
    <>
    <button className="rounded-full bg-amber-500 text-white px-6 py-2 my-8 hover:bg-amber-800 text-1xl" onClick={click}>Click</button>
    
    </>
  )
}
