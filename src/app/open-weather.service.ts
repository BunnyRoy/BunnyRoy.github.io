import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class OpenWeatherService {

  constructor(private http:HttpClient) { }
  WeatherData: any;
  baseUrl:string='https://api.openweathermap.org/data/2.5/weather';
  ApiKey:string='6cbf3827f253a35c8e4b939620ea4aaf';
  url:string='';
  GetCurrentWeatherData(lat:string,lon:string):void
  {
    debugger
    this.url=this.baseUrl+"?lat="+lat+"&lon="+lon+"&appid="+this.ApiKey+"";
    this.WeatherData= this.http.get(this.url);
  }

}
