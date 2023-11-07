"use client"
import Image from "next/image"
import MenuList from "./MenuList";
import { useState } from "react";



const Menu = () => {
    
    const [open, setOpen] = useState(false)
    const handleMenu = () =>{
    setOpen(!open)
}
    
    return (
        <>
        <div>
            <button className="m-1 pr-3" onClick={handleMenu}>
              <Image
            src={"/images_limit/menu.png"}
            alt="menu"
            width={25}
            height={25}
            className="invert "/>  
            </button>  
            
        </div>
        <MenuList open ={open} setOpen ={setOpen}/>
        </> 
    )
}
export default Menu