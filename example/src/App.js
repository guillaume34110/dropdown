import Dropdown from "./Dropdown"
import React, { useEffect, useState } from 'react'
import { newArray } from "./data"
const App = () => {
        const array = newArray()
    const [currentSelection ,setCurrentSelection] = useState(array[0])
    useEffect(() => {
       console.log(currentSelection)
    }, [currentSelection])
     return (
     <Dropdown array = {array} currentSelection = {currentSelection} setCurrentSelection = {setCurrentSelection}/>
     )
   }
   
   export default App