import {createElement} from 'react'
import { ApiOutlined, BookOutlined, BorderBottomOutlined, EyeOutlined, LaptopOutlined, UserOutlined,CodepenCircleFilled, EditOutlined, FolderViewOutlined } from '@ant-design/icons';
import { Avatar } from 'antd';

export const ColumnList=[{
    key:'/',
    icon:createElement(EyeOutlined),
    label:"计划",
    children:[{
      key:'kinds',
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
  },
  {
    key:"logicflow",
    icon:createElement(CodepenCircleFilled),
    label:"审批流程"
  },{
    key:"editor",
    icon:createElement(EditOutlined),
    label:"编辑器"
  },
  {
    key:"flow",
    icon:createElement(FolderViewOutlined),
    label:"模型图"
  }
 ]
 export const navheaer=[{
  key:"kinds",
  label:"首页",
},{
  key:"chart",
  label:"图表",
},{
  key:"personal",
  label:"个人中心",
},{
    key:'login',
    label:'退出'
},
{
  key:"userinfo",
  label:<span style={{position:"absolute",left:"1450px"}} className=" hover:bg-transparent"><Avatar>username</Avatar></span>
}
]