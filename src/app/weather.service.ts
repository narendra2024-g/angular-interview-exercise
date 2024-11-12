import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  private apiUrl = 'https://api.weather.gov/stations?limit=100'; 

  constructor(private http: HttpClient) { }

  getweatherStations(): Observable<any[]> {
      return this.http.get<any[]>(this.apiUrl);
  }
}


