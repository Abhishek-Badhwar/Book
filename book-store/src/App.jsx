import { useState } from 'react';
import './App.css';
import { Outlet } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import MyFooter from './components/Footer/MyFooter';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
     
        <Outlet />
     
      <MyFooter />
    </>
  )
}

export default App
