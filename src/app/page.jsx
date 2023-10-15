import Image from "next/image.js"
import Type from "./components/Type.jsx"
import Profile from "../../public/images/Profile.jpg"
export default function Home() {
  
  return (
    <>
      <div className="home">
        <div className="mt-74  px-8 flex items-center justify-betweeen gap-80 w-full border-l border-gray-800">
          <div className="fixed z-11 shrink">
            <div className="text-8xl font-extrabold">
              <h1 className="inline text-secondary-200">Naveed</h1><span className="text-primary-100"> SNR</span>
            </div>
           <div className="mt-3 text-type text-primary-200 font-semibold">
              <Type />
            </div>
            <div className="mt-8 max-w-xl text-2xl leading-relaxed">I specialize in creating excellent designs, modern websites, professional photo editing and you name it!
            </div>
          </div>
          <div className=" w-72 h-72 rounded-full">

           </div>
        </div>
      </div>

    </>
  )
}
