import {lazy} from 'react'
const Index=lazy(()=>import('../pages'))
const Login=lazy(()=>import('../pages/login'))
const MedicalInfo=lazy(()=>import('../pages/medicalinfo'))
const BedNo=lazy(()=>import('../pages/bed'))
// import Kinds from "../pages/kind";
const Kinds =lazy(()=>import('../pages/kind'))
// import NotFound from "../pages/404";
const NotFound=lazy(()=>import('../pages/404'))
// import WestMedical from '../pages/wstmedcial'
const WestMedical=lazy(()=>import('../pages/wstmedcial'))
const DemoChart=lazy(()=>import("../pages/chart"))
const PersonalCenter=lazy(()=>import('../pages/personal'))
const LogicFlows=lazy(()=>import('../pages/logicflow'))
const EditorPgae=lazy(()=>import('@/pages/editorpage'))
const Flow=lazy(()=>import("@/components/flow"))
const element = [
    {
      path: "/",
      element: <Index></Index>,
      children:[{
        path: "/",
        element: <BedNo></BedNo>,
        children: [{
          path: '/kinds',
          element:<Kinds></Kinds>
        },{
          path: '/staticount',
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
      {
        path:"/editor",
        element:<EditorPgae></EditorPgae>
      },
    ]
    },
    {
        path: "/login",
        element: <Login></Login>,
    },
    {
      path:"/chart",
      element:<DemoChart></DemoChart>
    },
    {
      path:"/logicflow",
      element:<LogicFlows></LogicFlows>
    },
    {
      path:"/flow",
      element:<Flow></Flow>
    },
    {
      path:"*",
      element:<NotFound></NotFound>
    }
  ];
  export default element