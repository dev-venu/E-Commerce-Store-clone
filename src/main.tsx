import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { FilterProvider } from './Components/FilterContext.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <FilterProvider>
        <App/>
    </FilterProvider>
  </React.StrictMode>,
)
