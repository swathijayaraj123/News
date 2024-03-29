import React, { useState } from 'react'
import countriesList from './countries'
const Dropdown = ({setcountry}) => {

    const [selectCountry,setSelectCountry]=useState('India')
  return (
    <div>
        <div className="dropdown">
        <button className="btn btn-dark dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">{selectCountry}
        </button>
      
        <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
        {countriesList?.map((place,index)=>{
            return( <div key={index}className='dropdown-item' onClick={()=>{
                setSelectCountry(place.country)
                setcountry(place.code)
            }}>{place.country}</div> )
        })}
            
        </ul>
</div>
    </div>
  )
}

export default Dropdown