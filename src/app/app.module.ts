import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms'
 import {Router, RouterModule} from '@angular/router'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WeatherHomeComponent } from './weather-home/weather-home.component';
import { WeatherDataComponent } from './weather-data/weather-data.component';
import { HttpClientModule } from '@angular/common/http';
import { OpenWeatherService } from './open-weather.service';

@NgModule({
  declarations: [
    AppComponent,
    WeatherHomeComponent,
    WeatherDataComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path:'',component:WeatherHomeComponent},
      {path:'weatherdata',component:WeatherDataComponent}
    ],{onSameUrlNavigation:"reload"})
  ],
  providers: [OpenWeatherService],
  bootstrap: [AppComponent]
})
export class AppModule { 
}
