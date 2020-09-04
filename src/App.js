import React, { useState, useEffect } from "react";
import { MenuItem, FormControl, Select } from "@material-ui/core";
import "./App.css";
import InfoBox from "./InfoBox";

function App() {
  // https://disease.sh/v3/covid-19/countries
  const [countries, setCountries] = useState([]);
  const [country, setCountry] = useState("worldwide");

  // useEffect runs a piece of code based on a given condition
  // The code inside here will run once when the component loads and not again
  useEffect(() => {
    // async -> send a request, wait for it, do something with input
    const getCountriesData = async () => {
      await fetch("https://disease.sh/v3/covid-19/countries")
        .then((response) => response.json())
        .then((data) => {
          const countries = data.map((country) => ({
            name: country.country, // UnitedStated, United Kingdom, etc
            value: country.countryInfo.iso2, // UK, USA, FR
          }));
          setCountries(countries);
        });
    };
    getCountriesData(countries);
  }, []);

  const onCountryChange = async (event) => {
    const countryCode = event.target.value;
    // console.log("Kodenya -->> ", countryCode);
    setCountry(countryCode);
  };

  return (
    <div className="app">
      {/* Header */}
      <div className="app__header">
        <h1>Covid-19 Tracker</h1>
        {/* Title + Select Input dropdow field */}
        <FormControl className="app__dropdown">
          <Select variant="outlined" onChange={onCountryChange} value={country}>
            <MenuItem value="worldwide">Worldwide</MenuItem>
            {/* Loop through all the countries and show a drop down list of the options */}
            {countries.map((country) => (
              <MenuItem value={country.value}>{country.name}</MenuItem>
            ))}
          </Select>
        </FormControl>
      </div>

      <div className="app__stats">
        {/* InfoBoxs title="Coronavirus cases" */}
        <InfoBox />
        {/* InfoBoxs  title="Coronavirus recoveries" */}
        {/* InfoBoxs */}
      </div>

      {/* Table */}
      {/* Graph */}

      {/* Map */}
    </div>
  );
}

export default App;
