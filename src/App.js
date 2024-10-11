import './App.css';
import { createBrowserRouter,createHashRouter,RouterProvider } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Home from './components/Home/Home';
import About from './components/About/About';
import Blog from './components/Blog/Blog';
import Services from './components/Services/Services';
import Contact from './components/Contact/Contact';
import Pricing from './components/Pricing/Pricing';


let router=createHashRouter([
  {path:'/' ,element:<Layout/> ,children:[
    {index:true, element:<Home/>},
    {path:'about',element:<About/>},
  {path:'services',element:<Services/>},
  {path:'contact',element:<Contact/>},
  {path:'pricing',element:<Pricing/>},
  {path:'blog',element:<Blog/>}
]}
  
  ])

function App() {
  return (
    <>
    <RouterProvider router={router}/>
      </>
  );
}

export default App;
