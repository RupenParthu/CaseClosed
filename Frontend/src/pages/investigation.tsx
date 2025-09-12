import mainbg from '../assets/main-bg.jpg'
import logo from '../assets/logo.png'
import conan2 from '../assets/conan-2.png'
export default function Investigation() {
  return (
    <>
    {/* bg pic */}
    <div>
      <img src={mainbg} className="fixed inset-0 w-full h-full object-contain bg-repeat z-[-10]"
      style={{
          backgroundImage: `url(${mainbg})`,
          backgroundSize: '1500px',
        }} />
    </div>
     <div className="flex h-screen w-screen">
      
      {/* Left Space */}
      <div className="w-[13.5%]"></div>
      
      {/* Main Chatbox */}
      <div className="w-[90%] flex items-center justify-center relative">
        <div className="bg-black/50 text-black p-4 w-[90%] h-[85%] overflow-y-auto">
          <div className="h-[85%] overflow-y-auto">
            {/* Messages */}
          </div>
          <div className="mt-2 flex">
            <input
              type="text"
              placeholder="Talk to the Great Detective . . ."
              className="flex-1 p-3 rounded-l bg-white text-black outline-none"
            />
            <button className="px-4 bg-[#837f6c] text-black rounded-r">Send</button>
          </div>
        </div>
      </div>
      
      {/* Right Panel */}
      <div className="w-[40%] flex flex-col gap-5 pt-15">
        
        {/* Suspect List */}
        <div className="flex-1 text-white rounded-xl p-3 overflow-y-auto">
          <h2 className="text-lg font-bold mb-2">Suspects</h2>
          {/* Suspect list items */}
          <div className="mb-2">🔎 John Doe - Age 32</div>
          <div className="mb-2">🔎 Jane Smith - Age 28</div>
        </div>  
        
        {/* Evidence List */}
        <div className="flex-1 text-white rounded-xl p-3 overflow-y-auto">
          <h2 className="text-lg font-bold mb-2">Evidence</h2>
          {/* Evidence items */}
          <div className="mb-2">📄 Bloody Knife</div>
          <div className="mb-2">📄 CCTV Footage</div>
        </div>
        
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
    {/* conan png */}
    <div>
       <img
       src={conan2}
       alt="logo"
       className="absolute bottom-12 left-2 w-20 sm:w-28 md:w-40 lg:w-64 h-auto z-50"
     />
    </div>
    </>
  )
}
