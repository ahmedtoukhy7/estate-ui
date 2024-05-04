import { RouterProvider, createBrowserRouter } from "react-router-dom"
import Layout from "./components/Layout/Layout"
import Home from "./components/Home/Home"
import ListPage from "./components/ListPage/ListPage"
import SinglePage from './components/SinglePage/SinglePage';
import Register from "./components/Register/Register";
import Login from "./components/Login/Login";


function App() {

  const routes =createBrowserRouter([
    { path:'/', element: <Layout/> , children : [
      {index:true , element : <Home/>},
      {path : '/list', element:<ListPage/>},
     
      {path:'/:id',element:<SinglePage/>},
      {path : '/register', element:<Register/>},
      {path : '/login', element:<Login/>},
    ]
     
   }
  ])
  return<>

  <RouterProvider router={routes}/>
  
  </>
}

export default App