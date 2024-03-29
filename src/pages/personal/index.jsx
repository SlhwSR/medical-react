import React, { memo, useEffect, useState } from 'react'
import { Button, Col, Row, Statistic,Card, Space } from 'antd';
import { LikeOutlined,ArrowUpOutlined,ArrowDownOutlined  } from '@ant-design/icons';
const PersonalCenter = memo(() => {
    const [random,setRandom]=useState(10086)
    useEffect(()=>{
       setInterval(() => {
           setRandom(Math.floor(Math.random()*10000))
        }, 1000);
        return ()=>{
            clearInterval()
        }
    },[])
  return (
    <div>
  <Row gutter={16}>
    <Col span={8}>
      <Statistic title="浏览量" value={112893+'次'} />
    </Col>
    <Col span={8}>
      <Statistic title="器材消费统计" value={'$'+random} precision={2} />
      <Button
        style={{
          marginTop: 16,
        }}
        onClick={()=>setRandom(Math.floor(Math.random()*10000))}
      >
        Recharge
      </Button>
    </Col>
    <Col span={8}>
      <Statistic title="活跃用户" value={1893}  />
    </Col>
    <Col span={8}>
      <Statistic title="点赞" value={1128} prefix={<LikeOutlined />} />
    </Col>
    <Col span={8}>
      <Statistic title="Unmerged" value={93} suffix="/ 100" />
    </Col>
        <Space size={33} className="-mt-4">
        <Card>
          <Statistic
            title="当月器材使用频率"
            value={11.28}
            precision={2}
            valueStyle={{ color: '#3f8600' }}
            prefix={<ArrowUpOutlined />}
            suffix="%"
          />
        </Card>
        <Card className="w-48">
          <Statistic
            title="上月器材使用频率"
            value={9.3}
            precision={2}
            valueStyle={{ color: '#cf1322' }}
            prefix={<ArrowDownOutlined />}
            suffix="%"
          />
        </Card>
        </Space>
       </Row>
  
    </div>
  )
})

export default PersonalCenter 