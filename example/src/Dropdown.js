import React from 'react'


const Dropdown = ({array}) => {
  return (
    <ul>
      {array.map(function(item, i){
      console.log('test');
      return <li key = {i}>{item.name}</li>;
    })}
    </ul>
  )
}

export default Dropdown
