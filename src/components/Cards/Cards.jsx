import React from "react";
import cx from "classnames";
import styles from "./cards.module.css";
import { Grid, Typography, Card, CardContent } from "@material-ui/core";
import CounterUp from 'react-countup';

const Cards = (props) => {
    console.log(props);
    const {data:{confirmed,recovered,deaths,lastUpdate}}=props.data;

  return (
    <div className={cx(styles.container)}>
      <Grid className={cx(styles.cards)} sm={12} lg={12}>
        <Card className={cx(styles.infected)}>
          <CardContent>
            <Typography color="primary" gutterBottom>Infected</Typography>
            <Typography variant="h4">
                <CounterUp start={0} end={confirmed.value} duration={1.5} />
            </Typography>
            <Typography gutterBottom>{new Date(lastUpdate).toDateString()}</Typography>
            <Typography gutterBottom>Number of Active Cases by Covid-19</Typography>
          </CardContent>
        </Card>
        <Card className={cx(styles.recovered)}>
          <CardContent>
            <Typography color="textPirmary" gutterBottom>Recovered</Typography>
            <Typography variant="h4">
                <CounterUp start={0} end={recovered.value} duration={1.5} />
            </Typography>
            <Typography  gutterBottom>{new Date(lastUpdate).toDateString()}</Typography>
            <Typography gutterBottom>Number of Recovered Cases in Covid-19</Typography>
          </CardContent>
        </Card>
        <Card className={cx(styles.deaths)}>
          <CardContent>
            <Typography color="secondary" gutterBottom>Deaths</Typography>
            <Typography variant="h4">
                <CounterUp start={0} end={deaths.value} duration={1.5} />
            </Typography>
            <Typography gutterBottom>{new Date(lastUpdate).toDateString()}</Typography>
            <Typography gutterBottom>Number of Death Cases in Covid-19</Typography>
          </CardContent>
        </Card>
      </Grid>
    </div>
  );
};

export default Cards;
