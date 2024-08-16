import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import App from './App.jsx'
import './index.css'
import AdminLogin from './pages/AdminPage.jsx'
import AssessmentFormPage from './pages/AssessmentFormPage.jsx'
const router  = createBrowserRouter([
  {
    path:"/",
    element:<App/>
  },
  {
    path:"/admin",
    element:<AdminLogin/>
  },
  {
    path:"/assessmentPage",
    element:<AssessmentFormPage/>
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)


