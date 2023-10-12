import { useContext } from "react";
import { Link } from "react-router-dom";
import { DataContext } from "../../../contexts/DataContext";

const Card = ({ country }) => {
  const { handleClicked } = useContext(DataContext);
  return (
    <Link to="/details">
      <div
        className="rounded bg-white overflow-hidden shadow-lg"
        onClick={() => handleClicked(country)}
      >
        <img src={country.flag} alt="" className="w-full h-38 object-cover" />
        <div className="mx-7 mt-7  mb-12 ">
          <h2 className="text-lg text-veryDarkBlue font-semibold mb-3">
            {country.name}
          </h2>
          <ol>
            <li className="mb-1">
              <span className="text-veryDarkBlue font-bold ">Population: </span>{" "}
              {country.population}
            </li>
            <li className="mb-1">
              <span className="text-veryDarkBlue font-bold ">Region: </span>
              {country.region}
            </li>
            <li className="mb-1">
              <span className="text-veryDarkBlue font-bold ">Capital: </span>
              {country.capital}
            </li>
          </ol>
        </div>
      </div>
    </Link>
  );
};

export default Card;
