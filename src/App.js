import React, { useState, useEffect } from 'react';
import { FormControl, MenuItem, Select } from '@material-ui/core';

import './App.scss';

const App = () => {
  const api = `https://disease.sh/v3/covid-19`;

  const [countries, setCountries] = useState([]);
  const [country, setCountry] = useState('worldwide');

  const onCountryChange = async (event) => {
    const countryCode = await event.target.value;
    setCountry(countryCode);
  }

  useEffect(() => {
    const getCountries = async () => {
      await fetch(`${api}/countries`)
        .then(response => response.json())
        .then(data => setCountries(data));
    };

    getCountries();
  }, []);

  return (
    <div className="app__header">
      <h1>Covid-19 Tracker</h1>
      <FormControl className="app_dropdown">
        <Select variant="outlined" onChange={onCountryChange} value={country}>
        <MenuItem value="worldwide" key="Worldwide">Worldwide</MenuItem>
          {countries.map((country, index) => (
            <MenuItem value={country.countryInfo.iso3} key={index}>{country.country}</MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  )
};

export default App;
