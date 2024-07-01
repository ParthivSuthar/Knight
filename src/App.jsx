import Features from "./components/Features"
import HeroSection from "./components/HeroSection"
import Navbar from "./components/Navbar"
import Pricing from "./components/Pricing"


function App() {
  

  return (
    <>
      <Navbar/>
      <main className="max-w-7xl mx-auto sm:py-10 py-5 px-6 bg-stone-950">
        <HeroSection/>
        <Features/>
        <Pricing/>
      </main>
    </>
  )
}

export default App
