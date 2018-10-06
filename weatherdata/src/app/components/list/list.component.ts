import { Component, OnInit } from '@angular/core';
import { ZipcodeService } from '../../zipcode.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { zip } from 'rxjs';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  createForm: FormGroup;
  
  constructor(private zipcodeService: ZipcodeService, private fb: FormBuilder, private router: Router, private http: HttpClient) {
    this.createForm = this.fb.group({
      zip: '',
      ip: ''
    });
  }

  fetchIp() {
    this.http.get('https://api.ipify.org?format=json').subscribe(data => {
      this.publicIP = data['ip'];
      return this.publicIP;
    });

  }

publicIP = this.fetchIp();
zip = this.zip;

  addData(zip) {
    this.zipcodeService.addData(zip,this.publicIP).subscribe(() => {
           
    this.router.navigate([`/res/${zip}`]);
    });
  }
  
  ngOnInit() {
  
  }
 

  
 

  
}
