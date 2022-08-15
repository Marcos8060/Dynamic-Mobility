import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Response from './pages/Response';
import { Provider } from 'react-redux/es/exports';
import { store } from './redux/store';
import Step1 from './pages/Step1';
import Step2 from './pages/Step2';
import Step3 from './pages/Step3';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Provider store={store}>
        <Routes>
          <Route exact path="/" element={<App />}></Route>
          <Route exact path="/step1" element={<Step1 />}></Route>
          <Route exact path="/step2" element={<Step2 />}></Route>
          <Route exact path="/step3" element={<Step3 />}></Route>
          <Route exact path="/response" element={<Response />}></Route>
        </Routes>
      </Provider>
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
