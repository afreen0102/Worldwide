import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'

import HomePage from './pages/Homepage'
import Pricing from './pages/Pricing'
import Product from './pages/Product'
import PageNotFound from './pages/PageNotFound'
import AppLayout from './pages/AppLayout'
import Login from './pages/Login'
import CityList from './components/CityList'
import CountryList from './components/CountryList'
import City from './components/City'
import Form from './components/Form'  
import { CitiesProvider } from './contexts/CitiesContext'


const App = () => {
  
  return (
    <div>
    <CitiesProvider>  
    <BrowserRouter>
    <Routes>
      <Route index element={<HomePage/>}/>
      <Route path="pricing" element={<Pricing/>}/>
      <Route path="product" element={<Product/>}/>
      <Route path="*" element={<PageNotFound/>}/>
      <Route path="app" element={<AppLayout/>}>
        <Route index element={<Navigate to="cities"/>}/>
        <Route path='cities' element={<CityList  />} />
        <Route path='cities/:id' element={<City />} />
        <Route path='countries' element={<CountryList />} />
        <Route path='form' element={<Form />}/>
      </Route>
      <Route path="login" element={<Login/>}/>

    </Routes>
    </BrowserRouter>
    </CitiesProvider>
   
    </div>
  )
}

export default App

