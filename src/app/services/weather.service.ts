//services for handling the weather api response

//imports start hers
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { WeatherData } from '../models/weatherModel';
import {Observable,of, from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  //constructor
  constructor(private http:HttpClient) {}

    getWeatherData(cityName:string):Observable<WeatherData>{
      // return statement starts here
      // http get method which takes inputs like api get request base url, http headers and other params which will filter results
      return this.http.get<WeatherData>(environment.weatherApiBaseUrl,{
        headers: new HttpHeaders()
        //setting header values
        .set(environment.XRapidAPIHostHeaderName,environment.XRapidAPIHostHeaderValue)
        .set(environment.XRapidAPIKeyHeaderName,environment.XRapidAPIKeyHeaderValue),
        //setting params: required and optional both
        params: new HttpParams()
        .set('place_id',cityName)
        .set('units','metric')
      });
    }
}
