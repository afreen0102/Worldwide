import { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import HomePage from './pages/Homepage'
import Pricing from './pages/Pricing'
import Product from './pages/Product'
import PageNotFound from './pages/PageNotFound'
import AppLayout from './pages/AppLayout'
import Login from './pages/Login'
import CityList from './components/CityList'
import CountryList from './components/CountryList'
import City from './components/City'

const BASE_URL = 'http://localhost:9000'


const App = () => {
  const [ cities, setCities ] = useState([]);
  const [ isLoading, setIsLoading ] = useState(false);
  
  

  useEffect(function(){
    async function fetchCities() {
      try {
      setIsLoading(true);
      const res = await fetch(`${BASE_URL}/cities`);
      const data = await res.json();
      setCities(data); 
      }
      catch {
        alert('there is an error')
      }
      finally {
        setIsLoading(false)
      }
    } 

    fetchCities();

  },[]);

  return (
    <div>
    <BrowserRouter>
    <Routes>
      <Route index element={<HomePage/>}/>
      <Route path="pricing" element={<Pricing/>}/>
      <Route path="product" element={<Product/>}/>
      <Route path="*" element={<PageNotFound/>}/>
      <Route path="app" element={<AppLayout/>}>
        <Route index element={<CityList cities={cities} isLoading={isLoading}/>}/>
        <Route path='cities' element={<CityList cities={cities} isLoading={isLoading} />} />
        <Route path='cities/:id' element={<City />} />
        <Route path='countries' element={<CountryList cities={cities} isLoading={isLoading}/>} />
        <Route path='form' element={<p>Form</p>}/>
      </Route>
      <Route path="login" element={<Login/>}/>

    </Routes>
    </BrowserRouter>
   
    </div>
  )
}

export default App

