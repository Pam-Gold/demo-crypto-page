import "./App.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Layout from "./layout/Layout";
// import Home from './pages/Home'
// import ExchangeRatesPage from './pages/ExchangeRatesPage'
// import InternationalMerchants from './pages/InternationalMerchants'
// import BitcoinNews from './pages/BitcoinNews'
// import NftNews from './pages/NftNews'
// import DefiNews from './pages/DefiNews'
// import BlockchainNews from './pages/BlockchainNews'
// import FinanceNews from './pages/FinanceNews'
import React from "react";

const Home = React.lazy(() => import("./pages/Home"));
const ExchangeRatesPage = React.lazy(() => import("./pages/ExchangeRatesPage"));
const InternationalMerchants = React.lazy(() => import("./pages/InternationalMerchants"));

const BitcoinNews = React.lazy(() => import("./pages/BitcoinNews"));
const NftNews = React.lazy(() => import("./pages/NftNews"));
const DefiNews = React.lazy(() => import("./pages/DefiNews"));
const BlockchainNews = React.lazy(() => import("./pages/BlockchainNews"));
const FinanceNews = React.lazy(() => import("./pages/FinanceNews"));


function App() {


  const blaqxRouter = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />} errorElement={<Home/>}>
        <Route
          index
          element={
            <React.Suspense fallback="Loading...">
              <Home />
            </React.Suspense>
          }
        />

<Route path='exchange-rates' element={
  <React.Suspense fallback="Loading...">
    <ExchangeRatesPage/>
  </React.Suspense>
}/>

<Route path='international-merchants' element={
  <React.Suspense fallback="Loading...">
    <InternationalMerchants/>
  </React.Suspense>
}/>

<Route path='bitcoin-news' element={
  <React.Suspense fallback="Loading...">
    <BitcoinNews/>
  </React.Suspense>
}/>

<Route path='nft-news' element={
  <React.Suspense fallback="Loading...">
    <NftNews/>
  </React.Suspense>
}/>

<Route path='defi-news' element={
  <React.Suspense fallback="Loading...">
    <DefiNews/>
  </React.Suspense>
}/>

<Route path='blockchain-news' element={
  <React.Suspense fallback="Loading...">
    <BlockchainNews/>
  </React.Suspense>
}/>

<Route path='finance-news' element={
  <React.Suspense fallback="Loading...">
    <FinanceNews/>
  </React.Suspense>
}/>

       
      </Route>
    )
  );

  return <RouterProvider router={blaqxRouter} />;
}

export default App;
