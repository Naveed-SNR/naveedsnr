import Type from "./components/Type.jsx"
export default function Home() {
  
  return (
    <>
      <div className="">
        <div className="mt-74 px-8 border-l border-gray-800">
          <div className="text-8xl font-extrabold">
            <h1 className="inline text-secondary-200 antialiased">Naveed</h1><span className="text-primary-100"> SNR</span>
          </div>
          <div className="mt-3 text-type text-primary-200 font-semibold">
            <Type />
          </div>
          <div className="mt-8 max-w-xl text-2xl leading-relaxed">I specialize in creating excellent designs, modern websites, professional photo editing and you name it!
          </div>
        </div>
      </div>

    </>
  )
}
