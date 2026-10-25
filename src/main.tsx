import React from 'react'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import { createRoot } from 'react-dom/client'
import './index.css'
import MainPage from './Pages/MainPage/MainPage.tsx'
import ProductPage from "./Pages/ProductPage/ProductPage.tsx"
import SearchResult from "./Pages/SearchResult/SearchResult.tsx"

const router = createBrowserRouter([
  {
    path: '/', 
    element: <MainPage />,
  },
  { 
    path: '/page', 
    element: <ProductPage />,
  },
  {
    path: '/search-result', 
    element: <SearchResult />,
  },

])



createRoot(document.getElementById('root')!).render(
  <React.StrictMode> 
    <RouterProvider router={router}/>
  </React.StrictMode>
)
