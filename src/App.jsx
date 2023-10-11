import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";
import CountryDetails from "./pages/CountryDetails/CountryDetails";
import { Routes, Route } from "react-router-dom";
import DataContextProvider from "./contexts/DataContext";

const App = (props) => {
  return (
    <div className="font-Kumbh_sans text-sm bg-veryLightGray">
      <DataContextProvider>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/details" element={<CountryDetails />} />
        </Routes>
      </DataContextProvider>
    </div>
  );
};

export default App;
