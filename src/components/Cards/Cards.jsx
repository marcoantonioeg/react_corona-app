import React from 'react'
import {Card, CardContent, Typography, Grid} from '@material-ui/core'
import styles from './Cards.module.css'
import CountUp from 'react-countup'
import cx from 'classnames'
const Cards = ({data:{confirmed, recovered, deaths, lastUpdate}} ) => {
    if(!confirmed){
        return 'Cargando...'
    }
    console.log("Cards component")
  return (
    <div className={styles.container}>
        <Grid container spacing={3} justifyContent='center'>
            <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.infected)}>
                <CardContent>
                    <Typography color='textSecondary' gutterBottom>
                        Infectados
                    </Typography>
                    <Typography variant='h5'>
                        <CountUp start={0} end={confirmed.value} duration={2.5} separator=','/>
                    </Typography>
                    <Typography color='textSecondary'>
                    {new Date (lastUpdate).toDateString()}
                    </Typography>
                    <Typography variant='body2'>
                       Casos Activos de covid-19
                    </Typography>
                </CardContent>
            </Grid>

            <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.recovered)}>
                <CardContent>
                    <Typography color='textSecondary' gutterBottom>
                        Recuperados
                    </Typography>
                    <Typography variant='h5'>
                    <CountUp start={0} end={recovered.value} duration={2.5} separator=','/>
                    </Typography>
                    <Typography color='textSecondary'>
                    {new Date (lastUpdate).toDateString()}
                    </Typography>
                    <Typography variant='body2'>
                    Casos Recuperados de covid-19
                    </Typography>
                </CardContent>
            </Grid>

            <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.deaths)}>
                <CardContent>
                    <Typography color='textSecondary' gutterBottom>
                        Muertes
                    </Typography>
                    <Typography variant='h5'>
                    <CountUp start={0} end={deaths.value} duration={2.5} separator=','/>
                    </Typography>
                    <Typography color='textSecondary'>
                    {new Date (lastUpdate).toDateString()}
                    </Typography>
                    <Typography variant='body2'>
                    Casos Muertes de covid-19
                    </Typography>
                </CardContent>
            </Grid>
        </Grid>
    </div>
  )
}

export default Cards