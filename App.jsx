import React from 'react'
import Header from "./Component/Header";
import Main from "./Component/Main";
import Footer from './Component/Footer';
import './App.css'
import New from "./Component/New";
import Women from "./Component/Women";
import Men from "./Component/Men";
import Allproducts from "./Component/Allproducts";
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';


const App = () => {
  return (
    <>
    <Router>
    <Header />
    <Routes>
      <Route path='/' element={<Main />} />
      <Route path='/New' element={<New />} />
      <Route path='/Women' element={<Women />} />
      <Route path='/Men' element={<Men />} />
      <Route path='/Allproducts' element={<Allproducts />} />
    </Routes>
    <Footer/>
    </Router>
    </>
  )
}

export default App
