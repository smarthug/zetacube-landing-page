import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navigation from './components/Navigation'
import Footer from './components/Footer'
import Home from './pages/Home'
import Products from './pages/Products'
import Providers from './pages/Providers'
import Documentation from './pages/Documentation'
import Company from './pages/Company'
import './App.css'
import { Container } from '@mui/material'

function App() {
  return (
    <Router>
      <div className="page">
        <Navigation />
        <Container>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/providers" element={<Providers />} />
          <Route path="/documentation" element={<Documentation />} />
          <Route path="/company" element={<Company />} />
        </Routes>
        <Footer />
        </Container>
      </div>
    </Router>
  )
}

export default App
