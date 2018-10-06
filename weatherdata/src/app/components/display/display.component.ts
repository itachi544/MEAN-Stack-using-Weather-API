import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {MatTableDataSource}  from '@angular/material';
import { ZipcodeService } from '../../zipcode.service';
import { Zipdata } from '../../zipdata.model';

import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {

  zipdatas : Zipdata[];
  displayedColumns = ['ip','zip'];
  publicIP;



  constructor(private zipcodeService : ZipcodeService, private router : Router,private http: HttpClient) {

    this.http.get('https://api.ipify.org?format=json').subscribe(data => {
      this.publicIP=data['ip'];
    });

   }

  ngOnInit() {
      
this.fetchZipdata();

  }

  fetchZipdata(){
  this.zipcodeService
    .getZipdata()
    .subscribe((data : Zipdata[]) => {
      this.zipdatas = data;
      console.log(this.zipdatas);

    });

  }
 


}
