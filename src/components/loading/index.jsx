import React, { memo } from 'react'
import { LoadingWrapper } from './style'
import {Spin} from 'antd'
const Loading = memo(() => {
  return (
    <LoadingWrapper>
     <Spin size="large" style={{position:"absolute",top:"50%"}}></Spin>
    </LoadingWrapper>
  )
})

export default Loading