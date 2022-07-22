import React, { memo, useEffect, useState } from 'react'
import { NavLink, Outlet, useLocation, useNavigate } from 'react-router-dom'

const BedNo = memo(() => {
  const navigate=useNavigate()
  const location=useLocation()
  useEffect(()=>{
    navigate(`/kinds`,{state:{age:"111",his:"44"},replace:true},)
    console.log(location);
  },[])
  const [name,setname]=useState("<Redux toolkit>")
  return (
    <div>
       <NavLink to={'/kinds'} className="font-thin">Static Mock</NavLink>
       <NavLink to={'/staticount'} className="ml-5 font-thin">to Static chart</NavLink>
       <Outlet context={[name,setname]}></Outlet>
     </div>
  )
})

export default BedNo