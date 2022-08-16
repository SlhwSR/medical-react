import React from 'react';
import LogicFlow from '@logicflow/core';

import downloadImg from './cpns/img/download.png'
import photo from './cpns/img/img.png'
import uploadImg from './cpns/img/upload.png'
import {lfJson2Xml,lfXml2Json} from '@logicflow/extension'
function download(filename, text) {
  var element = document.createElement('a');
  element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
  element.setAttribute('download', filename);

  element.style.display = 'none';
  document.body.appendChild(element);

  element.click();

  document.body.removeChild(element);
}


export default function BpmnIo(props) {
  const { lf } = props;
  function downloadXml() {
    const data = lf.getGraphData();
    //console.log(data);
 //   download('logic-flow11.xml',JSON.stringify(data));
    download('logic-flow11.xml',data);
   
}
  function uploadXml(ev) {
    const file = (ev.target).files[0];
    //console.log(file);
    const reader = new FileReader()
    reader.onload = (event) => {
      if (event.target) {
        const xml = event.target.result;
        console.log(lfXml2Json(xml));
        lf.render(xml);
      }
    }
    reader.readAsText(file); // you could also read images and other binaries
  }

  function downloadImage() {
    const { lf } = props;
    lf.getSnapshot();
  }

  return (
    <div className="graph-io">
      <span
        title="下载 XML"
        onMouseDown={() => downloadXml()}
      >
        <img src={downloadImg} alt="下载XML" />
      </span>
      <span
        id="download-img"
        title="下载图片"
        onMouseDown={() => downloadImage()}
      >
        <img src={photo} alt="下载图片" />
      </span>
      <span
        id="upload-xml"
        title="上传 XML"
      >
        <input type="file" className="upload" onChange={(ev) => uploadXml(ev)} />
        <img src={uploadImg} alt="上传XML" />
      </span>
    </div>
  );
}