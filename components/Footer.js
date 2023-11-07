import React from "react";
import Image from "next/image";

const Footer = () => {
  return (
    <footer>
      <div className="container m-auto flex justify-between items-center">
        <div className="mb-4 md:mb-0 self-center">
          <Image
            className="m-1.5"
            src={"/images_limit/agua.png"}
            alt="logo footer"
            width={80}
            height={80}
          />
        </div>
        <div className="flex flex-col md:flex-row items-center">
          <p className="text-slate-100">
            Powered by
          </p>
          <Image
            className="m-1.5"
            src={"/next.svg"}
            alt="logo next"
            width={80}
            height={80}
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
