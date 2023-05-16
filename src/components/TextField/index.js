import { useState } from 'react'
import './TextField.css'


const TextField = props => {
  const whenTyping = (event) => {
    props.whenChanging(event.target.value)
  }

  return (
    <div className="textField">
      <label>{props.label}</label>
      <input placeholder={props.placeholder} required={props.required} onChange={whenTyping} value={props.value} />
    </div>
  )
}

export default TextField
