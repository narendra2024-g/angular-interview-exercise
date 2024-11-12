import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { WeatherService } from './weather.service';
import { Router } from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  
  constructor(private service: WeatherService, private router: Router) { }
  data: any 

  ngOnInit(): void {
    this.service.getweatherStations().subscribe(data => {
      this.data = data
      
      console.log(this.data);    
    
  })
}
}
export { WeatherService }
