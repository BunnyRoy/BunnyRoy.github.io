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
  ApiKey:string='55fcfac4c132ea4e8b569d066aced92d';

  GetCurrentWeatherData(lat:string,lon:string):void
  {
    debugger
    this.baseUrl=this.baseUrl+"?lat="+lat+"&lon="+lon+"&appid="+this.ApiKey+"";
    this.WeatherData= this.http.get(this.baseUrl);
  }

}
