import {createElement} from 'react'
import { ApiOutlined, BookOutlined, BorderBottomOutlined, EyeOutlined, LaptopOutlined, UserOutlined,MediumSquareFilled } from '@ant-design/icons';

export const mapList=[{
    key:'bed',
    icon:createElement(EyeOutlined),
    label:"计划",
    children:[{
      key:'bed/kinds',
    icon:createElement(UserOutlined),
    label:"临床病例",
    },{
      key:'patient',
    icon:createElement(LaptopOutlined),
    label:"药用数据",
    children:[{
      key:"xiyao",
      icon:createElement(ApiOutlined),
      label:"西药数据",
   
    }]
    }]
  },{
    key:'404',
    icon:createElement(BookOutlined),
    label:'医院介绍'
  },
  {
    key:'medicalinfo',
    icon:createElement(BorderBottomOutlined),
    label:'中药库'
  }
 ]