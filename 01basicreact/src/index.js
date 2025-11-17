import React from 'react'; // core foundational library for taking all references
import ReactDOM from 'react-dom/client';  //  library for rendering React components to the DOM, web as react-native is implimentation for mobile apps

import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root')); // we take reference throug ReactDOM and store it in variable  called root, and then render through that variable,take strictmode of react and then render app-tag in it, we can createcustom tags /app in jsx
root.render(
    <App />
    // what is app 
);