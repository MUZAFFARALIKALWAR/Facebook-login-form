import Image from "next/image"

function Facebook(){
    return(
        <div className="bg-gray-100 h-screen flex  sm:flex-col md:flex-row lg:flex-row  items-center justify-center ">
         {/* left side */}
         <div className="text-3xl sm:w-full md:w-1/2 lg:w-1/2 px-9 ">
            <Image width={300} height={100} src={"/FACE.svg"} alt="Facebook logo"></Image>
            <p className="ml-7 -mt-4">Facebook help you connect and share with the people in your life</p>
         </div>

         {/* right side */}
         <div className="bg-white flex flex-col p-5 rounded-xl sm:w-full md:w-1/3 lg:w-1/3 sm:mt-10">
          <input className=" focus:outline-2 outline-blue-500 my-2 border border-1 border-gray-100 rounded-md p-3" type="text" placeholder="Email Address or Phone number" />
          <input className=" focus:outline-2 outline-blue-500 my-2 border border-1 border-gray-100 rounded-md p-3" type="password" placeholder="password" />
          <button className="bg-blue-600 text-white mt-2 py-2 font-bold rounded-md text-lg hover:bg-blue-700">Log in</button>
          <p className="text-blue-500 text-sm text-center hover:underline my-2 cursor-pointer">forget password?</p>
          <span className="my-2"><hr /></span>
          <button className="bg-green-600 py-2 px-2  my-2 
          text-lg font-bold text-white rounded-md w-fit  mx-auto hover:bg-green-700">Create New Account</button>
         </div>
        </div>
    )
} 
export default Facebook