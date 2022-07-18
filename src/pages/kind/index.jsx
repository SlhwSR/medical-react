import React, { memo } from 'react'
import {  useOutletContext } from 'react-router-dom'

const Kinds = memo(() => {
  const [name,setname]=useOutletContext()
  return (
    <div>Kinds Page,{name}</div>
  ) 
})

export default Kinds