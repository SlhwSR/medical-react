import React, { useState, useEffect, lazy, useReducer } from 'react';
import { Rose } from '@ant-design/plots';

const DemoRose = () => {
  useEffect(()=>{
    setInterval(()=>{
      forceuUpdate()  
    },2000)
   return ()=>clearInterval()
  },[])
  const [ignore,forceuUpdate]=  useReducer((x)=>x+1,0)
  const data = [
    {
      type: '分类一',
      value: Math.floor(Math.random()*1000),
    },
    {
      type: '分类二',
      value: Math.floor(Math.random()*1000),
    },
    {
      type: '分类三',
      value: Math.floor(Math.random()*1000),
    },
    {
      type: '分类四',
      value: Math.floor(Math.random()*1000),
    },
    {
      type: '分类五',
      value: Math.floor(Math.random()*1000),
    },
    {
      type: '其他',
      value: Math.floor(Math.random()*1000),
    },
  ];
  const config = {
    data,
    xField: 'type',
    yField: 'value',
    seriesField: 'type',
    radius: 0.9,
    legend: {
      position: 'right',
    },
  };
  return <Rose {...config} />;
};

export default DemoRose