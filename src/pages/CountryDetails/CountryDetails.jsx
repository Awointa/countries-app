import { useContext, useEffect } from "react";
import Button from "../../components/ui/Button/Button";
import { DataContext } from "../../contexts/DataContext";
import { Link } from "react-router-dom";

const CountryDetails = () => {
  const { selectedCountry } = useContext(DataContext);
  const {
    name,
    nativeName,
    flag,
    population,
    region,
    subregion,
    capital,
    topLevelDomain,
    currencies,
  } = selectedCountry.country;

  return (
    <div className="mt-10 mx-6">
      <Link to="/">
        <Button>
          <div>
            <svg
            className="block"
              xmlns="http://www.w3.org/2000/svg"
              height="1em"
              viewBox="0 0 512 512"
            >
              <path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l128 128c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 288 480 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-370.7 0 73.4-73.4c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-128 128z" />
            </svg>
          </div>{" "}
          {/*<!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->*/}
          <span>Back</span>
        </Button>
      </Link>
      <div className="mt-16">
        <img src={flag} alt="" />
        <div className="mt-10 flex flex-col gap-7">
          <div className="text-xl font-black">{name}</div>
          <ol className="mt-3">
            <li className="font-semibold mb-1">
              Native Name: <span className="font-normal">{nativeName}</span>
            </li>
            <li className="font-semibold mb-1">
              Population: <span className="font-normal">{population}</span>
            </li>
            <li className="font-semibold mb-1">
              Region: <span className="font-normal">{region}</span>
            </li>
            <li className="font-semibold mb-1">
              Sub Region <span className="font-normal">{subregion}</span>
            </li>
            <li className="font-semibold mb-1">
              capital: <span className="font-normal">{capital}</span>
            </li>
          </ol>
          <ol>
            <li className="font-semibold mb-1">
              Top Level Domain: <span className="font-normal">{topLevelDomain}</span>
            </li>
            <li className="font-semibold">
              Currencies: <span className="font-normal mb-1">{currencies[0].name}</span>
            </li>
            <li>
              {/* Language: <span>{selectedCountry.languages.join(" ")}</span> */}
            </li>
          </ol>
        </div>
        <div>{/* Border Countries: <Button></Button> <Button></Button> */}</div>
      </div>
    </div>
  );
};

export default CountryDetails;
