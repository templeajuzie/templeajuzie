import React from 'react';
import { hydrate, render } from "react-dom";
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// if (root.hasChildNodes()) {
//   hydrate(<App />, root);
// } else {
//   render(<App />, root);
// }



// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

