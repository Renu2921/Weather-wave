import './App.css'
// import Button from '@mui/material/Button';
// import SendIcon from '@mui/icons-material/Send';
// import Alert from '@mui/material/Alert';

import WeatherApp from "./WeatherApp"

function App() {
  
//for send icon we need ome more import
  return (
    <>
      {/* <h1>Material Ui Demo</h1>
      <Button variant="contained">Click Me!</Button>
      <Button variant="contained" disabled>Click Me2!</Button>
      <Button variant="contained"  color="error">Click Me3!</Button>
      <Button variant="contained"  color="success">Click Me4!</Button>
      <Button variant="contained"  size="small">Click Me5!</Button>
      <Button variant="contained"   endIcon={<SendIcon/>}>Click Me6!</Button>
      <Alert severity="error">This is an error Alert.</Alert> */}
     
      <WeatherApp/>
    </>
  )
}

export default App
