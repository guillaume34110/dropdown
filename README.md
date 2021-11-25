# dropdown

> dropdown component

[![NPM](https://img.shields.io/npm/v/dropdown.svg)](https://www.npmjs.com/package/dropdown) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save dropdown
```

## Usage
To use this component you need an array of string named array and a "useState" to set and handle the new value of the dropdown
```jsx
import React,{useState}from 'react'

import DropDown from 'dropdown'
import 'dropdown/dist/index.css'

const myComponent{
    
    const array = []
    const [currentSelection ,setCurrentSelection] = useState(array[0])
  
    return (
    <Dropdown array = {array} currentSelection = {currentSelection} setCurrentSelection = {setCurrentSelection}/>
    )
}

```

## License

MIT © [guillaume34110](https://github.com/guillaume34110)
