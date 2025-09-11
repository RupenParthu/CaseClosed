export default function Landing() {
  return (
    <div
      className="h-screen w-screen bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/assets/landing-bg.png')" }}
    >
      <div className="flex flex-col items-center justify-center h-full text-white">
        <h1 className="text-4xl font-bold">Welcome, Detective</h1>
        <p className="mt-2">Enter your name to begin...</p>
      </div>
    </div>
  )
}
