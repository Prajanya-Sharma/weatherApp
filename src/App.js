import Card from './comonents/Card';
import Button from './comonents/Button';
import './App.css';
import Input from './comonents/Input';
import { useWeather } from './context/weather';

function App() {
  const weather = useWeather();
  console.log(weather);
  return (
    <div className="App">
      <h1>Weather Forecast</h1>
      <Input/>
      <Button onClick={weather.fetchData} value="Search"/>
      <Card/>
      <Button value="Refresh"/>
    </div>
  );
}

export default App;
