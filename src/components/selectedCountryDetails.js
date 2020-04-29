import React from "react";
import Weather from "./weather";

const SelectedCountryDetails = ({ countryData }) => {
  const countryDetails = countryData[0];

  function formatPopulation(population) {
    return population.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
  }
  const languages = countryDetails.languages.map(language => (
    <li key={language.name}>{language.name}</li>
  ));
  return (
    <div style={{ alignItems: "center" }}>
      <h1>
        <img
          alt={countryDetails.name + " flag"}
          style={{ width: 40, alignItems: "center" }}
          src={countryDetails.flag}
        />{" "}
        {countryDetails.name} ({countryDetails.nativeName}){" "}
        <img
          alt={countryDetails.name + " flag"}
          style={{ width: 40, alignItems: "center" }}
          src={countryDetails.flag}
        />
      </h1>
      <h4>
        Capital:{" "}
        {countryDetails.capital ? countryDetails.capital : "No Capital Found"}
      </h4>
      <Weather capital={countryDetails.capital} />
      <h4>Population: {formatPopulation(countryDetails.population)}</h4>
      <h4>Languages: </h4>
      <ul>{languages}</ul>
    </div>
  );
};

export default SelectedCountryDetails;
