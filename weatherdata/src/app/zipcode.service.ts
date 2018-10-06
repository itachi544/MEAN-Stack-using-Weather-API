import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ZipcodeService {

  uri =  'http://localhost:4000';

  constructor(private http: HttpClient) { }

  getZipdata(){

    return this.http.get(`${this.uri}/zipcodes`);
  }

  addData(zip,ip){
    const data = {
      ip : ip,
      zip : zip

    };

    return this.http.post(`${this.uri}/zipcodes/add`, data);
  }
 
  getjson(zip){
      return this.http.get(`${this.uri}/zipcodes/${zip}`);
    }

}
