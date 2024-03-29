import React, { useState } from 'react'
import Dropdown from './Dropdown'
const Navbar = ({setCategory,setcountry,category}) => {
    const [active,setActive]=useState(false)
  return (
    
    <div>
        <nav className="navbar navbar-expand-lg bg-body-tertiary"data-bs-theme="dark">
        <div className="container-fluid">
    <a className="navbar-brand" href="#"><span className='badge bg-light text-dark fs-4'>NewsNow</span></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav" style={{cursor: "pointer"}}>
      <ul className="navbar-nav">

      <li className="nav-item">
          <div className={`nav-link ${active && category === "general" ? "active" : ""}`} onClick={()=>{
            setCategory("general")
            setActive(true)
          }}>General</div>
        </li>
        <li className="nav-item">
          <div  className={`nav-link ${active && category === "technology" ? "active" : ""}`}   onClick={()=>{
            setCategory("technology")
            setActive(true)
            
          }}>Technology</div>
        </li>

        <li className="nav-item">
          <div className={`nav-link ${active && category === "science" ? "active" : ""}`} onClick={()=>{
            setCategory("science")
            setActive(true)
          }}>science</div>
        </li>

        <li className="nav-item">
          <div className={`nav-link ${active && category === "entertainment" ? "active" : ""}`} onClick={()=>{
            setCategory("entertainment")
            setActive(true)
          }}>Entertainment</div>
        </li>

        <li className="nav-item">
          <div className={`nav-link ${active && category === "sports" ? "active" : ""}`} onClick={()=>{
            setCategory("sports")
            setActive(true)
          }}>Sports</div>
        </li>

        <li className="nav-item">
          <div className={`nav-link ${active && category === "health" ? "active" : ""}`} onClick={()=>{
            setCategory("health")
            setActive(true)
          }}>Health</div>
        </li>
        <li className="nav-item" >
          <div className={`nav-link ${active && category === "business" ? "active" : ""}`} onClick={()=>{
            setCategory("business")
            setActive(true)
          }}>Business</div>
        </li>
        
      </ul>
      <Dropdown setcountry={setcountry}/>
    </div>
    
  </div>
</nav>

    </div>
  )
}

export default Navbar