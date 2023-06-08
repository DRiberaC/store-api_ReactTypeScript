import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { ProductProvider } from './context/index.ts'
import { FavoriteProvider } from './context/favorites/index.tsx'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ProductProvider>
      <FavoriteProvider>
        <App />
      </FavoriteProvider>
    </ProductProvider>
  </React.StrictMode>,
)
