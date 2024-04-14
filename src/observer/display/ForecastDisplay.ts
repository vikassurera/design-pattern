import Observer from "../Observer";
import Subject from "../Subject";
import WeatherData from "../WeatherData";
import DisplayElement from "./DisplayElement";

export default class ForecastDisplay implements Observer, DisplayElement{
    private currentPressure: number;
    private lastPressure: number;
    private weatherData: Subject;

    constructor(weatherData: Subject){
        this.currentPressure = 29.92;
        this.lastPressure = 0;

        this.weatherData = weatherData;
        this.weatherData.registerObserver(this);
    }

    update(weatherData: WeatherData): void {
        const pressure = weatherData.getPressure();
        
        this.lastPressure = this.currentPressure;
        this.currentPressure = pressure;

        this.display();
    }

    display(): void {
        if(this.currentPressure > this.lastPressure){
            console.log('Forecast Display >> Improving weather on the way!');
        }else if(this.currentPressure === this.lastPressure){
            console.log('Forecast Display >> More of the same');
        }else if(this.currentPressure < this.lastPressure){
            console.log('Forecast Display >> Watch out for cooler, rainy weather');
        }
    }
}