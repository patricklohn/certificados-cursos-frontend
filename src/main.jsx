import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import './index.css'
import App from './App.jsx'

import Error from './routes/Error.jsx';
import Home from './routes/Home.jsx';
import AddCertificado from './routes/AddCertificado.jsx';
import AddMemory from './routes/AddMemory.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    errorElement: <Error/>,
    children: [
      {path: "/", element: <Home/>},
      {path: "/add-certific", element: <AddCertificado/>},
      {path: "/certificado/:id", element: <AddMemory/>},
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
