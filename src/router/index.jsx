import {lazy} from 'react'
  import Login from '../pages/login'
// import MedicalInfo from '../pages/medicalinfo'
// import BedNo from '../pages/bed'
const MedicalInfo=lazy(()=>import('../pages/medicalinfo'))
const BedNo=lazy(()=>import('../pages/bed'))
// import Kinds from "../pages/kind";
const Kinds =lazy(()=>import('../pages/kind'))
// import NotFound from "../pages/404";
const NotFound=lazy(()=>import('../pages/404'))
// import WestMedical from '../pages/wstmedcial'
const WestMedical=lazy(()=>import('../pages/wstmedcial'))
const PersonalCenter=lazy(()=>import('../pages/personal'))

const element = [
  {
    path: "/bed",
    element: <BedNo></BedNo>,
    children: [{
      path: '/bed/kinds',
      element:<Kinds></Kinds>
    },{
      path: '/bed/staticount',
      element:<MedicalInfo></MedicalInfo>
    }]
  },
  {
    path: "/medicalinfo",
    element: <MedicalInfo></MedicalInfo>,
  },  
  {
    path: "/404",
    element: <NotFound></NotFound>,
  },
  {
    path:"/xiyao",
    element:<WestMedical></WestMedical>
  },
  {
    path:"/personal",
    element:<PersonalCenter></PersonalCenter>
  },
];
export default element;
