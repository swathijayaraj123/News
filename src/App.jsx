import React, { useState } from 'react'
import Navbar from './Navbar'
import Newsboard from './Newsboard'
const App = () => {
  const [category, setCategory]=useState("general")
  const [country,setcountry]=useState("in")
  return (
    <div>
    <Navbar setCategory={setCategory} setcountry={setcountry} category={category}/>
    <Newsboard category={category} country={country}/>
    </div>
      
   
  )
}

export default App