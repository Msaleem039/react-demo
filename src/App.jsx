import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import Product from './components/Product'
import Navbar from './components/Navbar'
import Contact from './components/Contact'
import Gallery from './components/Gallery'
import GallerDetail from './components/GallerDetail'
import Fakedata from './components/Fakedata'
import Fakedetail from './components/Fakedetail'
import Saree from './components/Saree'
import SareeDetail from './components/SareeDetail'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/product' element={<Product/>}></Route>
        <Route path='/contact' element={<Contact/>}></Route>
        <Route path='/gallery' element={<Gallery/>}></Route>
        <Route path='/saree' element={<Saree/>}></Route>
        <Route path='/saree/:slug' element={<SareeDetail/>}></Route>
        <Route path='/gallery/:id' element={<GallerDetail/>}></Route>
        <Route path='/fakedata' element={<Fakedata/>}></Route>
        <Route path='/fakedata/:id' element={<Fakedetail/>}></Route>
      </Routes>
    </div>
  )
}

export default App
