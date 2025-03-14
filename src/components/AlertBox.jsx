import React from 'react'

export default function AlertBox({click}) {

  return (
    <div className='border-1 border-violet-500 py-3 flex px-3 bg-violet-100 items-center'>
        <div className='flex-5 text-3xl text-amber-500'>Alert!</div>
        <div className='flex-15 '></div>
        <button className='w-8 h-8  bg-amber-500 rounded-full hover:border' onClick={click}> X </button>
        
        </div>
  )
}
