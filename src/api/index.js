import axios from "axios";

//url de api
const url = 'https://covid19.mathdro.id/api';

export const fetchData = async(country)=>{
    //hacerlo dinamico
    let changeableUrl = url;
    if (country) {
        changeableUrl = `${url}/countries/${country}`
    }
    //obtengo la respuesta de la api
    try{
        //obtengo la data
        const {data: {confirmed, recovered, deaths, lastUpdate}} = await axios.get(changeableUrl);
        const modifiedData = {
            /*
            confirmed: data.confirmed,
            recovered: data.recovered,
            deaths: data.deaths,
            lastUpdate: data.lastUpdate
            */
            confirmed,
            recovered,
            deaths,
            lastUpdate

        }
       
        //console.log(response);
        return modifiedData;
    }catch(error){
        console.log(error)
    }

}
    //funcion para obtener la data diaria para usalra en los charts
    export const fetchDailyData = async()=>{
        try {
            const {data} = await axios.get(`${url}/daily`);
            const modifiedData = data.map((dailyData)=>({
                confirmed: dailyData.confirmed.total,
                deaths: dailyData.deaths.total,
                date: dailyData.reportDate,


            }));
            return modifiedData;
        } catch (error) {
            console.log(error)

            
        }
    }
    //datos de paises
    export const fetchCountries = async () =>{
        try {
            //obtener solo los paises no todo el array
            const {data: {countries}} = await axios.get(`${url}/countries`);
            return countries.map((country) => country.name
            )
        } catch (error) {
            console.log(error);
        }
    }