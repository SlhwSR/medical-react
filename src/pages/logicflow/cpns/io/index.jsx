import React from 'react';
import LogicFlow from '@logicflow/core';
import downloadImg from '../img/download.png'
import photo from '../img/img.png'
import uploadImg from '../img/upload.png'
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
    const data = lf.getGraphData()
    download('logic-flow.xml', data);
  }
  function uploadXml(ev) {
    const file = (ev.target).files[0];
    const reader = new FileReader()
    reader.onload = (event) => {
      if (event.target) {
        const xml = event.target.result
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