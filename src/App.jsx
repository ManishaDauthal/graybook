import React from 'react'
import Home from './Home'
import Header from './Header';
import FeatureCards from './FeatureCards';
import ThirdSection from './ThirdSection';

function App() {
  return (

    <div className="relative w-full min-h-screen bg-white overflow-hidden">
      <div
        className="absolute right-0 top-0 h-full w-[70%] bg-no-repeat bg-cover z-0"
        style={{ backgroundImage: "url('/backgroundHome.svg')" }}
      />


      <div className="relative z-10">
        <Header />
        <Home />
        <FeatureCards />


      </div>

      <ThirdSection />

    </div>



  )
}

export default App