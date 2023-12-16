import Image from "next/image"
import Formulario from "@/components/formulario"
import Link from "next/link"
import BtnVolver from "@/components/Boton"

const Contacto = () => {
  

  return (
    <>
    <div className="container m-auto">
      <BtnVolver/>
      <main className="container m-auto flex flex-col md:flex-row justify-evenly items-center">
        <div className="order-1 md:order-2">
          <Formulario />
        </div>
        <div className="order-2 md:order-1 mt-4 md:mt-0">
          
          <h2 className="text-2xl text-center">Nuestras redes</h2>
          <hr />
          <Link className="flex items-center content-center p-2" href={'https://www.instagram.com/limit_import/'} target="_blank">
            <Image
              src={'/images_limit/logo_insta.png'}
              alt="logo instagram"
              width={40}
              height={40}
            />
            <p className="p-1 text-xl">@limit_import</p>
          </Link>
          <Link className="flex items-center content-center p-2" href={'https://www.facebook.com//?locale=elimitautopartss_LA'} target="_blank">
            <Image
              src={'/images_limit/logo_facebook.png'}
              alt="logo fb"
              width={40}
              height={40}
            />
            <p className="p-1 text-xl"> Limit import</p>
          </Link>
        </div>
      </main>
    </div>
    
    </>
  )
}

export default Contacto
