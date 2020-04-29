import React, { useState, useEffect } from "react";
import "./App.css";
import CountrySearch from "./components/countrySearch";
import axios from "axios";
import DisplayCountriesTable from "./components/displayCountriesTable";
import SelectedCountryDetails from "./components/selectedCountryDetails";

function App() {
  const [filterValue, setFilterValue] = useState("");
  const [countries, setCountries] = useState([]);
  useEffect(() => {
    axios.get("https://restcountries.eu/rest/v2/all").then(response => {
      setCountries(response.data);
    });
  }, []);

  function isValid(str) {
    return !/[()]/g.test(str);
  }

  const handleFilterValueChange = e => {
    if (isValid(e.target.value)) {
      setFilterValue(e.target.value);
    }
  };

  function setClickedCountryState(clickedCountryName) {
    setFilterValue(clickedCountryName);
  }

  const dataToShow = filterValue
    ? countries.filter(
        country =>
          country.name.toLowerCase().search(filterValue.toLowerCase()) !== -1
      )
    : countries;

  return (
    <div style={{ margin: 20 }}>
      <CountrySearch
        filterValue={filterValue}
        handleFilterValueChange={handleFilterValueChange}
      />
      {dataToShow.length !== 1 ? (
        <DisplayCountriesTable
          setClickedCountryState={setClickedCountryState}
          countryData={dataToShow}
        />
      ) : (
        <SelectedCountryDetails countryData={dataToShow} />
      )}
    </div>
  );
}

export default App;
