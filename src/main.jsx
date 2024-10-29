import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Component/Home';
import HomeMain from './Component/HomeMain';
import About from './Component/About';
import Users from './Component/Users';
import Footer from './Component/Footer';
import UserDetails from './Component/UserDetails';

const router = createBrowserRouter([
 {
  path:'/',
  element:<Home></Home>,
  children:[
   {
    path:'/',
    element:<HomeMain></HomeMain>
   },
   {
    path:'/',
    element:<Footer></Footer>
   },
   {
    path:'/About',
    element:<About></About>
   },
   {
    path:'/Users',
    loader:() =>fetch('https://openapi.programming-hero.com/api/peddy/pets'),
    element:<Users></Users>
   },
   {
    path:'/user/:UserId',
    loader:({params}) =>fetch(`https://openapi.programming-hero.com/api/peddy/pet/${params.UserId}`),
    element:<UserDetails></UserDetails>
   },
  ]
 }
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
