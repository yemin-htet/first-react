import React, { useState } from 'react'
import { AiFillHeart,AiOutlineHeart } from "react-icons/ai";

export default function Heart({onClick}) {
    const [status,setStatus] = useState(false);
    const toggle = () => {
        setStatus(!status);
        onClick();
    }
  return (
    <div>
        {status && <AiFillHeart size={40} color='#ff6b81' onClick={toggle}/>}
        {!status && <AiOutlineHeart size={40} onClick={toggle}/>}
        
    </div>
  )
}
