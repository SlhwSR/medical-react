import { FileAddFilled } from '@ant-design/icons'
import { Button, Input, List, Modal } from 'antd'
import React, { memo,useEffect,useRef,useState } from 'react'

const Flow = memo(() => {
  const [pagelist,setPagelist]=useState([{name:"页面1"}])
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [input,setInput]=useState({})
  const [currentKey,setCurrentKey]=useState("页面1")
  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    //const newpage=JSON.parse(JSON.stringify(pagelist)).push(input)
    setPagelist([...pagelist,input])
    setInput("")
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };
 
  return (
     <div className="flex">
    <div className="w-60 h-screen inline-block bg-red-400">
      <div className="w-60 bg-slate-100" onClick={()=>showModal()}><FileAddFilled className="text-4xl cursor-pointer"></FileAddFilled></div>
       <br />
       <List className="cursor-pointer">
       {(pagelist || []).map((item,index)=><List.Item className="text-center" style={{background:item.name===currentKey?"#eee":""}} onClick={()=>setCurrentKey(item.name)}  key={item.name}>{item.name}</List.Item>)}
       </List>
    </div>
    <div className='w-100 flex-1 bg-orange-300'>
        {currentKey}
    </div>
    <div className='w-72 bg-red-700'>
      right
    </div>
    <Modal title="请输入页面名称" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
        <Input placeholder='输入页面名称' required={true} onChange={(val)=>setInput({name:val.target.value})} allowClear value={input.name}></Input>
    </Modal>
    </div>
  )
})

export default Flow