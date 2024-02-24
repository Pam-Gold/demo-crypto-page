// Component handling routing, error elements, lazy loaded pages
import "./App.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Layout from "./layout/Layout";
import React from "react";
import NoPage from "./pages/NoPage";

// TODO  To add loader as placeholder for delayed api responses

// Lazy Loaded HomePage
const Home = React.lazy(() => import("./pages/Home"));

//

// Lazy Loaded Exchange Pages
const ExchangeRatesPage = React.lazy(() => import("./pages/ExchangeRatesPage"));
const InternationalMerchants = React.lazy(() =>
  import("./pages/InternationalMerchants")
);
//

// Lazy Loaded News Pages
const BitcoinNews = React.lazy(() => import("./pages/BitcoinNews"));
const NftNews = React.lazy(() => import("./pages/NftNews"));
const DefiNews = React.lazy(() => import("./pages/DefiNews"));

const FinanceNews = React.lazy(() => import("./pages/FinanceNews"));
//

function App() {
  // Router
  const blaqxRouter = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />} errorElement={<NoPage />}>
        <Route
          index
          element={
            <React.Suspense fallback="Loading...">
              <Home />
            </React.Suspense>
          }
        />

        <Route
          path="exchange-rates"
          element={
            <React.Suspense fallback="Loading...">
              <ExchangeRatesPage />
            </React.Suspense>
          }
        />

        <Route
          path="international-merchants"
          element={
            <React.Suspense fallback="Loading...">
              <InternationalMerchants />
            </React.Suspense>
          }
        />

        <Route
          path="bitcoin-news"
          element={
            <React.Suspense fallback="Loading...">
              <BitcoinNews />
            </React.Suspense>
          }
        />

        <Route
          path="nft-news"
          element={
            <React.Suspense fallback="Loading...">
              <NftNews />
            </React.Suspense>
          }
        />

        <Route
          path="defi-news"
          element={
            <React.Suspense fallback="Loading...">
              <DefiNews />
            </React.Suspense>
          }
        />

        <Route
          path="finance-news"
          element={
            <React.Suspense fallback="Loading...">
              <FinanceNews />
            </React.Suspense>
          }
        />
      </Route>
    )
  );
// Router Provider
  return <RouterProvider router={blaqxRouter} />;
}

export default App;
