import React from 'react'
import Navbar from '../components/Navbar'
import StateContainer from '../components/StateContainer'

function Home() {
  return (
    <div className="flex">
      <Navbar />
      <div className="w-11/12  h-screen flex flex-col items-center">
        <StateContainer />
        
      </div>
    </div>
  )
}

export default Home