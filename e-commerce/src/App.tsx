import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import ViewProduct from './pages/ViewProduct'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/view-product' element={<ViewProduct />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
