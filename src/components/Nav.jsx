import React, { useEffect, useState } from 'react'
import './Nav.css'

function Nav() {
  const[show,setShow]=useState(false)


  useEffect(()=>{    // event is scrolling by Y direction 
    window.addEventListener('scroll',()=>{
      if(window.scrollY>600){  // if greater than bsner height
        setShow(true)
      }
      else{
        setShow(false)
      }
    })
  })
  return (
    <div className ={`${show && 'nav-black'} nav`}>
      <img src="https://farm6.staticflickr.com/5821/20639706793_8c038faa4a_o.png" alt="" width={'150px'} />
    </div>
  )
}

export default Nav