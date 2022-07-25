import { Component, OnInit } from '@angular/core';
import {HttpService} from '../service/http.service'

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {
  city="";
  data=false;
  hisdata=false;
  tempData={}
  hisTempData={}
  constructor(private apiService:HttpService) { }


  ngOnInit() {
    console.log("HI")
    this.data=false;
    this.hisdata=false;
  }

  submit() {


    this.apiService.geturl('current',this.city).subscribe((response) => {

        this.data= true
        this.tempData = response;
        console.log(response);
   
    });
  }


  historical() {

    this.apiService.gethistoryurl('historical',this.tempData["coord"]["lat"],this.tempData["coord"]["lon"],this.tempData["dt"]).subscribe((response) => {

      this.hisdata= true
      this.hisTempData= response;
      console.log(response);
 
  });

  }

}
