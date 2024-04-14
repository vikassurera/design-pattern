import WeatherData from './WeatherData';
import CurrentConditionsDisplay from './display/CurrentConditionsDisplay';
import ForecastDisplay from './display/ForecastDisplay';
import StatisticsDisplay from './display/StatisticsDisplay';

export default class WeatherStation{
    test(): void{
        const weatherData: WeatherData = new WeatherData();
        
        const currentDisplay = new CurrentConditionsDisplay(weatherData);
        const statisticsDisplay = new StatisticsDisplay(weatherData);
        const forecastDisplay = new ForecastDisplay(weatherData);

        weatherData.setMeasurements(80, 65, 30.4);
        console.log('---------------------------------\n');
        weatherData.setMeasurements(82, 70, 29.2);
        console.log('---------------------------------\n');
        weatherData.setMeasurements(78, 90, 29.2);
    }
    
}