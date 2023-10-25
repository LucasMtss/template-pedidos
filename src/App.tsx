import { Route, BrowserRouter, Routes } from 'react-router-dom'
import Home from './pages/Home'
import ItemMenuDetails from './pages/ItemMenuDetails'
import Cart from './pages/Cart'
import Address from './pages/Address'
import Payment from './pages/Payment'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/meu-carrinho" element={<Cart/>}/>
        <Route path="/item-cardapio/:id" element={<ItemMenuDetails/>}/>
        <Route path="/endereco" element={<Address/>}/>
        <Route path="/pagamento" element={<Payment/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
