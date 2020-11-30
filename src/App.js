import React, { useState, useEffect } from "react";
import "./App.css";
import Cards from "./components/Cards/Cards";
import Chart from "./components/Charts/Chart";
import Country from "./components/Country/Country";
import { GetCovidData ,GetCovidDataCountries } from "./Services/covidapis";

function App() {


  const [data, setData] = useState(null);
  const [country,setCountry]=useState('');

  const onCountryChange=(country)=>
  {
    setCountry(country);
  }

  useEffect(() => {
    const GetData = async () => {
      const data = await GetCovidData(country);
      const countries=await GetCovidDataCountries();
      setData({
        data,
      });
      console.log(data);
    };
    GetData();
  }, [setData,country]);


  return <>
  {(data)?
  <div>
    <Cards data={data} /> 
    <Country countries={[]} onCountryChange={onCountryChange}/>
    <Chart/>
  </div>
  :
  <h1>Loading Wait</h1>
  }
  
  </>
}

export default App;
