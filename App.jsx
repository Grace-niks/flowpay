import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import PaymentLinks from './pages/PaymentLinks'
import Escrow from './pages/Escrow'
import BulkPayouts from './pages/BulkPayouts'
import WalletDashboard from './pages/WalletDashboard'

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-primary">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/payment-links" element={<PaymentLinks />} />
          <Route path="/escrow" element={<Escrow />} />
          <Route path="/bulk-payouts" element={<BulkPayouts />} />
          <Route path="/wallet" element={<WalletDashboard />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
