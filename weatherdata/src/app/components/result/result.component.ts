import { Component, OnInit } from '@angular/core';
import { ZipcodeService } from '../../zipcode.service';
import { Weatherdata } from '../../weatherdata.model';
import { Router, ActivatedRoute  } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {

  weatherdatas: Weatherdata[];


  weathercols = ['place','temperature','humid','desc','ctry'];
  
  

zip: String;


  constructor(private zipcodeService : ZipcodeService, private route: ActivatedRoute,  private router : Router, private fb: FormBuilder) {
    

   }
   
  ngOnInit() {
   
this.fetchWeatherdata();
  }
 

  fetchWeatherdata(){
    this.route.params.subscribe(params => {
      this.zip = params.zip;
      this.zipcodeService.getjson(this.zip).subscribe(res => {
        this.weatherdatas = res as Weatherdata[];
        
        console.log(this.weatherdatas+"The solution             ");
      });
    });
  
    }


    

}

