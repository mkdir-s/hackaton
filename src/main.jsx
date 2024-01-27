import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { ConfigProvider } from 'antd';
import ruRU from 'antd/locale/ru_RU';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ConfigProvider locale={ruRU}
      theme={{
          token: {
            colorPrimary: '#00805f',
            colorPrimaryHover: '#00805f',
            fontSize: 16,
          },
          components:{
            DatePicker:{
            }
          }
      }}
    >
          <App />
  </ConfigProvider>
  </React.StrictMode>,
)
