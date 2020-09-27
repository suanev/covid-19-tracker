import React, { useState, useEffect } from 'react';
import {
  Card,
  CardContent,
  FormControl,
  MenuItem,
  Select,
} from '@material-ui/core';
import numeral from 'numeral';
import { prettyPrintStat, sortData } from './utils';

import InfoBox from './components/InfoBox';
import Map from './components/Map';
import Table from './components/Table';
import LineGraph from './components/LineGraph';

import "leaflet/dist/leaflet.css";
import './App.scss';

const App = () => {
  const [countries, setCountries] = useState([]);
  const [country, setCountry] = useState('worldwide');
  const [countryInfo, setCountryInfo] = useState({});
  const [tableData, setTableData] = useState([]);
  const [casesType, setCasesType] = useState("cases");
  const [mapCenter, setMapCenter] = useState({ lat: 34.80746, lng: -40.4796 });
  const [mapZoom, setMapZoom] = useState(3);

  const api = `https://disease.sh/v3/covid-19`;

  const onCountryChange = async (event) => {
    const countryCode = event.target.value;

    const url = (countryCode === 'worldwide')
      ? `all`
      : `countries/${countryCode}`;

    await fetch(`${api}/${url}`)
      .then(response => response.json())
      .then(data => {
        setCountry(countryCode);
        setCountryInfo(data);

        countryCode === "worldwide"
          ? setMapCenter([34.80746, -40.4796])
          : setMapCenter([data.countryInfo.lat, data.countryInfo.long]);

        setMapZoom(4);
      })
  }

  useEffect(() => {
    const getCountries = async () => {
      await fetch(`${api}/countries`)
        .then(response => response.json())
        .then(data => {
          const sortedData = sortData(data);
          setTableData(sortedData);
          setCountries(data);
        });
    };
    getCountries();
  }, [api]);

  useEffect(() => {
    fetch(`${api}/all`)
      .then(response => response.json())
      .then(data => {
        setCountryInfo(data);
      })
  }, [api]);

  return (
    <div className="app">
      <div className="app__left">
        <div className="app__header">
          <h1>Covid-19 Tracker</h1>
          <FormControl className="app_dropdown">
            <Select variant="outlined" onChange={onCountryChange} value={country}>
              <MenuItem value="worldwide" key="worldwide">Worldwide</MenuItem>
              {countries.map((country, index) => (
                <MenuItem value={country.countryInfo.iso3} key={index}>{country.country}</MenuItem>
              ))}
            </Select>
          </FormControl>
        </div>
        <div className="app__stats">
          <InfoBox
            isRed
            title="Coronavirus cases"
            active={casesType === "cases"}
            onClick={e => setCasesType("cases")}
            cases={prettyPrintStat(countryInfo.todayCases)}
            total={numeral(countryInfo.cases).format("0.0a")} />
          <InfoBox
            title="Recovered"
            active={casesType === "recovered"}
            onClick={e => setCasesType("recovered")}
            cases={prettyPrintStat(countryInfo.todayRecovered)}
            total={numeral(countryInfo.recovered).format("0.0a")} />
          <InfoBox
            isRed
            title="Deaths"
            active={casesType === "deaths"}
            onClick={e => setCasesType("deaths")}
            cases={prettyPrintStat(countryInfo.todayDeaths)}
            total={numeral(countryInfo.deaths).format("0.0a")} />
        </div>

        <Map countries={countries} casesType={casesType} center={mapCenter} zoom={mapZoom} />
      </div>
      <Card className="app__right">
        <CardContent>
          <h3>Live Cases by Country</h3>
          <Table countries={tableData} />
          <h3 className="app__graphTitle">Worldwide new {casesType}</h3>
          <LineGraph className="app__graph" api={api} casesType={casesType} />
        </CardContent>
      </Card>
    </div>
  )
};

export default App;
