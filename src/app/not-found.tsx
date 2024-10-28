import Link from "next/link";
export default function NotFound(){
    return(
        <div className="flex font-montserrat justify-center items-center w-full h-700 -mt-32 text-white bg-[#252B42]">
            <h1 className="font-extrabold text-8xl -mt-96 -mr-44 ">Uh-oh!</h1>
            <p className="font-extrabold text-2xl -mt-60  -mr-44"> The page you’re looking for wandered off. Let’s help you find your way.</p>
            <Link href="/" className="underline text-white text-[16px] font-semibold hover:text-[#23a6f0]">Back to Homepage</Link>
        </div> 

    );
}