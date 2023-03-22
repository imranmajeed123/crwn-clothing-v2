import React from 'react';
import { render } from 'react-dom';
import './index.scss';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { UserProvider } from './components/contexts/user.context';
import {ProductProvider} from './components/contexts/shop.context';

const rootElement = document.getElementById('root');

render(
  <React.StrictMode>
    <BrowserRouter>
    <UserProvider>
      <ProductProvider>
        <App />
      </ProductProvider>      
    </UserProvider>      
    </BrowserRouter>
  </React.StrictMode>,
  rootElement
);
