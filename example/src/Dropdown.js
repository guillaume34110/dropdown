import React, { useRef, useState } from 'react'
import './dropdown.css'
import arrow from './assets/arrow.png'

const Dropdown = ({ array, currentSelection ,setCurrentSelection }) => {
 //const [data,setData] = useState(array)

  const dropContentRef = useRef()

  const toggleDropDown = () => {
    let contentHeight 

    if ( dropContentRef.current.classList.contains('collapse')) {
      dropContentRef.current.classList.remove('collapse')
      dropContentRef.current.classList.remove('initial')   // remove initial state
      dropContentRef.current.style.height = "fit-content" // natural height
      contentHeight = dropContentRef.current.clientHeight // natural height in px
      dropContentRef.current.animate([{height :'0px' },{height:`${contentHeight}px`}] ,{duration : 500 ,animationFillMode: "forwards"} )
      }
    else {
      contentHeight = dropContentRef.current.clientHeight
      dropContentRef.current.style.height = `${contentHeight}px`
      dropContentRef.current.classList.add('collapse')
    }
  }
  const selectItem = (e) =>{
    setCurrentSelection(e.target.innerHTML)
  }
  return (
    <div className="dropdown" >
      <div className="dropdown-header dropdown-header-list">
        <p>{currentSelection}</p>
        <img src={arrow} alt="fléche" onClick={toggleDropDown}  tabIndex="0" />
      </div>
      <div ref={dropContentRef} className="dropdown-content dropdown-content-list initial collapse">
        <ul >{array && array.map((item, index) => (
          <li key={index} onClick={selectItem}   tabIndex="-1" >{item}</li>
        ))}</ul>
      </div>
    </div>
  )
}

export default Dropdown
