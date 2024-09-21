import Introduction from "@/components/Introduction";
import Image from "next/image";
import ProfilePic from "../public/profilepic.png"
import Navbar from "@/components/Navbar";



export default function Home() {
  return (
    
  <div>
    <div> <Navbar /> </div>
    <div className="flex flex-col  lg:flex-row justify-between bg-gray-900 h-full md:h-screen">
      <div>
        <Introduction /> 
      </div>
      <div> 
        <Image 
            src={ProfilePic}
            alt="myPic"
            width={500}
            height={500}
            className="w-[350px] h-[350px] mr-[230px] mt-[120px] ml-[80px] md:ml-[200px] rounded-full mb-3 bg-gray-300"
         />
      </div>

    </div>
  </div>


  );
}
