import HeroSection from "./components/HeroSection"
import Navbar from "./components/Navbar"


function App() {
  

  return (
    <>
      <Navbar/>
      <main className="max-w-7xl mx-auto sm:py-12 py-9 px-6 bg-stone-950">
        <HeroSection/>
      </main>
    </>
  )
}

export default App
