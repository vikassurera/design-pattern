import Observer from "../Observer";
import Subject from "../Subject";
import WeatherData from "../WeatherData";
import DisplayElement from "./DisplayElement";

export default class StatisticsDisplay implements Observer, DisplayElement{
    private maxTemp: number;
    private minTemp: number;
    private tempSum: number;
    private numReadings: number;
    private weatherData: Subject;

    constructor(weatherData: Subject){
        this.maxTemp = 0;
        this.minTemp = 200;
        this.tempSum = 0;
        this.numReadings = 0;

        this.weatherData = weatherData;
        this.weatherData.registerObserver(this);
    }

    update(weatherData: WeatherData): void {
        const temperature = weatherData.getTemperature();

        this.tempSum += temperature;
        this.numReadings++;

        if(temperature > this.maxTemp){
            this.maxTemp = temperature;
        }

        if(temperature < this.minTemp){
            this.minTemp = temperature;
        }

        this.display();
    }

    display(): void {
        console.log(`Statistics Display >> Avg/Max/Min temperature = ${this.tempSum / this.numReadings}/${this.maxTemp}/${this.minTemp}`);
    }
}