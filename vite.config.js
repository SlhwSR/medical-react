import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import {resolve} from 'path'
import basicSsl from '@vitejs/plugin-basic-ssl'
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
  plugins: [react(),basicSsl()]
})
