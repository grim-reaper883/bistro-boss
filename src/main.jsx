import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import { router } from './Routes/Routes';
import AuthProvider from './providers/AuthProvider';
import CartProvider from './providers/CartProvider';
import Popup from './components/Popup';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <CartProvider>
        <div className='max-w-screen-xl mx-auto'>
          <RouterProvider router={router} />
          <Popup />
        </div>
      </CartProvider>
    </AuthProvider>
  </StrictMode>,
)
