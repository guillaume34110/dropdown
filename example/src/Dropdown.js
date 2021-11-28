import React, { useRef } from 'react'
import './dropdown.css'
import PropTypes from "prop-types"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSortDown } from '@fortawesome/free-solid-svg-icons'

const Dropdown = ({ array, currentSelection ,setCurrentSelection }) => {

  const dropContentRef = useRef()
  const iconRef = useRef()
  const listRef = useRef()
  const dropHeaderRef = useRef()
const  toggleDropDownKey = (e) => {
  console.log(e.keyCode)
  if (e.keyCode === 13)toggleDropDown()
}
  const toggleDropDown = async() => {
    let contentHeight 
    console.log(listRef.current)
console.log('toggle')
    if ( dropContentRef.current.classList.contains('collapse')) {
      dropContentRef.current.classList.remove('collapse')
      dropHeaderRef.current.classList.add('index-11')
      dropContentRef.current.classList.remove('initial')   // remove initial state
      dropContentRef.current.style.height = "fit-content" // natural height
      contentHeight = dropContentRef.current.clientHeight // natural height in px
      console.log(contentHeight)
      if (contentHeight > 300) contentHeight = 300
      dropContentRef.current.animate([{height :'0px' },{height:`${contentHeight}px`}] ,{duration : 500 ,animationFillMode: "forwards"} )
      for (let i = 0 ; i<listRef.current.children.length ; i++){ //keyBoard Nav
         listRef.current.children[i].tabIndex = 0
      }
      }
    else {
      contentHeight = dropContentRef.current.clientHeight
      if (contentHeight > 300) contentHeight = 300
      dropContentRef.current.style.height = `${contentHeight}px`
      dropContentRef.current.classList.add('collapse')
     
      for (let i = 0 ; i<listRef.current.children.length ; i++){//keyBoard Nav
        listRef.current.children[i].tabIndex = -1
     }
     await sleep(500)
      dropHeaderRef.current.classList.remove('index-11')
    }
  }
  const selectItemKey = (e) => {
    if (e.keyCode === 13)selectItem(e)
  }
  const selectItem = (e) =>{
    setCurrentSelection(e.target.innerHTML)
    toggleDropDown()
    
    iconRef.current.focus()
  }
  function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
  return (
    <div className="dropdown" >
      <div ref = {dropHeaderRef} role="listbox" className="dropdown-header dropdown-header-list">
        <p>{currentSelection}</p>
        <div ref = {iconRef} onClick={toggleDropDown} onKeyDown={toggleDropDownKey}  tabIndex="0">
        <FontAwesomeIcon aria-hidden = "false" className="icon" icon={faSortDown}   /> 
        </div>
      </div>
      <div ref={dropContentRef} className="dropdown-content dropdown-content-list initial collapse">
        <ul ref={listRef} >{array && array.map((item, index) => (
          <li  role="option" key={index} onClick={selectItem}  onKeyDown={selectItemKey}  tabIndex="-1" >{item}</li>
        ))}</ul>
      </div>
    </div>
  )
}

export default Dropdown

Dropdown.propTypes = {
  array : PropTypes.array,
  currentSelection:  PropTypes.string ,
  setCurrentSelection : PropTypes.func
}