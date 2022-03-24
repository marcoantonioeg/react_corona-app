import React, {useState, useEffect} from 'react'
import { fetchDailyData } from '../../api';
import { Line, Bar } from 'react-chartjs-2';

import styles from './Chart.module.css';
const Chart = ({data:{confirmed, recovered, deaths}, country}) => {
  const[dailyData, setDailyData] = useState([]);

  useEffect(()=>{
    const fetchAPI = async () =>{
      
      setDailyData(await fetchDailyData());
    }
    //console.log(dailyData)
    fetchAPI();
  }, []);
  const lineChart = (
    dailyData.length //0
    ? (
      <Line
        data={{
          labels: dailyData.map(({ date }) => new Date(date).toLocaleDateString()),
          datasets: [{
            data: dailyData.map((data) => data.confirmed),
            label: 'Infected',
            borderColor: '#3333ff',
            fill: true,
          }, {
            data: dailyData.map((data) => data.deaths),
            label: 'Deaths',
            borderColor: 'red',
            backgroundColor: 'rgba(255, 0, 0, 0.5)',
            fill: true,
          },  {
            data: dailyData.map((data) => data.recovered),
            label: 'Recovered',
            borderColor: 'green',
            backgroundColor: 'rgba(0, 255, 0, 0.5)',
            fill: true,
          },
          ],
        }}
      />
    ) : null
  );
  
  console.log(confirmed, recovered, deaths)

  const barChart = (
    confirmed
    ?(
      <Bar
        data={{
          labels: ['Infectados', 'Recuperados', 'Muertes'],
          datasets:[{
            label: 'Personas',
            backgroundColor: ['rgba(0,0,255,0.5)','rgba(0,255,0,0.5)','rgba(255,0,0,0.5)'],
            data:[confirmed.value, recovered.value, deaths.value]
          }]
        }}
        options={{
          legend:{display: false},
          title: {display: true, text:`Estado Actual en ${country}`}
        }}
      />
    ): null
  )

  return (
    <div className={styles.container}>
      {country ? barChart : lineChart}
    </div>
  )
}

export default Chart