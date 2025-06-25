import React, { useEffect, useState } from 'react'
import '../styles.css'
const Timer = () => {

const [second,setSecond]=useState(0);

useEffect(()=>{
const intervalfunc=setInterval(()=>{

setSecond((prev)=>prev+1);

},1000)

return ()=> clearInterval(intervalfunc)


},[])


  return (
    <div
      id="Timer"
      style={{
        background: '#181a1b',
        color: '#61dafb',
        fontWeight: 'bold',
        borderRadius: '8px',
        padding: '0.5rem 1.2rem',
        fontSize: '1.1rem',
        boxShadow: '0 1px 6px #0006',
        border: '1px solid #333',
        minWidth: '150px',
        textAlign: 'center',
      }}
    >
     Time spent: {second} seconds
    </div>
  )
}

export default Timer
