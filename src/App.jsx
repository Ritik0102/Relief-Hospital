import './App.css'
import Dashboard from './Component/Dashboard';
import Navbar from './Component/Navbar'
import { Routes, Route } from "react-router-dom";
import Customers from './Component/Customers';
import Activities from './Component/Activities';

function App() {

  return (
    <>
    <Navbar/>
      <Routes>
        <Route path="/" element={<Dashboard/>}/>
        <Route path="Customers" element={<Customers/>}/>
        <Route path="activities" element={<Activities/>}/>
      </Routes>
      
    </>
  )
}

export default App
