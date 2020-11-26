import axios from 'axios';


export const GetCovidData=async ()=>{
    const {data:{confirmed,recovered,deaths,lastUpdate}}=await axios.get("https://covid19.mathdro.id/api");
    return {confirmed,recovered,deaths,lastUpdate};
}

export const GetCovidDataCountries=async ()=>{
    const {data:countries}=await axios.get("https://covid19.mathdro.id/api/countries");
    return countries.countries;
}