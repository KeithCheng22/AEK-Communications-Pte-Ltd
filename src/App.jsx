import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'

// Component Imports
import Layout from './components/Layout'

// Pages Imports
import Home from './pages/Home'
import About from './pages/About'
import TC from './pages/TC'
import PP from './pages/PP'
import Products from './pages/Products'
import NotFound from './pages/NotFound'
import ProductDetail from './pages/ProductDetail'
import ContactUs from './pages/ContactUs'
import Promotions from './pages/Promotions'
import Gallery from './pages/Gallery'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='about' element={<About />} />
          <Route path='products' element={<Products />} />
          <Route path='products/:id' element={<ProductDetail />}/>
          <Route path='promotions' element={<Promotions />}/>
          <Route path='gallery' element={<Gallery />} />
          <Route path='contact_us' element={<ContactUs />} />
          <Route path='terms&conditions' element={<TC />} />
          <Route path='privacypolicy' element={<PP />} />
          <Route path='*' element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
  

export default App
