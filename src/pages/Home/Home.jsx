import React, { useContext } from "react";
import Card from "../../components/ui/Card/Card";

import { DataContext } from "../../contexts/DataContext";

const Home = () => {
  const { countries, handleClicked, error, isLoaded } = useContext(DataContext);
  if (error) {
    return <>{error.message}</>;
  } else if (!isLoaded) {
    return <>Loading...</>;
  } else {
    return (
      <div className="mt-6">
        <div className="xs:mx-4 flex xs:flex-col gap-8 ">
          <div className="flex relative ">
            <svg
              className="absolute mt-[18px] left-2 ml-4 fill-darkGray"
              xmlns="http://www.w3.org/2000/svg"
              height="1em"
              viewBox="0 0 512 512"
            >
              <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" />
            </svg>{" "}
            {/* Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. */}
            <input
              type="search"
              name="search-form"
              placeholder="Search for a country..."
              // value={}
              className="border-none w-full py-4 px-14 shadow-md"
            />
          </div>
          <select
            name="region"
            id="region-select"
            className="text-veryDarkBlue font-light  bg-white shadow-md p-4 text-center w-[50%] focus:border-darkBlue"
          >
            <option>Filter by Region</option>
            <option value="africa">Africa</option>
            <option value="america">America</option>
            <option value="asia">Asia</option>
            <option value="europe">Europe</option>
            <option value="ocenia">Oceania</option>
          </select>
        </div>
        <div className="mx-10 my-14  grid grid-auto-rows gap-10 ">
          {countries.map((country, i) => {
            return (
              <Card
                country={country}
                key={i + 1}
                onClick={() => handleClicked(country)}
              />
            );
          })}
        </div>
      </div>
    );
  }
};

export default Home;
