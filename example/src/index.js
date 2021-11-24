import './index.css'

import React from 'react'
import ReactDOM from 'react-dom'
import Dropdown from './Dropdown'
import { states } from './data'

ReactDOM.render(<Dropdown array = {states}/>, document.getElementById('root'))
