import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import {resolve} from 'path'
import basicSsl from '@vitejs/plugin-basic-ssl'
import {webUpdateNotice} from '@plugin-web-update-notification/vite'
// https://vitejs.dev/config/
export default defineConfig({
  resolve:{
    alias:{
      "@":resolve(__dirname,'./src'),
      '@components':resolve(__dirname,'./src/components')
    }
  },
  server:{
     host:'0.0.0.0'
  },
  base:"./",
  plugins: [react(),basicSsl(),webUpdateNotice({
    logVersion:true,
    notificationProps:{
      title:"检测到新的资源",
      description:"System Upgrade about Redux immutable@6.2.2,click here to update!",
      buttonText:"刷新"
    }
  })]
})
