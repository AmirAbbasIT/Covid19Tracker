import React, { useState, useEffect } from "react";
import "./App.css";
import Cards from "./components/Cards/Cards";
import Country from "./components/Country/Country";
import { GetCovidData ,GetCovidDataCountries } from "./Services/covidapis";

function App() {


  const [data, setData] = useState(null);
  const [country,setCountry]=useState(null);


  useEffect(() => {
    const GetData = async () => {
      const data = await GetCovidData();
      const countries=await GetCovidDataCountries();
      setData({
        data,
      });
      console.log(data);
    };
    GetData();
  }, [setData]);


  return <>
  {(data)?
  <div>
    <Cards data={data} /> 
    <Country countries={[]}/>
  </div>
  :
  <h1>Loading Wait</h1>
  }
  
  </>
}

export default App;
