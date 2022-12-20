import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { store } from '~/redux/store';
import { Provider } from 'react-redux';
import GlobalStyles from './component/GlobalStyles';
import { transitions, positions, Provider as AlertProvider } from 'react-alert';
import AlertTemplate from 'react-alert-template-basic';
//Alert
const options = {
  // you can also just use 'top center'
  position: positions.TOP_CENTER,
  timeout: 3000,
  offset: '30px',
  // you can also just use 'scale'
  transition: transitions.SCALE,
};
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <React.StrictMode>
      <GlobalStyles>
        <AlertProvider template={AlertTemplate} {...options}>
          <App />
        </AlertProvider>
      </GlobalStyles>
    </React.StrictMode>
  </Provider>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
