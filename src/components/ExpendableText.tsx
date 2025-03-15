import React, { useState } from 'react'

export default function ExpendableText({children,maxChar}) {
    const [more,setMore] =  useState(false)
    const moreHandler = () =>{
        setMore(!more);
    }
    if (children.length <= maxChar || more){
        return <p>{children}
        <button className='rounded-full bg-blue-500 px-3 py-1 hover:border text-white' onClick={moreHandler}>Less</button></p>
    }
    const text = children.substring(0,maxChar);
  return (
    <>
    <p>{text}...
        <button className='rounded-full bg-blue-500 px-3 py-1 hover:border text-white' onClick={moreHandler}>More</button>
    </p>
    </>
  )
}
