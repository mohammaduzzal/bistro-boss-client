import { RouterProvider } from 'react-router-dom';
import { createRoot } from 'react-dom/client';
import { StrictMode } from 'react';
import './index.css';
import router from './Router/Router';
import { HelmetProvider } from 'react-helmet-async';
import AuthProvider from './provider/AuthProvider';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';


const queryClient = new QueryClient();



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div className='max-w-screen-xl mx-auto'>
      <AuthProvider>
        <QueryClientProvider client={queryClient}>
          <HelmetProvider>
            <RouterProvider router={router}></RouterProvider>
          </HelmetProvider>
        </QueryClientProvider>
      </AuthProvider>
    </div>

  </StrictMode>,
)
