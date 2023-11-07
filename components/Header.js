import React from "react";
import Image from "next/image";
import Menu from "./Menu";
import Link from "next/link";
import Carrito from "./Carrito";

const Header = () => {
  return (
    <header className="w-full flex justify-between items-center">
        <div className=" pl-6 py-4 ">
            <Link href={"/"}>
            <Image
            alt="logo"
            src={"/images_limit/agua_import.png"}
            width={160}
            height={230}
            priority
            />
            </Link>
        </div> 
        <div className="flex items-center pr-5">
          <Menu/>
          <Carrito/>
        </div>   
          
      
    </header>
  );
};

export default Header;
