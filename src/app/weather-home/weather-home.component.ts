import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {FormsModule} from '@angular/forms'
import data from '../CityList.json';

export interface City {
  id: number;
  name: string;
  state:string;
  country:string;
  coord:{
    lon:string;
    lat:string;
  };
}

@Component({
  selector: 'app-weather-home',
  templateUrl: './weather-home.component.html',
  styleUrls: ['./weather-home.component.css']
})
export class WeatherHomeComponent implements OnInit {

   router:Router
  cities:City[]=data as [];
  Country:string='0';
  constructor(route:Router) { 
    debugger
    this.router=route;
    var id= localStorage.getItem("CountryId");
    if(id!="" && id!=undefined)
    {
      this.Country=id;
    }
    localStorage.setItem("WeatherCacheData","");
  }

  ngOnInit(): void {
    debugger
    console.log(this.cities[0].name);
  }

  OpenPage():void
  {
    debugger
    if(this.Country!='0')
    {
    var City= this.cities.filter(x=>x.id==parseInt(this.Country));
    localStorage.setItem("CountryId",this.Country);
    this.router.navigate(['/weatherdata'],{ state: { objCity: City } });
    }
  }
  cha():void
  {
    console.log(this.Country);
  }

}
