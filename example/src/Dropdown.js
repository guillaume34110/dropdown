import React, { useRef, useState } from 'react'
import './dropdown.css'
import arrow from './assets/arrow.png'

const Dropdown = ({ array, id }) => {
 const [data,setData] = useState(array)
  const dropContentRef = useRef()

  const toggleDropDown = () => {
    let contentHeight 

    if ( dropContentRef.current.classList.contains('collapse')) {
     
      dropContentRef.current.classList.remove('collapse')
      dropContentRef.current.style.height = "fit-content"
      contentHeight = dropContentRef.current.clientHeight
      dropContentRef.current.animate([{height :'0px' },{height:`${contentHeight}px`}] ,{duration : 1000 ,animationFillMode: "forwards"} )
      }
    else {
      contentHeight = dropContentRef.current.clientHeight
      dropContentRef.current.style.height = `${contentHeight}px`
      dropContentRef.current.classList.add('collapse')
  
    }

  }
  return (
    <div className="dropdown" >
      <div className="dropdown-header dropdown-header-list">
        <p>{array[0].name}</p>
        <img src={arrow} alt="fléche" onClick={toggleDropDown} />
      </div>
      <div ref={dropContentRef} className="dropdown-content dropdown-content-list ">
        <ul>{data.map((item, index) => (
          <li key={index} >{item.name}</li>
        ))}</ul>
      </div>
    </div>
  )
}

export default Dropdown
