import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./SearchBox.css"
import { useState } from 'react';


function SearchBox({updateInfo}) {
    let [city, setCity] = useState("");
    let[error,setError]=useState(false);
    const API_URL = "https://api.openweathermap.org/data/2.5/weather";
    const API_KEY="a3b80937fb5ac6223411f77b1e26e8a8";


  let getWeatherInfo=async()=>{

    try{
        let response=  await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
    let jsonResponse=await response.json();
//   console.log(jsonResponse);
       let result={
            city:city,
           temp:jsonResponse.main.temp,
           tempMin:jsonResponse.main.temp_min,
           tempMax:jsonResponse.main.temp_max,
           humidity:jsonResponse.main.humidity,
           feelsLike:jsonResponse.main.feels_like,
           weather:jsonResponse.weather[0].description,

  };
  console.log(result);
  return result;
    }catch(error){
        throw error;
    }
     
  };
   

    let handleChange = (event) => {
        setCity(event.target.value);
    }
    let handleSubmit =async (event) => {
        try{
        event.preventDefault();
        console.log(city);
        setCity("");
        // getWeatherInfo();
        let newInfo= await getWeatherInfo();
        updateInfo(newInfo);
        }catch(error){
            setError(true)
        }
    }
    return (
        <div className="SearchBox">
            {/* <h3>Search for the weather!</h3> */}
            <form onSubmit={handleSubmit}>
                <TextField id="city"
                    label="City Name"
                    variant="outlined"
                    value={city}
                    onChange={handleChange}
                    required />

                <br></br><br></br>
                <Button variant="contained" type="submit">Submit</Button>
                {error &&<p style={{color:"red"}}>no such place exists!</p>}
            </form>
        </div>
    )
}
export default SearchBox;