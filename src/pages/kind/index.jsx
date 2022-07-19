import React, { memo, useEffect,useState } from 'react'
import {  useOutletContext } from 'react-router-dom'
import {useSelector} from 'react-redux'
import {TableWrapper} from './style'
import { Table,Tag,Space, Button, message,Modal,Input,Checkbox, InputNumber} from 'antd'
import {useDispatch} from 'react-redux'
import { add, deleteOne } from '../../store/medicalfactory'
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
  const onChange=(values)=>{
     setCheckList(values)
  }
  const showModal = () => {
    setIsModalVisible(true);

  };

  const handleOk = () => {
    // console.log({key:number,name:username,age,address,tag:checkList});
    dispatch(add({key:number,name:username,age,address,tag:checkList}))
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
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
      dispatch(deleteOne(Number(key)))
      message.success("删除成功") 
      if(goodlist.length===1){
        message.warning("必须保留一条!")
      }
    } 
    else{
      message.error('删除异常')
    }
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
          <a>Invite {record.name}</a>
          <Button type="danger" className="bg-red-500" onClick={()=>toDelete(record.key)}>Delete</Button>
        </Space>
      ),
    },
  ];
  return (
    <div>Kinds Page,{name}
    <Button onClick={()=>showModal()}>添加一条</Button>
    <TableWrapper>
      <Table dataSource={goodlist} columns={columns}>
      </Table>
    </TableWrapper>
    <Modal title="Basic Modal" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
        {
          <div>
          <InputNumber placeholder='key/只能输入数字' min={4} onChange={changeNumber}></InputNumber>
          <Input placeholder='name' onChange={(val)=>setUsername(val.target.value)}></Input>
          <Input placeholder='age' onChange={(val)=>setAge(val.target.value)}></Input>
          <Input placeholder='address' onChange={(val)=>setAddress(val.target.value)}></Input>
          <CheckboxGroup options={plainOptions}  onChange={onChange} />
          </div>
        }
      </Modal>
    </div>
  ) 
})

export default Kinds