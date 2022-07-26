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

const config = {
  stopScrollGraph: true,
  stopZoomGraph: true,
  metaKeyMultipleSelected: true,
  grid: {
    size: 10,
    type: 'dot',
  },
  keyboard: {
    enabled: true,
  },
  snapline: true,
}


export default class BpmnExample extends Component{
  constructor(props) {
    this.lf=null
    super(props);
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
    lf.render()
    this.lf = lf;
    this.setState({
      rendered: true,
    });
  }
  render() {
    const { rendered } = this.state;
    let tools;
    if (rendered) {
      tools = (
        <div>
          <BpmnPattern lf={this.lf} />
          <BpmnIo lf={this.lf} />
        </div>
      );
    }
    return (
      <>
        <div className="bpmn-example-container">
          <div id="graph" className="viewport"></div>
          {tools}
        </div>
      </>
    )
  }
}
