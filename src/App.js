import React, { Component } from 'react'
import { Cards, Chart, CountryPicker} from './components'
import styles from './App.module.css'
import {fetchData} from './api'
import corona from './images/image.png'
class App extends Component {
    state = {
        data: {},
        country: '',
    }
    async componentDidMount(){
        //ejecuto la funcion cuando se carga la pagina
        const fetchedData = await fetchData();
        console.log(fetchedData)
        //lleno el data se state
        this.setState({data:fetchedData})
    }
    //meto que cambia el estado del pais (country)
    handleCountryChange = async(country)=>{
      //obtener los datos
      const fetchedData = await fetchData(country);
      console.log(fetchedData)
      console.log(country);
      //establecer el estado
      this.setState({data: fetchedData, country: country});
    }
  render() {
      const {data, country} = this.state;
    return (
      <div className={styles.container}>
        <img className={styles.image} alt='covid' src={corona}/>
        <Cards data={data}/>
        <CountryPicker handleCountryChange={this.handleCountryChange}/>
        <Chart data={data} country={country}/>
       
      </div>
    )
  }
}
export default App;
