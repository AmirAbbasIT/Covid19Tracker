import React, { useState, useEffect } from "react";
import styles from "./chart.module.css";
import { GetCovidDailyData } from "../../Services/covidapis";
import {Line} from 'react-chartjs-2';
const Chart = () => {
  const [dailyData, SetDailyData] = useState(null);
  useEffect(() => {
    const getData = async () => {
      const data = await GetCovidDailyData();
      SetDailyData([...data]);
    };
    getData();
  }, [SetDailyData]);

  return (
    <>
    <div className={styles.container}>
    {dailyData ? (
        <div className={styles.chart}>
            <Line   
            data={
               {
                labels:dailyData.map(({date})=>(date)),
                datasets:[{
                    label:"Infected",
                    data:dailyData.map(({confirmed})=>(confirmed)),
                    borderColor:'blue',
                    fill:true
                },{
                    label:"Deaths",
                    data:dailyData.map(({deaths})=>(deaths)),
                    borderColor:'red',
                    fill:true
                }]
               }
            }
            />
        </div>
      ) : (
        <div className={styles.container}>
          <h2>Im Chart! Yoooo</h2>
        </div>
      )}
    </div>
    </>
  );
};

export default Chart;
