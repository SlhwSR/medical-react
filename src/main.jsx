import React, { Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import {HashRouter, useRoutes} from 'react-router-dom'
import {Provider} from 'react-redux'
import {store} from './store/index'
import './assets/css/base.css'
import moment  from 'moment';
import '@wangeditor/editor/dist/css/style.css' 
moment.locale('zh-cn')
ReactDOM.createRoot(document.getElementById('root')).render(
    <Provider store={store}>
    <HashRouter>
    <App />
  </HashRouter>
  </Provider>
)





