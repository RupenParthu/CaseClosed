import { useNavigate } from "react-router-dom"
import background1 from '../assets/bg-1.jpeg'
import conan1 from '../assets/conan-1.png'
import logo from '../assets/logo.png'
export default function Landing() {
  const navigate = useNavigate()
  return (
    <>
    {/* bg pic */}
    <div>
      <img src={background1} className="fixed inset-0 w-full h-full object-cover z-[-10]" />
    </div>
    {/* main details*/}
    <div className="flex w-full min-h-screen overflow-hidden">
      {/* Left half*/}
      <div className="flex-1 flex flex-col justify-center items-center text-white">
        <h1 className="text-4xl md:text-6xl font-extrabold text-center mb-6">Hello Detective</h1>
        <button onClick={() => navigate("/main")} className="px-8 py-4 text-xl font-bold rounded-full bg-red-600 hover:bg-red-800 transition duration-300 transform hover:scale-105 shadow-lg">
          Start
        </button>
      </div>

      {/* Right half*/}
      <div className="flex-1 flex items-center justify-center object-contain overflow-hidden">
        <img
          src={conan1}
          alt="Conan the Detective"
          className="max-h-screen object-contain"
        />
      </div>
    </div>
    {/* logo */}
    <div>
       <img
       src={logo}
       alt="logo"
       className="absolute top-4 left-4 w-20 sm:w-28 md:w-40 lg:w-64 h-auto z-50"
     />
    </div>
    </>
    
  )
}
