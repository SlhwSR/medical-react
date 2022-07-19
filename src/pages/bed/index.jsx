import React, { memo, useState } from 'react'
import { NavLink, Outlet } from 'react-router-dom'

const BedNo = memo(() => {
  const [name,setname]=useState("111")
  return (
    <div>
       <NavLink to={'/kinds'} className="font-thin">Static Mock</NavLink>
       <NavLink to={'/staticount'} className="ml-5 font-thin">to Static chart</NavLink>
       <Outlet context={[name,setname]}></Outlet>
     </div>
  )
})

export default BedNo