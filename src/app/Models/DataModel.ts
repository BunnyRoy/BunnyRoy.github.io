export interface Weather {
    id: number;
    main: string;
    description:string;
    icon:string;
  }
  export interface Main {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    humidity: number;
  }
  export interface Wind {
    speed: number;
    deg:number
  }
  export interface Sys {
    type: number;
    id:number;
    message:number;
    country:string;
    sunrise:number;
    sunset:number;
  }

  export interface WeatherModel {
    weather:Weather[];
    main:Main;
    wind:Wind;
    name:string;
    sys:Sys;
    visibility:number;
    dt:number;

  }
  
