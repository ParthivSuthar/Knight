import Features from "./components/Features"
import HeroSection from "./components/HeroSection"
import Navbar from "./components/Navbar"


function App() {
  

  return (
    <>
      <Navbar/>
      <main className="max-w-7xl mx-auto sm:py-12 py-5 px-6 bg-stone-950">
        <HeroSection/>
        <Features/>
      </main>
    </>
  )
}

export default App
