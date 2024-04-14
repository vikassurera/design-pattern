import Subject from "./Subject";
import Observer from "./Observer";

export default class WeatherData implements Subject{
    private observers: Observer[];
    private temperature: number;
    private humidity: number;
    private pressure: number;

    constructor(){
        this.observers = [];

        this.temperature = 0;
        this.humidity = 0;
        this.pressure = 0;
    }

    registerObserver(o: Observer): void {
        this.observers.push(o);
    }

    removeObserver(o: Observer): void {
        this.observers = this.observers.filter(observer => observer !== o);
    }

    notifyObservers(): void {
        this.observers.forEach(observer => {
            observer.update(this);
        });
    }

    measurementsChanged(): void {
        this.notifyObservers();
    }

    setMeasurements(temperature: number, humidity: number, pressure: number): void {
        this.temperature = temperature;
        this.humidity = humidity;
        this.pressure = pressure;
        this.measurementsChanged();
    }

    getTemperature(): number {
        return this.temperature;
    }

    getHumidity(): number {
        return this.humidity;
    }

    getPressure(): number {
        return this.pressure;
    }
}

