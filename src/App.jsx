import './App.css'
import Navbar from './components/Navbar'
import router from './components/Routing/Router'
import { RouterProvider } from 'react-router-dom'
import { Toaster } from "sonner"

import { Suspense } from 'react'

function App() {
 

  return (
    <>  
        <Suspense fallback={<div className="flex items-center justify-center h-screen font-semibold text-xl">Loading...</div>}>
          <RouterProvider router={router} />
        </Suspense>
        <Toaster position="top-center" richColors />
    </>
  )
}

export default App
