import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'


import configStore from './withRedux/store/storeConfig'
import { Provider } from 'react-redux'



ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={configStore()}>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </Provider>
)
