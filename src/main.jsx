import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { ReadContextProvider } from './context/ReadContext'
import './styles/index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
    <ReadContextProvider>
        <App />
    </ReadContextProvider>
)
