import {lazy} from 'react'
import EditorPage from '../pages/editorpage'
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
const LogicFlows=lazy(()=>import("../pages/logicflow"))
const DemoChart=lazy(()=>import("../pages/chart"))
const element = [
  {
    path: "/",
    element: <BedNo></BedNo>,
    children: [{
      path: '/kinds',
      element:<Kinds></Kinds>
    },{
      path: '/staticount',
      element:<MedicalInfo></MedicalInfo>
    },
  ]
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
  {
    path:"/logicflow",
    element:<LogicFlows></LogicFlows>
  },
  {
    path:"/editor",
    element:<EditorPage></EditorPage>
  },
  {
    path:"/chart",
    element:<DemoChart></DemoChart>
  },
];
export default element;
