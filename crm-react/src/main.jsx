import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
// Router - Definir por medio de un objeto
import { router } from './router';
import { RouterProvider } from 'react-router-dom';
// Componentes

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
