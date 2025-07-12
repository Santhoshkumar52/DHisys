import React from 'react'
import { createBrowserRouter,Route,createRoutesFromElements,RouterProvider } from "react-router"
import RouterLayout from '../routerLayout/RouterLayout'
import Home from '../pages/Home'
import About from '../pages/About'
import Services from '../pages/Services'
import Contact from '../pages/Contact'



const App = () => {
  const router=createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={<RouterLayout/>}>
       <Route index element={<Home/>}></Route>
        <Route path="/about" element={<About/>}></Route>
         <Route path="/services" element={<Services/>}></Route>
          <Route path="/contact" element={<Contact/>}></Route>
    </Route>
  ))
  return (
    <RouterProvider router={router}>
     
    </RouterProvider>
  )
}

export default App