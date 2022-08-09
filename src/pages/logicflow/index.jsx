import React, { Component } from "react";
import LogicFlow from "@logicflow/core";
import {
  BpmnElement,
  BpmnXmlAdapter,
  Snapshot,
  Control,
  Menu,
  SelectionSelect,
  BpmnAdapter,
  MiniMap,
} from "@logicflow/extension";
import BpmnPattern from "./pattern";
import BpmnIo from "./io";
import "antd/lib/button/style/index.css";
import "@logicflow/extension/lib/style/index.css";
import "@logicflow/core/dist/style/index.css";
import { toLogicflowData } from "./cpns/adpterForTurbo";
import customEdge from "./customEdge";
import { LogicFlowWrapper } from "./style";
import { TreeSelect, Card, Input } from "antd";
const { TreeNode } = TreeSelect;
const config = {
  stopScrollGraph: true,
  stopZoomGraph: true,
  metaKeyMultipleSelected: true,
  grid: {
    size: 16,
    type: "dot",
  },
  keyboard: {
    enabled: true,
  },
  snapline: true,
  width: 1300,
  height: 800,
  autoExpand: true,
  background: {
    color: "#f7f9ff",
  },
};

export default class BpmnExample extends Component {
  constructor(props) {
    super(props);
    this.lf;
    this.state = {
      rendered: true,
      treevalue: undefined,
      treedata: [
        {
          title: "流程节点一",
          value: "0-0",
          children: [
            {
              title: "流程节点一子节点",
              value: "0-0-1",
            },
            {
              title: "流程节点二子节点",
              value: "0-0-2",
              children: [
                {
                  title: "血浆站",
                  value: "cwd",
                },
              ],
            },
            {
              title: "流程节点三子节点",
              value: "0-0-3",
            },
            {
              title: "流程节点四子节点",
              value: "0-0-4",
            },
          ],
        },
        {
          title: "Node2节点",
          value: "0-1",
          children: [
            {
              title: "Node一子节点",
              value: "1-0-1",
            },
            {
              title: "Node二子节点",
              value: "1-0-2",
            },
            {
              title: "Node三子节点",
              value: "1-0-3",
            },
            {
              title: "Node-四子节点",
              value: "1-0-4",
            },
          ],
        },
      ],
      id: null,
      Xposition: null,
      Yposition: null,
      type: null,
      content: "",
      newState: [],
    };
  }
  componentDidMount() {
    LogicFlow.use(BpmnElement);
    LogicFlow.use(BpmnXmlAdapter);
    LogicFlow.use(Snapshot);
    LogicFlow.use(Control);
    LogicFlow.use(Menu);
    LogicFlow.use(SelectionSelect);
    LogicFlow.use(BpmnAdapter);
    LogicFlow.use(MiniMap)
    const lf = new LogicFlow({
      ...config,
      container: document.querySelector("#graph"),
    });
    this.lf = lf;
    lf.setDefaultEdgeType("bpmn:sequenceFlow");
    //lf.render()
    lf.extension.miniMap(0,0)
    lf.setTheme({
      outline: {
        fill: "transparent",
        stroke: "#949494",
        strokeDasharray: "3,3",
        hover: {
          stroke: "#949494",
        },
      },
      edgeText: {
        textWidth: 50,
        overflowMode: "autoWrap",
        fontSize: 12,
        background: {
          fill: "#FFFFFF",
        },
      },
    });
    lf.register(customEdge);
    
    lf.setDefaultEdgeType("custom-edge");
    this.setState({
      rendered: true,
    });
    lf.render();
  }
  componentDidUpdate() {
    this.lf.on("node:dnd-add", (data) => {
      this.setState(
        {
          id: data.data.id,
          type: data.data.type,
          Xposition: data.data.x,
          Yposition: data.data.y,
          content: data.data.text?.value
            ? data.data.text.value
            : "当前无文字内容",
        },
        () => {
          this.lf.off("node:dnd-add", (args) => {
            console.log("11" + data);
          });
        }
      );
    });
    this.lf.on("node:click", (data) => {
      const { id, type, x, y } = data.data;
      console.log(data);
      this.setState(
        {
          id,
          type,
          Xposition: x,
          Yposition: y,
          content: data.data.text?.value
            ? data.data.text.value
            : "当前无文字内容",
        },
        () => {
          this.lf.off("node:click", (data) => {
            console.log(data);
          });
        }
      );
    });
  }
  componentWillUnmount() {
    this.lf.off("node:click", (data) => {
      console.log(data);
    });
    this.lf.off("node:dnd-add", (data) => {
      console.log(data);
    });
  }

  onChange = (val) => {
    console.log(val);
  };
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
        <LogicFlowWrapper>
          <div className="left-tree">
            <TreeSelect
              showSearch
              style={{
                width: "16%",
              }}
              value={this.treevalue}
              dropdownStyle={{
                maxHeight: 1050,
                overflow: "auto",
              }}
              treeData={this.state.treedata}
              placeholder="Please select"
              allowClear
              onChange={(val) => this.onChange(val)}
            ></TreeSelect>
          </div>
          <div className="bpmn-example-container">
            <div id="graph" className="viewport"></div>
            {tools}
          </div>
          <div className="rightInfo">
            <Card
              title="对应流程详情"
              bordered={false}
              style={{ width: 300, height: "800px" }}
            >
              <div>
                <span>Id:</span>{" "}
                <Input placeholder="该流程id" value={this.state.id}></Input>
              </div>
              <div>
                <span>X轴:</span>{" "}
                <Input
                  placeholder="当前X轴位置"
                  value={this.state.Xposition}
                ></Input>
              </div>
              <div>
                <span>Y轴:</span>{" "}
                <Input
                  placeholder="当前Y轴位置"
                  value={this.state.Yposition}
                ></Input>
              </div>
              <div>
                <span>类型:</span>{" "}
                <Input
                  placeholder="当前流程类型"
                  value={this.state.type}
                ></Input>
              </div>
              <div>
                <span>文字内容:</span>{" "}
                <Input
                  placeholder="当前文字内容"
                  value={this.state.content}
                ></Input>
              </div>
            </Card>
          </div>
        </LogicFlowWrapper>
      </React.StrictMode>
    );
  }
}
