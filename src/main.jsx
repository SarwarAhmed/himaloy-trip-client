import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import route from './routes/route.jsx'
import { RouterProvider } from 'react-router-dom'
import AuthProviders from './provider/AuthProviders.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <AuthProviders>
            <RouterProvider router={route} />
        </AuthProviders>
    </React.StrictMode>,
)
