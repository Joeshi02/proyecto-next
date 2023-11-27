import Image from "next/image";

const Loading = () => {
    return(
        <div className="w-full h-full min-h-screen flex justify-center items-center">
            <Image
            src={`/images_limit/agua.png`}
            alt="logo limit"
            width={150}
            height={150}
            className="animate-pulse"/>
        </div>
    )
}
export default Loading