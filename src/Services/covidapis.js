import axios from 'axios';


export const GetCovidData=async (country)=>{
    const baseUrl=(country!==null && country!=='')?`https://covid19.mathdro.id/api/countries/${country}`:'https://covid19.mathdro.id/api/';
    
    const {data:{confirmed,recovered,deaths,lastUpdate}}=await axios.get(baseUrl);
    return {confirmed,recovered,deaths,lastUpdate};
}

export const GetCovidDataCountries=async ()=>{
    const {data:countries}=await axios.get("https://covid19.mathdro.id/api/countries");
    return countries.countries;
}

export const GetCovidDailyData=async ()=>{
    const data=await axios.get("https://covid19.mathdro.id/api/daily");
    const ModifiedData=data.data.map(data=>({confirmed:data.confirmed.total,deaths:data.deaths.total,date:data.reportDate}));
    return ModifiedData;
}