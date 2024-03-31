import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import {BrowserRouter} from 'react-router-dom'
import {store, persistor} from './redux/store';
import {PersistGate} from 'redux-persist/integration/react'
import './index.css';
import App from './components/App';
import './i18n'
import { Suspense } from 'react';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>     
  <PersistGate persistor={persistor}>
    <BrowserRouter basename='/node_front_fs_91_Cherniatynskyi'>
      <Suspense fallback={<div>loading</div>}>
      <App />
      </Suspense>
    </BrowserRouter>
  </PersistGate>
  </Provider>
);


