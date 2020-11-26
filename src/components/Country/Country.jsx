import React ,{useState,useEffect}from 'react';
import cx from 'classnames';
import styles from './country.module.css';
import {GetCovidDataCountries} from '../../Services/covidapis';
const Country = (props) => {

    const [countrys,setCountries]=useState([]);

    useEffect(()=>{

        const getCountries=async()=>{
            return await GetCovidDataCountries();
        }
        setCountries(getCountries());

    },[setCountries])
    return (
        <div className={cx(styles.container)}>
            <select className={cx(styles.input)}>
                <option selected value="global">Global</option>
                {
                    countrys.map((country,i)=>(<option key={i} value={country}>{country}</option>))
                }
            </select>
        </div>
    )
}

export default Country
