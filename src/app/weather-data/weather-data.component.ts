import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import  {OpenWeatherService} from "../open-weather.service";
import {Observable} from 'rxjs';
import {Weather,Main,Wind,WeatherModel,Sys} from '../Models/DataModel';

@Component({
  selector: 'app-weather-data',
  templateUrl: './weather-data.component.html',
  styleUrls: ['./weather-data.component.css']
})
export class WeatherDataComponent implements OnInit {

  selectedId:string='tab1';
  inactive:string='nav-link ';
  active:string='nav-link active';
  id:any;
  servicedata=<WeatherModel>{};
  unixdate:string='';


  constructor(private objService: OpenWeatherService, private currentroute: Router) { 
    debugger
    var navdata=this.currentroute.getCurrentNavigation();
    var IsRefresh=!this.currentroute.navigated;
    if(IsRefresh && (this.objService.WeatherData==null || this.objService.WeatherData==undefined))
    {
      var datacache=localStorage.getItem("WeatherCacheData");
      if(datacache!=null && datacache.length>0)
      {
        this.servicedata=JSON.parse(datacache) as WeatherModel;
        return;
      }
    }
    if(navdata!=null)
    {
      var statedata= navdata.extras.state;
      if(statedata!=null)
      {
        if(statedata.objCity!=null && statedata.objCity.length>0)
        {
          objService.GetCurrentWeatherData(statedata.objCity[0].coord.lat,statedata.objCity[0].coord.lon);
          objService.WeatherData.subscribe((data: WeatherModel)=>{
            console.log(data);
            this.servicedata.weather= data.weather 
            this.servicedata.main= data.main
            this.servicedata.wind =data.wind;;
            this.servicedata = data;
            this.unixdate=this.GetDate(data.dt).toString();
            localStorage.setItem("WeatherCacheData","");
            localStorage.setItem("WeatherCacheData",JSON.stringify(this.servicedata));
          });
          console.log("lat-"+statedata.objCity[0].coord.lat);
          console.log(this.servicedata);
        }
      }
    }
    
  }
  
  ngOnInit(): void {
  }
  ToggelTab(value:string):void{
    debugger
    this.selectedId=value;
  }
  NumberConversion(no:number):number
  {
    return parseFloat(parseFloat(no.toString()).toFixed(2));
  }
  GetDate(unixdate:number):string
  {
      var a = new Date(unixdate * 1000);
      var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
      var year = a.getFullYear();
      var month = months[a.getMonth()];
      var date = a.getDate();
      var hour = a.getHours();
      var min = a.getMinutes();
      var sec = a.getSeconds();
      var time = date + ' ' + month + ' ' + year + ' ' + hour + ':' + min + ':' + sec ;
      return time;
    

  }

}
