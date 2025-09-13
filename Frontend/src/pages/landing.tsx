import { useNavigate } from "react-router-dom"
import background1 from '../assets/bg-1.jpeg'
import conan1 from '../assets/conan-1.png'
import logo from '../assets/logo.png'
import start from '../assets/startbtn.png'
import welcome from '../assets/welcome.png'
import '../index.css'

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
      <div className="flex-1 flex flex-col justify-center items-center text-white translate-y-8">
        <div className="translate-y-8"><img src={welcome} alt="welcome detective" className="max-w-lg w-full scale-130" /></div>
        <button onClick={() => navigate("/main")} className="px-8 scale-75 transition duration-300 transform hover:scale-80">
          <img src={start}/>
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
    <div className="fixed bottom-4 left-1/2 -translate-x-1/2">
  <p className="text-white text-2xl">- Made by Rupen -</p>
</div>
    </>
    
  )
}
