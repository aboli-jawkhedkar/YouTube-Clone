import React from 'react'
import './SearchList.css'
import { FaSearch } from 'react-icons/fa'
function SearchList({TitleArray,setSearchQuery}) {
  return (
    <>
    <div className="containerSearchList">
        {
            TitleArray.map(m=>(
                <p 
                key={m} 
                onClick={e=>setSearchQuery(m)}
                className="titleItem">
                <FaSearch/>
                {m}
                </p>
            ))
        }
      
    </div>
    </>
  )
}

export default SearchList