import React, { useState } from "react";

function Navbar(){
  const[nav,setNav]=useState(false);

  const changeBackground=()=>{
    if(window.scrollY>50){
      setNav(true)
    }else{
      setNav(false)
    }
  }

  window.addEventListener('scroll',changeBackground);
    return(
        <div className="nav">
          <nav className={nav?"nav active":"nav"}>
            <ul>
                <li><a href="#home">HEADER</a></li>
                <li><a href="#feature">FEATURE</a></li>
                <li><a href="#offer">OFFER</a></li>
                <li><a href="#about">ABOUT</a></li>
                <li><a href="#contact">CONTACT</a></li>
            </ul>
          </nav>
         
        </div>
    )
}

export default Navbar;