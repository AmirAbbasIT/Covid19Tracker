import React ,{useState,useEffect}from 'react';
import cx from 'classnames';
import styles from './country.module.css';
import {GetCovidDataCountries} from '../../Services/covidapis';
const Country = (props) => {

    const [countries,setCountries]=useState([]);

    useEffect(()=>{

        const getCountries=async()=>{
            const data= await GetCovidDataCountries();
            setCountries([...data]);
        }
        getCountries();

    },[setCountries])


    return (
        <div className={cx(styles.container)}>
            <select className={cx(styles.input)} onChange={(e)=>{props.onCountryChange(e.target.value)}} >
                <option selected value="">Global</option>
                {
                    countries.map((country,i)=>(<option key={i} value={country.name}>{country.name}</option>))
                }
            </select>
        </div>
    )
}

export default Country
