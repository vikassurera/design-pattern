import Subject from "./Subject";

export default interface Observer{
    // push style
    // update(temp: number, humidity: number, pressure: number): void;
    // pull style
    update(subject: Subject): void;
}