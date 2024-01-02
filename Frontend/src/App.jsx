import { useEffect, useState } from "react";
import "./App.css";
import Banner from "./components/Banner/Banner";
import ConverterView from "./components/ConverterView/ConverterView";
import Header from "./components/Header";
import CryptoContext from "./CryptoContext";
import CoinsTable from "./components/CoinsTable";
function App() {
  const [coinData, setcoinData] = useState({});
  return (
    <CryptoContext>
      <div className="app">
        <Header />
        <Banner />
        <CoinsTable />
      </div>
    </CryptoContext>
  );
}

export default App;
