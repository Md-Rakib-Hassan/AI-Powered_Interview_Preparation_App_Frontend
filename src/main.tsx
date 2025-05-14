import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './router/router.tsx'
import UserProvider from './context/userContext.tsx'

const rootElement = document.getElementById('root');
if (rootElement) {
  createRoot(rootElement).render(
    <StrictMode>
      <UserProvider>
      <RouterProvider router={router} />
      </UserProvider>
    </StrictMode>,
  );
} else {
  console.error("Root element not found");
}
