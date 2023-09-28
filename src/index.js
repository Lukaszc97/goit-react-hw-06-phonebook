import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux'; 
import App from './components/App';
import store from './Redux/Store';

const root = document.getElementById('root');
const rootElement = createRoot(root);

rootElement.render(
  <React.StrictMode>
    <Provider store={store}> {}
      <App />
    </Provider>
  </React.StrictMode>
);
