import React, { Component } from 'react';
import LogicFlow from '@logicflow/core';
import {
  BpmnElement,
  BpmnXmlAdapter,
  Snapshot,
  Control,
  Menu,
  SelectionSelect,
} from '@logicflow/extension';
import BpmnPattern from './pattern';
import BpmnIo from './io';
import './index.css';
import 'antd/lib/button/style/index.css';
import '@logicflow/extension/lib/style/index.css';
import {toLogicflowData} from './cpns/adpterForTurbo'
const config = {
  stopScrollGraph: true,
  stopZoomGraph: true,
  metaKeyMultipleSelected: true,
  grid: {
    size: 16,
    type: 'dot',
  },
  keyboard: {
    enabled: true,
  },
  snapline: true,
  width:1500,
  height:800,
  autoExpand:true,
  background: {
    color: "#f7f9ff"
  },
}
export default class BpmnExample extends Component{
  constructor(props) {
    super(props);
     this.lf
    this.state = {
      rendered: true,
    };
  }
  componentDidMount() {
    LogicFlow.use(BpmnElement);
    LogicFlow.use(BpmnXmlAdapter);
    LogicFlow.use(Snapshot);
    LogicFlow.use(Control);
    LogicFlow.use(Menu);
    LogicFlow.use(SelectionSelect);
    const lf = new LogicFlow({
      ...config,
      container: document.querySelector('#graph')
    });
    this.lf = lf;
    lf.setDefaultEdgeType("bpmn:sequenceFlow")
    //lf.render()
    lf.setTheme({
      outline: {
        fill: 'transparent',
        stroke: '#949494',
        strokeDasharray: '3,3',
        hover: {
          stroke: '#949494',
        },
      },
    })
    this.setState({
      rendered: true,
    });
    lf.render()
  }
  render() {
    const { rendered } = this.state;
    var tools;
    if (rendered) {
      tools = (
        <div>
          <BpmnPattern lf={this.lf} />
          <BpmnIo lf={this.lf} />
        </div>
      );
    }
    return (
      <React.StrictMode>
        <div className="bpmn-example-container">
          <div id="graph" className="viewport"></div>
          {tools}
        </div>
      </React.StrictMode>
    )
  }
}
