import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./InfoBox.css"
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import WbSunnyIcon from '@mui/icons-material/WbSunny';

function InfoBox({info}) {
    const initialImg = "https://media.istockphoto.com/id/2148754506/photo/sunset-over-a-hazy-city.jpg?s=612x612&w=0&k=20&c=CtEZuQcUvYtX1v4i1zKkL6A402f5BMUriw5Fqit3VCk=";
    const hotImg="https://media.istockphoto.com/id/1312596921/photo/summer-noon-sun.webp?b=1&s=170667a&w=0&k=20&c=IFZS5JrL8LQbsu9KkMCToxJpZfUYy5A87g1YWBzZD-w="
    const coldImg="https://plus.unsplash.com/premium_photo-1670428635685-dd49306e5622?q=80&w=1381&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    const rainImg="https://media.istockphoto.com/id/1429701799/photo/raindrops-on-asphalt-rain-rainy-weather-downpour.webp?b=1&s=170667a&w=0&k=20&c=lXXWPQuhXI4xZRrr8d1uZGjQasuR-oRS1_GraXO9Fd0="
    // let info = {
    //     city:"Delhi",
    //     feelsLike: 24.84,
    //     temp: 25.05,
    //     tempMin: 25.05,
    //     tempMax: 25.05,
    //     humidity: 47,
    //     weather: "haze"
    // };
    return (
        <div className="InfoBox" >
            {/* <h2>Weather Info-{info.weather}</h2> */}
            <Card sx={{ maxWidth: 345 }} >
                <CardMedia
                    sx={{ height: 140 }}
                    // image={initialImg}
                    image={info.humidity>80? rainImg :info.temp>15? hotImg:coldImg} 
                    title="green iguana"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {/* {info.city} */}
                        {info.city}{info.humidity>80? <ThunderstormIcon/> :info.temp>15? <WbSunnyIcon/>:<AcUnitIcon/>}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" component={"span"} >
                        
                        <p>Temperature={info.temp}&deg;C</p>
                        <p>Humidity={info.humidity}&deg;C</p>
                        <p>Min Temp={info.tempMin}&deg;C</p>
                        <p>Max Temp={info.tempMax}&deg;C</p>
                        <p>The Weather can be described as<b> <i>{info.weather}</i> </b>and  feels like {info.feelsLike}&deg;C</p>
                       
                    </Typography>
                </CardContent>
                
            </Card>
        </div>
    )
}
export default InfoBox;