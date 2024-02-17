
import './App.css'
import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider}  from 'react-router-dom'
import Layout from './layout/Layout'
import Home from './pages/Home'
import ExchangeRatesPage from './pages/ExchangeRatesPage'
import InternationalMerchants from './pages/InternationalMerchants'
import BitcoinNews from './pages/BitcoinNews'
import NftNews from './pages/NftNews'
import DefiNews from './pages/DefiNews'
import BlockchainNews from './pages/BlockchainNews'
import FinanceNews from './pages/FinanceNews'


function App() {

  const blaqxRouter = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<Layout/>}>
<Route index element={<Home/>}/>
<Route path='exchange-rates' element={<ExchangeRatesPage/>}/>
<Route path='international-merchants' element={<InternationalMerchants/>}/>
<Route path='bitcoin-news' element={<BitcoinNews/>}/>
<Route path='nft-news' element={<NftNews/>}/>
<Route path='defi-news' element={<DefiNews/>}/>
<Route path='blockchain-news' element={<BlockchainNews/>}/>
<Route path='finance-news' element={<FinanceNews/>}/>
      </Route>
    )
  )

  return (
<RouterProvider router={blaqxRouter}/>
  )
}

export default App
