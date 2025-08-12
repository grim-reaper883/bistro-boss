import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import { router } from './Routes/Routes';
import AuthProvider from './providers/AuthProvider';
import CartProvider from './providers/CartProvider';
import Popup from './components/Popup';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient()

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <QueryClientProvider client={queryClient}>
        <CartProvider>
          <div className='max-w-screen-xl mx-auto'>
            <RouterProvider router={router} />
            <Popup />
          </div>
        </CartProvider>
      </QueryClientProvider>
    </AuthProvider>
  </StrictMode>,
)
