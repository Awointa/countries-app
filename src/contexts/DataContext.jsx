import { useState, useEffect, createContext } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export const DataContext = createContext();

const DataContextProvider = (props) => {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [countries, setCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState({});


  useEffect(() => {
    axios
      .get("http://127.0.0.1:5173/api/countries")
      .then((res) => setCountries(res.data), setIsLoaded(true))
      .catch((error) => setError(error), setIsLoaded(true));
  }, []);

  const handleClicked = (country) => {
    setSelectedCountry({ country: country });
  };

  return (
    <DataContext.Provider
      value={{
        countries,
        selectedCountry,
        error,
        isLoaded,
        handleClicked,
      }}
    >
      {props.children}
    </DataContext.Provider>
  );
};

export default DataContextProvider;
