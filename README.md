# dropdown

> dropdown component

[![NPM](https://img.shields.io/npm/v/dropdown.svg)](https://www.npmjs.com/package/dropdown) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

https://www.npmjs.com/package/gaillardguillaumedropdown-menu
## Install

```bash
npm i gg-dropdown-menu
```

## Usage
To use this component you need an array of string named array and a "useState" to set and handle the new value of the dropdown
```jsx
import React,{useState}from 'react'

import Dropdown from 'gg-dropdown-menu/dist/index.js'
import 'gg-dropdown-menu/dist-unmignified/dropdown.css'

const myComponent{
    
    const array = []
    const [currentSelection ,setCurrentSelection] = useState(array[0])
  
    return (
    <Dropdown array = {array} currentSelection = {currentSelection} setCurrentSelection = {setCurrentSelection}/>
    )
}

```

if you want restyle this component use this css file.

## License

MIT © [guillaume34110](https://github.com/guillaume34110)
