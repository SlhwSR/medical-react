import React, { useState, useEffect, memo } from 'react';
import ReactDOM from 'react-dom';
import { Line } from '@ant-design/plots';
import ColumnDemo from './cpns/foldLine'
import { Button, Card } from 'antd';
import DemoRose from './cpns/sortChart';
import RoseDetail from './cpns/sortDetail';
import LadderDemo from './cpns/ladyerChart';
import DemoDualAxes from './cpns/doubleLine'
import DoubleLineAndSquare from './cpns/doubleLineAndSquare'
import { useHref, useNavigate } from 'react-router-dom';
const DemoChart = memo(() => {
  const [data, setData] = useState([]);
  const href=useHref({pathname:"/"})
  const navigate=useNavigate()
  useEffect(() => {
    asyncFetch();
  }, []);

  const asyncFetch = () => {
    fetch('https://gw.alipayobjects.com/os/bmw-prod/e00d52f4-2fa6-47ee-a0d7-105dd95bde20.json')
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => {
        console.log('fetch data failed', error);
      });
  };
  const config = {  
    data,
    xField: 'year',
    yField: 'gdp',
    seriesField: 'name',
    yAxis: {
      label: {
        formatter: (v) => `${(v / 10e8).toFixed(1)} B`,
      },
    },
    legend: {
      position: 'top',
    },
    smooth: true,
    // @TODO 后续会换一种动画方式
    animation: {
      appear: {
        animation: 'path-in',
        duration: 5000,
      },
    },
  };

  return (
  <div className="w-full">
    <Card title="Total static" extra={<Button onClick={()=>navigate(-1)} className="bg-cyan-500">Check More About Bmos</Button>}>
     <div className="flex flex-wrap flex-1 space-x-1">
     <div className="w-1/2 h-56"><Line {...config}/></div>
     <DemoRose className="w-auto"></DemoRose>
     <RoseDetail></RoseDetail>
     <div className="w-full h-56"><ColumnDemo></ColumnDemo></div>
     <div className="w-1/2 h-56">
        <LadderDemo></LadderDemo>
    </div>
    <DemoDualAxes></DemoDualAxes>
     {/* <LadderDemo></LadderDemo> */}
     <DoubleLineAndSquare></DoubleLineAndSquare>
    {/* <div className= "w-1/3"><DemoDualAxes></DemoDualAxes></div> */}
    </div>
    </Card>
  </div>
  );
});

export default DemoChart