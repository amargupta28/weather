import { Component, OnInit } from '@angular/core';
import {HttpService} from '../service/http.service'

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {
  city=""
  constructor(private apiService:HttpService) { }


  ngOnInit() {
    console.log("HI")
  }

  submit() {
    console.log("HI",this.city)

    this.apiService.geturl('current',this.city).subscribe((response) => {
      console.log(response);
    });
  }

}
