import React, { memo } from 'react'
import { useState } from 'react'
import {HeaderWrapper } from './style'
const Header = memo(() => {
  const [count,setCount]=useState(0)
    return (
    <HeaderWrapper>Header:{count}</HeaderWrapper>
  )
})

export default Header