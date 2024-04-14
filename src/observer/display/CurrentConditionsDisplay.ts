import Observer from "../Observer";
import Subject from "../Subject";
import WeatherData from "../WeatherData";
import DisplayElement from "./DisplayElement";

export default class CurrentConditionsDisplay implements Observer, DisplayElement{
    private temperature: number;
    private humidity: number;
    private weatherData: Subject;

    constructor(weatherData: Subject){
        this.weatherData = weatherData;
        this.weatherData.registerObserver(this);

        this.temperature = 0;
        this.humidity = 0;
    }

    update(weatherData: WeatherData): void {
        this.temperature = weatherData.getTemperature();
        this.humidity = weatherData.getHumidity();
        
        this.display();
    }

    display(): void {
        console.log(`Current Conditions Display >> ${this.temperature}F degrees and ${this.humidity}% humidity`);
    }
}