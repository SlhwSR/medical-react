import React, { memo, useEffect,useState } from 'react'
import {  useOutletContext } from 'react-router-dom'
import {useSelector} from 'react-redux'
import {TableWrapper} from './style'
import { Table,Tag,Space, Button, message,Modal,Input,Checkbox, InputNumber} from 'antd'
import {useDispatch} from 'react-redux'
import { add, deleteOne,updateOne } from '../../store/medicalfactory'
import { AlignLeftOutlined, IssuesCloseOutlined, UserAddOutlined } from '@ant-design/icons'
const {Column}=Table
const CheckboxGroup = Checkbox.Group;
const plainOptions = ['Apple', 'Window', 'Unix'];
const Kinds = memo(() => {
  const dispatch=useDispatch()
  const [name,setname]=useOutletContext()
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [checkList,setCheckList]=useState([])
  const [number,setNumber]=useState(6)
  const [username,setUsername]=useState('')
  const [age,setAge]=useState(18)
  const  [address,setAddress]=useState('')
  const [modalVisible, setModalVisible] = useState(false);

  const [currentNumber,setCurrentNumber]=useState(1)
  const [currentUsername,setCurrentUsername]=useState("")
  const [currentCheckList,setCurrentCheckList]=useState([])
  const [currentAddress,setCurrentAddress]=useState('')
  const [currentAge,setCurrentAge]=useState(18)
  const onChange=(values)=>{
     setCheckList(values)
  }
  const showModal = () => {
    setIsModalVisible(true);

  };

  const handleOk = () => {
    // console.log({key:number,name:username,age,address,tag:checkList});
    dispatch(add({key:number,name:username,age,address,tags:checkList}))
  
    setIsModalVisible(false);
  };
 
  const handleCancel = () => {
    setIsModalVisible(false);
  };
  const handleOk1 = () => {
    // console.log({key:number,name:username,age,address,tag:checkList});
    dispatch(updateOne({key:currentNumber,name:currentUsername,age:currentAge,address:currentAddress,tags:currentCheckList}))
    message.success("更新成功")
    setModalVisible(false);
  };

  const handleCancel1 = () => {
    setModalVisible(false);
  };
  const changeNumber=(value)=>{
     setNumber(value)
  }
  useEffect(()=>{
    //  console.log(goodlist);
  },[])
  const goodlist=useSelector((state)=>state.medicalgoods.goodlist)
  const toDelete=(key)=>{
  //  const ishave= goodlist.map((item,index)=>item.name===name)
    // const ishave = goodlist.findIndex(name)
    if(key){
      // console.log(key);
      if(goodlist.length===1){
        message.warning("必须保留一条")
        return;
      }
      dispatch(deleteOne(Number(key)))
      message.success("删除成功") 
    } 
    else{
      message.error('删除异常')
    }
  }
 const editorRow=({key,name,address,tags})=>{   
     setModalVisible(true)
     //setCheckList(tags)
     setCurrentNumber(key)
     setCurrentUsername(name)
     setCurrentAddress(address)
     setCurrentCheckList(tags)
 }
  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      render: (text) => <a>{text}</a>,
    },
    {
      title: 'Age',
      dataIndex: 'age',
      key: 'age',
    },
    {
      title: 'Address',
      dataIndex: 'address',
      key: 'address',
    },
    {
      title: 'Tags',
      key: 'tags',
      dataIndex: 'tags',
      render: (_, { tags }) => (
        <>
          {(tags||[]).map((tag) => {
            let color = tag.length > 5 ? 'geekblue' : 'green';
  
            if (tag === 'loser') {
              color = 'volcano';
            }
  
            return (
              <Tag color={color} key={tag}>
                {tag.toUpperCase()}
              </Tag>
            );
          })}
        </>
      ),
    },
    {
      title: 'Action',
      key: 'action',
      render: (_, record) => (
        <Space size="middle">
          <Button onClick={()=>editorRow(record)} type="primary">Editor {record.name}</Button>
          <Button type="danger" className="bg-red-500" onClick={()=>toDelete(record.key)}>Delete</Button>
        </Space>
      ),
    },
  ];
  return (
    <div>Just A redux demo{name}
    <Button onClick={()=>showModal()} className="scroll-ml-32 scroll-m-80" style={{marginLeft:"1300px"}}>添加一条</Button>
    <TableWrapper>
      <Table dataSource={goodlist} columns={columns}>
      </Table>
    </TableWrapper>
    <Modal title="Basic Modal" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
        {
          <div>
          <InputNumber placeholder='key/只能输入数字' min={4}  onChange={changeNumber} prefix={<IssuesCloseOutlined></IssuesCloseOutlined>}></InputNumber>
          <Input placeholder='name' onChange={(val)=>setUsername(val.target.value)} prefix={<UserAddOutlined></UserAddOutlined>}></Input>
          <Input placeholder='age' onChange={(val)=>setAge(val.target.value)} prefix={<AlignLeftOutlined></AlignLeftOutlined>}></Input>
          <Input placeholder='address' onChange={(val)=>setAddress(val.target.value)}></Input>
          <CheckboxGroup options={plainOptions}  onChange={onChange}/>
          </div>
        }
      </Modal>
      <Modal title="Basic Modal" visible={modalVisible} onOk={handleOk1} onCancel={handleCancel1}>
        {
          <div>
          <InputNumber placeholder='key/只能输入数字' min={4} value={currentNumber}  onChange={(val)=>setCurrentNumber(val)} prefix={<IssuesCloseOutlined></IssuesCloseOutlined>}></InputNumber>
          <Input placeholder='name' value={currentUsername} onChange={(val)=>setCurrentUsername(val.target.value)} prefix={<UserAddOutlined></UserAddOutlined>}></Input>
          <Input placeholder='age' value={currentAge} onChange={(val)=>setCurrentAge(val.target.value)} prefix={<AlignLeftOutlined></AlignLeftOutlined>}></Input>
          <Input placeholder='address' value={currentAddress} onChange={(val)=>setCurrentAddress(val.target.value)}></Input>
          <CheckboxGroup options={plainOptions} value={currentCheckList} onChange={(val)=>setCurrentCheckList(val)} />
          </div>
        }
      </Modal>
    </div>
  ) 
})

export default Kinds