
import { Suspense, useEffect, useState } from 'react';
import Index from './pages/index';
import Login from './pages/login';
import {useRoutes} from 'react-router-dom'
import  routes from './router/main'
import Loading from '@components/loading';
export default function App() {
  return (
    <div className="App">
     {/* {islogin?<Index islogin={(val)=>{setislogin(val)}}></Index>:<Login></Login>} */}
  <Suspense fallback={<Loading></Loading>}>
   {useRoutes(routes)}
  </Suspense>
  </div>
  )
}
