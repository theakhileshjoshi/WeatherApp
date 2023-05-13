import { Component } from '@angular/core';
import { WeatherService } from './services/weather.service';
import { WeatherData } from './models/weatherModel';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent  {

  // variable to store api response which is of the weather data model type
  weatherData?: WeatherData;
  // varible to store temperature from the weather data
  temperature:number = 0;
  // varible to store min_temperature from the weather data
  min_temp:number = 0;
  // varible to store wind from the weather data
  wind:number = 0;
  // varible to store humidity from the weather data
  humidity:number = 0;


  //constructor
  constructor(private weatherService: WeatherService){

  }

  //function to set location and make a api call using the weather service class
  setLocation(location:string){
    //http request using the getWeatherData function
    this.weatherService.getWeatherData(location).subscribe({
      next: (response) =>{
        //weather variable storing the response from the server
        this.weatherData = response;
        //store temperature from the weather data
        this.temperature = this.weatherData.current.temperature;
        //store minimum temperature from the weather data
        this.min_temp = this.weatherData.current.dew_point;
        //store wind from the weather data
        this.wind = this.weatherData.current.wind.speed;
        //store humidity from the weather data
        this.humidity = this.weatherData.current.humidity;
      }
    });
  }
  title = 'WeatherApp';
}
